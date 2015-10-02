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
<tr><th colspan="2">Bokföring - sammanställning</th></tr>
<tr><td colspan="2">OBS fungerar ej ännu!!!</td></tr><tr><td>Datum:</td><td><input name="id" value="<?
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
    //process parameters.
    $id = $_REQUEST['id'];    $result = $db->Query($query);
    $row = $db->GetRow($result);
    
        $convert = array(
         'postgiro'=>'PlusGiro'
        ,'bankgiro'=>'BankGiro'
        ,'OCRImport'=>'OCR'
    );
    if (isset($convert[$row['PaymentSource']])) {
        $row['Test'] = $convert[$row['PaymentSource']];
    };
    $query="Select
    Payment.*
    ,ROUND(SUM(InKrTotal),2) as totsum
FROM
    Payment
Where
    Date = '$id'
    AND ProjectId != '57'
Group By PaymentSource";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["totsum"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["totsum"] = "<b>".$tot."</b>";$row["PaymentTest"] = "<b>Total</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('Test'=>'<b>Typ</b>'  
                ,'totsum'=>'<b>Summa</b>'  
                ,''=>'<b>Anteckning</b>                       '  
                
        )
	    ,html_entity_decode("<b>Sammanst&auml;llning - bokf&ouml;ringsdatum $id</b>")
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
    $pdf->ezSetY(670);
    $query="Select
    Payment.*
    ,ROUND(SUM(Payment.InKr),2) as booksum
    ,Project.Project
    ,Project.FinanceCode
FROM
    Payment JOIN Project ON Payment.ProjectId = Project.Id
Where
    Payment.Date = '$id'
Group By Project.FinanceCode
Order By Project.FinanceCode";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["booksum"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["booksum"] = "<b>".$tot."</b>";$row["Project.FinanceCode"] = "<b>Totalt</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('Project.FinanceCode'=>'<b>Bokf&ouml;rings#</b>'  
                ,'booksum'=>'<b>Summa</b>'  
                ,''=>'<b>Anteckning</b>                      '  
                
        )
	    ,html_entity_decode("")
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
