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
<tr><th colspan="2">Barnlistor</th></tr>
<tr><td>Område:</td><td><input name="area" value="<?
if(isset($_REQUEST['area'])) {
    print $_REQUEST['area'];
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
 $area = $_REQUEST['area'];
}
    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('swe+nor');
/* temporary fix for now, update the reports for children manually.*/
$query = "
select id from Fadderbarn where Area1 = '".$_REQUEST['area']."'
";
$result = $db->Query($query);
    while($row = $db->GetRow($result)) {
        $id = $row['id'];
        $up = $db->Query("UPDATE Fadderbarn SET RepThis = (
        SELECT date from action WHERE 
        entityId=$id
        AND action.entityName ='Fadderbarn'
        AND action.actionName in ('Ny rapport','Utskrift Barnrapport - med foto','Utskrift Barnrapport - ej foto','Utskrift Barnrapport - kollektiv','Utskrift Barnrapport + foto')
        order by date desc
        limit 0,1
        )
        WHERE Fadderbarn.Id = $id");
        $up2 = $db->Query("UPDATE Fadderbarn SET RepLast = (
        SELECT date from action WHERE 
        entityId=$id
        AND action.entityName ='Fadderbarn'
        AND action.actionName in ('Ny rapport','Utskrift Barnrapport - med foto','Utskrift Barnrapport - ej foto','Utskrift Barnrapport - kollektiv','Utskrift Barnrapport + foto')
        order by date desc
        limit 1,1
        )
        WHERE Fadderbarn.Id = $id");
    }

    //find area name from area1....
    $area = $_REQUEST['area'];
    $query = "select * from SocialWorkArea where Area1 = '".$_REQUEST['area']."'";
    $result = $db->Query($query);
    $row = $db->GetRow($result);
    $areaName = $row['Area'];
    $query="Select 
    Fadderbarn.Nbr
    ,Fadderbarn.Name
    ,Giver.Id
    ,round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25)) as 'publicKr'
    ,Fadderbarn.RepThis as RepThis
    ,Fadderbarn.RepLast as RepLast
From 
    Fadderbarn
    , Giver 
Where 
    Fadderbarn.GiverId = Giver.Id
	and Fadderbarn.Area1 = '".$_REQUEST['area']."'
    AND (Fadderbarn.Status is null OR Fadderbarn.Status != 'Inaktiv')
    
	Order by Fadderbarn.Name ASC";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["Fadderbarn.Name"] = "Total";
    $data[] = $row;
    
    $pdf->ezText("");
    $pdf->ezSetDy(10);
    $pdf->ezText("<b>Children list - $area $areaName</b>",14);
    $pdf->ezTable(
        $data
        //columns
	    ,array('Fadderbarn.Nbr'=>'<b>Child#</b>'  
                ,'Fadderbarn.Name'=>'<b>Name of Child</b>'  
                ,'Giver.Id'=>'<b>Sponsor</b>'  
                ,'publicKr'=>'<b>SEK/month</b>'  
                ,'RepThis'=>'<b>Last report</b>'  
                ,'RepLast'=>'<b>Previous report</b>'  
                
        )
	    ,html_entity_decode("")
        //options

	    ,array('NewPageCallback' => 'NewPageCallback'
			,'cols'=>array(
                
			)
            ,'maxWidth'=>$pdf->ez['pageWidth']-20
            ,'showHeadings'=>1
            ,'shaded'=>0
            ,'showLines'=>0
		,'showLines' => '0'		,'fontSize' => '9')
    );
    $pdf->ezSetDy(-15);
    $count = count($data)-1;//1 for totals row.
    //$pdf->ezText("No.: <b>$count    	 Total amount for this area in Swedish currency  $tot sek");
    $pdf->ezText("No.: $count           <b>Total amount for this area in Swedish currency      $tot sek</b>",9);
    $pdf->ezSetDy(-10);
    $pdf->ezText("<b>10% is allowed to be kept by the sister organization for administration and various expenses such as traveling costs for the social worker, extra help to needy children or children with less support. 90% of the support MUST reach the sponsored child according to the instructions in the Family Care Policy that you have signed and agreed to follow.</b>",9);
    $pdf->ezSetDy(-7);
    $pdf->ezText("On the right side of each line there is a date indicating when we got the last report from the child. According to the family care policy each child must send a report at least once a year. It is the responsiblity of the social worker to see that this is done. The support to the children not writing reports on time can be stopped without warning or explanation. If there is anything wrong with this list please contact us immediately.
",9);
    $pdf->ezSetDy(-5);
    $pdf->ezText("The following sponsor numbers is hereby explained:
-333333 = Waiting for sponsor, -44444 = Lost sponsor -  send new photo, -55555 = Lost sponsor - we have photo.",9);
function pageNoFooter($pdf,$pageno,$pages) {
    $text = "Page $pageno of $pages";
    $x = ($pdf->ez['pageWidth'] / 2)-strlen($text);

    $y = $pdf->ez['bottomMargin']-15;

    $pdf->addText(($pdf->ez['pageWidth'] / 2)-strlen($text),  $y, 10, $text);
        
}
$pdf->siHeadersAndFooters(array('AllPages'=>'pageNoFooter'));    $pdf->doHeader("".date("Y-m-d")."",10,'left');
    $pdf->doHeader("<b>Trosgnistan</b>",10,'right');
    $pdf->doFooter("".date("Y-m-d")."",10,'left');
    $pdf->doFooter("<b>Trosgnistan</b>",10,'right');

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
