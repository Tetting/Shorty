<script type='text/javascript' src='<?=$blackboard['JSPhoneHome']?>js/lib/firebugx.js'></script>
<script type='text/javascript' src='<?=$blackboard['JSPhoneHome']?>js/lib/jquery-1.3.2.min.js'></script>
<!--<script type='text/javascript' src='<?=$blackboard['JSPhoneHome']?>js/lib/jquery-1.7.2.min.js'></script>-->
<script>
	$j=jQuery.noConflict();
	$ = $j;//not using other libraries at this time.
	//make forwards compatible with newer jquery.
	jQuery.fn.prop = jQuery.fn.attr
</script>
<link href='<?=$blackboard["Theme.Dir"]?>login.css'  rel='stylesheet' type='text/css'/>

<script type='text/javascript' src='<?=$blackboard['JSPhoneHome']?>js/lib/json2005.js'></script>
<script type='text/javascript' src='<?=$blackboard['JSPhoneHome']?>js/lib/rsh.compressed.js'></script>
<script type="text/javascript">var _gaq = _gaq || [];_gaq.push(['_setAccount', '<?=$blackboard["AnalyticsId"]?>']);</script>

<?/**
* Session: keep user logged in if they refresh their browser.
* - Could store this info in the historyStorage instead.
*/
if (isset($_SESSION["UserName"])) {     
	print "
	<script>
	App3AlreadyLoggedIn = '".$_SESSION["UserData"]["FirstName"]." ".$_SESSION["UserData"]["LastName"]."';
	App3AlreadyLoggedInId = '".@$_SESSION["UserData"]["Id"]."';
	_gaq.push(['_setVar', '".$_SESSION["UserData"]["FirstName"]." ".$_SESSION["UserData"]["LastName"]."']);
	_gaq.push(['_setCustomVar', 1, 'UserName', '".$_SESSION["UserData"]["FirstName"]." ".$_SESSION["UserData"]["LastName"]."',1]);
	_gaq.push(['_setCustomVar', 2, 'UserId', '".@$_SESSION["UserData"]["Id"]."',1]);
	</script>
	";
}
?>
<script type='text/javascript' src='<?=$blackboard['JSPhoneHome']?>js/App3.js'></script>
<script type='text/javascript' src='<?=$blackboard['JSPhoneHome']?>system/EditGateway.php?rnd=<?=rand()?>'></script>
<script type='text/javascript' src='img/Themes/Theme.php?Theme=<?=$blackboard['Theme']?>'></script>	
	
	
<script  type='text/javascript' src='<?=$blackboard['JSPhoneHome']?>js/Login.js'></script>
<script>
	var gOldOnError = window.onerror;
		// Override previous handler.
	window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
		//alert(errorMsg);
			if (gOldOnError)
			// Call previous handler.
			return gOldOnError(errorMsg, url, lineNumber);
	
			// Just let default handler run.
			return false;
	}
	
</script>
