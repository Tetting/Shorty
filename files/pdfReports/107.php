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
<tr><th colspan="2">Husvagn - info hyrda</th></tr>
<tr><td colspan="2">Skriver ut placeringskort för hyrda husvagnar på Ralle.</td></tr>
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
 }
    $id = $_REQUEST['id'];

    // Calculate the x and y offsets to "shift the origin."
    //$xOffset = 0;
    //$yOffset = $page->getHeight();
  
    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    $query="Select 
     Caravan.* 
    ,Caravan.OwnerPostCode || '  ' || Caravan.OwnerPostTown as 'Caravan.Post'
    ,Giver.*
    ,ifnull(Giver.Name,'')||ifnull(' '||Giver.LastName,'') as 'Giver.FullName'
    ,Giver.ZipCode || '  ' || Giver.ZipTown as 'Giver.Post'
From 
    Caravan LEFT JOIN Giver ON Caravan.GivNr = Giver.Id
Where 
    Caravan.Nr < '200' 
    AND (Caravan.Status is null or Caravan.Status != 'Inaktiv')
Order by Caravan.Nr";

    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
while($row) {    $page->rotate(0, 0, deg2rad(90));    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 16);
    $t = array('y'=>-115,'align'=>'left','xStart'=>120,'xEnd'=>'400');
    alignedText($t,dbTexts('Caravan.Nr',$row,' '),$page,$offsety);
    $t = array('y'=>-134,'align'=>'left','xStart'=>130,'xEnd'=>'400');
    alignedText($t,dbTexts('Caravan.Location',$row,' '),$page,$offsety);
    $t = array('y'=>-152,'align'=>'left','xStart'=>105,'xEnd'=>'400');
    alignedText($t,dbTexts('Caravan.OwnerName',$row,' '),$page,$offsety);
    $t = array('y'=>-171,'align'=>'left','xStart'=>117,'xEnd'=>'400');
    alignedText($t,dbTexts('Caravan.Tel',$row,' '),$page,$offsety);
    $t = array('y'=>-188,'align'=>'left','xStart'=>112,'xEnd'=>'400');
    alignedText($t,dbTexts('Caravan.Regnr',$row,' '),$page,$offsety);
    $t = array('y'=>-207,'align'=>'left','xStart'=>109,'xEnd'=>'400');
    alignedText($t,dbTexts('Caravan.Make',$row,' '),$page,$offsety);
    $t = array('y'=>-226,'align'=>'wrap','xStart'=>186,'xEnd'=>'400');
    alignedText($t,dbTexts('Caravan.Equipment',$row,' '),$page,$offsety);
    $t = array('y'=>-355,'align'=>'left','xStart'=>97,'xEnd'=>'400');
    alignedText($t,dbTexts('Giver.FullName',$row,' '),$page,$offsety);
    $t = array('y'=>-373,'align'=>'left','xStart'=>116,'xEnd'=>'400');
    alignedText($t,dbTexts('Giver.Mob',$row,' '),$page,$offsety);
    $row = $db->GetRow($result);
    if ($row) {
        $page = new Zend_Pdf_Page($templatePage);
        $pdf->pages[] = $page;
        $page->setFont($font, 12);
    }

}

if (isset($_REQUEST['print'])) {
    $pdf->setEmbeddedJs("this.print(true);");
}
//output pdf 
$dfile = "Husvagn - info hyrda$id.pdf";
if (strpos($id,',')>0) {
    $dfile = "Husvagn - info hyrda.pdf";
}

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=$dfile");
    print $pdf->render();
