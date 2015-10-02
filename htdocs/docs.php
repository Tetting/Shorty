<?
if (file_exists(dirname(__FILE__)."/do/path.php")) {
	include(dirname(__FILE__)."/do/path.php");
} else {
	$path = dirname(__FILE__)."/docs";
}

$IN = array_merge($_GET,$_POST);
$allowed = "/[^a-z0-9\\040\\.\\-\\_]/i";//allowed a-z,0-9, ,-,_
if (isset($IN['SaveName'])) {
	$c =  preg_replace($allowed,"",$IN['SaveName']);
	$f = "$path/$c.htm";
	if(get_magic_quotes_gpc()) {//undo magic quotes, we are saving to a raw html file :-(
		$_POST["Contents"] =  stripslashes($_POST['Contents']);
	}
	$fp = fopen($f,"w");
	fwrite($fp,utf8_decode($_POST["Contents"]));//always posted as utf8?
	fclose($fp);
} 
if (isset($IN['Name'])) {
	if ($IN['Name'] == 'Sidebar') {
		include("$path/Sidebar.php");
		exit();
	}
	$c =  preg_replace($allowed,"",$IN['Name']);
	$f = "$path/$c.htm";
	if (!file_exists($f)) {
		$s = file_get_contents("$path/NotFound.php");
		$s = str_replace("%PageName%",$IN['Name'],$s);
		print utf8_encode($s);//js is always assumed to be utf8
	} else {
		$s = file_get_contents($f);
		print utf8_encode($s);//js is always assumed to be utf8
	}
}
if (isset($IN['EditName'])) {
	$c =  preg_replace($allowed,"",$IN['EditName']);
	$f = "$path/$c.htm";
	if (!file_exists($f)) {
		$s = file_get_contents("$path/NotFound.php");
		$s = str_replace("%PageName%",$IN['EditName'],$s);
		print utf8_encode($s);//js is always assumed to be utf8
	} else {
		$s = file_get_contents($f);
		print utf8_encode($s);//js is always assumed to be utf8
	}
}
?>