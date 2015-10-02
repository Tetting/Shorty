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
$area = htmlentities($_REQUEST['area']);
$ds = array(
		'Title'=> 'Child List'
		,'Query'=> "select * from
			Fadderbarn, Giver
			where
				Fadderbarn.GiverId = Giver.Id
				and Giver.Id > 0
				and Fadderbarn.Area1 = '$area'
				Order by Fadderbarn.Name ASC"
		,'MaxSize'=> 8000
		,'Columns' => array(
			'Fadderbarn.Area1'=>'Area no'
			,'Fadderbarn.Id'=> 'Childno'
			,'Fadderbarn.Name' => 'Name of Child'
			,'Giver.Id' => 'Sponsor'
			,'Fadderbarn.Mkr' => 'Sek/month'
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
if (!isset($ds['Orientation'])){ $ds['Orientation'] = 'landscape';}
$pdf = new SiCezpdf('A4', $ds['Orientation']);

$result = $db->Query($ds['Query'] . " LIMIT 0,2000");
$data = array();
while($row = $db->GetRow($result)) {
	$data[] = $row;
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
	,array('NewPageCallback' => 'NewPageCallback')
);

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
$pdf->ezStream();