<?
$uploadName = 'custom';
// Where the file is going to be placed 
$target_path = "uploads/";


/* Add the original filename to our target path.  
Result is "uploads/filename.extension" */
$target_path = $target_path . basename( $_FILES[$uploadName]['name']); 
$target_path = "/uploads/";

$target_path = dirname(__FILE__) . '/../../files/pdfReports/' . "${_REQUEST['ReportId']}.pdf"; 
if (file_exists(dirname(__FILE__)."/../custom_local.php")) {
	include(dirname(__FILE__)."/../custom_local.php");
	$target_path = $path . "${_REQUEST['ReportId']}.pdf";
}
if(move_uploaded_file($_FILES[$uploadName]['tmp_name'], $target_path)) {
    echo "The file ".  basename( $_FILES[$uploadName]['name']). 
    " has been uploaded";
} else{
    echo "There was an error uploading the file, please try again!";
}