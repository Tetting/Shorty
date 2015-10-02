<?php
/**
* Monitor Login Times....
*/
session_start();
if (isset($_SESSION["SESSION_DBID"])) {
	$logID = $_SESSION["SESSION_DBID"];
	print "{";
	print "sessionLogId:'$logID'";
	//see if the app has been updated...
	if (file_exists("../data/modified.js")) {
		$s = file_get_contents("../data/modified.js");
		print ",dUp:". $s;
	}
	print ",AppUpdate:".filemtime('../index.php');
	print "}";
	include("easyDB.php");
	include("easyDBConn2.php");
	$db = easyDB('log');
	$sql = "UPDATE Login SET LastContact = DATETIME('NOW') Where ID = $logID";
	//$result = sqlite_query($db,$sql);   
	$db->Query($sql);
} else {
	print "{";
	print "sessionLogId:'0',message:'No Session Log Id'";
	//see if the app has been updated...
	if (file_exists("../data/modified.js")) {
		$s = file_get_contents("../data/modified.js");
		print ",dUp:". $s;
	}
	print ",AppUpdate:'".filemtime('../index.php')."'";
	print "}";
}
?>