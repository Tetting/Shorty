<?
if (file_exists(dirname(__FILE__)."/easyDBConn_custom.php")) {
	include(dirname(__FILE__)."/easyDBConn_custom.php");
} else {
	$DBProvider="sqlite";
	$connections["sqlite"]=array(
		''=>array('dbFile'=>dirname(__FILE__)."/../data/data.db",'persist'=>true)
		,'swe+nor'=>array('dbFile'=>dirname(__FILE__)."/../data/datan.db",'persist'=>true)
		,'log'=>array('dbFile'=>dirname(__FILE__)."/../data/log.db",'persist'=>true)
	);
}