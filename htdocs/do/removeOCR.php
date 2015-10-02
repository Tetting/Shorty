<?
//include("fb_si.php");
function fb(){}
session_start();
include("easyDB.php");
include("easyDBConn2.php");

$db = easyDB('');
$db->Debug = true;

//include("fin.php");
//$f = new Finance();
$db->Query("BEGIN TRANSACTION");
$result2 = $db->Query("DELETE FROM OCRImport Where Id='".$_REQUEST['Id']."'");
$result2 = $db->Query("DELETE FROM OCRImportRows Where ImportId='".$_REQUEST['Id']."'");
$result2 = $db->Query("DELETE FROM Payment Where PaymentSource='OCRImport:".$_REQUEST['Id']."' OR AddedBy='OCRImport:".$_REQUEST['Id']."' ");
$db->Query("END TRANSACTION");