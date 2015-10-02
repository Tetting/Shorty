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
    print '2013';
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
}

    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    //process parameters.
    $id = $_REQUEST['id'];    $query="SELECT
    eligable.GiverID,SUM(eligable.giftsOver200),Count(eligable.giftsOver200)
    ,Giver.*
    ,ifnull(Giver.Name,'')||ifnull(' '||Giver.LastName,'') as 'Giver.FullName'
    ,Giver.ZipCode || '  ' || Giver.ZipTown as 'Giver.Post'
FROM
(
SELECT
 Payment.GiverId as GiverID
 ,Payment.Date
 ,SUM(Payment.InKrTotal) as giftsOver200

FROM
 Payment
Where
 Payment.ProjectId IN(1,2,6,8,9,10,13,19,21,22,28,29,30,31,34,35,36,37,39,40,42,44,45,100,224,228,260,400,401,404,408,409,412,419,423,426,428,429,434,436,440,441,445,447,456)
 AND strftime('%Y',Payment.Date) = '".htmlentities($_REQUEST['year'])."'
 Group by Payment.GiverId,Payment.Date
 Having SUM(Payment.InKrTotal) > 199
) as eligable
JOIN Giver on eligable.GiverID = Giver.Id
Where 
Giver.Id IN($id)
AND Giver.PersonNbr LIKE '19%'
GROUP BY GiverId
Having SUM(eligable.giftsOver200) > 199";

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
    }    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $t = array('y'=>745,'align'=>'left','xStart'=>373,'xEnd'=>'530');
    alignedText($t,dbTexts('Giver.Id,Giver.FullName,Giver.CoAddress,Giver.Address,Giver.Post',$row,'EOL'),$page,$offsety);
    $t = array('y'=>623,'align'=>'left','xStart'=>105,'xEnd'=>'300');
    alignedText($t,dbTexts('Giver.Name',$row,' '),$page,$offsety);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arialbd.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $t = array('y'=>234,'align'=>'','xStart'=>189,'xEnd'=>'500');
    alignedText($t,dbTexts('Giver.Id',$row,' '),$page,$offsety);
    $t = array('y'=>220,'align'=>'left','xStart'=>248,'xEnd'=>'500');
    alignedText($t,dbTexts('Giver.PersonNbr',$row,' '),$page,$offsety);
    $t = array('y'=>207,'align'=>'right','xStart'=>345,'xEnd'=>'385');
    alignedText($t,dbTexts('SUM(eligable.giftsOver200)',$row,' '),$page,$offsety);
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
$dfile = "Skattereduktion - kontrolluppgifter (givare)_clone$id.pdf";
if (strpos($id,',')>0) {
    $dfile = "Skattereduktion - kontrolluppgifter (givare)_clone.pdf";
}

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=$dfile");
    print $pdf->render();
