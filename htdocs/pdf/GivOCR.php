<?
session_start();
if (!isset($_SESSION["UserData"])) {
	print "You must login to access this resource";
	exit();
}
error_reporting(E_ERROR);
$Query = "select
OCRImportRows.GiverId as GiverId
,OCRImportRows.Belopp as Belopp
,OCRImportRows.Status as Status
,OCRImport.Date as Date
from OCRImport JOIN OCRImportRows On OCRImportRows.ImportId = OCRImport.Id
WHERE OCRImport.Id='".sqlite_escape_string($_REQUEST['id'])."'";
$QueryTotal = "select Count(*) as items
,Sum(OCRImportRows.Belopp) as Belopp
from OCRImport JOIN OCRImportRows On OCRImportRows.ImportId = OCRImport.Id
WHERE OCRImport.Id='".sqlite_escape_string($_REQUEST['id'])."'";

$title = 'OCR Inbetalningslista ';


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
while($row = $db->GetRow($result)) {
	$row['Belopp'] = @number_format($row['Belopp'],2,',','.');
	$data[] = $row;
}
/*
print "<pre>";
var_dump($data);
exit();*/

$pdf->ezTable(
	$data
	,$ds['Columns']
	,html_entity_decode($ds['Title'])
	,array('NewPageCallback' => 'NewPageCallback'
			,'cols'=>array(
				'Nummer'=>array('justification'=>'left')
				,'Belopp'=>array('justification'=>'right')
				,'Datum'=>array('justification'=>'center')
				)
			));
$result2 = $db->Query($ds['QueryTotal'] . " LIMIT 0,2000");

$row = $db->GetRow($result2);
$row['Belopp'] = number_format($row['Belopp'],2,',','.');
$data[] = $row;
$pdf->ezText("<i>Antal poster:</i> ".$row['items']." <i>Total:</i> ".$row['Belopp'],12,array('justification'=>'center'));

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
header("Content-Disposition:attachment;filename=GivOCR".sqlite_escape_string($_REQUEST['id']).".pdf");
header("Content-type: application/x-pdf");
print $pdf->ezOutput();
//$pdf->ezStream();