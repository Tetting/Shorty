<?
//include("fb_si.php");
function fb(){}
session_start();
include("easyDB.php");
include("easyDBConn2.php");

$db = easyDB('');
$db->Debug = true;

if (isset($_REQUEST['list'])) {
	$ids = explode(',',$_REQUEST['list']);
	foreach($ids as $id) {
		$db->Insert(array(
			'table'=>'action'
			,'fields' => array(
				'actionName'=>$_REQUEST['action']
				,'entityName'=>$_REQUEST['entityName']
				,'entityId'=>$id
				,'date'=>$_REQUEST['date']
				,'notes'=>$_REQUEST['notes']
			)
		));
	}
}