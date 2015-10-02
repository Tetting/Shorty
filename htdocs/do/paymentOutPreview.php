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
$fail = false;
$date = htmlentities($_REQUEST['PaymentOut_Date']);
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
//find project
$project = htmlentities($_REQUEST['PaymentOut_ProjectId']);
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
	print "<tr><td>Projekt:</td><td class='warn'>".$_REQUEST['PaymentOut_ProjectId']." kund inte hittas!</td></tr>";
}


$sum = htmlentities($_REQUEST['PaymentOut_OutKr']);
$sum = str_replace(",",".",$sum);
if (!is_numeric($sum)) {
	print "<tr><td>Summa:</td><td class='warn'>".$sum."</td></tr>";
	$fail = true;
} else {
	print "<tr><td>Summa:</td><td>".number_format($sum,2,",",".")."</td></tr>";
}

print "<tr><td colspan=2><center>";
if (!$fail) {
	$OutKr = $sum;
	$src = 'utbet';			
	print "<button id='saveButPaymentPreview' style='font-size:24px;' onclick=\"
	if (localStorage) {  
		localStorage.setItem('NewPayment_Date','$date' );  		
		localStorage.setItem('NewPayment_Project','$project' ) 
	} 
 dataViews.Payments.newRecord({ NewRecord:{ 
	Date:'$date' 
	,ProjectId:'$project'
	,OutKr:'$OutKr'
	,AddedBy:'".$_SESSION["UserName"]."'
	,AddedByUserId:'".$_SESSION["UserData"]["Id"]."'
	,PaymentType:'Project'
	,InKrTotal:0
	,PaymentSource:'$src'
	,AdminCharge:0
	,AdminPercent:0
} ,OnComplete:function(response){ 
		App3.Navigate2('local/Pages/PaymentOutNew',{target:'AppPages',forceRead:true});  
	}
}); 
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