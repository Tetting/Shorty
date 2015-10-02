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
From 
	Payment LEFT JOIN Project On Payment.ProjectId = Project.Id
Where 
    (OutKr !='' AND OutKr is not null AND OutKr >0)
";
if (isset($_REQUEST['Date'])) {
    $query .= "AND Payment.Date='".htmlentities($_REQUEST['Date'])."'";
}
    $result = $db->Query($query);
    $data = array();$OutTot = 0;
    while($row = $db->GetRow($result)) {$OutTot += $row["Payment.OutKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["Payment.OutKr"] = "<b>".$OutTot."</b>";$row["ProjectName"] = "<b>Total</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('Payment.ProjectId'=>'Projekt#'  
                ,'ProjectName'=>'Projekt'  
                ,'Payment.OutKr'=>'Totalt utbetalt'  
                
        )
	    ,"Utbetalningar ".$_REQUEST["Date"].""
        //options

	    ,array('NewPageCallback' => 'NewPageCallback'
			,'cols'=>array(
                'Payment.ProjectId'=>array('justification'=>'center')  
                ,'ProjectName'=>array('justification'=>'center')  
                ,'Payment.OutKr'=>array('justification'=>'right')  
                
			)
)
    );
function pageNoHeader($pdf,$pageno,$pages) {
    $text = "Sida $pageno av $pages";
    $x = ($pdf->ez['pageWidth'] / 2)-strlen($text);

    $y = $pdf->ez['bottomMargin']-15;

    $pdf->addText(($pdf->ez['pageWidth'] / 2)-strlen($text),  $y, 10, $text);
        
}
$pdf->siHeadersAndFooters(array('AllPages'=>'pageNoHeader'));function pageNoFooter($pdf,$pageno,$pages) {
    $text = "Sida $pageno av $pages";
    $x = ($pdf->ez['pageWidth'] / 2)-strlen($text);

    $y = $pdf->ez['bottomMargin']-15;

    $pdf->addText(($pdf->ez['pageWidth'] / 2)-strlen($text),  $y, 10, $text);
        
}
$pdf->siHeadersAndFooters(array('AllPages'=>'pageNoFooter'));    $pdf->doHeader("Utskrift ".date("Y-m-d")."",10,'left');
    $pdf->doHeader("<b>Trosgnistan</b>",10,'right');
    $pdf->doFooter("Utskrift ".date("Y-m-d")."",10,'left');
    $pdf->doFooter("<b>Trosgnistan</b>",10,'right');

//output pdf download
header('connection:close'); 

if (isset($forceInline) || isset($_REQUEST['forceInline'])) {
    $pdf->ezStream();
} else {
    header("Content-Disposition:attachment;filename=Utbetalningar_".$_REQUEST["Date"].".pdf");
    header("Content-type: application/x-pdf");
    print $pdf->ezOutput();
}
