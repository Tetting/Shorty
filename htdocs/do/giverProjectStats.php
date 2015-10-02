<?
include("../blackboard.php");
include("JSON_Namespace.php");
include("fb_si.php");
//calculate sum of giving for each month.
$promiseQ = "
select 
Id
,KrMon
,StartDt
,ProjectId
,Status
 from GivProj
WHERE
GivProj.GiverId = '${_REQUEST['GiverId']}' 
AND GivProj.KrMon != '' AND GivProj.KrMon>0 
";
//AND (GivProj.Status is null or GivProj.Status != 'Inaktiv')
/*$query = "
select
Max(date(Payment.Date)) as 'Senast'
,Sum(Payment.InKrTotal) as 'tot'
,Payment.ProjectId as 'ProjectId'
,GivProj.KrMon as 'KrMon'
,GivProj.StartDt as 'StartDt'
from Payment
LEFT JOIN GivProj On (GivProj.GiverId = '${_REQUEST['GiverId']}' AND GivProj.KrMon>0 AND (GivProj.Status is null or GivProj.Status != 'Inaktiv') AND GivProj.ProjectId=Payment.ProjectId)
Where Payment.GiverId = '${_REQUEST['GiverId']}'
AND Payment.PaymentType != 'AdminCharge'
and Payment.Date >  date('now','-13 months','start of month')
Group By Payment.ProjectId
Order By Payment.ProjectId ASC
";*/
$query = "
select
Max(date(Payment.Date)) as 'Senast'
,Sum(Payment.InKrTotal) as 'tot'
,Payment.ProjectId as 'ProjectId'
from Payment
Where Payment.GiverId = '${_REQUEST['GiverId']}'
AND Payment.PaymentType != 'AdminCharge'
and Payment.Date >  date('now','-13 months','start of month')
Group By Payment.ProjectId
Order By Payment.ProjectId ASC
";
$CountSQL = false;
$db = sqliteConnect('');
//$result = sqlite_query($db,"PRAGMA short_column_names = 1;");
$data = array();
$result = sqlite_query($db,$promiseQ) or trigger_error("Sqlite Query Error:".sqlite_last_error($db));
while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
	//var_dump($row);
	//you can give to several fadderbarn for example...
	if ($row['Status'] == 'Inaktiv') {
		$row['KrMon'] = 0;
	}
	if (!isset($data[$row['ProjectId']])) {
		$row['multiple'] = false;
		$data[$row['ProjectId']] = $row;
	} else {
		//merge the data
		if ($row['Status'] != 'Inaktiv') {
			$data[$row['ProjectId']]['multiple'] = true;
			$data[$row['ProjectId']]['Id'] = $row['Id']; 
			$data[$row['ProjectId']]['KrMon'] = ($data[$row['ProjectId']]['KrMon'] + $row['KrMon']);		
		}
		if (strtotime($data[$row['ProjectId']]['StartDt']) > strtotime($row['StartDt'])) {
			$data[$row['ProjectId']]['StartDt'] = $row['StartDt'];
		}

	}
}

$result = sqlite_query($db,$query) or trigger_error("Sqlite Query Error:".sqlite_last_error($db));
while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
	if (!isset($data[$row['ProjectId']])) {
		$data[$row['ProjectId']] = $row;
	} else {
		//merge
		foreach($row as $field=>$val) {
			$data[$row['ProjectId']][$field] = $val;
		}
	}
}
ksort($data);
if (count($data) == 0) {
	print "[]";
} else {
	print "[";
	$r = FALSE;
	foreach($data as $row) {
		if ($r) {print ",";}
		$r = TRUE;
		print json_encode(encodeSwedish($row));
	}
	print "]";
}
