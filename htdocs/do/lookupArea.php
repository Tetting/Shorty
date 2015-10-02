<?
//we are being told to inactivate this child, remove there child number and add it to the list.
//include("fb_si.php");
function fb(){}
session_start();
include("easyDB.php");
include("easyDBConn2.php");

$db = easyDB('');
$db->Debug = true;
$area = $_REQUEST['area'];

$result = $db->Query("select * from SocialWorkArea LEFT JOIN SocialWorker On SocialWorkArea.SocialWorkerId = SocialWorker.Id where SocialWOrkArea.Area1='$area'");
if ($result) {
	$row = $db->GetRow($result);
	print json_encode($row);
}