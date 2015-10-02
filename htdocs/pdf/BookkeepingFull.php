<?
session_start();
if (!isset($_SESSION["UserData"])) {
	print "You must login to access this resource";
	exit();
}
$_REQUEST['datasource'] = "Barnlista";
include('quickDs.php');
//if (!isset($dataSources[$_REQUEST['datasource']])) { die("datasource not available:" . $_REQUEST['datasource']); }
//$ds = $dataSources[$_REQUEST['datasource']];
//$area = htmlentities(@$_REQUEST['area']);
$TotalQuery = "
	select Sum(InKr) as InKr
	,Sum(OutKr) as OutKr
	,Sum(AdminCharge) as Admin
	,Sum(InKr) - Sum(OutKr) as Saldo
	from Payment
	Where 1
";
$Query = "select
ProjectId
,Project.Project
,Sum(InKr) as InKr
,Sum(OutKr) as OutKr
,Sum(AdminCharge) as Admin
from Payment JOIN Project on Project.Id = Payment.ProjectId
WHERE 1 ";
$title = 'Bokförningsunderlag';
if (isset($_REQUEST['from']) && $_REQUEST['from']) {
	$Query .= "AND Payment.Date >= '".sqlite_escape_string($_REQUEST['from'])."'";
	$TotalQuery .= "AND Payment.Date >= '".sqlite_escape_string($_REQUEST['from'])."'";
	$title .= ' från ' . $_REQUEST['from'];
}
if (isset($_REQUEST['to']) && $_REQUEST['to']) {
	$Query .= "AND Payment.Date <= '".sqlite_escape_string($_REQUEST['to'])."'";
	$TotalQuery .= "AND Payment.Date <= '".sqlite_escape_string($_REQUEST['to'])."'";
	$title .= ' till ' . $_REQUEST['to'];
}
if (isset($_REQUEST['type']) && $_REQUEST['type']) {
	$Query .= "AND (Payment.PaymentSource = '".sqlite_escape_string($_REQUEST['type'])."' OR Payment.PaymentSource = '".sqlite_escape_string($_REQUEST['type'])."Admin')";
	$TotalQuery .= "AND Payment.PaymentSource = '".sqlite_escape_string($_REQUEST['type'])."'";
	$title .= ' (' . $_REQUEST['type'] . ') ';
}
$Query.="Group By ProjectId
Order By ProjectId";
$ds = array(
		'Title'=> $title
		,'Query'=> "$Query"
		,'TotalQuery'=>"$TotalQuery"
		,'MaxSize'=> 8000
		,'Columns' => array(
			'ProjectId'=>'Projekt#'
			,'Project.Project'=> 'Projekt'
			,'InKr' => 'Inbetalt'
			,'Admin' => 'Admin'
			,'OutKr' => 'Utbetalt'
			,'Saldo' => 'Saldo'
		),'options'=>array('NewPageCallback' => 'NewPageCallback'
			,'options'=>array('Saldo'=>array('justification'=>'right'))
			)
    );
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

$query2 = "select
ProjectId
,Sum(InKr) as InKr
,Sum(OutKr) as OutKr
,Sum(InKr) - Sum(OutKr) as Saldo
,Sum(AdminCharge) as Admin
from Payment
WHERE 1 ";
if (isset($_REQUEST['to']) && $_REQUEST['to']) {
	$Query .= "AND Payment.Date <= '".sqlite_escape_string($_REQUEST['to'])."'";
}
$query2 .="
Group By ProjectId
Order By ProjectId";
$data = array();
$result = $db->Query($ds['Query'] . " LIMIT 0,2000");
while($row = $db->GetRow($result)) {
	$row['InKr'] = number_format($row['InKr'],2,',','.');
	$row['OutKr'] = number_format($row['OutKr'],2,',','.');
	$row['Admin'] = number_format($row['Admin'],2,',','.');
	//$row['Project.Project'] = utf8_encode($row['Project.Project']);
	$data[$row['ProjectId']] = $row;
}
//add a totalsrow.

$result3 = $db->Query($ds['TotalQuery']);
$row = $db->GetRow($result3);
$row['InKr'] = number_format($row['InKr'],2,',','.');
$row['OutKr'] = number_format($row['OutKr'],2,',','.');
$row['Admin'] = number_format($row['Admin'],2,',','.');
$row['Saldo'] = number_format($row['Saldo'],2,',','.');
$row['ProjectId'] = '';
$row['Project.Project'] = 'Total';	
$data[] = $row;

$result2 = $db->Query($query2);
while($row = $db->GetRow($result2)) {
	if (isset($data[$row['ProjectId']])) {
		$row['Saldo'] = number_format($row['Saldo'],2,',','.');
		$data[$row['ProjectId']]['Saldo'] = $row['Saldo'];
	}
}

function NewPageCallback($rowIndex) {
	global $ds;
	if ($rowIndex > $ds['MaxSize']) {
		return 'Bailout';
	}
}
$pdf->ezTable(
	$data
	,$ds['Columns']
	,html_entity_decode($ds['Title'])
	,array('NewPageCallback' => 'NewPageCallback'
			,'cols'=>array(
				'Saldo'=>array('justification'=>'right')
				,'ProjectId'=>array('justification'=>'center')
				,'InKr'=>array('justification'=>'right')
				,'Admin'=>array('justification'=>'right')
				,'OutKr'=>array('justification'=>'right')
				
				)
			));

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
header("Content-Disposition: inline; filename=rapport.pdf");
header("Content-type: application/x-pdf");
$pdf->ezStream();
