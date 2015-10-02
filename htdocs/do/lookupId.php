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

switch($_REQUEST['type']) {
	case 'Vanlig':
		$result = $db->Query("select Id,Status from Project where Id='$id'");
		$row = $db->GetRow($result);
		if ($row['Status'] == 'Inaktiv') {
			print "Inaktiv";
		} else {
			print "Vanlig";
		}
	break;
	case 'Evangelist':
		//in the future we will do a evangelist lookup by nbr here.
		print $id;
	break;
	case 'Fadderbarn':
		//get child .
		$result = $db->Query("select Id,Status from Fadderbarn where Nbr='$id'");
		$row = $db->GetRow($result);
		print $row['Id'];
		/*if ($row['Status'] == 'Inaktiv') {
			print "Inaktiv";
		} else {
			if (is_numeric($row['Id'])) {
				$p = htmlentities($_REQUEST['Project'],ENT_QUOTES);
				$result2 = $db->Query("select Id,Status from Project where Id='$p'");
				$row2 = $db->GetRow($result2);
				if ($row2['Status'] == 'Inaktiv') {
					print "InaktivProjekt";
				} else {
					print $row['Id'];
				}
			} else {
				print "notFound";
			}
		}*/
	break;
	default:
		print "unknown type";
	break;
}
