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
<tr><th colspan="2">Löftesoffer - fritt</th></tr>
<tr><td colspan="2">Detta brev skickas till givare som skrivit på löftesofferkort.</td></tr><tr><td>Givare#:</td><td><input name="id" value="<?
if(isset($_REQUEST['id'])) {
    print $_REQUEST['id'];
} else {
    print '';
}
?>"/></td></tr>
<tr><td>Projekt:</td><td><input name="project" value="<?
if(isset($_REQUEST['project'])) {
    print $_REQUEST['project'];
} else {
    print '';
}
?>"/></td></tr>
<tr><td>Kr:</td><td><input name="sum" value="<?
if(isset($_REQUEST['sum'])) {
    print $_REQUEST['sum'];
} else {
    print '';
}
?>"/></td></tr>
<tr><td>Fri text:</td><td><textarea rows="15" cols="30" name="letter"><?
if(isset($_REQUEST['letter'])) {
    print $_REQUEST['letter'];
} else {
    print 'Fri text...';
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
 $project = $_REQUEST['project'];
 $sum = $_REQUEST['sum'];
 $letter = utf8_encode($_REQUEST['letter']);
}

$letter="";
if (isset($_REQUEST['letter'])) {
    $letter = utf8_encode(str_replace("
    if ($letter == "Test123") {
        $letter="Skriv egen text här";   
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
Skriv egen text här
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
//Create a special order by text
$order="ORDER BY
CASE Id
";
$cases = explode(",",$id);
$pos = 0;
foreach($cases as $case) {
    $order .= "WHEN $case THEN $pos" . PHP_EOL;
    $pos++;
}
$order .= "
END
";
    $projectId = $_REQUEST['project'];
    $query = "select * from Project where Id = '".$_REQUEST['project']."'";
    $result = $db->Query($query);
    $row = $db->GetRow($result);
    $projectName = utf8_encode(html_entity_decode($row['Project']));    $query="Select
    Giver.*
    ,ifnull(Name,'')||ifnull(' '||LastName,'') as 'FullName'
    ,ZipCode || '  ' || ZipTown as 'Post'
From
    Giver
Where
    Id IN($id)
$order";

    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
while($row) {    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $t = array('y'=>581,'align'=>'left','xStart'=>92,'xEnd'=>'530');
    alignedText($t,dbTexts('Name',$row,' '),$page,$offsety);
    $t = array('y'=>236,'align'=>'left','xStart'=>141,'xEnd'=>'530');
    alignedText($t,dbTexts('Id',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'567','xStart'=>'57','xEnd'=>'480','align'=>'wrap'),utf8_decode("$letter"),$page,$offsety);    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'208','xStart'=>'135','xEnd'=>'530','align'=>'left'),utf8_decode("$sum kr"),$page,$offsety);    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'195','xStart'=>'56','xEnd'=>'530','align'=>'left'),utf8_decode("P $projectId $projectName"),$page,$offsety);    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arialbd.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'253','xStart'=>'330','xEnd'=>'530','align'=>'left'),utf8_decode("90 02 71 - 8"),$page,$offsety);    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'217','xStart'=>'330','xEnd'=>'530','align'=>'left'),utf8_decode("Trosgnistans Mission"),$page,$offsety);    $t = array('y'=>183,'align'=>'','xStart'=>330,'xEnd'=>'530');
    alignedText($t,dbTexts('FullName,CoAddress,Address,Post',$row,'EOL'),$page,$offsety);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
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
$dfile = "Löftesoffer - fritt$id.pdf";
if (strpos($id,',')>0) {
    $dfile = "Löftesoffer - fritt.pdf";
}

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=$dfile");
    print $pdf->render();