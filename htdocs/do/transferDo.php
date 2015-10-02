<?
session_start();
include("../blackboard.php");
include("fb_si.php");
include("easyDB.php");
include("easyDBConn2.php");

$db = easyDB('');
//basic idea is a payment has already come in so reverse it...
include("fin.php");
$f = new Finance();

//1) remove sum...
$fromAdm = 0;
$project = htmlentities($_REQUEST['transfer_ProjectFrom']);
$date = htmlentities($_REQUEST['Payment_Date']);

$sum = htmlentities($_REQUEST['transfer_sum']);
$sum = floatval(str_replace(",",".",$sum));

$sql = "select * from Project where Id='$project'";
$result = $db->Query($sql);// or trigger_error("Sqlite Query Error:".sqlite_last_error($db));
//$rows = sqlite_num_rows($result);
if ($result) {
	$prow = sqlite_fetch_array($result, SQLITE_ASSOC);
	if ($prow['AdminPercent'] != '' && is_numeric($prow['AdminPercent'])) {
		$percent = $prow['AdminPercent'];
	} else {
		$percent = $f->defaultAdminPC;
	}
	$admin = ($sum / 100) * $percent;
	$InKr = ($sum / 100) * (100-$percent);
	if ($_REQUEST['transfer_GiverFrom']) {
		$giverId = $_REQUEST['transfer_GiverFrom'];
	} else {
		$giverId = 0;
	}
	//create a negative payment to remove the amount.
	$pay = array();
	$pay['InKrTotal'] = -$sum;
	$pay['InKr'] = -$InKr;
	$pay['GiverId'] = $giverId;
	$pay['Date'] = $date;
	$pay['AdminCharge'] = -$admin;
	$pay['AdminPercent'] = $percent;
	$pay['PaymentType'] = 'Transfer';
	$pay['ProjectId'] = $project;
	$pay['PaymentTypeId'] = 0;
	$pay['PaymentSource'] = "Transfer";
	$pay['PaymentSourceId'] = 0;
	$pay['OutKr'] = 0;
	$pay['AddedBy'] = $_SESSION["UserName"];
	$pay['AddedByUserId'] = $_SESSION["UserData"]["Id"];
		
	//Assign the payment.
	$db->Insert(array(
		'table'=>'Payment',
		'fields'=>$pay
	));
	$minusPaymentId = $db->LastId();
	if ($admin <> 0) {
		$adminPay = $pay;
		$adminPay['ProjectId'] = ADMINPROJECT;
		$adminPay['InKr'] = $adminPay['AdminCharge'];
		$adminPay['InKrTotal'] = $adminPay['AdminCharge'];
		$adminPay['AdminCharge'] = 0;
		$adminPay['AdminPercent'] = 0;
		$adminPay['PaymentType'] = 'AdminCharge';
		$adminPay['PaymentTypeId'] = $minusPaymentId;
		$adminPay['PaymentSourceId'] = 0;
		$db->Insert(array(
			'table'=>'Payment',
			'fields'=>$adminPay
		));
	}
	//print "<tr><td>$InKr + $admin removed from Projekt ".$prow['Project']."</td></tr>";
	//now create the positive credit posts...
	if ($_REQUEST['transfer_ProjectTo']) {
		$project2 = htmlentities($_REQUEST['transfer_ProjectTo']);
		$sql2 = "select * from Project where Id='$project2'";
		$result2 = $db->Query($sql2);
		if ($result2) {
			$prow = sqlite_fetch_array($result2, SQLITE_ASSOC);
			if ($prow['AdminPercent'] != '' && is_numeric($prow['AdminPercent'])) {
				$percent = $prow['AdminPercent'];
			} else {
				$percent = $f->defaultAdminPC;
			}
		} else {
			//same as from project..
			$project2 = $project;
		}
	} else {
		//same as from project..
		$project2 = $project;
	}
	if ($_REQUEST['transfer_GiverTo']) {
		$giverId = $_REQUEST['transfer_GiverTo'];
	} else {
		//$giverId = $giverId;
	}
	
	$admin = ($sum / 100) * $percent;
	$InKr = ($sum / 100) * (100-$percent);
	
	$pay = array();
	$pay['InKrTotal'] = $sum;
	$pay['InKr'] = $InKr;
	$pay['GiverId'] = $giverId;
	$pay['Date'] = $date;
	$pay['AdminCharge'] = $admin;
	$pay['AdminPercent'] = $percent;
	$pay['ProjectId'] = $project2;
	$pay['PaymentType'] = 'Transfer';
	$pay['PaymentTypeId'] = $minusPaymentId;
	$pay['PaymentSource'] = "Transfer";
	$pay['PaymentSourceId'] = $minusPaymentId;
	$pay['OutKr'] = 0;
	$pay['AddedBy'] = $_SESSION["UserName"];
	$pay['AddedByUserId'] = $_SESSION["UserData"]["Id"];
		
	//Assign the payment.
	$db->Insert(array(
		'table'=>'Payment',
		'fields'=>$pay
	));
	
	if ($admin <> 0) {
		$adminPay = $pay;
		$adminPay['ProjectId'] = ADMINPROJECT;
		$adminPay['InKr'] = $adminPay['AdminCharge'];
		$adminPay['InKrTotal'] = $adminPay['AdminCharge'];
		$adminPay['AdminCharge'] = 0;
		$adminPay['AdminPercent'] = 0;
		$adminPay['PaymentType'] = 'AdminCharge';
		$adminPay['PaymentTypeId'] = $db->LastId();
		$adminPay['PaymentSourceId'] = 0;
		$db->Insert(array(
			'table'=>'Payment',
			'fields'=>$adminPay
		));
	}
	die("ok");
}
