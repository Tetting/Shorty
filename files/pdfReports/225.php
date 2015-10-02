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
<tr><th colspan="2">Inbetalningar per projekt</th></tr>
<tr><td colspan="2">Skapar lista med inbetalningar <br/>och utbetalningar för angivet projekt.</td></tr><tr><td>Projekt#:</td><td><input name="id" value="<?
if(isset($_REQUEST['id'])) {
    print $_REQUEST['id'];
} else {
    print '';
}
?>"/></td></tr>
<tr><td>Från datum:</td><td><input name="startDate" value="<?
if(isset($_REQUEST['startDate'])) {
    print $_REQUEST['startDate'];
} else {
    print '2013-01-01';
}
?>"/></td></tr>
<tr><td>Till datum:</td><td><input name="endDate" value="<?
if(isset($_REQUEST['endDate'])) {
    print $_REQUEST['endDate'];
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
 $startDate = $_REQUEST['startDate'];
 $endDate = $_REQUEST['endDate'];
}
    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    //process parameters.
    $id = $_REQUEST['id'];    $query="Select
    Payment.*
    ,Giver.*
    ,ifnull(Giver.Name,'')||ifnull(' '||Giver.LastName,'') as 'Giver.FullName'
    ,Project.*
From
    Payment LEFT JOIN Project On Payment.ProjectId = Project.Id
    LEFT JOIN Giver On Payment.GiverId = Giver.Id
Where
    Payment.InKr = '148.75'
    AND Payment.Date BETWEEN '".htmlentities($_REQUEST['startDate'])."' AND '".htmlentities($_REQUEST['endDate'])."'
    Order by Payment.Date,Payment.Id ASC";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["Payment.InKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["Payment.InKr"] = "<b>".$tot."</b>";$row["Giver.Id"] = "Summa";
    $data[] = $row;
    
    $pdf->doHeader("Utskrift ".date("Y-m-d")."",10,'left');
    $pdf->doHeader("<b>Trosgnistan</b>",10,'right');
    $pdf->ezTable(
        $data
        //columns
	    ,array('Payment.Date'=>'Datum'  
                ,'Giver.Id'=>'Givar#'  
                ,'Giver.FullName'=>'Givare'  
                ,'Payment.InKr'=>'Kr in'  
                ,'Payment.OutKr'=>'Kr ut'  
                ,'Payment.PaymentSource'=>'Typ'  
                
        )
	    ,html_entity_decode("Projekt $id")
        //options

	    ,array('NewPageCallback' => 'NewPageCallback'
			,'cols'=>array(
                
			)
            ,'maxWidth'=>$pdf->ez['pageWidth']-20
            ,'showHeadings'=>1
            ,'shaded'=>1
            ,'showLines'=>1
)
    );
    $pdf->doFooter("Utskrift ".date("Y-m-d")."",10,'left');
function pageNoFooter($pdf,$pageno,$pages) {
    $text = "Sida $pageno av $pages";
    $x = ($pdf->ez['pageWidth'] / 2)-strlen($text);

    $y = $pdf->ez['bottomMargin']-15;

    $pdf->addText(($pdf->ez['pageWidth'] / 2)-strlen($text),  $y, 10, $text);
        
}
$pdf->siHeadersAndFooters(array('AllPages'=>'pageNoFooter'));    $pdf->doFooter("<b>Trosgnistan</b>",10,'right');

//output pdf 
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
