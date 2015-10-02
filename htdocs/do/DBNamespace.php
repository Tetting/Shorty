<?
$DataDB = dirname(__FILE__)."/../data/data.db";
$DataLogDB = dirname(__FILE__)."/../data/log.db";
if (file_exists("local_DBNamespace.php")) {
	include("local_DBNamespace.php");
} else {
	function mysqlConnect($srcName) {
		$link = mysql_pconnect('localhost', 'hi_draw_eu', 'km4DQvRP');
		mysql_select_db('hi_draw_eu');
		return $link;
	}
	function sqliteConnect($srcName) {
		if ($srcName == "log") {
			$DataDB = dirname(__FILE__)."/../data/log.db";
		} else {
			$DataDB = dirname(__FILE__)."/../data/data.db";
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
}
?>
