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
    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    $query="SELECT
    SocialWorkArea.*
    ,SocialWorker.*
FROM
    SocialWorkArea
    ,SocialWorker
WHERE
    SocialWorkArea.SocialWorkerId = SocialWorker.Id
    
ORDER BY Area1 Asc";

    $result = $db->Query($query);
    $data = array();
    while($row = $db->GetRow($result)) {
        $data[] = $row;
    }
    
    $convert = array(
         'I'=>'Indien'
        ,'T'=>'Tanzania'
        ,'Q'=>'Filippinerna'
        ,'V'=>'Ukraina'
        ,'B'=>'Burundi'
        ,'K'=>'Kongo'
        ,'U'=>'Uganda'
        ,'NE'=>'Nepal'
        ,'X'=>'Ecuador'
        ,'R'=>'Rwanda'
        ,'O'=>'Kenya'
        ,'M'=>'Myanmar (Burma)'
    );
    if (isset($convert[$row['SocialWorkArea.CountryCode']])) {
        $row['SocialWorkArea.CountryName'] = $convert[$row['SocialWorkArea.CountryCode']];
    }    $pdf->ezTable(
        $data
        //columns
	    ,array('SocialWorkArea.Area1'=>'#'  
                ,'SocialWorkArea.Area'=>'Omr&aring;de'  
                ,'SocialWorker.Land'=>'Land'  
                ,'SocialWorker.Name'=>'Socialarbetare'  
                
        )
	    ,html_entity_decode("Omr&aring;den")
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

if (isset($_REQUEST['action']) && $_REQUEST['action']=='runReport') {
?>
<form target="ReportView" action="do/task.php" method="post">
<input type="hidden" name="_report" value="<?=$_REQUEST['_report']?>"/>
<input type="hidden" name="action" value="viewReport"/>
<input type="hidden" name="random" value="<?=rand();?>"/>

<table class="EditTable reportParams">
<tr><th colspan="2">Områdeslista</th></tr>
<tr><td colspan="2">Skriver ut en områdes lista.</td></tr>
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
