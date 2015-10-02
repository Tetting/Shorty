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


$letter="";
if (isset($_REQUEST['letter'])) {
    $letter = $_REQUEST['letter'];
    if ($letter == "Test123") {
        $letter="Hello Friend,

I am writing an example letter to you today!

Long text will be word wrapped so that you can write several paragraphs of text and the pdf will just keep on formatting the text for you so that it correctly displays on the page.

Thanks, 

Trosgnistan";   
    }
}


if (isset($_REQUEST['action']) && $_REQUEST['action']=='runReport') {
?>
<form target="ReportView" action="do/task.php" method="post">
<input type="hidden" name="_report" value="<?=$_REQUEST['_report']?>"/>
<input type="hidden" name="action" value="viewReport"/>

<table class="EditTable reportParams">
<tr><th colspan="2">Givare Brev</th></tr>
<tr><td>Givarelista:</td><td><input name="id" value="<?
if(isset($_REQUEST['id'])) {
    print $_REQUEST['id'];
} else {
    print '11711,10002';
}
?>"/></td></tr>
<tr><td>Brevtext:</td><td><textarea name="letter" rows=15 cols=112 id="letter">
Hello Friend,

I am writing an example letter to you today!

Long text will be word wrapped so that you can write several paragraphs of text and the pdf will just keep on formatting the text for you so that it correctly displays on the page.

Thanks, 

Trosgnistan</textarea>

<tr><td colspan="2"><center>
<button>k&ouml;r brev</button></center>
</td>
</tr>
</table>
</form>
<br style="clear:both;"/>
<?
    exit();
} else {
 $id = $_REQUEST['id'];
}

    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    $query="Select 
     Giver.* 
    ,ifnull(Name,'')||ifnull(' '||LastName,'') as 'FullName'
    ,ZipCode || '  ' || ZipTown as 'Post'
From 
    Giver
Where 
    Giver.Id IN($id)
";

    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
while($row) {
    $t = array('y'=>735,'align'=>'left','xStart'=>340,'xEnd'=>'530');
    alignedText($t,dbTexts('Id,FullName,CoAddress,Address,Post',$row,'EOL'),$page,$offsety);
    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'640','xStart'=>'30','xEnd'=>'485','align'=>'wrap'),utf8_decode("$letter"),$page,$offsety);    $row = $db->GetRow($result);
    if ($row) {
        $page = new Zend_Pdf_Page($templatePage);
        $pdf->pages[] = $page;
        $page->setFont(Zend_Pdf_Font::fontWithName(Zend_Pdf_Font::FONT_HELVETICA), 12);
    }

}


if (isset($_REQUEST['print'])) {
    $pdf->setEmbeddedJs("this.print(true);");
}
//output pdf 
$dfile = "X-Custom Givare Brev$id.pdf";
if (strpos($id,',')>0) {
    $dfile = "X-Custom Givare Brev.pdf";
}

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=$dfile");
    print $pdf->render();
