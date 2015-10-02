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
<tr><th colspan="2">Betalningskontroll</th></tr>
<tr><td colspan="2">Ger en lista på alla inbetalningar för angiven typ och dag.<br/><br />
<em>Typ kan vara autogiro, postgiro, bankgiro eller diverse.<br/>(OBS endast små bokstäver)</em></td></tr><tr><td>Typ:</td><td><input name="PaymentSource" value="<?
if(isset($_REQUEST['PaymentSource'])) {
    print $_REQUEST['PaymentSource'];
} else {
    print '';
}
?>"/></td></tr>
<tr><td>Datum:</td><td><input name="Date" value="<?
if(isset($_REQUEST['Date'])) {
    print $_REQUEST['Date'];
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
  $PaymentSource = $_REQUEST['PaymentSource'];
 $Date = $_REQUEST['Date'];
}
    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    $query="Select 
    Payment.*
    ,Project.Project as 'ProjectName'
    ,ifnull(Giver.Name,'')||ifnull(' '||Giver.LastName,'') as 'Giver.FullName'
From
    Payment LEFT JOIN Project On Payment.ProjectId = Project.Id 
    LEFT JOIN Giver On Payment.GiverId = Giver.Id 
Where 
    Payment.PaymentSource='".htmlentities($_REQUEST['PaymentSource'])."'
    AND Payment.PaymentSource='".htmlentities($_REQUEST['PaymentSource'])."'
    AND Payment.Date='".htmlentities($_REQUEST['Date'])."'
    Order by Payment.GiverId ASC";

    $result = $db->Query($query);
    $data = array();$sum = 0;
    while($row = $db->GetRow($result)) {$sum += $row["Payment.InKrTotal"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["Payment.InKrTotal"] = "<b>".$sum."</b>";$row["Payment.ProjectId"] = "Total";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('Payment.GiverId'=>'Givare#'  
                ,'Giver.FullName'=>'Namn'  
                ,'Payment.ProjectId'=>'Projekt#'  
                ,'Payment.InKrTotal'=>'Summa'  
                
        )
	    ,html_entity_decode("".$_REQUEST["PaymentSource"]." betalningar ".$_REQUEST["Date"]."")
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
    $pdf->doHeader("Utskrift ".date("Y-m-d")."",10,'left');
    $pdf->doHeader("<b>Trosgnistan</b>",10,'right');
    $pdf->doFooter("Utskrift ".date("Y-m-d")."",10,'left');
function pageNoFooter($pdf,$pageno,$pages) {
    $text = "Sida $pageno av $pages";
    $x = ($pdf->ez['pageWidth'] / 2)-strlen($text);

    $y = $pdf->ez['bottomMargin']-15;

    $pdf->addText(($pdf->ez['pageWidth'] / 2)-strlen($text),  $y, 10, $text);
        
}
$pdf->siHeadersAndFooters(array('AllPages'=>'pageNoFooter'));    $pdf->doFooter("<b>Trosgnistan</b>",10,'right');
function pageNo($pdf,$pageno,$pages) {
    $text = "Sida $pageno av $pages";
    $x = ($pdf->ez['pageWidth'] / 2)-strlen($text);

    $y = $pdf->ez['bottomMargin']-15;

    $pdf->addText(($pdf->ez['pageWidth'] / 2)-strlen($text),  $y, 10, $text);
        
}
$pdf->siHeadersAndFooters(array('AllPages'=>'pageNo'));
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
