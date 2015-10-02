<?
include("../blackboard.php");
include("JSON_Namespace.php");
include("fb_si.php");
//calculate sum of giving for each month.
$query = "select 
	GiverId
	,strftime('%Y',Date) as year
	,strftime('%m',Date) as month
	,sum(InKrTotal) as sum
	,sum(InKr) as InKrSum
    From Payment
    Where GiverId = '${_REQUEST['GiverId']}'
	AND PaymentType != 'AdminCharge'
    --and date <  date('now','+13 months','start of month')
	and date >  date('now','-13 months','start of month')
	and strftime('%Y', date) =  strftime('%Y',date('now'))
Group by GiverId,year,month
Order By year,month DESC
limit 0,12";
$CountSQL = false;
$db = sqliteConnect('');
$result = sqlite_query($db,"PRAGMA short_column_names = 1;");
$result = sqlite_query($db,$query) or trigger_error("Sqlite Query Error:".sqlite_last_error($db));

	print "[";
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
	while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
	    if (isset($months[$row['month']])) {
		$months[$row['month']]['tot'] = $row['sum'];
		$yearTot += $row['sum'];
	    }
	}
	$r = FALSE;
	foreach($months as $m => $month) {
	    if ($r) {print ",";}
	    $r = TRUE;
	    print json_encode(encodeSwedish($month));
	}
	print "," .  json_encode(encodeSwedish(array('name'=>'YearTot','tot'=>$yearTot)));

	$query = "select
	GiverId
	,sum(InKrTotal) as sum
	,sum(InKr) as InKrSum
    From Payment
    Where GiverId = '${_REQUEST['GiverId']}'
	AND PaymentType != 'AdminCharge'
	";
	$result = sqlite_query($db,$query) or trigger_error("Sqlite Query Error:".sqlite_last_error($db));
	if (sqlite_num_rows($result) == 0) {
	    print "," .  json_encode(encodeSwedish(array('name'=>'TotTot','tot'=>0)));
	} else {
	    $row = sqlite_fetch_array($result, SQLITE_ASSOC);
	    print "," .  json_encode(encodeSwedish(array('name'=>'TotTot','tot'=>$row['sum'])));
	}
	print "]";

