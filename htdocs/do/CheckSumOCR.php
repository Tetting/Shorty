<form>
	Account: <input type="text" name="a" size=40 value="<?=$_REQUEST['a']?>"/><br/>
	Amount:  <input type="text" name="amount" size=40 value="<?=$_REQUEST['amount']?>"/><br/>
	<input type="submit"/>
</form><pre><?
/**
* Calculate an OCR checksum..
*/
function checkSum($accountNum,$digit = true) {
	$pos = 0;
	$val = 0;
	if ($digit) {
		$secondToLastDigit = strlen($accountNum)+2;
		$acc = $accountNum.$secondToLastDigit;
	} else {
		$acc = $accountNum;
	}
	$nums = str_split($acc);
	/*
	1) Take each digit and double every other
	2) if the double is more than 10 then add the digits together of the double and add that to the sum
	3) if the double is less than 10 then add the double to the sum.
	*/
	foreach($nums as $num) {
		$pos++;
		if ($pos % 2) {
			$val += (int)$num;
		} else {
			$v = (int)$num * 2;
			if ($v > 10) {
				$val += ($v % 10) + 1;
			} else {
				$val += $v;
			}
		}
	}
	//Now take sum of digits and times by 9
	$sum = $val * 9;
	//last digit is your checkSum.
	if ($digit) {
		return $acc.substr($sum,-1);
	} else {
		return substr($sum,-1);
	}
}
$accountNum = "10241";//"15971";
$amount = "20000";
if (isset($_REQUEST['a'])) {
	$accountNum = $_REQUEST['a'];
}
if (isset($_REQUEST['amount'])) {
	$amount = $_REQUEST['amount'];
}
$checkSum = checkSum($accountNum);
print "account = $accountNum, checkSum = " . $checkSum ."\n";

//second checksum...
$sum2 = checkSum($checkSum.$amount,false);
print "sum2 = " . $sum2 . "\n";
?></pre>