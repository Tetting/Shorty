<?
session_start();
if (!isset($_SESSION["UserData"])) {
	print "You must login to access this resource";
	exit();
}
/**
 * Currently hardcoded to a particular injection
 * We can create helper classes or similar to clean up this code.
 */
include("../autoload2.php");
$reportName = "";

$doc = "${_REQUEST['ReportId']}.pdf";
$path = dirname(__FILE__) . "/../files/pdfReports/";
if (file_exists(dirname(__FILE__)."/custom_local.php")) {
	include(dirname(__FILE__)."/custom_local.php");
}
$datFile = "${path}${_REQUEST['ReportId']}.dat";

if (!file_exists($path.$doc)) {
	die("pdf file not found");
}
//setup db
$offset = "..";
include("$offset/blackboard.php");
include("$offset/do/DBNamespace.php");
include("$offset/do/fb_si.php");
include("$offset/do/easyDB.php");
include("$offset/do/easyDBConn.php");
$db = easyDB('');
$result = $db->Query("select * from CustomReport where Id='${_REQUEST['ReportId']}'");
if (file_exists($datFile)) {
	$a = unserialize(file_get_contents($datFile));
} else {
	$a = array(
	array('type'=>'jsonInfo','nextId'=>1,'reportName'=>'CustomPDF','ReportId'=>$_REQUEST['ReportId'])
	);
}
$a[0] = array_merge($a[0],$db->GetRow($result));
include("ZendPdfExtend.php");


function centerText($text, $size) {
    return str_pad($text, $size, '  ', STR_PAD_BOTH);
}
//pdf support functions
function widthForStringUsingFontSize($string, $font, $fontSize) {
     $drawingString = iconv('UTF-8', 'UTF-16BE//IGNORE', $string);
     $characters = array();
     for ($i = 0; $i < strlen($drawingString); $i++) {
         $characters[] = (ord($drawingString[$i++]) << 8 ) | ord($drawingString[$i]);
     }
     $glyphs = $font->glyphNumbersForCharacters($characters);
     $widths = $font->widthsForGlyphs($glyphs);
     $stringWidth = (array_sum($widths) / $font->getUnitsPerEm()) * $fontSize;
     return $stringWidth;
 }
function alignedText($t,$text, $pdfPage, $offsety = 0) {
	$fontVertSpace = 2;
	$text = utf8_encode($text);
	$y = (float)$t['y'] - $offsety;
	foreach (explode(PHP_EOL, $text) as $i => $line) {
		$y = $y - ($pdfPage->getFontSize() + $fontVertSpace);
		switch($t['align']) {
			case 'center':
				$x = (float)$t['xStart'];
				$x2 = (float)$t['xEnd'];
				$maxWidth = $x2 - $x;
				$twidth = widthForStringUsingFontSize($line, $pdfPage->getFont(), $pdfPage->getFontSize());
				if ($maxWidth > $twidth) {
					//we have some extra padding we can therefore add...
					$spareSpace = ($maxWidth - $twidth) / 2;
					$x += $spareSpace;
				}
			break;
			case 'right':	
				$twidth = widthForStringUsingFontSize($line, $pdfPage->getFont(), $pdfPage->getFontSize());
				$x = (float)$t['xEnd'] - $twidth;
			break;
			case 'wrap':
				$x = (float)$t['xStart'];
				$x2 = (float)$t['xEnd'];
				$maxWidth = $x2 - $x;
				$words = explode(' ',$line);
				$word_count = count($words) ;
				$word = 0 ;
				$wrappedLine = '';
				$curWidth = 0;
				while($word < $word_count)
				{
					$wordWidth = widthForStringUsingFontSize($words[$word], $pdfPage->getFont(), $pdfPage->getFontSize());
					if ($wordWidth + $curWidth < $maxWidth) {
						//not wider than the limit yet...
						$wrappedLine .= $words[$word] .' ';
						$curWidth += $wordWidth;
					} else {
						//printing this word would go over the max width...
						$pdfPage->drawText($wrappedLine,$x,$y, 'UTF-8');
						$y = $y - $pdfPage->getFontSize() - $fontVertSpace;
						$curWidth = $wordWidth;
						$wrappedLine = $words[$word] . ' ';
					}
					$word++;
				}
				$line = $wrappedLine;
			break;
			case 'left':
			default:
				$x = (float)$t['xStart'];
			break;
		}
		$pdfPage->drawText($line,$x,$y, 'UTF-8');
	}
	return $offsety;
}
//$a = list of commands to run
//$pdfPage to insert into
//$row data to inject from.
function inject($a,$pdfPage,$row,$offsety = 0) {
	global $db,$path;
	foreach($a as $t) {
			switch($t['type']) {
				case 'text':
					$pdfPage
						->setFont($pdfPage->getFont(), $t['fontSize']);
					;
					//alignedText($t,trim(@$row[$t['fieldName']]),$pdfPage,$offsety);
					$fields = explode(",",$t['fieldName']);
					$txt = "";
					foreach($fields as $field) {
						$txt .= $row[$field] . PHP_EOL;
					}
					alignedText($t,$txt,$pdfPage,$offsety);
					
				break;
				case 'cmd':
					switch($t['cmdName']) {
						case 'extratext':
							$pdfPage->setFont($pdfPage->getFont(), $t['fontSize']);
							alignedText($t,$t['extratext'],$pdfPage,$offsety);
						break;
						case 'rotate':
							$pdfPage->rotate(0, 0, deg2rad((float)$t['degrees']));
						break;
						case 'fontSize':
							$pdfPage->setFont($font, (float)$t['fontSize']);
						break;
						case 'font':
							$font = Zend_Pdf_Font::fontWithPath($path.'/fonts/'. $t['typeface'] .'.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
							$pdfPage->setFont($font, 12);
						break;
						case 'color':
							$pdfPage->setFillColor(new Zend_Pdf_Color_HTML($t['color']));
						break;
						case 'subReport':
							$subDatFile = "${path}".$t['subReportId'].".dat";
							$result = $db->Query("select * from CustomReport where Id='${t['subReportId']}'");
							if (file_exists($subDatFile)) {
								$sub = unserialize(file_get_contents($subDatFile));
							} else {
								$sub = array(
									array('type'=>'jsonInfo','nextId'=>1,'reportName'=>'CustomPDF','ReportId'=>$t['subReportId'])
								);
							}
							$sub[0] = array_merge($sub[0],$db->GetRow($result));
							//the set of commands is then going to be injected into the current page...
							$r = getQuery($sub,$row['_id']);
							$reportName = $r[1];
							
							$subResult = $db->Query($r[0]);
							$subOffsety = (float)$t['y'];
							while ($subRow = $db->GetRow($subResult)) {
								$subOffsety = inject($sub,$pdfPage,$subRow,$subOffsety);
								$subOffsety += (float)$t['ySize'];
							}
						break;
					}
				break;
			}
		}
	return $offsety;
}
//template pages
$pdf = Library_Pdf_Base::load($path.$doc);
$templatePage = count($pdf->pages)-1;

include("customQueries.php");
$ids = explode(",",$_REQUEST['id']);
$pageNo = $templatePage-1;
foreach($ids as $id) {
	$subSql = ''; 
	$pageNo++;
	$r = getQuery($a,$id);
	$reportName = $r[1];
	$result = $db->Query($r[0]);
	$row = $db->GetRow($result);
	$row['_id'] = $id;
	//add some variables
	if ($row) {
		foreach($row as $field=>$value) {
			$row[$field] = html_entity_decode($value);
		}
	}
	switch($a[0]['Query']) {
		case 'Givare':
			$row['FullName'] = @$row['Name'] . ' ' . @$row['LastName'];
			$row['Post'] = @$row['ZipCode'] . ' ' . @$row['ZipTown'];
		break;
		case 'Fadderbarn':
			$row['Giver.FullName'] = @$row['Giver.Name'] . ' ' . @$row['Giver.LastName'];
			$row['Giver.Post'] = @$row['Giver.ZipCode'] . ' ' . @$row['Giver.ZipTown'];
		break;
		case 'GivareFadderbarn':
			$subSql = $r[2];
		break;
	}
	$row['TodaysDate'] = date("Y-m-d");
	$row['CustomText'] = str_replace('--EOL--',PHP_EOL,html_entity_decode($_REQUEST['CustomText'],ENT_QUOTES,'ISO-8859-1'));
	$row['PageNo'] = $pageNo;
	//do some injections....
	$pdfPage = new Zend_Pdf_Page($pdf->pages[$templatePage]);
	//bugfix: http://framework.zend.com/issues/browse/ZF-33
	// Rotate the coordinate system 90 degrees clockwise
	//$pdfPage->rotate(0, 0, deg2rad(90));
	// Calculate the x and y offsets to "shift the origin."
	$xOffset = 0;
	$yOffset = $pdfPage->getHeight();

	$textWidth2_20 = 36;
	$textWidth_28 = 20;
	$textWidth_20 = 36;
	$textWidth_16 = 36;
	//$pdf->drawText($pdfPage, "Felix Ongao",$textWidth_28, 46 , -60 ,96);
	//Felix Ongao
	//$font = Zend_Pdf_Font::fontWithName(Zend_Pdf_Font::FONT_HELVETICA);
	$font = Zend_Pdf_Font::fontWithPath($path.'/fonts/arial.ttf'); 

	$pdfPage->setFont($font, 22);
	if (isset($_REQUEST['Type'])) {
		switch($_REQUEST['Type']) {
			case 'Data':
				//print out the data...
				print "Query: " . $a[0]['Query'] . " ($id)<br/><style>
				th { background-color: #124384;
				 color: #FFFFFF;
				}
				
				</style>";
				print "<table border=1>";
				print "<tr><th>fält</th><th>värde</th></tr>";
				foreach($row as $field=>$value) {
					print "<tr><td>$field</td><td>$value</td></tr>";
				}
				print "</table><br/>";
				
			break;
		}
	} else {
		inject($a,$pdfPage,$row);
		/*
		foreach($a as $t) {
			switch($t['type']) {
				case 'text':
					$pdfPage
						->setFont($pdfPage->getFont(), $t['fontSize']);
					;
					alignedText($t,trim(@$row[$t['fieldName']]),$pdfPage);
				break;
				case 'cmd':
					switch($t['cmdName']) {
						case 'rotate':
							$pdfPage->rotate(0, 0, deg2rad((float)$t['degrees']));
						break;
						case 'fontSize':
							$pdfPage->setFont($font, (float)$t['fontSize']);
						break;
						case 'font':
							$font = Zend_Pdf_Font::fontWithPath($path.'/fonts/'. $t['typeface'] .'.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
							$pdfPage->setFont($font, 12);
						break;
						case 'color':
							$pdfPage->setFillColor(new Zend_Pdf_Color_HTML($t['color']));
						break;
						case 'subReport':
							$subReportDatFile = "${path}${_REQUEST['ReportId']}.dat";
						break;
					}
				break;
			}
		}
		*/
		$pdf->pages[] = $pdfPage;
	}
}	
if (isset($_REQUEST['Type'])) {
	print "<table border=1>";
	print "<tr><th>fält</th><th>värde</th></tr>";
	print "<tr><td>Pdf Width:</td><td>".$pdfPage->getWidth()."</td></tr>";
	print "<tr><td>Pdf Height:</td><td>".$pdfPage->getHeight()."</td></tr>";
	print "</table><br/>";
	
	print "<table border=1>";
	print "<tr><th>Tillgängliga frågor</th></tr>";
	foreach($queryList as $q) {
		print "<tr><td>$q</td></tr>";
	}
	print "</table><br/>";
	
	$target_path = dirname(__FILE__) . '/../files/pdfReports/fonts'; 
	if (file_exists(dirname(__FILE__)."/custom_local.php")) {
		include(dirname(__FILE__)."/custom_local.php");
		$target_path = $path . "/fonts";
	}
	print "<table border=1>";
	print "<tr><th>Fonts</th></tr>";
	foreach(glob("$target_path/*") as $fnt) {
		print "<tr><td>".basename($fnt,".ttf")."</td></tr>";
	}
	print "</table><br/>";
	
	exit();
}
unset($pdf->pages[$templatePage]);
if (!trim($reportName)) {
	$reportName = "rapport";
}
if (count($ids) > 1) {
	//multiple results...
	$reportName = str_replace(' ','_',@$a[0]['Name']).'_' . date('Y-m-d');
}
if (isset($_REQUEST['download'])) {
	header("Content-Disposition: attachment; filename=${reportName}.pdf"); 
	header('Content-type: application/pdf;'); 
} else {
	header('Content-type: application/pdf'); 
}
echo $pdf->render();
