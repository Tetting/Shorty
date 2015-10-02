<?
include("../blackboard.php");
include("JSON_Namespace.php");
include("fb_si.php");
$db = sqliteConnect('');
$_REQUEST['Saldo'] = str_replace(",",".",$_REQUEST['Saldo']);

if (isset($_REQUEST['doit'])) {
	define('BALANCEADJUSTMENTUSER',-80000);	
	//Add a post so that we can absolutely set the balance to a certain amount on a certain date...
	include("easyDB.php");
	include("easyDBConn2.php");

	$db = easyDB('');
	//remove any existing balance entries on this date for this project...
	$db->Query("BEGIN TRANSACTION");
	$db->Query("DELETE From Payment WHERE date='".sqlite_escape_string($_REQUEST['Date'])."' AND ProjectId = '".sqlite_escape_string($_REQUEST['ProjectId'])."' AND PaymentType='BalanceAdjust'");
	
	//find out the total before the date...
	$query = "select 
	Sum(InKr) as sum
    From Payment
    Where ProjectId = '".sqlite_escape_string($_REQUEST['ProjectId'])."'
    and date <  '".sqlite_escape_string($_REQUEST['Date'])."'
	";
	$result = $db->Query($query);
	$row =  $db->GetRow($result);
	print $_REQUEST['Date']."\n";
	print "balans var:".$row['sum']."\n";
	$tot = floatval($_REQUEST['Saldo'])-floatval($row['sum']);//ERROR ERROR, must calculate this instead :-)
	print "balans betalning:".$tot."\n";
	$userName = '';
	$userId = 0;
	if (isset($_SESSION['UserName'])){$userName = $_SESSION['UserName'];}
	if (isset($_SESSION['UserData']) && (isset($_SESSION['UserData']["Id"]))){$userId = $_SESSION['UserData']["Id"];}
	
	$db->Insert(array(
		'table'=>'Payment',
		'fields'=>array(
			'Date'=>$_REQUEST['Date']
			,'GiverId'=>BALANCEADJUSTMENTUSER
			,'PaymentType'=>'BalanceAdjust'
			,'PaymentSource'=>'BalanceAdjust'
			,'ProjectId'=>$_REQUEST['ProjectId']
			,'InKr'=>$tot
			,'InKrTotal'=>$tot
			,'OutKr'=>0
			,'AdminCharge'=>0
			,'AdminPercent'=>0
			,'AddedBy'=>$userName
			,'AddedByUserId'=>$userId
		)
	));
	$db->Query("END TRANSACTION");
	exit();
}
		?><table id="clickok" style="height:100%;width:100%;"><tr>
<td valign=center><div style="background:#FFFFFF;opacity:1.0;filter:alpha(1.0);font-size:24px;"><center>
<table border=0><?
//need to check if inputs are valid..
//should show up a finished html to insert...
$fail = false;
$date = htmlentities($_REQUEST['Date']);
if (substr_count($date,'-') < 2) {
	print "<tr><td>Datum:</td><td class='warn'>".$date."</td></tr>";
	$fail = true;
} else {
	print "<tr><td>Datum:</td><td>".$date."</td></tr>";
}
//find project
$project = htmlentities($_REQUEST['ProjectId']);
$sql = "select * from Project where Id='$project'";
$result = sqlite_query($db,"PRAGMA short_column_names = 1;");
$result = sqlite_query($db,$sql) or trigger_error("Sqlite Query Error:".sqlite_last_error($db));
$rows = sqlite_num_rows($result);
if ($rows >0) {
	$prow = sqlite_fetch_array($result, SQLITE_ASSOC);
	print "<tr><td>Projekt:</td><td>".$prow['Project']."</td></tr>";
} else {
	$fail = true;
	print "<tr><td>Projekt:</td><td class='warn'>".$_REQUEST['ProjectId']." kund inte hittas!</td></tr>";
}


$sum = htmlentities($_REQUEST['Saldo']);
if (!is_numeric($sum)) {
	print "<tr><td>Saldo:</td><td class='warn'>".$sum."</td></tr>";
	$fail = true;
} else {
	print "<tr><td>Saldo:</td><td>".$sum."</td></tr>";
}

print "<tr><td colspan=2><center>";
if (!$fail) {
	$OutKr = $sum;
	$src = 'utbet';			
	print "<button id='saveButPaymentPreview' style='font-size:24px;' onclick=\"
	$.post('do/setBalancePreview.php',{
		Date:'$date'
		,Saldo:'$sum'
		,ProjectId:'$project'
		,doit:true
	},function(response) {
			alert(response);
			$('#confirm').hide();
			$('#viewProject').click();
			$('#ProjectId').select().focus();
		$
	}); 
\">st&auml;lla balansen</button> ";
}
print "<button onclick='\$j(\"#confirm\").hide();'>Avbryta</button></center></td></tr>";
?></table></center></div></td></tr>
</table>
<script>
setTimeout("$('#saveButPaymentPreview').focus();",20);
$j('#clickok').click(function(event) {
	//event.stopPropagation()();
	return false;
});
</script>