<?
include("easyDBConn2.php");
include("easyDB.php");
$db = easyDB('');
$db->Debug = false;
function numDisplay($num) {
	if ($num) {
		return number_format($num,2,",",".");
	}
	return $num;
}
?>
<?
//,sum(InKr + AdminCharge) as sum
    
$query = "select 
	ProjectId
	,strftime('%Y',Date) as year
	,strftime('%m',Date) as month
	,Sum(InKr) as sum
    From Payment
    Where ProjectId = '".sqlite_escape_string($_REQUEST['id'])."'
    and date <  date('now','+13 months','start of month')
Group by ProjectId,year,month
Order By year,month DESC
limit 0,12";
$result = $db->Query($query);
	$r = FALSE;
	$months = array(
	    '01' => array('name'=>'Januari','tot'=>0)
	    ,'02' => array('name'=>'Februari','tot'=>0)
	    ,'03' => array('name'=>'Mars','tot'=>0)
	    ,'04' => array('name'=>'April','tot'=>0)
	    ,'05' => array('name'=>'Maj','tot'=>0)
	    ,'06' => array('name'=>'Juni','tot'=>0)
	    ,'07' => array('name'=>'Juli','tot'=>0)
	    ,'08' => array('name'=>'Augusti','tot'=>0)
	    ,'09' => array('name'=>'September','tot'=>0)
	    ,'10' => array('name'=>'Oktober','tot'=>0)
	    ,'11' => array('name'=>'November','tot'=>0)
	    ,'12' => array('name'=>'December','tot'=>0)

	);
	$yearTot = 0;
	while ($row = $db->GetRow($result)) {
	    if (isset($months[$row['month']])) {
		$months[$row['month']]['tot'] = $row['sum'];
		$yearTot += $row['sum'];
	    }
	}
	$r = FALSE;
	?>
	<table style="float:left" class="EditTable"><tbody>
	<tr><th colspan="6">Inbetalt</th></tr>
	<tr><td>Januari</td><td>Februari</td><td>Mars</td><td>April</td><td>Maj</td><td>Juni</td></tr>
	<tr><td><?=numDisplay($months['01']['tot']);?></td><td><?=numDisplay($months['02']['tot']);?></td><td><?=numDisplay($months['03']['tot']);?></td><td><?=numDisplay($months['04']['tot']);?></td><td><?=numDisplay($months['05']['tot']);?></td><td><?=numDisplay($months['06']['tot']);?></td></tr>
	<tr><td>Juli</td><td>Augusti</td><td>September</td><td>Oktober</td><td>November</td><td>December</td></tr>
	<tr><td><?=numDisplay($months['07']['tot']);?></td><td><?=numDisplay($months['08']['tot']);?></td><td><?=numDisplay($months['09']['tot']);?></td><td><?=numDisplay($months['10']['tot']);?></td><td><?=numDisplay($months['11']['tot']);?></td><td><?=numDisplay($months['12']['tot']);?></td></tr><tr></tr></tbody></table>
	</table>
<?
$result = $db->Query("Select * from Payment Where OutKr != '' AND OutKr>0 AND ProjectId='".sqlite_escape_string($_REQUEST['id'])."' Order By Date DESC LIMIT 0,1");
if ($db->RowCount($result)>0) {
	$OutRow = $db->GetRow($result);		
} else {
	$OutRow = array();
}
$result = $db->Query("Select * from Payment Where InKr != '' AND InKr>0 AND ProjectId='".sqlite_escape_string($_REQUEST['id'])."' Order By Date DESC LIMIT 0,1");
if ($db->RowCount($result)>0) {
	$InRow = $db->GetRow($result);		
} else {
	$InRow = array();
}
$result = $db->Query("Select Count(KrMon) as Num,Sum(KrMon) as KrMon from GivProj Where KrMon>0 AND ProjectId='".sqlite_escape_string($_REQUEST['id'])."' AND (Status is null OR Status!='Inaktiv')");
if ($db->RowCount($result)>0) {
	$MonRow = $db->GetRow($result);		
} else {
	$MonRow = array();
}
?>
<table style="float:left;" class="EditTable">
<tbody><tr><th colspan="2">Senaste Inbetalning:</th></tr>
<tr><td><span id="LastPaymentInDate135"><span id="LastPaymentIn135"><?=numDisplay(@$InRow['InKr'])?>kr</span></td>
<td><?=@$InRow['Date']?></span></td>
</tr></tbody></table>
<table style="float:left;padding:left:50px;" class="EditTable">
<tbody><tr><th colspan="2">Senaste Utbetalning:</th></tr>
<? if(@$OutRow['OutKr']){ ?>
<tr><td>Datum <span id="LastPaymentOutDate135"><?=@$OutRow['Date']?></span></td>
<td><span id="LastPaymentOut135"><?=numDisplay($OutRow['OutKr'])?></span></td>
</tr>
<? } else { 
print "<tr><td colspan=2><center>ingen</center></td></tr>";
}?>
</tbody></table>
<table style="float:left;padding:left:50px;" class="EditTable">
<tbody><tr><th colspan="2">M&aring;natliga l&ouml;ften:</th></tr>
<tr><td><?=@$MonRow['Num'] . " givare -  ".numDisplay($MonRow['KrMon'])?> kr tot.</td>
</tr>
</tbody></table>
<?
$query = "select
Sum(InKr) as InKr
,Sum(OutKr) as OutKr
,Sum(InKr) - Sum(OutKr) as Saldo
,Sum(AdminCharge) as Admin
from Payment     Where ProjectId = '".sqlite_escape_string($_REQUEST['id'])."'
";
$result = $db->Query($query);
$row = $db->GetRow($result);
?>
<br/><br/><br/><table style="float:left;padding:left:150px;" class="EditTable">
<tbody><tr><th>InKr</th><th>UtKr</th><th>Saldo:</th><th>Admin</th></tr>
<tr><td><?=numDisplay($row['InKr'])?></td><td><?=numDisplay($row['OutKr'])?></td><td><b><?=numDisplay($row['Saldo'])?></b></td>
<td><?=numDisplay($row['Admin'])?></td>
</tr>
</tbody></table>

