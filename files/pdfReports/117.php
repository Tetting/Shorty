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
<tr><th colspan="2">Inbetalningskort</th></tr>
<tr><td colspan="2">Skriver ut tre inbetalningskort.<br /><br />Ange 1 på månad för att skriva ut <br />jan-feb-mar, ange 5 för att skriva<br />ut maj-juni-juli.</td></tr><tr><td>Givare:</td><td><input name="id" value="<?
if(isset($_REQUEST['id'])) {
    print $_REQUEST['id'];
} else {
    print '';
}
?>"/></td></tr>
<tr><td>Månad:</td><td><input name="month" value="<?
if(isset($_REQUEST['month'])) {
    print $_REQUEST['month'];
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
 $month = $_REQUEST['month'];
 $year = $_REQUEST['year'];
}
    //create list of three months to display
    $monthNames = array(
        'Unknown'
        ,'Januari'
        ,'Februari'
        ,'Mars'
        ,'April'
        ,'Maj'
        ,'Juni'
        ,'Juli'
        ,'Augusti'
        ,'September'
        ,'Oktober'
        ,'November'
        ,'December'
    );
    $m1 = 1;
    if (isset($_REQUEST['month'])) {
        $m1 = intval($_REQUEST['month']);
    }
    if ($m1 < 1) $m1 = 1;
    if ($m1 >12) $m1 = 12;
    $month1 = $monthNames[$m1] . ' ' . $year;
    $month2 = $m1+1;
    if ($month2 > 12) {
        $month2 = $month2 - 12;
        $month2 = $monthNames[$month2] . ' ' . ($year+1);
    } else {
        $month2 = $monthNames[$month2] . ' ' . $year;
    }
    $month3 = $m1+2;
    if ($month3 > 12) {
        $month3 = $month3 - 12;
        $month3 = $monthNames[$month3] . ' ' . ($year+1);
    } else {
        $month3 = $monthNames[$month3] . ' ' . $year;    
    }
    //$month2 = $monthNames[(($m1+1) % 12)] . ' ' . $year;
    
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
$query="Select
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
    }
     //have to utf8_encode since it will be decoded later on.
     foreach($projectList as $row) {
        $giverText .= $row['GivProj.KrMon']." kr ".utf8_encode(html_entity_decode($row['Project.Project'])).PHP_EOL;
    }
       $account = checkSum($id);
    $checkSum = checkSum($account.$givTot,false,false);
   
    $query="Select 
    * 
    ,ZipCode ||'  ' || ZipTown as 'Post'
    ,ifnull(Name,'')||ifnull(' '||LastName,'') as 'FullName'
From 
    Giver 
where Id = '$id'
";
//params here
    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
while($row) {    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 10);
    $t = array('y'=>818,'align'=>'left','xStart'=>120,'xEnd'=>'');
    alignedText($t,dbTexts('Id',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'818','xStart'=>'220','xEnd'=>'280','align'=>'right'),utf8_decode("$month1"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'805','xStart'=>'45','xEnd'=>'600','align'=>'left'),utf8_decode("$giverText"),$page,$offsety);    $t = array('y'=>740,'align'=>'left','xStart'=>315,'xEnd'=>'');
    alignedText($t,dbTexts('FullName,CoAddress,Address,Post',$row,'EOL'),$page,$offsety);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/OCRB.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'622','xStart'=>'100','xEnd'=>'215','align'=>'right'),utf8_decode("$account"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'622','xStart'=>'270','xEnd'=>'290','align'=>'right'),utf8_decode("$givTot"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'622','xStart'=>'299','xEnd'=>'','align'=>'left'),utf8_decode("00"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'622','xStart'=>'334','xEnd'=>'','align'=>'left'),utf8_decode("$checkSum"),$page,$offsety);    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 10);
    $t = array('y'=>538,'align'=>'left','xStart'=>120,'xEnd'=>'');
    alignedText($t,dbTexts('Id',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'538','xStart'=>'220','xEnd'=>'280','align'=>'right'),utf8_decode("$month2"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'525','xStart'=>'45','xEnd'=>'600','align'=>'left'),utf8_decode("$giverText"),$page,$offsety);    $t = array('y'=>459,'align'=>'left','xStart'=>315,'xEnd'=>'');
    alignedText($t,dbTexts('FullName,CoAddress,Address,Post',$row,'EOL'),$page,$offsety);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/OCRB.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 1);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'342','xStart'=>'100','xEnd'=>'215','align'=>'right'),utf8_decode("$account"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'342','xStart'=>'270','xEnd'=>'290','align'=>'right'),utf8_decode("$givTot"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'342','xStart'=>'299','xEnd'=>'','align'=>'left'),utf8_decode("00"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'342','xStart'=>'334','xEnd'=>'','align'=>'left'),utf8_decode("$checkSum"),$page,$offsety);    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 10);
    $t = array('y'=>258,'align'=>'left','xStart'=>120,'xEnd'=>'');
    alignedText($t,dbTexts('Id',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'258','xStart'=>'220','xEnd'=>'280','align'=>'right'),utf8_decode("$month3"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'245','xStart'=>'45','xEnd'=>'600','align'=>'left'),utf8_decode("$giverText"),$page,$offsety);    $t = array('y'=>177,'align'=>'left','xStart'=>315,'xEnd'=>'');
    alignedText($t,dbTexts('FullName,CoAddress,Address,Post',$row,'EOL'),$page,$offsety);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/OCRB.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 1);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'60','xStart'=>'100','xEnd'=>'215','align'=>'right'),utf8_decode("$account"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'60','xStart'=>'270','xEnd'=>'290','align'=>'right'),utf8_decode("$givTot"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'60','xStart'=>'299','xEnd'=>'','align'=>'left'),utf8_decode("00"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'60','xStart'=>'334','xEnd'=>'','align'=>'left'),utf8_decode("$checkSum"),$page,$offsety);    $row = $db->GetRow($result);
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
$dfile = "delete$id.pdf";
if (strpos($id,',')>0) {
    $dfile = "delete.pdf";
}

    header("Content-type: application/pdf");
    header("Content-Disposition: inline; filename=$dfile");
    print $pdf->render();