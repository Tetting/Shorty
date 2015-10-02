<?
include("../blackboard.php");
include("JSON_Namespace.php");
include("fb_si.php");
$db = sqliteConnect('');

if (isset($_REQUEST['action'])) {
	switch($_REQUEST['action']) {
		case 'del':
			//delete this payment...
			$id = htmlentities($_REQUEST['Id']);
			$sql = "delete from Payment where Id='$id' or (PaymentType='AdminCharge' and PaymentTypeId='$id')";
			$result = sqlite_query($db,$sql) or trigger_error("Sqlite Query Error:".sqlite_last_error($db));
			print "ok";
			exit();
		break;
	}
}
		?><table id="clickok" style="height:100%;width:100%;"><tr>
<td valign=center><div style="background:#FFFFFF;opacity:1.0;filter:alpha(1.0);font-size:24px;"><center>
<table border=0><?
//need to check if inputs are valid..
//should show up a finished html to insert...
$date = htmlentities($_REQUEST['Payment_Date']);


$fail = false;


$src = htmlentities($_REQUEST['Payment_Source']);
print "<tr><td>Typ:</td><td>".$src."</td></tr>";
if (!strpos($date,'-')) {
	//date formatting missing...
	$d2 = substr($date,0,4).'-';
	$m = substr($date,4,2);
	if ($m) {$d2.= $m.'-';}else{$d2.='00-';}
	$m = substr($date,6,2);
	if ($m) {$d2.= $m;}else{$d2.='00';}
	$date = $d2;
}
if (substr_count($date,'-') < 2) {
	print "<tr><td>Datum:</td><td class='warn'>".$date."</td></tr>";
	$fail = true;
} else {
	print "<tr><td>Datum:</td><td>".$date."</td></tr>";
}
//find giver..
$giver = htmlentities($_REQUEST['Payment_GiverId']);
$sql = "select * from Giver where Id='$giver'";
$result = sqlite_query($db,"PRAGMA short_column_names = 1;");
$result = sqlite_query($db,$sql) or trigger_error("Sqlite Query Error:".sqlite_last_error($db));
$rows = sqlite_num_rows($result);
if ($rows >0) {
	$row = sqlite_fetch_array($result, SQLITE_ASSOC);
	$n = $row['Name'];
	if ($row['LastName']) $n .= ' '.$row['LastName'];
	print "<tr><td>Givare:</td><td>$n</td></tr/>";
	if ($row['Status'] == 'Inaktiv') {
		print "<tr><td><td class='warn'>Varning: Inaktiv Givare!</td></tr>";
	}
} else {
	$fail = true;
	print "<tr><td>Givare:</td><td class='warn'>".$_REQUEST['Payment_GiverId']." kund inte hittas!</td></tr>";
}
//find project
$project = htmlentities($_REQUEST['Payment_ProjectId']);
$sql = "select * from Project where Id='$project'";
$result = sqlite_query($db,"PRAGMA short_column_names = 1;");
$result = sqlite_query($db,$sql) or trigger_error("Sqlite Query Error:".sqlite_last_error($db));
$rows = sqlite_num_rows($result);
if ($rows >0) {
	$prow = sqlite_fetch_array($result, SQLITE_ASSOC);
	print "<tr><td>Projekt:</td><td>".$prow['Project']."</td></tr>";
	if ($prow['Status'] == 'Inaktiv') {
		print "<tr><td><td class='warn'>Varning: Inaktiv Projekt!</td></tr>";
	}
} else {
	$fail = true;
	print "<tr><td>Projekt:</td><td class='warn'>".$_REQUEST['Payment_ProjectId']." kund inte hittas!</td></tr>";
}
$sum = htmlentities($_REQUEST['Payment_InKr']);
$sum = str_replace(",",".",$sum);
if (!is_numeric($sum)) {
	print "<tr><td>Summa:</td><td class='warn'>".$sum."</td></tr>";
	$fail = true;
} else {
	print "<tr><td>Summa:</td><td>".number_format($sum,2,",",".")."</td></tr>";
}
print "<tr><td colspan=2><center>";
if (!$fail) {
	include("fin.php");
	$f = new Finance();
	if ($prow['AdminPercent'] != '' && is_numeric($prow['AdminPercent'])) {
		$percent = $prow['AdminPercent'];
	} else {
		$percent = $f->defaultAdminPC;
	}
	$admin = ($sum / 100) * $percent;
	$InKr = ($sum / 100) * (100-$percent);
						
	print "<button id='saveButPaymentPreview' style='font-size:24px;' onclick=\"
	App.addPaymentFast({ 
		Date:'$date' 
		,GiverId:'$giver'
		,ProjectId:'$project'
		,InKr:'$InKr'
		,AddedBy:'".$_SESSION["UserName"]."'
		,AddedByUserId:'".$_SESSION["UserData"]["Id"]."'
		,PaymentType:'Project'
		,AdminPercent:'$percent'
		,AdminCharge:'$admin'
		,InKrTotal:'$sum'
		,OutKr:0
		,PaymentSource:'$src'
	},$admin,{ 
			Date:'$date' 
			,GiverId:'$giver'
			,ProjectId:'".ADMINPROJECT."'
			,InKr:'$admin'
			,AddedBy:'".$_SESSION["UserName"]."'
			,AddedByUserId:'".$_SESSION["UserData"]["Id"]."'
			,PaymentType:'AdminCharge'
			,AdminPercent:'$percent'
			,AdminCharge:0
			,OutKr:0
			,InKrTotal:'$admin'
			,PaymentSource:'${src}Admin'
	});
	\$j('#Payment_ProjectId_New'+document.getElementById('mainPaymentViewId').value).val('');
	\$j('#Payment_InKr_New'+document.getElementById('mainPaymentViewId').value).val('');
	
	\$j('#confirm').hide();
	\$j('#Payment_GiverId_New'+document.getElementById('mainPaymentViewId').value).focus().select();
	
	//App3.Navigate2('local/Pages/PaymentNew',{target:'AppPages',forceRead:true});

	if (localStorage) {  
		localStorage.setItem('NewPayment_Date','$date' );  		
		localStorage.setItem('NewPayment_Giver','$giver' );
		localStorage.setItem('NewPayment_Project','$project' ) 
		localStorage.setItem('NewPayment_Source','$src' ) 
	} 
\">Spara</button> ";
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