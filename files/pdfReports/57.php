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
    *
From
    Giver
Where
    Paper = 1";

    $result = $db->Query($query);
    $data = array();
    while($row = $db->GetRow($result)) {
        $data[] = $row;
    }
    

    $size = 11;//fontSize
    $width = 200;//width of one box
    $height = 110;//height of one box (auto for auto height)
    $cols = 3;//number of columns per page
    $rows = 8;//number of rows per page
    $startx = 20;//start from left on new page.
    $starty = 20;
    $newPage = false;//set to true to automatically create a new page
    
    $starty = $pdf->y;
    $y = $pdf->y;
    //$pdf->ezSetY($y);
    $left = $startx;
    $r =0;
    $rs = 0;
    foreach($data as $row) {
        $r++;
        $text = $row['Giver.Id'] . PHP_EOL;
        $text .= "<b>".$row['Giver.Name']."</b>" . PHP_EOL;
        if ($row['Giver.CoAddress']) {
            $text .= $row['Giver.CoAddress'] . PHP_EOL;   
        }
         if ($row['Giver.Address']) {
            $text .= $row['Giver.Address']. PHP_EOL;
        }
        $text .= $row['Giver.ZipCode'].' '.$row['Giver.ZipTown'] . PHP_EOL;
        
        //$text .= $left."==".($left+$width).PHP_EOL;
        $endy = $pdf->ezText($text,$size,array(
            'aleft'=>$left
            ,'aright'=>$left+$width
            ,'justification'=>'left'
        ));
        if ($r==$cols) {
            $r = 0;
            $left = $startx;
            if ($height == 'auto') {
                $y = $endy;
            } else {
                $y = $y - $height;
            }
            $pdf->ezSetY($y);
            //$pdf->ezText("New Y Pos:".$pdf->y."==".$y."==".$height,$size);
            $rs++;
            if ($rs == $rows) {
                //new page...
                if ($newPage) {
                    $pdf->ezNewPage();
                    $y = $pdf->y;
                } else {
                    $y = $pdf->y;   
                }
                $left = $startx;
                //$pdf->ezSetY($y);
            
                $rs = 0;
                $r = 0;
            } 
        } else {
            $left = $left + $width;   
            $pdf->ezSetY($y);
            
        }
    }
    
    /* $pdf->ezColumnsStart(array('num'=>3,'gap'=>11));
    $size = 11;
    $labelHeight = 102;
    foreach($data as $row) {
        $starty = $pdf->y;
        $pdf->ezText($row['Giver.Id'],$size);
        $pdf->ezText("<b>".$row['Giver.Name']."</b>",$size);

        if ($row['Giver.CoAddress']) {
            $pdf->ezText($row['Giver.CoAddress'],$size);   
        }
        if ($row['Giver.Address']) {
            $pdf->ezText($row['Giver.Address'],$size);
        }
        $endy = $pdf->ezText($row['Giver.ZipCode'].' '.$row['Giver.ZipTown'],$size);
        $offset = $labelHeight - ($starty - $endy);
        //$pdf->ezText($offset.' '. ($starty - $endy),$size);
        $pdf->ezSetDy(-$offset);
    }*/
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
