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
function checkSum($accountNum,$digit = true) {
    $pos = 0;
	$val = 0;
	if ($digit) {
		$secondToLastDigit = strlen($accountNum)+2;
		$acc = $accountNum.$secondToLastDigit;
	} else {
		$acc = $accountNum;
	}
	$nums = str_split($acc);
	/*
	1) Take each digit and double every other
	2) if the double is more than 10 then add the digits together of the double and add that to the sum
	3) if the double is less than 10 then add the double to the sum.
	*/
	foreach($nums as $num) {
		$pos++;
		if ($pos % 2) {
			$val += (int)$num;
		} else {
			$v = (int)$num * 2;
			if ($v > 10) {
				$val += ($v % 10) + 1;
			} else {
				$val += $v;
			}
		}
	}
	//Now take sum of digits and times by 9
	$sum = $val * 9;
	//last digit is your checkSum.
	if ($digit) {
		return $acc.substr($sum,-1);
	} else {
		return substr($sum,-1);
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
    $checkSum = checkSum($account.$givTot,false);
   
    $query="Select 
    * 
    ,ZipCode ||'  ' || ZipTown as 'Post'
    ,ifnull(Name,'')||ifnull(' '||LastName,'') as 'FullName'
From 
    Giver 
Where
    (Tags||',' like '%ej inbet,%')
";
//params here
    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 10);
    $t = array('y'=>816,'align'=>'left','xStart'=>124,'xEnd'=>'');
    alignedText($t,dbTexts('Id',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'816','xStart'=>'220','xEnd'=>'280','align'=>'right'),utf8_decode("$month1"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'803','xStart'=>'45','xEnd'=>'600','align'=>'left'),utf8_decode("$giverText"),$page,$offsety);    $t = array('y'=>740,'align'=>'left','xStart'=>300,'xEnd'=>'');
    alignedText($t,dbTexts('FullName,CoAddress,Address,Post',$row,'EOL'),$page,$offsety);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/OCRAEXT.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'623','xStart'=>'100','xEnd'=>'','align'=>'left'),utf8_decode("$account"),$page,$offsety);    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'623','xStart'=>'270','xEnd'=>'300','align'=>'left'),utf8_decode("$givTot"),$page,$offsety);    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'623','xStart'=>'330','xEnd'=>'','align'=>'left'),utf8_decode("$checkSum"),$page,$offsety);    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 10);
    $t = array('y'=>536,'align'=>'left','xStart'=>124,'xEnd'=>'');
    alignedText($t,dbTexts('Id',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'540','xStart'=>'220','xEnd'=>'280','align'=>'right'),utf8_decode("$month2"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'521','xStart'=>'45','xEnd'=>'600','align'=>'left'),utf8_decode("$giverText"),$page,$offsety);    $t = array('y'=>459,'align'=>'left','xStart'=>300,'xEnd'=>'');
    alignedText($t,dbTexts('FullName,CoAddress,Address,Post',$row,'EOL'),$page,$offsety);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/OCRAEXT.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'344','xStart'=>'100','xEnd'=>'','align'=>'left'),utf8_decode("$account"),$page,$offsety);    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'344','xStart'=>'270','xEnd'=>'300','align'=>'left'),utf8_decode("$givTot"),$page,$offsety);    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'344','xStart'=>'330','xEnd'=>'','align'=>'left'),utf8_decode("$checkSum"),$page,$offsety);    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 10);
    $t = array('y'=>257,'align'=>'left','xStart'=>124,'xEnd'=>'');
    alignedText($t,dbTexts('Id',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'256','xStart'=>'220','xEnd'=>'280','align'=>'right'),utf8_decode("$month3"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'240','xStart'=>'45','xEnd'=>'600','align'=>'left'),utf8_decode("$giverText"),$page,$offsety);    $t = array('y'=>177,'align'=>'left','xStart'=>300,'xEnd'=>'');
    alignedText($t,dbTexts('FullName,CoAddress,Address,Post',$row,'EOL'),$page,$offsety);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/OCRAEXT.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 12);
    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'64','xStart'=>'100','xEnd'=>'','align'=>'left'),utf8_decode("$account"),$page,$offsety);    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'64','xStart'=>'270','xEnd'=>'300','align'=>'left'),utf8_decode("$givTot"),$page,$offsety);    $page->setFont($page->getFont(), 12);
    alignedText(array('y'=>'64','xStart'=>'330','xEnd'=>'','align'=>'left'),utf8_decode("$checkSum"),$page,$offsety);

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
