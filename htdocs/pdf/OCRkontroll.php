<?
session_start();
if (!isset($_SESSION["UserData"])) {
	print "You must login to access this resource";
	exit();
}
error_reporting(E_ERROR);

$Query = "select * from OCRImport
WHERE OCRImport.Id='".sqlite_escape_string($_REQUEST['id'])."'";
$QueryTotal = "select Count(*) as items
,Sum(OCRImportRows.Belopp) as Belopp
from OCRImport JOIN OCRImportRows On OCRImportRows.ImportId = OCRImport.Id
WHERE OCRImport.Id='".sqlite_escape_string($_REQUEST['id'])."'";

$OKTotal = "select
Count(*) as ok
from OCRImportRows
WHERE
OCRImportRows.StatusMessage='ImportOK'
AND OCRImportRows.ImportId='".sqlite_escape_string($_REQUEST['id'])."'";

$title = 'OCR Kontrolluppgift';


//setup db
$offset = "..";
include("$offset/blackboard.php");
include("$offset/do/DBNamespace.php");
include("$offset/do/fb_si.php");
include("$offset/do/easyDB.php");
include("$offset/do/easyDBConn2.php");

$db = easyDB('');

//setup class
include('../ext/pdfcode/include/class.si.ezpdf.php');
if (!isset($ds['Orientation'])){ $ds['Orientation'] = 'portrait';}
$pdf = new SiCezpdf('A4', $ds['Orientation']);
function NewPageCallback($rowIndex) {
	global $ds;
	if ($rowIndex > $ds['MaxSize']) {
		return 'Bailout';
	}
}

$ds = array(
		'Title'=> $title
		,'Query'=> $Query
		,'QueryTotal'=> $QueryTotal
		,'MaxSize'=> 8000
		,'Columns' => array(
			'GiverId'=>'Nummer'
			,'Belopp'=> 'Belopp'
			,'Date' => 'Datum'
		),'options'=>array('NewPageCallback' => 'NewPageCallback'
		)
    );
$data = array();
$result = $db->Query($ds['Query'] . " LIMIT 0,2000");
$row = $db->GetRow($result);
$result2 = $db->Query($ds['QueryTotal'] . " LIMIT 0,2000");
$totRow = $db->GetRow($result2);
$result3 = $db->Query($OKTotal . " LIMIT 0,2000");
$okRow = $db->GetRow($result3);
$row['Total'] = number_format($row['Total'],2,',','.');
$totRow['Belopp'] = number_format($totRow['Belopp'],2,',','.');

/*
print "<pre>";
var_dump($data);
exit();*/

$pdf->ezText("<b>Kontroll av import från Postgirot</b>\n\n");
$pdf->ezText("\t\tNamn på betalningsmottargaren: ".$row['AccountName']."\n\n");
$pdf->ezText("\tDatum: " . $row['Date']."\n");
$pdf->ezText("\tAntal inbetalningar ");
$pdf->ezText("\t\t\t\t\t\t".$row['Rows']." - beräknad");
$pdf->ezText("\t\t\t\t\t\t".$totRow['items']." - angiven");
$pdf->ezText("");
$pdf->ezText("\tSumma inbetalningar ");
$pdf->ezText("\t\t\t\t\t\t".$row['Total']." - beräknad");
$pdf->ezText("\t\t\t\t\t\t".$totRow['Belopp']." - angiven");
//.$row['items']." <i>Total:</i> ".$row['Belopp'],12,array('justification'=>'center'));
$pdf->ezText("");
$pdf->ezText("\tKod (AccountNr): " . $row['AccountNr']."\n");
$pdf->ezText("\tAntal fel: " . ($totRow['items'] - $okRow['ok']));

function doHeader($pdf,$pageno,$pages) {
	$text = 'Sida '.$pageno.' av '.$pages;
	$pdf->addText(($pdf->ez['pageWidth'] / 2)-strlen($text), 12, 9, $text); 			
}

$pdf->siHeadersAndFooters(array('AllPages'=>'doHeader'));
$pdf->doHeader('Utskrift '.date('Y-m-d'),10,'left');
$pdf->doHeader("<b>Trosgnistan</b>",10,'right');
$pdf->doFooter("<b>Trosgnistan</b>",10,'right');
$pdf->doFooter('Utskrift '.date('Y-m-d'),10,'left');

header('connection:close');
//following causes pdf to be displayed inside an iframe!
//Content-Disposition:	inline; filename="doc.pdf";
header("Content-Disposition:attachment;filename=OCRkontroll".sqlite_escape_string($_REQUEST['id']).".pdf");
header("Content-type: application/x-pdf");
print $pdf->ezOutput();
//$pdf->ezStream();