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
";

    $result = $db->Query($query);
    $data = array();$inTot = 0;
    while($row = $db->GetRow($result)) {$inTot += $row["Payment.InKrTotal"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["Payment.InKrTotal"] = "<b>".$inTot."</b>";$row["GiverName"] = "<b>Total</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('Payment.GiverId'=>'Givare#'  
                ,'GiverName'=>'Namn'  
                ,'Payment.ProjectId'=>'Projekt#'  
                ,'Payment.InKrTotal'=>'InKrSumma'  
                
        )
	    ,"".$_REQUEST["PaymentSource"]." betalningar ".$_REQUEST["Date"].""
        //options

	    ,array('NewPageCallback' => 'NewPageCallback'
			,'cols'=>array(
                'Payment.GiverId'=>array('justification'=>'left')  
                ,'GiverName'=>array('justification'=>'left')  
                ,'Payment.ProjectId'=>array('justification'=>'center')  
                ,'Payment.InKrTotal'=>array('justification'=>'right')  
                
			)
)
    );
function pageNoFooter($pdf,$pageno,$pages) {
    $text = "Sida $pageno av $pages";
    $x = ($pdf->ez['pageWidth'] / 2)-strlen($text);

    $y = $pdf->ez['bottomMargin']-15;

    $pdf->addText(($pdf->ez['pageWidth'] / 2)-strlen($text),  $y, 10, $text);
        
}
$pdf->siHeadersAndFooters(array('AllPages'=>'pageNoFooter'));    $pdf->doFooter("Utskrift ".date("Y-m-d")."",10,'left');
    $pdf->doFooter("<b>Trosgnistan</b>",10,'right');
function pageNoHeader($pdf,$pageno,$pages) {
    $text = "Sida $pageno av $pages";
    $x = ($pdf->ez['pageWidth'] / 2)-strlen($text);

    $y = $pdf->ez['bottomMargin']-15;

    $pdf->addText(($pdf->ez['pageWidth'] / 2)-strlen($text),  $y, 10, $text);
        
}
$pdf->siHeadersAndFooters(array('AllPages'=>'pageNoHeader'));    $pdf->doHeader("<b>Trosgnistan</b>",10,'right');
    $pdf->doHeader("Utskrift ".date("Y-m-d")."",10,'left');

//output pdf download
header('connection:close'); 

if (isset($forceInline) || isset($_REQUEST['forceInline'])) {
    $pdf->ezStream();
} else {
    header("Content-Disposition:attachment;filename=Betalningskontroll_".$_REQUEST["PaymentSource"]."_".$_REQUEST["Date"].".pdf");
    header("Content-type: application/x-pdf");
    print $pdf->ezOutput();
}
