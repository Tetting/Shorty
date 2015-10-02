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
    $id = $_REQUEST['id'];
    $query="Select 
    Fadderbarn.*
    ,Giver.* 
    ,Giver.ZipCode || ' ' || Giver.ZipTown as 'Giver.Post'
From 
    Fadderbarn
    ,Giver 
Where 
    Giver.Id = Fadderbarn.GiverId 
    AND Fadderbarn.Id = '$id'
 ";

    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
    $t = array('y'=>735,'align'=>'left','xStart'=>340,'xEnd'=>'530');
    alignedText($t,dbTexts('Giver.Id,Giver.Name,Giver.CoAddress,Giver.Address,Giver.Post',$row,'EOL'),$page,$offsety);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/comic.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $t = array('y'=>470,'align'=>'left','xStart'=>56,'xEnd'=>'530');
    alignedText($t,dbTexts('Fadderbarn.Id,Fadderbarn.Name',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'600','xStart'=>'400','xEnd'=>'530','align'=>'right'),utf8_decode("Bollnäs ".date("Y-m-d").""),$page,$offsety);

//output pdf inline

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=result.pdf");
    print $pdf->render();

