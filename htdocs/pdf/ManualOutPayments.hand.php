<?
session_start();
if (!isset($_SESSION["UserData"])) {
	print "You must login to access this resource";
	exit();
}
error_reporting(E_ERROR);
//dataGateway4 -- PaymentInLists

	$Query = "Select 
	Payment.* 
	,Project.Project as 'ProjectName'
	from 
		Payment LEFT JOIN Project On Payment.ProjectId = Project.Id
	Where (OutKr !='' AND OutKr is not null AND OutKr >0) ";
	$QueryTotal = "Select 
	Count(*) as items
	,Sum(OutKr) as OutKr
	from Payment Where (OutKr is not null AND OutKr >0)
	";
	$Query .= "AND Payment.Date='".htmlentities($_REQUEST['Date'])."'";
	$QueryTotal .= "AND Payment.Date='".htmlentities($_REQUEST['Date'])."'";

	$title = 'Manuellt registrerade utbetalningar '.$_REQUEST['Date'];

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
			'Payment.ProjectId'=> 'Projekt#'
			,'Payment.OutKr' => 'OutKr'
			
		),'options'=>array('NewPageCallback' => 'NewPageCallback'  
		)
    );
$data = array();
//print $ds['Query'];
$result = $db->Query($ds['Query'] . " LIMIT 0,2000");
$tot = 0;
while($row = $db->GetRow($result)) {
	$row['OutKr'] = number_format($row['OutKr'],2,',','.');
	$data[] = $row;

}
//exit();
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
				,'InKrSumma'=>array('justification'=>'right')
				,'InKr'=>array('justification'=>'right')
				,'Admin'=>array('justification'=>'right')
				
				)
			));
$result2 = $db->Query($ds['QueryTotal'] . " LIMIT 0,2000");

$row = $db->GetRow($result2);
$row['OutKr'] = number_format($row['OutKr'],2,',','.');
$data[] = $row;
$pdf->ezText("<i>Antal poster:</i> ".$row['items']." <i>Outkr Total:</i> ".$row['OutKr'],12,array('justification'=>'center'));

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
header("Content-Disposition:attachment;filename=Utbetalningar_".$_REQUEST['Date'].".pdf");
header("Content-type: application/x-pdf");
print $pdf->ezOutput();
//$pdf->ezStream();