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
<tr><th colspan="2">Barn - regkort</th></tr>
<tr><td colspan="2">Skriver ut registerkort för fadderbarn.</td></tr><tr><td>Barn#:</td><td><input name="id" value="<?
if(isset($_REQUEST['id'])) {
    print $_REQUEST['id'];
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
}
    $id = $_REQUEST['id'];
    
    $page->rotate(0, 0, deg2rad(90));

    // Calculate the x and y offsets to "shift the origin."
    //$xOffset = 0;
    //$yOffset = $page->getHeight();
  
    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
//Create a special order by text
$order="ORDER BY
CASE Fadderbarn.Nbr
";
$cases = explode(",",$id);
$pos = 0;
foreach($cases as $case) {
    $order .= "WHEN $case THEN $pos" . PHP_EOL;
    $pos++;
}
$order .= "
END
";    $query="Select 
    Fadderbarn.*
    ,Giver.* 
    ,ifnull(Giver.Name,'')||ifnull(' '||Giver.LastName,'') as 'Giver.FullName'
    ,Giver.ZipCode || '  ' || Giver.ZipTown as 'Giver.Post'
From 
    Fadderbarn
    ,Giver 
Where 
    Giver.Id = Fadderbarn.GiverId 
    AND Fadderbarn.Nbr IN($id)
$order";

    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
while($row) {    $convert = array(
         'I'=>'Indien'
        ,'T'=>'Tanzania'
        ,'Q'=>'Filippinerna'
        ,'V'=>'Ukraina'
        ,'B'=>'Burundi'
        ,'K'=>'Kongo'
        ,'U'=>'Uganda'
        ,'NE'=>'Nepal'
        ,'X'=>'Ecuador'
        ,'R'=>'Rwanda'
        ,'O'=>'Kenya'
        ,'M'=>'Myanmar (Burma)'
    );
    if (isset($convert[$row['Fadderbarn.CountryCode']])) {
        $row['Fadderbarn.CountryName'] = $convert[$row['Fadderbarn.CountryCode']];
    }    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arialbd.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 10);
    $t = array('y'=>-26,'align'=>'left','xStart'=>85,'xEnd'=>'200');
    alignedText($t,dbTexts('Fadderbarn.Nbr',$row,' '),$page,$offsety);
    $t = array('y'=>-49,'align'=>'left','xStart'=>85,'xEnd'=>'200');
    alignedText($t,dbTexts('Fadderbarn.Name',$row,' '),$page,$offsety);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 10);
    $t = array('y'=>-72,'align'=>'left','xStart'=>85,'xEnd'=>'200');
    alignedText($t,dbTexts('Fadderbarn.DOB',$row,' '),$page,$offsety);
    $t = array('y'=>-94,'align'=>'left','xStart'=>85,'xEnd'=>'200');
    alignedText($t,dbTexts('Fadderbarn.Area1,Fadderbarn.Area',$row,' '),$page,$offsety);
    $t = array('y'=>-117,'align'=>'left','xStart'=>85,'xEnd'=>'200');
    alignedText($t,dbTexts('Fadderbarn.CountryName',$row,' '),$page,$offsety);
    $t = array('y'=>-25,'align'=>'left','xStart'=>226,'xEnd'=>'380');
    alignedText($t,dbTexts('Giver.Id,Giver.FullName,Giver.CoAddress,Giver.Address,Giver.Post',$row,'EOL'),$page,$offsety);
    $t = array('y'=>-95,'align'=>'left','xStart'=>307,'xEnd'=>'380');
    alignedText($t,dbTexts('Fadderbarn.HelpD',$row,' '),$page,$offsety);
    $t = array('y'=>-118,'align'=>'','xStart'=>264,'xEnd'=>'380');
    alignedText($t,dbTexts('Fadderbarn.Mkr',$row,' '),$page,$offsety);
    $t = array('y'=>-176,'align'=>'wrap','xStart'=>29,'xEnd'=>'350');
    alignedText($t,dbTexts('Fadderbarn.Notes',$row,' '),$page,$offsety);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arialbd.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 10);
    $t = array('y'=>-26,'align'=>'left','xStart'=>505,'xEnd'=>'680');
    alignedText($t,dbTexts('Fadderbarn.Nbr',$row,' '),$page,$offsety);
    $t = array('y'=>-49,'align'=>'left','xStart'=>505,'xEnd'=>'680');
    alignedText($t,dbTexts('Fadderbarn.Name',$row,' '),$page,$offsety);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 10);
    $t = array('y'=>-72,'align'=>'left','xStart'=>505,'xEnd'=>'680');
    alignedText($t,dbTexts('Fadderbarn.DOB',$row,' '),$page,$offsety);
    $t = array('y'=>-94,'align'=>'left','xStart'=>505,'xEnd'=>'680');
    alignedText($t,dbTexts('Fadderbarn.Area1,Fadderbarn.Area',$row,' '),$page,$offsety);
    $t = array('y'=>-117,'align'=>'left','xStart'=>505,'xEnd'=>'680');
    alignedText($t,dbTexts('Fadderbarn.CountryName',$row,' '),$page,$offsety);
    $t = array('y'=>-152,'align'=>'left','xStart'=>505,'xEnd'=>'680');
    alignedText($t,dbTexts('Fadderbarn.FathersName',$row,' '),$page,$offsety);
    $t = array('y'=>-164,'align'=>'','xStart'=>505,'xEnd'=>'680');
    alignedText($t,dbTexts('Fadderbarn.MothersName',$row,' '),$page,$offsety);
    $t = array('y'=>-175,'align'=>'','xStart'=>505,'xEnd'=>'680');
    alignedText($t,dbTexts('Fadderbarn.Guardian',$row,' '),$page,$offsety);
    $t = array('y'=>-25,'align'=>'left','xStart'=>646,'xEnd'=>'800');
    alignedText($t,dbTexts('Giver.Id,Giver.FullName,Giver.CoAddress,Giver.Address,Giver.Post',$row,'EOL'),$page,$offsety);
    $t = array('y'=>-95,'align'=>'left','xStart'=>730,'xEnd'=>'800');
    alignedText($t,dbTexts('Fadderbarn.HelpD',$row,' '),$page,$offsety);
    $t = array('y'=>-118,'align'=>'left','xStart'=>730,'xEnd'=>'800');
    alignedText($t,dbTexts('Fadderbarn.Mkr',$row,' '),$page,$offsety);
    $t = array('y'=>-152,'align'=>'left','xStart'=>730,'xEnd'=>'800');
    alignedText($t,dbTexts('Fadderbarn.TGdt',$row,' '),$page,$offsety);
    $t = array('y'=>-164,'align'=>'left','xStart'=>730,'xEnd'=>'800');
    alignedText($t,dbTexts('Fadderbarn.RegDate',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'-175','xStart'=>'730','xEnd'=>'800','align'=>'left'),utf8_decode("".date("Y-m-d").""),$page,$offsety);    $t = array('y'=>-187,'align'=>'left','xStart'=>730,'xEnd'=>'800');
    alignedText($t,dbTexts('Fadderbarn.Id',$row,' '),$page,$offsety);
    $t = array('y'=>-221,'align'=>'wrap','xStart'=>450,'xEnd'=>'770');
    alignedText($t,dbTexts('Fadderbarn.Notes',$row,' '),$page,$offsety);
    $row = $db->GetRow($result);
    if ($row) {
        $page = new Zend_Pdf_Page($templatePage);
        $pdf->pages[] = $page;
        $page->setFont($font, 12);
        $page->rotate(0, 0, deg2rad(90));
    }

}

if (isset($_REQUEST['print'])) {
    $pdf->setEmbeddedJs("this.print(true);");
}
//output pdf inline
$dfile = "Barn - regkort$id.pdf";
if (strpos($id,',')>0) {
    $dfile = "Barn - regkort.pdf";
}

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=$dfile");
    print $pdf->render();
