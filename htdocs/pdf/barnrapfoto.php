<?
session_start();
if (!isset($_SESSION["UserData"])) {
	print "You must login to access this resource";
	exit();
}
/**
 * Currently hardcoded to a particular injection
 * We can create helper classes or similar to clean up this code.
 */
include("../autoload2.php");
/*include("Injections.php");
if (!isset($injections[$_REQUEST['datasource']])) {
	die("document not found.");
}
$doc = $injections[$_REQUEST['datasource']];
*/
$doc = 'barnrapfoto.pdf';
$path = dirname(__FILE__) . "/../files/pdfReports/";
if (file_exists(dirname(__FILE__)."/custom_local.php")) {
	include(dirname(__FILE__)."/custom_local.php");
}

if (!file_exists($path.$doc)) {
	die("pdf file not found");
}
include("ZendPdfExtend.php");
$pdf = Library_Pdf_Base::load($path.$doc);

function centerText($text, $size) {
    return str_pad($text, $size, '  ', STR_PAD_BOTH);
}
function cleanText($text) {
    return html_entity_decode($text);
}
//setup db
$offset = "..";
include("$offset/blackboard.php");
include("$offset/do/DBNamespace.php");
include("$offset/do/fb_si.php");
include("$offset/do/easyDB.php");
$DBProvider="sqlite";
$connections["sqlite"]=array(
	''=>array('dbFile'=>"$offset/data/data.db",'persist'=>true)
);
$db = easyDB('');

$sql = "select * from Fadderbarn where Id = '${_REQUEST['id']}'";
$result = $db->Query($sql);
$child = $db->GetRow($result);
$sql2 = "select * from Giver where Id = '${child['GiverId']}'";
$result2 = $db->Query($sql2);
$giver = $db->GetRow($result2);
//do some injections....
$pdfPage = &$pdf->pages[0];
$pdfPage->si_changeSize(612, 892);
/*$font = Zend_Pdf_Font::fontWithName(Zend_Pdf_Font::FONT_HELVETICA);
$pdfPage->setFont($font, 36)
	->drawText("Injected",20,90)
	->drawText("Hello", 20, 20);
*/
//bugfix: http://framework.zend.com/issues/browse/ZF-33
// Rotate the coordinate system 90 degrees clockwise
//$pdfPage->rotate(0, 0, deg2rad(90));
// Calculate the x and y offsets to "shift the origin."
$xOffset = 0;
$yOffset = $pdfPage->getHeight();
//$yOffset = 0;

$textWidth2_20 = 36;
$textWidth_28 = 20;
$textWidth_20 = 36;
$textWidth_16 = 36;
//$pdf->drawText($pdfPage, "Felix Ongao",$textWidth_28, 46 , -60 ,96);
//Felix Ongao
$font = Zend_Pdf_Font::fontWithName(Zend_Pdf_Font::FONT_HELVETICA);
$pdfPage->setFont($font, 20)
	->drawText2($pdfPage, $child["Id"] . ' ' . $child["Name"], 170 , 380 ,206, Zend_Pdf_Page::TEXT_ALIGN_CENTER)

	->setFont($font, 16)
	->drawText2($pdfPage, cleanText($giver["Id"]),270,740, 206, Zend_Pdf_Page::TEXT_ALIGN_LEFT)
	->drawText2($pdfPage, cleanText($giver["Name"]),270,720, 206, Zend_Pdf_Page::TEXT_ALIGN_LEFT)
	->drawText2($pdfPage, cleanText($giver["Address"]),270,700, 206, Zend_Pdf_Page::TEXT_ALIGN_LEFT)
	->drawText2($pdfPage, cleanText($giver["ZipCode"] . ' ' . $giver["ZipTown"]),270,680, 206, Zend_Pdf_Page::TEXT_ALIGN_LEFT)

	;
//->drawText(centerText("96D Deaf Children (kom) Kenya", $textWidth2_20), 530, -190)
	
header("Content-Disposition: inline; filename=rapport.pdf");
header("Content-type: application/x-pdf");
echo $pdf->render();
