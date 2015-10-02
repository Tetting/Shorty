<?
//call to generate additional barnNbrs.
//include("fb_si.php");
function fb(){}
session_start();
include("easyDB.php");
include("easyDBConn2.php");

$db = easyDB('');
$db->Debug = true;

$generate = 50;

$result = $db->Query("select Max(Nbr) as 'max' from Fadderbarn");
$row = $db->GetRow($result);
$max = $row['max']+1;
print "Max barn number in Fadderbarn Table:<b>".$max."</b><br/>";

$result = $db->Query("select Max(Nbr) as 'max' from barnNbrs");
$row2 = $db->GetRow($result);
print "Max barn number in barnNbrs Table:<b>".$row2['max']+1."</b><br/>";
if (($row2['max']+1) > $max) {
	$max = ($row2['max']+1);
}
print "Max barn number:<b>".$max."</b><br/>";
for($i=0;$i<$generate;$i++) {
	$db->Query("Insert INTO barnNbrs('Nbr') VALUES('".($max+$i)."')");
}
print "created $generate additional numbers.<br/>";