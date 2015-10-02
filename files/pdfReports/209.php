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
<tr><th colspan="2">Inbetalningskort (Halvår)</th></tr>
<tr><td colspan="2">Skriver inbetalningskort till alla givare <br />som är taggade med "halvår".</td></tr>
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
/**
* Calculate an OCR checksum..
*/
function checkSum($accountNum,$digit = true,$includeAccount = true) {
    //add digit to the account number.
    if ($digit) {
        $secondToLastDigit = strlen($accountNum)+2;
    	$acc = $accountNum.$secondToLastDigit;
	} else {
		$acc = $accountNum;
	}
    //Luhn algorithm is used to calculate checksums...
    $sum = 0;
    for($i=0;$i<strlen($acc);$i++) {
       $sum += intval(substr($acc,$i,1));
    }
    $delta = array(0,1,2,3,4,-4,-3,-2,-1,0);
    for($i=strlen($acc)-1;$i>=0;$i=$i-2) {
        $deltaIndex = intval(substr($acc,$i,1));
        $deltaValue = $delta[$deltaIndex];
        $sum += $deltaValue;
    }
    $mod10 = $sum %10;
    $mod10 = 10 - $mod10;
    if($mod10==10) {
        $mod10=0;
    }
    if ($includeAccount) {
        return($acc.$mod10);
    } else {
        return($mod10);
    }
}
    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
$giverQuery = "
Select
    distinct(Giver.Id) as 'Giver.Id'
From
    GivProj JOIN Project ON GivProj.ProjectId = Project.Id
    JOIN Giver On GivProj.GiverId = Giver.Id
Where
    GivProj.KrMon > 0
    AND GivProj.KrMon is not null
    AND GivProj.KrMon != ''
    AND (GivProj.Status is null OR GivProj.Status != 'Inaktiv')
    AND (Project.Status is null OR Project.Status != 'Inaktiv')
    AND (Giver.Status is null OR Giver.Status != 'Inaktiv')
    AND (','||Giver.Tags||',') like '%,halv&aring;r,%'
    AND Land = 'S'
Order by Giver.Id ASC
";

$giverResult = $db->Query($giverQuery);
$firstPage = true;
while($giverRow = $db->GetRow($giverResult)) {
    $giverId = $giverRow['Giver.Id'];
    $id = $giverRow['Giver.Id'];

        if (!$firstPage) {
            $page = new Zend_Pdf_Page($templatePage);
        $pdf->pages[] = $page;
        }
        $firstPage = false;
        
 $query="
        Select
            GivProj.*
            ,Project.*
        From
            GivProj JOIN Project ON GivProj.ProjectId = Project.Id
        Where
            GivProj.GiverId = '$id'
            AND GivProj.KrMon > 0
            AND GivProj.KrMon is not null
            AND GivProj.KrMon != ''
            AND (GivProj.Status is null OR GivProj.Status != 'Inaktiv')
            AND (Project.Status is null OR Project.Status != 'Inaktiv')
    ";

    $result = $db->Query($query);
    $giverText = "";
    $givTot = 0;
    $projectList = array();
    while($row = $db->GetRow($result)) {
        if (isset($projectList[$row['Project.Id']])) {
            $projectList[$row['Project.Id']]['GivProj.KrMon'] += $row['GivProj.KrMon'];
        } else {
            $projectList[$row['Project.Id']] = $row;
        }
        //$giverText .= $row['GivProj.KrMon']." kr ".utf8_encode(html_entity_decode($row['Project.Project'])).PHP_EOL;
        $givTot += $row['GivProj.KrMon'];
        $givTotsum = $givTot*6;
    }
     //have to utf8_encode since it will be decoded later on.
     foreach($projectList as $row) {
        $giverText .= $row['GivProj.KrMon']." kr/mån ".utf8_encode(html_entity_decode($row['Project.Project'])).PHP_EOL;
    }
    $account = checkSum($id);
    $checkSum = checkSum($account.$givTot,false,false);    $query="Select 
    * 
    ,ZipCode ||'  ' || ZipTown as 'Post'
    ,ifnull(Name,'')||ifnull(' '||LastName,'') as 'FullName'
From 
    Giver 
where Id = '$id'
";

    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $t = array('y'=>745,'align'=>'left','xStart'=>373,'xEnd'=>'530');
    alignedText($t,dbTexts('Id,FullName,CoAddress,Address,Post',$row,'EOL'),$page,$offsety);
    $t = array('y'=>579,'align'=>'left','xStart'=>90,'xEnd'=>'530');
    alignedText($t,dbTexts('Name',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'480','xStart'=>'56','xEnd'=>'530','align'=>'left'),utf8_decode("$giverText"),$page,$offsety);    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 10);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'240','xStart'=>'56','xEnd'=>'300','align'=>'left'),utf8_decode("Inbetalning för halvår"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'225','xStart'=>'56','xEnd'=>'300','align'=>'left'),utf8_decode("Givare: $id"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'210','xStart'=>'56','xEnd'=>'215','align'=>'left'),utf8_decode("OCR (ange vid betalning): $account"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'195','xStart'=>'56','xEnd'=>'300','align'=>'left'),utf8_decode("Totalt: $givTotsum"),$page,$offsety);    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/OCRB.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 1);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arialbd.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'253','xStart'=>'330','xEnd'=>'530','align'=>'left'),utf8_decode("90 07 37 - 8"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'217','xStart'=>'330','xEnd'=>'530','align'=>'left'),utf8_decode("Trosgnistans Mission"),$page,$offsety);    $t = array('y'=>180,'align'=>'left','xStart'=>330,'xEnd'=>'530');
    alignedText($t,dbTexts('Id,FullName,CoAddress,Address,Post',$row,'EOL'),$page,$offsety);
    $row = $db->GetRow($result);
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
$dfile = "Inbetalningskort (Halvår)$id.pdf";
if (strpos($id,',')>0) {
    $dfile = "Inbetalningskort (Halvår).pdf";
}

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=$dfile");
    print $pdf->render();
