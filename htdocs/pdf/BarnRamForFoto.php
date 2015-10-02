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
$doc = 'BarnRamForFoto.pdf';
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
$row = $db->GetRow($result);
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
$pdfPage->rotate(0, 0, deg2rad(90));
// Calculate the x and y offsets to "shift the origin."
$xOffset = 0;
$yOffset = $pdfPage->getHeight();

$textWidth2_20 = 36;
$textWidth_28 = 20;
$textWidth_20 = 36;
$textWidth_16 = 36;
//$pdf->drawText($pdfPage, "Felix Ongao",$textWidth_28, 46 , -60 ,96);
//Felix Ongao
$font = Zend_Pdf_Font::fontWithName(Zend_Pdf_Font::FONT_HELVETICA);
$pdfPage->setFont($font, 28)
	->drawText2($pdfPage, $row["Name"], 210 , -60 ,206, Zend_Pdf_Page::TEXT_ALIGN_CENTER)
	->setFont($font, 20)
	->drawText2($pdfPage, "Barnnr. " . $row["Id"],210,-84, 206, Zend_Pdf_Page::TEXT_ALIGN_CENTER)
	->setFont($font, 16)

	->drawText2($pdfPage, $row["Area1"] . " " . $row["Area"], 210, -104, 206, Zend_Pdf_Page::TEXT_ALIGN_CENTER)

	
	->setFont($font, 20)

	->drawText2($pdfPage, $row["Id"], 700, -114, 606, Zend_Pdf_Page::TEXT_ALIGN_CENTER)
	->drawText2($pdfPage, $row["Name"], 700, -154, 606, Zend_Pdf_Page::TEXT_ALIGN_CENTER)
	->drawText2($pdfPage, $row["Area1"] . " " . $row["Area"], 700, -194, 606, Zend_Pdf_Page::TEXT_ALIGN_CENTER)
	;
//->drawText(centerText("96D Deaf Children (kom) Kenya", $textWidth2_20), 530, -190)
	
header("Content-Disposition: inline; filename=rapport.pdf");
header("Content-type: application/x-pdf");
echo $pdf->render();
