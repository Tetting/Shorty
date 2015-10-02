<?
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', dirname(__FILE__) . '/error_log.txt');
error_reporting(E_ALL);
$DataDB = "/mnt/sda1/app/data/data.db";
$DataLogDB = "/mnt/sda1/app/data/log.db";
	function mysqlConnect($srcName) {
		$link = mysql_pconnect('localhost', 'hi_draw_eu', 'km4DQvRP');
		mysql_select_db('hi_draw_eu');
		return $link;
	}
	function sqliteConnect($srcName) {
		if ($srcName == "log") {
			$DataDB = "/mnt/sda1/app/data/log.db";
		} else {
			$DataDB = "/mnt/sda1/app/data/data.db";
		}
		return sqlite_open($DataDB);	
	}
	function dbConnect($srcName) {
		global $DBProvider;
		if (isset($DBProvider)&&($DBProvider=='mysql')) {
			return mysqlConnect($srcName);
		} else {
			return sqliteConnect($srcName);
		}
	}
	function dbEscape($data) {
		global $DBProvider;
		switch($DBProvider){
			case 'sqlite':
				return sqlite_escape_string($data);
				break;
			case 'mysql':
			default:
				return mysql_escape_string($data);
			break;
		}	
	}
	function dbLastId($db) {
		global $DBProvider;
		switch($DBProvider){
			case 'sqlite':
				return sqlite_last_insert_rowid($db);
				break;
			case 'mysql':
			default:
				return mysql_insert_id($db);
			break;
		}	
	}
	function dbQuery($db,$sql) {
		global $DBProvider;
		switch($DBProvider){
			case 'sqlite':
				return sqlite_query($db,$sql);
				break;
			case 'mysql':
			default:
				return mysql_query($sql);
			break;
		}	
	}

