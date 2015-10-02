<?php
include("../blackboard.php");
include("JSON_Namespace.php");
ignore_user_abort(true);
set_time_limit(0);

$db = sqliteConnect('');
ob_start();
$exportDir = $blackboard["Export.Dir"];
$records = 0;

$export_start = microtime(true); 
$flog = fopen("$exportDir/log.txt", 'a');
fwrite($flog,"\n".date('Y-m-d H:i') . " Database Export ");

print "<pre>";
print "Database Export:\n===============\n";
print "<table>";
$query = "SELECT * FROM sqlite_master WHERE type='table';";
$result = sqlite_query($db,$query) or trigger_error("Sqlite Query Error:".sqlite_last_error($db));


$file = fopen("$exportDir/schema.json","w");

fwrite($file,"[");
$tables = array();
if (sqlite_num_rows($result) == 0) {
} else {
	$r = FALSE;
	while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
		if ($r) {fwrite($file,",");}
		$r = TRUE;
		//print "table:" . $row["name"]."\n";
		fwrite($file,"\n" . json_encode($row));
		array_push($tables, $row["name"]);
		ob_flush();flush();
	}
}
fwrite($file,"\n]");

fclose($file);

//export each table to json.
foreach($tables as $table) {
	print "<tr><td>$table</td>";
	$query = "select * from $table";
	$result = sqlite_query($db,$query) or die("Sqlite Query Error:".sqlite_last_error($db));
	
	$file = fopen("$exportDir/$table.json","w");
	$tableRecords = 0;
	fwrite($file,"[");
	if (sqlite_num_rows($result) == 0) {
	} else {
		$r = FALSE;
		while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
			if ($r) {fwrite($file,",");}
			$r = TRUE;
			$records++;$tableRecords++;
			//print "table:" . $row["name"]."\n";
			fwrite($file,"\n" . utf8_encode(json_encode($row)));
			ob_flush();flush();
		}
	}
	fwrite($file,"\n]");
	fclose($file);
	print "<td align='right'>$tableRecords records</td></tr>\n";
}
$export_end = microtime(true);
$export_time =  gmdate("H:i:s", $export_end - $export_start);

fwrite($flog,"($records rows completed in $export_time).");
fclose($flog);
print "<tr><td></td></tr>";
print "<tr><td colspan=2><center>$records rows completed in $export_time</center></td></tr>";
print "</table>";