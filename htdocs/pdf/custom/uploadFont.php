<?
$uploadName = 'custom';
$nam = str_ireplace('.ttf','.ttf',$_FILES[$uploadName]["name"]);//force lower case extension.
$target_path = dirname(__FILE__) . '/../../files/pdfReports/fonts/' . $nam; 
if (file_exists(dirname(__FILE__)."/../custom_local.php")) {
	include(dirname(__FILE__)."/../custom_local.php");
	$target_path = $path . "/fonts/" . $nam;
}
if(move_uploaded_file($_FILES[$uploadName]['tmp_name'], $target_path)) {
    echo "The file ".  basename($nam,".tff"). 
    " has been uploaded";
} else{
    echo "There was an error uploading the file, please try again!";
}