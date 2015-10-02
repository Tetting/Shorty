<?

$printJob = 1;
$target_path = dirname(__FILE__) . '/../../files/jobs/' . "${printJob}"; 
if (file_exists(dirname(__FILE__)."/../custom_local.php")) {
	include(dirname(__FILE__)."/../custom_local.php");
	$target_path = $path . "${printJob}";
}
$cmd = "gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite -sOutputFile=$target_path/job.pdf ";
foreach (glob("$target_path/*.pdf") as $filename) {
    $cmd .= "$filename ";
}
$cmd .= " 2>&1";
print $cmd;
passthru($cmd);