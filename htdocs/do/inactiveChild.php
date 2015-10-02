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

$db->Query("BEGIN TRANSACTION");
//get child number.
$result = $db->Query("select * from Fadderbarn where Id='$id'");
$row = $db->GetRow($result);
//save the childnumber...

if ($row['Nbr']) {
	print "Insert INTO barnNbrs('Nbr') VALUES('".($row['Nbr'])."')";
	$result = $db->Query("Insert INTO barnNbrs('Nbr') VALUES('".($row['Nbr'])."');");
}
$result = $db->Query("UPDATE Fadderbarn	SET Status = 'Inaktiv',Nbr='' WHERE Id='$id';");		
print "UPDATE Fadderbarn	SET Status = 'Inaktiv',Nbr='' WHERE Id='$id'";
//record the action...
$db->Insert(array(
    'table'=>'action',
    'fields'=>array(
        'actionName'=>'Inaktiv'
        ,'entityName'=>'Fadderbarn'
        ,'entityId'=>$id
        ,'date'=>date('Y-m-d', time())
        ,'notes'=>'barnNbr:'.$row['Nbr']
    )
));
$db->Query("END TRANSACTION");