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
$usingTemplate = false;
if (!file_exists($reportPath.$doc)) {
    $pdf = new Zend_Pdf();   
    $templatePage = $pdf->newPage(Zend_Pdf_Page::SIZE_A4); 
    $pdf->pages[] = $templatePage;
    $usingTemplate = true;
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
     Giver.* 
    ,ifnull(Name,'')||ifnull(' '||LastName,'') as 'FullName'
    ,ZipCode || '  ' || ZipTown as 'Post'
From 
    Giver
where
(substr(zipcode,0,3) = '823'
OR substr(zipcode,0,3) = '824')
and (Status is null or Status != 'Inaktiv')
";

    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
while($row) {    $t = array('y'=>50,'align'=>'left','xStart'=>367,'xEnd'=>'460');
    alignedText($t,dbTexts('Fullname',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'50','xStart'=>'367','xEnd'=>'460','align'=>'left'),utf8_decode("Hi"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'40','xStart'=>'367','xEnd'=>'460','align'=>'left'),utf8_decode("Test"),$page,$offsety);

if (isset($_REQUEST['print'])) {
    $pdf->setEmbeddedJs("this.print(true);");
}
//output pdf inline
$dfile = "delete$id.pdf";
if (strpos($id,',')>0) {
    $dfile = "delete.pdf";
}

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=$dfile");
    print $pdf->render();
