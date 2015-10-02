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


if (isset($_REQUEST['action']) && $_REQUEST['action']=='runReport') {
?>
<form target="ReportView" action="do/task.php" method="post">
<input type="hidden" name="_report" value="<?=$_REQUEST['_report']?>"/>
<input type="hidden" name="action" value="viewReport"/>
<input type="hidden" name="random" value="<?=rand();?>"/>

<table class="EditTable reportParams">
<tr><th colspan="2">Skattereduktion - kontrolluppgifter (givare)</th></tr>
<tr><td colspan="2">Skriver ut kontrolluppgifter för skattereduktion för angiven givare.</td></tr><tr><td>Givar#:</td><td><input name="id" value="<?
if(isset($_REQUEST['id'])) {
    print $_REQUEST['id'];
} else {
    print '';
}
?>"/></td></tr>
<tr><td>År:</td><td><input name="year" value="<?
if(isset($_REQUEST['year'])) {
    print $_REQUEST['year'];
} else {
    print '2014';
}
?>"/></td></tr>
<tr><td>Person#:</td><td><input name="personnbr" value="<?
if(isset($_REQUEST['personnbr'])) {
    print $_REQUEST['personnbr'];
} else {
    print '';
}
?>"/></td></tr>
<tr><td>Summa:</td><td><input name="sum" value="<?
if(isset($_REQUEST['sum'])) {
    print $_REQUEST['sum'];
} else {
    print '';
}
?>"/></td></tr>

<tr><td colspan="2">
<button name="print" value="1" style="display:none;">Print</button>

<button style="float:right;margin-right:20px;" onclick="
<?
/*
var params = {};

$in = array_merge($_GET,$_POST);
foreach($in as $key=>$value) {
    switch($key) {
        case '_rnd':
        case 'action':
        break;
        default:
        print "params['$key']='$value';".PHP_EOL;
        break;
    }
}

$(this).closest('table').find('input,select').each(function() {
    console.log('input:',this);
    var i = $(this);
    if (i.attr('name')) {
        params[i.attr('name')] = i.val();  
    }
});
var s = '';
for(var p in params) {
    s += '&'+p+'='+encodeURI(params[p]);
}
document.getElementById('ReportView').src='do/task.php?action=viewReport'+s+'&_rnd='+Math.random();                
*/
?>
">k&ouml;r</button>
</td>
</tr>
</table>
</form>
<br style="clear:both;"/><script>
$('[name=id]').select().focus();
</script>
<?
    exit();
} else {
  $id = $_REQUEST['id'];
 $year = $_REQUEST['year'];
 $personnbr = $_REQUEST['personnbr'];
 $sum = $_REQUEST['sum'];
}

    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    //process parameters.
    $id = $_REQUEST['id'];    $query="SELECT
    Giver.*
    ,ifnull(Name,'')||ifnull(' '||LastName,'') as 'FullName'
    ,ZipCode || '  ' || ZipTown as 'Post'
FROM
Giver 
Where 
Id IN($id)";

    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
while($row) {    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $t = array('y'=>745,'align'=>'left','xStart'=>373,'xEnd'=>'530');
    alignedText($t,dbTexts('Id,FullName,CoAddress,Address,Post',$row,'EOL'),$page,$offsety);
    $t = array('y'=>606,'align'=>'left','xStart'=>92,'xEnd'=>'300');
    alignedText($t,dbTexts('Name',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'190','xStart'=>'300','xEnd'=>'345','align'=>'left'),utf8_decode("$year"),$page,$offsety);    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arialbd.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $t = array('y'=>218,'align'=>'','xStart'=>174,'xEnd'=>'500');
    alignedText($t,dbTexts('Id',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'205','xStart'=>'234','xEnd'=>'500','align'=>'left'),utf8_decode("$personnbr"),$page,$offsety);    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'190','xStart'=>'345','xEnd'=>'370','align'=>'right'),utf8_decode("$sum"),$page,$offsety);    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 10);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'625','xStart'=>'400','xEnd'=>'530','align'=>'right'),utf8_decode("Bollnäs ".date("Y-m-d").""),$page,$offsety);    $row = $db->GetRow($result);
    if ($row) {
        $page = new Zend_Pdf_Page($templatePage);
        $pdf->pages[] = $page;
        $page->setFont(Zend_Pdf_Font::fontWithName(Zend_Pdf_Font::FONT_HELVETICA), 12);
    }

}

if (isset($_REQUEST['print'])) {
    $pdf->setEmbeddedJs("this.print(true);");
}
//output pdf inline
$dfile = "Skattereduktion - kontrolluppgifter (givare) custom$id.pdf";
if (strpos($id,',')>0) {
    $dfile = "Skattereduktion - kontrolluppgifter (givare) custom.pdf";
}

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=$dfile");
    print $pdf->render();
