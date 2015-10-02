<?
include_once("pdfSettings.php");
session_start();
if (!isset($_SESSION["UserData"])) {
    print "You must login to access this resource";
	exit();
}
/**
* ezPdf generated report.
*/
include_once("$ezPdfDir/class.si.ezpdf.php");
$pdf = new SiCezpdf('A4', 'portrait');
$pdf->ezSetMargins(30,30,30,20);
function NewPageCallback($rowIndex) {
    if ($rowIndex > 8000) {
		return 'Bailout';
	}
}

if (isset($_REQUEST['action']) && $_REQUEST['action']=='runReport') {
?>
<form target="ReportView" action="do/task.php" method="post">
<input type="hidden" name="_report" value="<?=$_REQUEST['_report']?>"/>
<input type="hidden" name="action" value="viewReport"/>
<input type="hidden" name="random" value="<?=rand();?>"/>

<table class="EditTable reportParams">
<tr><th colspan="2">Adressetiketter (Projekt/mån)</th></tr>
<tr><td colspan="2">Skriver ut adressetiketter för givare<br />som ger månatligen till angivet projekt.</td></tr><tr><td>Projekt#:</td><td><input name="id" value="<?
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
    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
 // $id = $_REQUEST['id'];
     $query="Select
    GivProj.*
    ,Giver.*
    ,ifnull(Giver.Name,'')||ifnull(' '||Giver.LastName,'') as 'Giver.FullName'
From
    GivProj JOIN Giver ON GivProj.GiverId = Giver.Id
Where
    GivProj.ProjectId = $id
    AND GivProj.KrMon > 0
    AND GivProj.KrMon is not null
    AND GivProj.KrMon != ''
    AND (GivProj.Status is null or GivProj.Status != 'Inaktiv')
    AND (Giver.Status is null or Giver.Status != 'Inaktiv')
Group By Giver.Id
Order by Giver.ZipCode";

    $result = $db->Query($query);
    $data = array();
    while($row = $db->GetRow($result)) {
        $data[] = $row;
    }
    

    $size = 11;//fontSize
    $width = 200;//width of one box
    $height = 100;//height of one box (auto for auto height)
    $cols = 3;//number of columns per page
    $rows = 8;//number of rows per page
    $startx = 20;//start from left on new page.
    $starty = 20;
    $newPage = false;//set to true to automatically create a new page
    
    $starty = $pdf->y;
    $y = $pdf->y;
    //$pdf->ezSetY($y);
    $left = $startx;
    $r =0;
    $rs = 0;
    foreach($data as $row) {
        $r++;
        $text = $row['Giver.Id'] . PHP_EOL;
        $text .= "<b>".$row['Giver.FullName']."</b>" . PHP_EOL;
        if ($row['Giver.CoAddress']) {
            $text .= $row['Giver.CoAddress'] . PHP_EOL;   
        }
         if ($row['Giver.Address']) {
            $text .= $row['Giver.Address']. PHP_EOL;
        }
        $text .= $row['Giver.ZipCode'].'  '.$row['Giver.ZipTown'] . PHP_EOL;
        
        //$text .= $left."==".($left+$width).PHP_EOL;
        $endy = $pdf->ezText($text,$size,array(
            'aleft'=>$left
            ,'aright'=>$left+$width
            ,'justification'=>'left'
        ));
        if ($r==$cols) {
            $r = 0;
            $left = $startx;
            if ($height == 'auto') {
                $y = $endy;
            } else {
                $y = $y - $height;
            }
            $pdf->ezSetY($y);
            //$pdf->ezText("New Y Pos:".$pdf->y."==".$y."==".$height,$size);
            $rs++;
            if ($rs == $rows) {
                //new page...
                if ($newPage) {
                    $pdf->ezNewPage();
                    $y = $pdf->y;
                } else {
                    $y = $pdf->y;   
                }
                $left = $startx;
                //$pdf->ezSetY($y);
            
                $rs = 0;
                $r = 0;
            } 
        } else {
            $left = $left + $width;   
            $pdf->ezSetY($y);
            
        }
    }
    
    /* $pdf->ezColumnsStart(array('num'=>3,'gap'=>11));
    $size = 11;
    $labelHeight = 102;
    foreach($data as $row) {
        $starty = $pdf->y;
        $pdf->ezText($row['Giver.Id'],$size);
        $pdf->ezText("<b>".$row['Giver.Name']."</b>",$size);

        if ($row['Giver.CoAddress']) {
            $pdf->ezText($row['Giver.CoAddress'],$size);   
        }
        if ($row['Giver.Address']) {
            $pdf->ezText($row['Giver.Address'],$size);
        }
        $endy = $pdf->ezText($row['Giver.ZipCode'].' '.$row['Giver.ZipTown'],$size);
        $offset = $labelHeight - ($starty - $endy);
        //$pdf->ezText($offset.' '. ($starty - $endy),$size);
        $pdf->ezSetDy(-$offset);
    }*/$query="Select
    Count(urval) as antal
From(
Select
    GivProj.*
    ,Giver.*
    ,Sum(GivProj.KrMon) as urval
    ,ifnull(Giver.Name,'')||ifnull(' '||Giver.LastName,'') as 'Giver.FullName'
From
    GivProj JOIN Giver ON GivProj.GiverId = Giver.Id
Where
    GivProj.ProjectId = '$id'
    AND GivProj.KrMon > 0
    AND GivProj.KrMon is not null
    AND GivProj.KrMon != ''
    AND (GivProj.Status is null or GivProj.Status != 'Inaktiv')
    AND (Giver.Status is null or Giver.Status != 'Inaktiv')
Group By Giver.Id
Order by Giver.ZipCode)";

    $result = $db->Query($query);
    $data = array();
    while($row = $db->GetRow($result)) {
        $data[] = $row;
    }

    $size = 11;//fontSize
    $width = 200;//width of one box
    $height = 100;//height of one box (auto for auto height)
    $cols = 3;//number of columns per page
    $rows = 8;//number of rows per page
    $startx = 20;//start from left on new page.
    $starty = 20;
    $newPage = false;//set to true to automatically create a new page
    

$starty = $pdf->y;
    $y = $pdf->y;
    //$pdf->ezSetY($y);
    $left = $startx;
    $r =0;
    $rs = 0;
    foreach($data as $row) {
        $r++;
        $urval = $row['antal'] . PHP_EOL; 
    }    $pdf->ezSetDy(-70);
    $pdf->ezText("<b>Antal:</b> $urval");

//output pdf inline
$dfile = "rapport$id.pdf";
if (stristr($id,',')>0) {
    $dfile = "rapport.pdf";    
}
header('connection:close'); 

if (isset($forceInline) || isset($_REQUEST['forceInline'])) {
    $pdf->ezStream();
} else {
    $pdf->ezStream();
    
}