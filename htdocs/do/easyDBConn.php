<?
if (file_exists(dirname(__FILE__)."/easyDBConn_custom.php")) {
	include(dirname(__FILE__)."/easyDBConn_custom.php");
} else {
	$DBProvider="sqlite";
	$connections["sqlite"]=array(
		''=>array('dbFile'=>"$offset/data/data.db",'persist'=>true)
	);
}