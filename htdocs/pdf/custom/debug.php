<?
//a quick and dirty hack.
$datFile = "uploads/custom.dat";
if (file_exists($datFile)) {
	$a = unserialize(file_get_contents($datFile));
} else {
	$a = array();
}
var_dump($a);