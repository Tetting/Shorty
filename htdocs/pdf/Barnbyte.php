<?
include_once("pdfSettings.php");
session_start();
if (!isset($_SESSION["UserData"])) {
    print "You must login to access this resource";
    exit();
}
/**
* zendPdf generated report.
*/
include("$autoLoadDir/autoload2.php");
include(dirname(__FILE__)."/zendPdfSupport.php");
include(dirname(__FILE__)."/ZendPdfExtend.php");
$doc = "$reportId.pdf";
$doc = "Barnbyte.pdf";//temp

if (!file_exists($reportPath.$doc)) {
    $pdf = new Zend_Pdf();   
    $pdf->pages[] = $pdf->newPage(Zend_Pdf_Page::SIZE_A4); 
    $page = $pdf->pages[0];
} else {
    $pdf = Library_Pdf_Base::load($reportPath.$doc);
    $templatePage = count($pdf->pages)-1;
    $page = new Zend_Pdf_Page($pdf->pages[$templatePage]);
    unset($pdf->pages[$templatePage]);
	$pdf->pages[] = $page;
}


$page->setFont(Zend_Pdf_Font::fontWithName(Zend_Pdf_Font::FONT_HELVETICA), 20); 

    $page->setFont($page->getFont(), 12);    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    //process parameters.
    $id = $_REQUEST['id'];
    $query="Select 
    Fadderbarn.*
    ,Giver.* 
    ,Giver.ZipTown || ' ' || Giver.ZipCode as 'Giver.Post'
From 
    Fadderbarn
    ,Giver 
Where 
    Giver.Id = Fadderbarn.GiverId 
    AND Fadderbarn.Id = '$id'";

    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
    $t = array('y'=>745,'align'=>'right','xStart'=>440,'xEnd'=>'540');
    alignedText($t,dbTexts('Giver.Id,Giver.Name,Giver.CoAddress,Giver.Address,Giver.Post',$row,'EOL'),$page,$offsety);
    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>596,'xStart'=>440,'xEnd'=>540,'align'=>'right'),"".date('Y-m-d')."",$page,$offsety);    $t = array('y'=>581,'align'=>'left','xStart'=>92,'xEnd'=>'540');
    alignedText($t,dbTexts('Giver.Name',$row,' '),$page,$offsety);
    $t = array('y'=>528,'align'=>'left','xStart'=>54,'xEnd'=>'540');
    alignedText($t,dbTexts('Fadderbarn.Id',$row,' '),$page,$offsety);
    $t = array('y'=>516,'align'=>'left','xStart'=>54,'xEnd'=>'540');
    alignedText($t,dbTexts('Fadderbarn.Name',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>502,'xStart'=>54,'xEnd'=>540,'align'=>'wrap'),"",$page,$offsety);

//output pdf inline

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=result.pdf");
    print $pdf->render();

