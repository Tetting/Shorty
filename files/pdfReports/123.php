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
<tr><th colspan="2">Inbetalningskort (alla)</th></tr>
<tr><td colspan="2">Skriver ut inbetalningskort (6 mån) för alla<br/> sponsorer som har månatliga åtaganden, förutom<br/> de med tagg 'Autogiro' samt 'ej inbet'.</td></tr><tr><td>Månad:</td><td><input name="month" value="<?
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
    AND (','||Giver.Tags||',') not like '%,autogiro,%'
    AND (','||Giver.Tags||',') not like '%,ej inbet,%'
    AND Land = 'S'
Order by Giver.Id ASC
";

$giverResult = $db->Query($giverQuery);
$firstPage = true;
while($giverRow = $db->GetRow($giverResult)) {
    $giverId = $giverRow['Giver.Id'];
    $id = $giverRow['Giver.Id'];
    
    //two pages for each giver, i.e. 6 months...
    for($mloop=0;$mloop<2;$mloop++) {
        if ($mloop==0) {
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
        } else {
            $month1 = $m1+3;
            if ($month1 > 12) {
                $month1 = $month1 - 12;
                $month1 = $monthNames[$month1] . ' ' . ($year+1);
            } else {
                $month1 = $monthNames[$month1] . ' ' . $year;
            }
            
            $month2 = $m1+4;
            if ($month2 > 12) {
                $month2 = $month2 - 12;
                $month2 = $monthNames[$month2] . ' ' . ($year+1);
            } else {
                $month2 = $monthNames[$month2] . ' ' . $year;
            }
            $month3 = $m1+5;
            if ($month3 > 12) {
                $month3 = $month3 - 12;
                $month3 = $monthNames[$month3] . ' ' . ($year+1);
            } else {
                $month3 = $monthNames[$month3] . ' ' . $year;    
            }   
        }
    
        if (!$firstPage) {
            $page = $pdf->newPage(Zend_Pdf_Page::SIZE_A4); 
            $pdf->pages[] = $page;
        }
        $firstPage = false;
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
    
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/arial.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 10);
    $t = array('y'=>818,'align'=>'left','xStart'=>120,'xEnd'=>'');
    alignedText($t,dbTexts('Id',$row,' '),$page,$offsety);
    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'818','xStart'=>'220','xEnd'=>'280','align'=>'right'),utf8_decode("$month1"),$page,$offsety);    $page->setFont($page->getFont(), 10);
    alignedText(array('y'=>'805','xStart'=>'45','xEnd'=>'600','align'=>'left'),utf8_decode("$giverText"),$page,$offsety);    $t = array('y'=>740,'align'=>'left','xStart'=>315,'xEnd'=>'');
    alignedText($t,dbTexts('FullName,CoAddress,Address,Post',$row,'EOL'),$page,$offsety);
    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/OCRB.ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); 
    $page->setFont($font, 1);
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
    alignedText(array('y'=>'60','xStart'=>'334','xEnd'=>'','align'=>'left'),utf8_decode("$checkSum"),$page,$offsety);    }
    //end of giver loop.
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
