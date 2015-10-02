<?
session_start();
if (!isset($_SESSION["UserData"])) {
	print "You must login to access this resource";
	exit();
}
include("fb_si.php");
include("easyDB.php");
include("easyDBConn2.php");
$db = easyDB('');
$db->Debug = true;
//creating a new giv/project and that identifies an evangelist or fadderbarn...
if (isset($_REQUEST['giverId'])) {
	switch($_REQUEST['type']) {
		case 'Fadderbarn':
			$giverId = htmlentities($_REQUEST['giverId']);
			$id = htmlentities($_REQUEST['typeId']);
			$TGDate = htmlentities($_REQUEST['StartDt']);
			$KrMon = htmlentities($_REQUEST['KrMon']);
			$result = $db->Query("UPDATE Fadderbarn	SET GiverId = '$giverId',HelpD='$TGDate',Mkr='$KrMon' WHERE Id='$id'");
			if ($db->LastError()) {
				print $db->LastError();
			} else {
				print "ok";
			}
		break;
		case 'Evangelist':
			$giverId = htmlentities($_REQUEST['giverId']);
			$id = htmlentities($_REQUEST['typeId']);
			$TGDate = htmlentities($_REQUEST['StartDt']);
			$KrMon = htmlentities($_REQUEST['KrMon']);
			$result = $db->Query("UPDATE Evangelist	SET GiverId = '$giverId',HelpD='$TGDate',Mkr='$KrMon' WHERE Id='$id'");
			if ($db->LastError()) {
				print $db->LastError();
			} else {
				print "ok";
			}
		break;
	}
}