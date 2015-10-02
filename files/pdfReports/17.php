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
<tr><th colspan="2">Brev till barn</th></tr>
<tr><td>Barnnummer:</td><td><input name="id" value="<?
if(isset($_REQUEST['id'])) {
    print $_REQUEST['id'];
} else {
    print '2,3,4';
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

    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    $query=" Select
    Fadderbarn.*
    ,Giver.*
    ,ifnull(Giver.Name,'')||ifnull(' '||Giver.LastName,'') as 'Giver.FullName'
    ,Giver.ZipCode || '  ' || Giver.ZipTown as 'Giver.Post'
    ,SocialWorkArea.*
    ,SocialWorker.*
From
    Fadderbarn LEFT JOIN Giver ON Giver.Id = Fadderbarn.GiverId
    LEFT JOIN SocialWorkArea ON SocialWorkArea.Area1 = Fadderbarn.Area1
    LEFT JOIN SocialWorker ON SocialWorker.Id = SocialWorkArea.SocialWorkerId
Where
    Fadderbarn.Nbr IN($id)";

    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
while($row) {
        $t = array('y'=>735,'align'=>'left','xStart'=>340,'xEnd'=>'530');
    alignedText($t,dbTexts('Giver.Id,Giver.FullName,Giver.CoAddress,Giver.Address,Giver.Post',$row,'EOL'),$page,$offsety);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $t = array('y'=>607,'align'=>'left','xStart'=>92,'xEnd'=>'530');
    alignedText($t,dbTexts('Giver.Name',$row,' '),$page,$offsety);
    $t = array('y'=>317,'align'=>'left','xStart'=>117,'xEnd'=>'530');
    alignedText($t,dbTexts('Fadderbarn.Nbr',$row,' '),$page,$offsety);
    $t = array('y'=>303,'align'=>'left','xStart'=>58,'xEnd'=>'530');
    alignedText($t,dbTexts('Fadderbarn.Name',$row,' '),$page,$offsety);
    $t = array('y'=>289,'align'=>'left','xStart'=>85,'xEnd'=>'530');
    alignedText($t,dbTexts('Fadderbarn.Area1,Fadderbarn.Area',$row,' '),$page,$offsety);
    $t = array('y'=>240,'align'=>'left','xStart'=>56,'xEnd'=>'300');
    alignedText($t,dbTexts('SocialWorker.Address,SocialWorker.Name,SocialWorker.Tel,SocialWorker.Mob,SocialWorker.ZipCode,SocialWorker.ZipTown,SocialWorker.Land',$row,'EOL'),$page,$offsety);
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
$dfile = "Brev till barn$id.pdf";
if (strpos($id,',')>0) {
    $dfile = "Brev till barn.pdf";
}

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=$dfile");
    print $pdf->render();
