<?
@session_start(); 
include("../blackboard.php");
include("DBNamespace.php");
	function logonError($errno, $errstr, $errfile, $errline) {
		//we failed login...
		LoginFailed($errno. $errstr. $errfile. $errline);
	}
	function logonException($exception) {
		//we failed login...
		LoginFailed($exception->getMessage());
		exit();	
	}
	function LoginFailed($mess) {
		unset($_SESSION["UserName"]);
		$mess = str_replace("\n","",$mess);
		$mess = str_replace("\r","",$mess);
		print "{\"LoginFailed\":\"$mess\"}\n"; 
		
		//$db = sqlite_open("../data/log.sdb");
		$db = dbConnect('log');
		$ip = isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR'];
		$host = sqlite_escape_string(gethostbyaddr($ip));$ip=sqlite_escape_string($ip);
		$errstr = sqlite_escape_string($mess);
		$sql = "INSERT INTO Login(ID,UserName,Time,ip,hostname,Result,LoginOK)VALUES(Null,'".$_POST['user']."',DATETIME('NOW'),'$ip','$host',\"LogonError:$errstr\",'N')";
		$result = sqlite_query($db,$sql);
		
		exit();	
	}
	function LogonOK($user) {
		global $db;
		$_SESSION["UserName"] = $user['Username'];
 		$_SESSION["UserData"] = $user;
		$_SESSION["Db"] = $user['Db'];
		unset($_SESSION["UserData"]["Password"]);//do not store the password.
		print '{"LoginOk":"'.$user['Username'].'","UserId":"'.$user['Id'].'"}';	 //can output permissions objects etc as well.
		flush();
		$sql = "Update User Set LastLogin=datetime('now','localtime') where Id='${user['Id']}'";		
		$result = sqlite_query($db,$sql);
		sqlite_close($db);
		//$db = sqlite_open("../data/log.sdb");
		$db = dbConnect('log');
		$ip = isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR'];
		$host = sqlite_escape_string(gethostbyaddr($ip));$ip=sqlite_escape_string($ip);
		$sql = "INSERT INTO Login(ID,UserName,Time,ip,hostname,Result)VALUES(Null,'".$user['Username']."',DATETIME('NOW'),'$ip','$host','LogonOK')";
		$result = sqlite_query($db,$sql);
		$_SESSION["SESSION_DBID"] = sqlite_last_insert_rowid($db);
	}
	
set_error_handler("logonError"); 
set_exception_handler("logonException");
	
if (isset($_POST['pass'])) {     
	//attempt login to database...
	$db = dbConnect('');
	if ($DBProvider=='mysql') {
		$user = mysql_escape_string($_POST['user']);
		//using mysql:- INSERT INTO `keneb`.`user` (`Username` ,`Password`)VALUES ('test', MD5( 'test' ));
		$pass = @md5(mysql_escape_string($_POST['pass']));  //this way skip problems with errors in the password input...
		//$pass = @mysql_escape_string($_POST['pass']);  //this way skip problems with errors in the password input...
		$suser = html_entities($_POST['user']);
		$sql = "select * from User where Username='$user' or Username='$suser' AND Password='$pass' LIMIT 1";
		$result = mysql_query($sql) or trigger_error("MySQL Login Query Error:".mysql_error());
		if (mysql_num_rows($result) == 0) {
			LoginFailed("Login Failed: Incorrect username/password.");	
		} else {						
			LogonOK(mysql_fetch_array($result));
		}
	} else {
		//need same encoding as in updateGateway...
		$user = htmlentities(@$_POST['user'],ENT_COMPAT,'UTF-8');
		
		$pass = @md5(sqlite_escape_string($_POST['pass']));  //this way skip problems with errors in the password input...
		
		$sql = "select * from User where Username='$user' AND Password='$pass' LIMIT 1";
		$result = sqlite_query($sql,$db) or trigger_error("Sqlite Login Query Error:".sqlite_error());
		if (sqlite_num_rows($result) == 0) {
			LoginFailed("Login Failed: Incorrect username/password.");	
		} else {						
			LogonOK(sqlite_fetch_array($result));
		}
	}
}
?>