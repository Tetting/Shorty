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
<tr><th colspan="2">Projektrapport Bokföring</th></tr>
<tr><td colspan="2">Skriver ut projektrapport baserat på bokföring.</td></tr><tr><td>Bokförings#:</td><td><input name="id" value="<?
if(isset($_REQUEST['id'])) {
    print $_REQUEST['id'];
} else {
    print '3010 004 - Team 1000';
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
    $id = $_REQUEST['id'];
    $query = "select FinanceCode from Project where FinanceCode = '".$_REQUEST['id']."'";
    $result = $db->Query($query);
    $row = $db->GetRow($result);
    $proName = $row['Project'];    $pdf->ezText("<b>Bokf&ouml;ringstrapport f&ouml;r $id</b>",14);
    $pdf->ezSetDy(-5);
    $query = "select ROUND(SUM(Payment.InKr - Payment.OutKr),0) as Saldo from Payment JOIN Project ON Payment.ProjectId = Project.Id where Project.FinanceCode = '".$_REQUEST['id']."'";
    $result = $db->Query($query);
    $row = $db->GetRow($result);
    $totSum = $row['Saldo'];    $pdf->ezText("<b>Saldo: $totSum</b>");
    $pdf->ezSetDy(-10);
    $query="Select
    Id
    ,Project
From
    Project
Where 
    FinanceCode = '$id'";

    $result = $db->Query($query);
    $data = array();
    while($row = $db->GetRow($result)) {
        $data[] = $row;
    }
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('Id'=>'#'  
                ,'Project'=>'Projekt'  
                
        )
	    ,html_entity_decode("<b>Projekt som ing&aring;r</b>")
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
    $pdf->ezSetDy(-10);
    $query="Select
    Project.Id
    ,Project.Project
    ,Project.FinanceCode
    ,ROUND(SUM(Payment.InKr),0) as insum
    ,ROUND(SUM(Payment.OutKr),0) as utsum
    ,ROUND(SUM(Payment.AdminCharge),0) as admsum
    ,strftime('%Y-%m', Payment.Date) as monthyear
FROM
    Project JOIN Payment ON Project.Id = Payment.ProjectId
Where
    Project.FinanceCode = '$id'
    AND strftime('%Y',Payment.Date) = strftime('%Y','now','-1 year')
Group By strftime('%Y-%m', Payment.Date)
Order By strftime('%Y-%m', Payment.Date)";

    $result = $db->Query($query);
    $data = array();$tot = 0;$utsum = 0;$admsum = 0;
    while($row = $db->GetRow($result)) {$tot += $row["insum"];$utsum += $row["utsum"];$admsum += $row["admsum"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["insum"] = "<b>".$tot."</b>";$row["utsum"] = "<b>".$utsum."</b>";$row["admsum"] = "<b>".$admsum."</b>";$row["monthyear"] = "<b>Total</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('monthyear'=>'<b>M&aring;nad</b>'  
                ,'insum'=>'<b>InKr</b>'  
                ,'utsum'=>'<b>UtKr</b>'  
                
        )
	    ,html_entity_decode("<b>Inbetalt f&ouml;rra &aring;ret</b>")
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
    $pdf->ezSetDy(-10);
    $query="Select
    Project.Id
    ,Project.Project
    ,Project.FinanceCode
    ,ROUND(SUM(Payment.InKr),0) as insum
    ,ROUND(SUM(Payment.OutKr),0) as utsum
    ,ROUND(SUM(Payment.AdminCharge),0) as admsum
    ,strftime('%Y-%m', Payment.Date) as monthyear
FROM
    Project JOIN Payment ON Project.Id = Payment.ProjectId
Where
    Project.FinanceCode = '$id'
    AND strftime('%Y',Payment.Date) = strftime('%Y','now')
Group By strftime('%Y-%m', Payment.Date)
Order By strftime('%Y-%m', Payment.Date)";

    $result = $db->Query($query);
    $data = array();$tot = 0;$utsum = 0;$admsum = 0;
    while($row = $db->GetRow($result)) {$tot += $row["insum"];$utsum += $row["utsum"];$admsum += $row["admsum"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["insum"] = "<b>".$tot."</b>";$row["utsum"] = "<b>".$utsum."</b>";$row["admsum"] = "<b>".$admsum."</b>";$row["monthyear"] = "<b>Total</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('monthyear'=>'<b>M&aring;nad</b>'  
                ,'insum'=>'<b>InKr</b>'  
                ,'utsum'=>'<b>UtKr</b>'  
                
        )
	    ,html_entity_decode("<b>Inbetalt detta &aring;r</b>")
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
    $pdf->ezSetDy(-10);
    $query="Select
    Project.Id
    ,Project.Project
    ,Project.FinanceCode
    ,ROUND(SUM(Payment.InKr),0) as insum
    ,ROUND(SUM(Payment.OutKr),0) as utsum
    ,ROUND(SUM(Payment.AdminCharge),0) as admsum
    ,strftime('%Y', Payment.Date) as year
FROM
    Project JOIN Payment ON Project.Id = Payment.ProjectId
Where
    Project.FinanceCode = '$id'
    AND strftime('%Y',Payment.Date) !='2012'
Group By strftime('%Y', Payment.Date)
Order By strftime('%Y', Payment.Date)";

    $result = $db->Query($query);
    $data = array();$tot = 0;$utsum = 0;
    while($row = $db->GetRow($result)) {$tot += $row["insum"];$utsum += $row["utsum"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["insum"] = "<b>".$tot."</b>";$row["utsum"] = "<b>".$utsum."</b>";$row["year"] = "<b>Summa</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('year'=>'<b>&Aring;r</b>'  
                ,'insum'=>'<b>InKr</b>'  
                ,'utsum'=>'<b>UtKr</b>'  
                
        )
	    ,html_entity_decode("<b>Inbetalt / &aring;r</b>")
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
    $pdf->ezSetDy(-10);
    $query="Select
    SUM(GivProj.KrMon) as insum
    ,Count(GivProj.KrMon) as antal
FROM
    Project JOIN GivProj ON Project.Id = GivProj.ProjectId
Where
    Project.FinanceCode = '$id'
    AND GivProj.KrMon > 0
    AND GivProj.KrMon is not null
    AND GivProj.KrMon != ''
    AND (GivProj.Status is null OR GivProj.Status != 'Inaktiv')
Group By Project.FinanceCode";

    $result = $db->Query($query);
    $data = array();
    while($row = $db->GetRow($result)) {
        $data[] = $row;
    }
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('antal'=>'<b>Antal</b>'  
                ,'insum'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>M&aring;natliga &aring;taganden</b>")
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
