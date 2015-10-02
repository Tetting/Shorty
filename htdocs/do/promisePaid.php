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

//update status...
$result = $db->Query("UPDATE GivProj set OneTimePromisePaid= NOT OneTimePromisePaid where Id='$id'");
print "ok";