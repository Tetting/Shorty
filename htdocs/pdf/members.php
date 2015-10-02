<?
/**
* Simple on-demand pdf without any templates..
*/
$offset = "../..";
include("$offset/blackboard.php");
include("$offset/do/DBNamespace.php");
include("$offset/do/fb_si.php");
include("$offset/do/easyDB.php");
	
$DBProvider="sqlite";
$connections["sqlite"]=array(
	''=>array('dbFile'=>"$offset/data/data.db",'persist'=>true)
);
$db = easyDB('');
include('../pdfcode/include/class.si.ezpdf.php');
$pdf = new SiCezpdf('A4', 'portrait');
$sql = "
SELECT
	Id, Name
From Giver
Limit 0,200
";
$result = $db->Query($sql);
$data = array();
while($row = $db->GetRow($result)) {
	$data[] = $row;
}
fb($data);
//var_dump($data);
$pages = 0;
function NewPageCallback($rowIndex) {
	global $pages, $pdf;
	$pdf->addText(20, $pages * 3, 12, $rowIndex);
	if ($pages>2) {
		return 'Bailout';
	}
	$pages++;
}
$pdf->ezTable(
	$data,array('Id'=>'#', 'Name'=> 'Namn')
	,'Givare'
	,array('NewPageCallback'=>'NewPageCallback', 'splitRows'=>0)
);
header('connection:close');		   	
$pdf->ezStream();
?>