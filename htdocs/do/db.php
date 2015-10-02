<?
if (isset($_REQUEST['pass'])) {
	error_reporting(E_ALL);
	ini_set('display_errors', '1');
	include("easyDB.php");
	include("easyDBConn2.php");
	$db=easyDB('');
	if (isset($_REQUEST['sql'])) {
		//dev username
		if (md5($_REQUEST['pass'].'%¤#!&/()=???') == '721f8bf2e65391f221085f6e17b36ff8') {
			$sqls = explode(";",$_REQUEST['sql']);
			foreach($sqls as $sql) {
				print $sql."<br/>\n";
				$db->Query($sql);
				if ($db->LastError()) {
					print "<b>".$db->LastError()."</b>";
				}
			}
		}
	}
}
?><form method="post">
Username:<input type="text" name="user"/><br/>
Pass:<input type="password" name="pass"/><br/>
<textarea cols="45" rows="15" name="sql"><?=$_REQUEST['sql']?></textarea><br/>
<input type="submit"/>
</form>
