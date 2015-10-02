<?
session_start();
if (!isset($_SESSION["UserData"])) {
	print "You must login to access this resource";
	exit();
}

header('Content-type: application/pdf'); 
$doc = "${_REQUEST['ReportId']}.pdf";
$path = dirname(__FILE__) . "/../files/pdfReports/";
if (file_exists(dirname(__FILE__)."/custom_local.php")) {
	include(dirname(__FILE__)."/custom_local.php");
}
if (!file_exists($path.$doc)) {
	die("pdf file not found");
}
print file_get_contents($path.$doc);
