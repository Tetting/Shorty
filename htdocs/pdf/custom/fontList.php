<?
$target_path = dirname(__FILE__) . '/../../files/pdfReports/fonts/'; 
if (file_exists(dirname(__FILE__)."/../custom_local.php")) {
	include(dirname(__FILE__)."/../custom_local.php");
	$target_path = $path . "/fonts/";
}
$t = $_REQUEST['t'];
$c = $_REQUEST['c'];
$p = $_REQUEST['p'];
$cur = $_REQUEST['curVal'];
print "<select onchange=\"\$t51('$t').pSet('$c','$p',this.value);\">";
print "<option></option>";
foreach(glob($target_path."/*.ttf") as $f) {
	print "<option";
	if ($cur == basename($f,'.ttf')) print " selected";
	print ">". basename($f,'.ttf')."</option>\n";
}
print "</select>";