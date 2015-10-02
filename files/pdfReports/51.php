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
<table class="EditTable reportParams">
<tr><th colspan="2">Adressetiketter</th></tr>
<tr><td>Projektnummer:</td><td><input name="Id" value="<?
if(isset($_REQUEST['Id'])) {
    print $_REQUEST['Id'];
} else {
    print '';
}
?>"/></td></tr>

<tr><td colspan="2"><center>
<button onclick="
var params = {};
<?
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
?>
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
">k&ouml;r</button></center>
</td>
</tr>
</table>
<br style="clear:both;"/>
<?
    exit();
} else {
 $Id = $_REQUEST['Id'];
}
    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
  $id = $_REQUEST['id'];    $query="Select
    GivProj.*
    ,Giver.*
From
    GivProj JOIN Giver ON GivProj.GiverId = Giver.Id
Where
    GivProj.ProjectId = $id and KrMon > 0";

    $result = $db->Query($query);
    $data = array();
    while($row = $db->GetRow($result)) {
        $data[] = $row;
    }
    
    $height = 50;
    $width = 150;
    $max = 3;
    $cols = 3;
   $size = 11;
    $labelHeight = 102;
    $starty = $pdf->y;
    $startleft = 20;
    $right = 90;
    $y = $starty;
    $r =0;
    foreach($data as $row) {
        $r++;
        $text = $row['Giver.Id'] . PHP_EOL;
        $text .= $row['Giver.Name'] . PHP_EOL;
        if ($row['Giver.CoAddress']) {
            $text .= $row['Giver.CoAddress'] . PHP_EOL;   
        }
        $text .= $left."==".$y.PHP_EOL;
        
        $pdf->ezSetY($y);
        $endy = $pdf->ezText($text,$size,array(
            'left'=>$left
            ,'right'=>$right
        ));
        if ($r > $cols) {
            $left = $startLeft;
           // $y = $y - $height;
        } else {
            $left = $left + $width;
        }
        if ($r > $max) {
            break;
        }
    }
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
