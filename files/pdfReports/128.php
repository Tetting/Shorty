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
<tr><th colspan="2">Skattereduktion - givare</th></tr>
<tr><td colspan="2">Skriver ut lista på inbetalningar som grund till skattereduktion.</td></tr><tr><td>Givare#:</td><td><input name="id" value="<?
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
    $id = $_REQUEST['id'];
    $year = $_REQUEST['year'];    $query=" SELECT
 Payment.GiverId as GiverID
 ,Payment.Date as PaymentDate
 ,SUM(Payment.InKrTotal) as giftsOver200

FROM
 Payment
Where
 Payment.GiverId = $id
 AND Payment.ProjectId IN(1,2,6,8,9,10,13,19,21,22,28,29,30,31,34,35,36,37,39,40,42,44,45,100,224,228,260,400,401,403,404,408,409,412,419,423,426,428,429,434,436,440,441,445,447,456,615,616,617,618)
 AND strftime('%Y',Payment.Date) = '".htmlentities($_REQUEST['year'])."'
 Group by Payment.Date
 Having giftsOver200 > 199
 Order by Payment.Date ASC";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["giftsOver200"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["giftsOver200"] = "<b>".$tot."</b>";$row["PaymentDate"] = "<b>Summa</b>";
    $data[] = $row;
    
    $pdf->doHeader("Utskrift ".date("Y-m-d")."",10,'left');
    $pdf->doHeader("<b>Trosgnistan</b>",10,'right');
    $pdf->ezTable(
        $data
        //columns
	    ,array('PaymentDate'=>'<b>Datum</b>'  
                ,'giftsOver200'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>Skatteredution $year f&ouml;r givare $id</b>")
        //options

	    ,array('NewPageCallback' => 'NewPageCallback'
			,'cols'=>array(
                
			)
            ,'maxWidth'=>$pdf->ez['pageWidth']-20
            ,'showHeadings'=>1
            ,'shaded'=>1
            ,'showLines'=>1
		,'fontSize' => '12')
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
