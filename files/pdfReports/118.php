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
<tr><th colspan="2">Evangelistbyte</th></tr>
<tr><td colspan="2">Detta brev skickar vid byte av evangelist.</td></tr><tr><td>Evangelist#:</td><td><input name="id" value="<?
if(isset($_REQUEST['id'])) {
    print $_REQUEST['id'];
} else {
    print '';
}
?>"/></td></tr>
<tr><td>Ny  evangelist:</td><td><textarea rows="10" cols="20" name="text"><?
if(isset($_REQUEST['text'])) {
    print $_REQUEST['text'];
} else {
    print 'Info om ny evangelist...';
}
?></textarea></td></tr>

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
 $text = utf8_encode($_REQUEST['text']);
}

$text="";
if (isset($_REQUEST['text'])) {
    $text = utf8_encode(str_replace("
".PHP_EOL,PHP_EOL,$_REQUEST['text']));
    if ($text == "Test123") {
        $text="Skriv egen text här...";   
    }
}


if (isset($_REQUEST['action']) && $_REQUEST['action']=='runReport') {
?>
<form target="ReportView" action="do/task.php" method="post">
<input type="hidden" name="_report" value="<?=$_REQUEST['_report']?>"/>
<input type="hidden" name="action" value="viewReport"/>

<table class="EditTable reportParams">
<tr><th colspan="2">Givare Brev</th></tr>
<tr><td>Givarenummer:</td><td><input name="id" value="<?
if(isset($_REQUEST['id'])) {
    print $_REQUEST['id'];
} else {
    print '';
}
?>"/></td></tr>
<tr><td>Brevtext:</td><td><textarea name="letter" rows=15 cols=112 id="letter">
Skriv egen text här...
</textarea>

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
    Evangelist.*
    ,Giver.* 
    ,ifnull(Giver.Name,'')||ifnull(' '||Giver.LastName,'') as 'Giver.FullName'
    ,Giver.ZipCode || '  ' || Giver.ZipTown as 'Giver.Post'
From 
    Evangelist
    ,Giver 
Where 
    Giver.Id = Evangelist.GiverId 
    AND Evangelist.Id IN($id)
";

    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
while($row) {    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $t = array('y'=>735,'align'=>'left','xStart'=>340,'xEnd'=>'530');
    alignedText($t,dbTexts('Giver.Id,Giver.FullName,Giver.CoAddress,Giver.Address,Giver.Post',$row,'EOL'),$page,$offsety);
    $t = array('y'=>581,'align'=>'left','xStart'=>92,'xEnd'=>'530');
    alignedText($t,dbTexts('Giver.Name',$row,' '),$page,$offsety);
    $t = array('y'=>553,'align'=>'left','xStart'=>282,'xEnd'=>'530');
    alignedText($t,dbTexts('Evangelist.Name',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'483','xStart'=>'58','xEnd'=>'480','align'=>'wrap'),utf8_decode("$text"),$page,$offsety);    $page->setFont($page->getFont(), 10);
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
$dfile = "Evangelistbyte$id.pdf";
if (strpos($id,',')>0) {
    $dfile = "Evangelistbyte.pdf";
}

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=$dfile");
    print $pdf->render();
