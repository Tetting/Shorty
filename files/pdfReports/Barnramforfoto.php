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
$doc = "Barnramforfoto.pdf";//temp

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


$page->setFont(Zend_Pdf_Font::fontWithName(Zend_Pdf_Font::FONT_HELVETICA), 12); 

    $id = $_REQUEST['id'];
    
    $page->rotate(0, 0, deg2rad(90));

    // Calculate the x and y offsets to "shift the origin."
    //$xOffset = 0;
    //$yOffset = $page->getHeight();
      include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    $query="Select
    *
From Fadderbarn
Where
    Id = '$id'
 ";

    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
    $t = array('y'=>-50,'align'=>'left','xStart'=>220,'xEnd'=>'');
    alignedText($t,dbTexts('Id',$row,' '),$page,$offsety);
    $t = array('y'=>-90,'align'=>'center','xStart'=>530,'xEnd'=>'760');
    alignedText($t,dbTexts('Id',$row,' '),$page,$offsety);
    $t = array('y'=>-130,'align'=>'center','xStart'=>530,'xEnd'=>'760');
    alignedText($t,dbTexts('Name',$row,' '),$page,$offsety);
    $t = array('y'=>-170,'align'=>'center','xStart'=>530,'xEnd'=>'760');
    alignedText($t,dbTexts('Area1,Area',$row,' '),$page,$offsety);


//output pdf inline

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=result.pdf");
    print $pdf->render();

