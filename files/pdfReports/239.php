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
<tr><td colspan="2">Skriver ut alla barn från ett land</td></tr>
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
 }
    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
/* temporary fix for now, update the reports for evangelists manually.*/
$query = "
select id from Evangelist 
";
$result = $db->Query($query);
    while($row = $db->GetRow($result)) {
        $id = $row['id'];
        $up = $db->Query("UPDATE Evangelist SET Tags = (
        SELECT date from action WHERE 
        entityId=$id
        AND action.entityName ='Evangelist'
        AND action.actionName in ('Ny rapport','Utskrift Evangelistrapport')
        order by date desc
        limit 0,1
        )
        WHERE Evangelist.Id = $id");
        $up2 = $db->Query("UPDATE Evangelist SET RepLast = (
        SELECT date from action WHERE 
        entityId=$id
        AND action.entityName ='Evangelist'
        AND action.actionName in ('Ny rapport','Utskrift Barnrapport - med foto','Utskrift Barnrapport - ej foto','Utskrift Barnrapport - kollektiv','Utskrift Barnrapport + foto')
        order by date desc
        limit 1,1
        )
        WHERE Evangelist.Id = $id");
    }
    $query="Select 
    *
    ,round(Evangelist.Mkr - ((Evangelist.Mkr/100)*25)) as 'publicKr'
From 
    Evangelist
    ,Giver 
Where 
    Evangelist.GiverId = Giver.Id
    AND Evangelist.CountryCode != ''
    AND Evangelist.Area1 != ''
	Order by Evangelist.Name ASC";

    $result = $db->Query($query);
    $data = array();
    while($row = $db->GetRow($result)) {
        $data[] = $row;
    }
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('Evangelist.Id'=>''  
                ,'Evangelist.Name'=>''  
                ,'Giver.Id'=>'<b>Sponsor</b>'  
                ,'publicKr'=>'<b>SEK/month</b>'  
                ,'Evangelist.Tags'=>'<b>Last report</b>'  
                ,'Evangelist.Area1'=>''  
                ,'Evangelist.Area'=>'<b>Area#</b>'  
                
        )
	    ,html_entity_decode("")
        //options

	    ,array('NewPageCallback' => 'NewPageCallback'
			,'cols'=>array(
                
			)
            ,'maxWidth'=>$pdf->ez['pageWidth']-20
            ,'showHeadings'=>0
            ,'shaded'=>1
            ,'showLines'=>1
		,'showHeadings' => '0'		,'showLines' => '1'		,'fontSize' => '9')
    );

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
