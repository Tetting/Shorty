<?php

include("DBNamespace.php");
sqliteConnect('');
//$DataDB
function ipCheck() {
	if (getenv('HTTP_CLIENT_IP')) {
		$ip = getenv('HTTP_CLIENT_IP');
	}
	elseif (getenv('HTTP_X_FORWARDED_FOR')) {
		$ip = getenv('HTTP_X_FORWARDED_FOR');
	}
	elseif (getenv('HTTP_X_FORWARDED')) {
		$ip = getenv('HTTP_X_FORWARDED');
	}
	elseif (getenv('HTTP_FORWARDED_FOR')) {
		$ip = getenv('HTTP_FORWARDED_FOR');
	}
	elseif (getenv('HTTP_FORWARDED')) {
		$ip = getenv('HTTP_FORWARDED');
	}
	else {
		$ip = $_SERVER['REMOTE_ADDR'];
	}
	return $ip;
}
date_default_timezone_set('Europe/Stockholm');
if (MD5($_REQUEST['p'])=='42756fc98852b2d3fb4bf16fedc82b12') {
	//try to avoid problems with locking the database while downloading...
	$bfile = $DataDB.".backup";
	if (file_exists($bfile)) {
		unlink($bfile);
	}
	copy($DataDB,$bfile);
	header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename='.basename($bfile));
    header('Content-Transfer-Encoding: binary');
    header('Expires: 0');
    header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
    header('Pragma: public');
    header('Content-Length: ' . filesize($bfile));
	readfile($bfile);
	$myFile = "log.txt";
	$fh = fopen($myFile, 'a');
	fwrite($fh, date('Y-m-d h:i') . ' backup downloaded to ' . ipCheck() . "\n");
	fclose($fh);
} else {
	print "Invalid Password";
}