<?@session_start();
include("blackboard.php");
//are we logged in?

/*if (isset($_SESSION["UserName"])) {     
	print "<script>App3AlreadyLoggedIn = '".$_SESSION["UserName"]."';
		App3AlreadyLoggedInId = '".@$_SESSION["UserData"]["Id"]."';
		</script>\n";
}*/
include("img/Themes/${blackboard['Theme']}/Theme.php");	
?>