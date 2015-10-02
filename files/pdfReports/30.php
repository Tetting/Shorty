<?
include_once("pdfSettings.php");
session_start();
if (!isset($_SESSION["UserData"])) {
    print "You must login to access this resource";
    exit();
}
error_reporting(0);
/**
* zendPdf generated report.
*/
include("$autoLoadDir/autoload2.php");
include(dirname(__FILE__)."/zendPdfSupport.php");
include(dirname(__FILE__)."/ZendPdfExtend.php");
$doc = $_REQUEST['_report'].".pdf";

if (!file_exists($reportPath.$doc)) {
    $pdf = new Zend_Pdf();   
    $templatePage = $pdf->newPage(Zend_Pdf_Page::SIZE_A4); 
    $pdf->pages[] = $templatePage;
    $page = $pdf->pages[0];
} else {
    $pdf = Library_Pdf_Base::load($reportPath.$doc);
    $templatePageIndex = count($pdf->pages)-1;
    $templatePage = $pdf->pages[$templatePageIndex];
    $page = new Zend_Pdf_Page($templatePage);
    unset($pdf->pages[$templatePageIndex]);
	$pdf->pages[] = $page;
}
$offsety = 0;

$page->setFont(Zend_Pdf_Font::fontWithName(Zend_Pdf_Font::FONT_HELVETICA), 12); 

    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    $query="Select 
    Fadderbarn.*
    ,Giver.* 
    ,Giver.ZipTown || ' ' || Giver.ZipCode as 'Giver.Post'
From 
    Fadderbarn
    ,Giver 
Where 
    Giver.Id = Fadderbarn.GiverId 
    AND Fadderbarn.Id = '$id'
";

    $result = $db->Query($query);
    $row = $db->GetRow($result);
    


//output pdf 

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=30$id.pdf");
    print $pdf->render();
