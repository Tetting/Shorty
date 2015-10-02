<?
error_reporting(E_ALL);
ini_set('display_errors', '1');
include("easyDB.php");
include("easyDBConn2.php");
$db=easyDB('');
if (isset($_REQUEST['sql'])) {
	if (md5($_REQUEST['p'].'%¤#!&/()=???') == 'a57a7f06d302d0a157734ffc282cfc82') {
		print $_REQUEST['sql'];
		$db->Query($_REQUEST['sql']);
		if ($db->LastError()) {
			print $db->LastError();
		}
	}
}
//these alter statements did not work.
//$db->Query('ALTER TABLE Caravan ADD COLUMN [Year] VARCHAR(8)  NULL');
//$db->Query('ALTER TABLE Caravan ADD COLUMN [TotalPrice] NUMERIC  NULL');

/*
include_once(dirname(__FILE__)."/../autoload2.php");
$pdfDoc = new Zend_Pdf();
$pdfPage = $pdfDoc->newPage(Zend_Pdf_Page::SIZE_LETTER);

$font = Zend_Pdf_Font::fontWithPath(dirname(__FILE__).'/../pdf/arial.ttf');
$pdfPage->setFont($font, 36);

$unicodeString = 'aäöåäd';
$height = $pdfPage->getHeight(); 
$pdfPage->drawText("hello", 72, 720);
$pdfPage->drawText(utf8_encode($unicodeString), 72, 650,'UTF-8');

$pdfDoc->pages[] = $pdfPage;
header('Content-type: application/pdf'); 
print $pdfDoc->render();
//$pdfDoc->save('test.pdf'); 
*/