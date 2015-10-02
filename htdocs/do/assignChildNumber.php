<?
//we are being told to inactivate this child, remove there child number and add it to the list.
//include("fb_si.php");
function fb(){}
session_start();
include("easyDB.php");
include("easyDBConn2.php");

$db = easyDB('');
$db->Debug = true;
$id = $_REQUEST['Id'];

//get child number.
$result = $db->Query("select * from Fadderbarn where Id='$id'");
$row = $db->GetRow($result);
//give a new childnumber...
if ($row['Nbr'] == '') {
	$db->Query("BEGIN TRANSACTION");
	$result = $db->Query("Select Nbr from barnNbrs limit 0,1");
	$row =  $db->GetRow($result);
	$num = $row['Nbr'];
	$db->Query("Delete FROM barnNbrs Where Nbr='$num'");
	$result = $db->Query("UPDATE Fadderbarn	SET Status = 'Aktiv',Nbr='$num' WHERE Id='$id'");
	$db->Insert(array(
		'table'=>'action',
		'fields'=>array(
			'actionName'=>'Aktiv'
			,'entityName'=>'Fadderbarn'
			,'entityId'=>$id
			,'date'=>date('Y-m-d', time())
			,'notes'=>'barnNbr:'.$num
		)
	));
	$db->Query("END TRANSACTION");
}
