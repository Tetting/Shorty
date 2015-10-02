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
    Payment.*
    ,Project.Project as 'ProjectName'
    ,Giver.Name as 'GiverName' 
From
    Payment LEFT JOIN Project On Payment.ProjectId = Project.Id 
    LEFT JOIN Giver On Payment.GiverId = Giver.Id 
Where 
    Payment.PaymentSource='".htmlentities($_REQUEST['PaymentSource'])."'
    AND Payment.PaymentSource='".htmlentities($_REQUEST['PaymentSource'])."'
    AND Payment.Date='".htmlentities($_REQUEST['Date'])."'

    Order by Payment.Id ASC";

    $result = $db->Query($query);
    $data = array();$sum = 0;
    while($row = $db->GetRow($result)) {$sum += $row["Payment.InKrTotal"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["Payment.InKrTotal"] = "<b>".$sum."</b>";$row["Payment.ProjectId"] = "Total";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('Payment.GiverId'=>'Givare#'  
                ,'Payment.ProjectId'=>'Projekt#'  
                ,'Payment.InKrTotal'=>'InKrSumma'  
                
        )
	    ,html_entity_decode("".$_REQUEST["PaymentSource"]." betalningar ".$_REQUEST["Date"]."")
        //options

	    ,array('NewPageCallback' => 'NewPageCallback'
			,'cols'=>array(
                
			)
            ,'maxWidth'=>$pdf->ez['pageWidth']-20
            ,'showHeadings'=>1
            ,'shaded'=>1
            ,'showLines'=>1
)
    );
    $pdf->doHeader("Utskrift ".date("Y-m-d")."",10,'left');
    $pdf->doHeader("<b>Trosgnistan</b>",10,'right');
    $pdf->doFooter("Utskrift ".date("Y-m-d")."",10,'left');
function pageNoFooter($pdf,$pageno,$pages) {
    $text = "Sida $pageno av $pages";
    $x = ($pdf->ez['pageWidth'] / 2)-strlen($text);

    $y = $pdf->ez['bottomMargin']-15;

    $pdf->addText(($pdf->ez['pageWidth'] / 2)-strlen($text),  $y, 10, $text);
        
}
$pdf->siHeadersAndFooters(array('AllPages'=>'pageNoFooter'));    $pdf->doFooter("<b>Trosgnistan</b>",10,'right');
function pageNo($pdf,$pageno,$pages) {
    $text = "Sida $pageno av $pages";
    $x = ($pdf->ez['pageWidth'] / 2)-strlen($text);

    $y = $pdf->ez['bottomMargin']-15;

    $pdf->addText(($pdf->ez['pageWidth'] / 2)-strlen($text),  $y, 10, $text);
        
}
$pdf->siHeadersAndFooters(array('AllPages'=>'pageNo'));
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
