<?
include("../blackboard.php");
include("JSON_Namespace.php");
include("fb_si.php");
$db = sqliteConnect('');

/*if (isset($_REQUEST['action'])) {
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
}*/
		?><table id="clickok" style="height:100%;width:100%;"><tr>
<td valign=center><div style="background:#FFFFFF;opacity:1.0;filter:alpha(1.0);font-size:24px;"><center>
<table border=0><?
//need to check if inputs are valid..
//should show up a finished html to insert...
$date = htmlentities(@$_REQUEST['Payment_Date']);

$fromAdm = 0;
$toAdm = 0;

$fail = false;
$src = "Transfer";
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
if ($_REQUEST['transfer_GiverFrom']) {
	$giver = htmlentities($_REQUEST['transfer_GiverFrom']);
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
		print "<tr><td>Givare:</td><td class='warn'>".@$_REQUEST['Payment_GiverId']." kund inte hittas!</td></tr>";
	}
}

//find project
$project = htmlentities($_REQUEST['transfer_ProjectFrom']);
$sql = "select * from Project where Id='$project'";
$result = sqlite_query($db,"PRAGMA short_column_names = 1;");
$result = sqlite_query($db,$sql) or trigger_error("Sqlite Query Error:".sqlite_last_error($db));
$rows = sqlite_num_rows($result);
if ($rows >0) {
	$prow = sqlite_fetch_array($result, SQLITE_ASSOC);
	$fromAdm = $prow['AdminPercent'];
	print "<tr><td>Projekt:</td><td>".$prow['Project']."</td></tr>";
	if ($prow['Status'] == 'Inaktiv') {
		print "<tr><td><td class='warn'>Varning: Inaktiv Projekt!</td></tr>";
	}
} else {
	$fail = true;
	print "<tr><td>Projekt:</td><td class='warn'>".$_REQUEST['transfer_ProjectFrom']." kund inte hittas!</td></tr>";
}


if ($_REQUEST['transfer_GiverTo']) {
	$giver = htmlentities($_REQUEST['transfer_GiverTo']);
	$sql = "select * from Giver where Id='$giver'";
	$result = sqlite_query($db,"PRAGMA short_column_names = 1;");
	$result = sqlite_query($db,$sql) or trigger_error("Sqlite Query Error:".sqlite_last_error($db));
	$rows = sqlite_num_rows($result);
	if ($rows >0) {
		$row = sqlite_fetch_array($result, SQLITE_ASSOC);
		$n = $row['Name'];
		if ($row['LastName']) $n .= ' '.$row['LastName'];
		print "<tr><td>Givare2:</td><td>$n</td></tr/>";
		if ($row['Status'] == 'Inaktiv') {
			print "<tr><td><td class='warn'>Varning: Inaktiv Givare!</td></tr>";
		}
	} else {
		$fail = true;
		print "<tr><td>Givare2:</td><td class='warn'>".$_REQUEST['transfer_GiverTo']." kund inte hittas!</td></tr>";
	}
}

if ($_REQUEST['transfer_ProjectTo']) {
	$project = htmlentities($_REQUEST['transfer_ProjectTo']);
	$toAdm = $prow['AdminPercent'];
	$sql = "select * from Project where Id='$project'";
	$result = sqlite_query($db,"PRAGMA short_column_names = 1;");
	$result = sqlite_query($db,$sql) or trigger_error("Sqlite Query Error:".sqlite_last_error($db));
	$rows = sqlite_num_rows($result);
	if ($rows >0) {
		$prow = sqlite_fetch_array($result, SQLITE_ASSOC);
		print "<tr><td>Projekt2:</td><td>".$prow['Project']."</td></tr>";
		if ($prow['Status'] == 'Inaktiv') {
			print "<tr><td><td class='warn'>Varning: Inaktiv Projekt!</td></tr>";
		}
	} else {
		$fail = true;
		print "<tr><td>Projekt:</td><td class='warn'>".$_REQUEST['transfer_ProjectTo']." kund inte hittas!</td></tr>";
	}
}
$sum = htmlentities($_REQUEST['transfer_sum']);
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
	var dat= {};
console.info(\$j('#TransferTable input'));
\$j('#TransferTable input').each(function(){
if (this.id) {
var p = this.id.split('_');
dat[p[0]+'_'+p[1]] = \$j(this).val();
}
});
\$j.post('do/transferDo.php',dat,function(response) {
	if (response == 'ok') {
		\$j('#confirm').hide();
		window.newPaymentDate(); 
	} else {
		\$j('#confirm').html(response)
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