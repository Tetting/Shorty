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
<tr><td colspan="2">Fyller i händelse för barn på dagens datum. Ange barnnummer, vad som hänt och ev noteringar.</td></tr><tr><td>Barn#:</td><td><input name="id" value="<?
if(isset($_REQUEST['id'])) {
    print $_REQUEST['id'];
} else {
    print '';
}
?>"/></td></tr>
<tr><td>Handling:</td><td><input name="a" value="<?
if(isset($_REQUEST['a'])) {
    print $_REQUEST['a'];
} else {
    print '';
}
?>"/></td></tr>
<tr><td>Noteringar:</td><td><textarea rows="10" cols="50" name="n"><?
if(isset($_REQUEST['n'])) {
    print $_REQUEST['n'];
} else {
    print '';
}
?></textarea></td></tr>

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
 $a = $_REQUEST['a'];
 $n = utf8_encode($_REQUEST['n']);
}
if (isset($_REQUEST['a'])) {
    $a = utf8_encode(str_replace("".PHP_EOL,PHP_EOL,$_REQUEST['a']));
    if ($a == "Test123") {
        $a="Skriv egen text här";   
    }
}
    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    $pdf->ezText("<b>Du har nu lagt till f&ouml;ljande h&auml;ndelse</b>",14);
    $pdf->ezSetDy(-10);
    $pdf->ezText("Barn nummer $id har $a

Följande noteringar har gjorts:
$n",12);
/* temporary fix for now, update the reports for children manually.*/
$query = "
select id from Fadderbarn where nbr = '".$_REQUEST['id']."'
";

$result = $db->Query($query);
    while($row = $db->GetRow($result)) {
        $id = $row['id'];
        $db->Insert(array(
    'table'=>'action',
    'fields'=>array(
        'actionName'=>$_REQUEST['a']
        ,'entityName'=>'Fadderbarn'
        ,'entityId'=>$row['id']
        ,'date'=>date('Y-m-d', time())
        ,'notes'=>$_REQUEST['n']
    )
));

}    $query="//
select *
From action
where actionName = 'test234'";

    $result = $db->Query($query);
    $data = array();
    while($row = $db->GetRow($result)) {
        $data[] = $row;
    }
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('entityId'=>''  
                ,'actionName'=>''  
                ,'id'=>''  
                
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
		,'showLines' => '0')
    );
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
