<?
include_once("pdfSettings.php");
session_start();
if (!isset($_SESSION["UserData"])) {
    print "You must login to access this resource";
	exit();
}
/**
* ezPdf generated report.
*/
include_once("$ezPdfDir/class.si.ezpdf.php");
$pdf = new SiCezpdf('A4', 'portrait');
$pdf->ezSetMargins(30,30,30,20);
function NewPageCallback($rowIndex) {
    if ($rowIndex > 8000) {
		return 'Bailout';
	}
}
    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    $query="Select
    Church.*
From
    Church
Where
(Tags||',' like '%praise,%')";

    $result = $db->Query($query);
    $data = array();
    while($row = $db->GetRow($result)) {
        $data[] = $row;
    }
    
    $pdf->ezColumnsStart(array('num'=>3,'gap'=>11));
    $size = 11;
    $labelHeight = 102;
    foreach($data as $row) {
        $starty = $pdf->y;
        $pdf->ezText("<b>".$row['ChurchName']."</b>",$size);

        if ($row['coAddress']) {
            $pdf->ezText($row['coAddress'],$size);   
        }
        if ($row['Address']) {
            $pdf->ezText($row['Address'],$size);
        }
        $endy = $pdf->ezText($row['Zip'].' '.$row['ZipTown'],$size);
        $offset = $labelHeight - ($starty - $endy);
        //$pdf->ezText($offset.' '. ($starty - $endy),$size);
        $pdf->ezSetDy(-$offset);
    }
//output pdf inline
$dfile = "rapport$id.pdf";
if (stristr($id,',')>0) {
    $dfile = "rapport.pdf";    
}
header('connection:close'); 

if (isset($forceInline) || isset($_REQUEST['forceInline'])) {
    $pdf->ezStream();
} else {
    $pdf->ezStream();
    
}