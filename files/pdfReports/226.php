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
    $db = easyDB('');
/* temporary fix for now, update the reports for evangelists manually.*/
$query = "
select id from Evangelist where Area1 = '".$_REQUEST['area']."'
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
    //find area name from area1....
    $area = $_REQUEST['area'];
    $query = "select * from SocialWorkArea where Area1 = '".$_REQUEST['area']."'";
    $result = $db->Query($query);
    $row = $db->GetRow($result);
    $areaName = $row['Area'];
    $query="Select 
    *
    ,round(Evangelist.Mkr - ((Evangelist.Mkr/100)*25)) as 'publicKr'
From 
    Evangelist
    ,Giver 
Where 
    Evangelist.GiverId = Giver.Id
    And Evangelist.Area1 !=''
    And Evangelist.Area1 != 21
	Order by Evangelist.Name ASC";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["Fadderbarn.Name"] = "Total";
    $data[] = $row;
    
while($row) {    $pdf->ezText("");
    $pdf->ezSetDy(10);
    $pdf->ezText("<b>Evangelist list - $area $areaName</b>",14);
    $pdf->ezTable(
        $data
        //columns
	    ,array('Evangelist.Id'=>'<b>Evangelist#</b>'  
                ,'Evangelist.Name'=>'<b>Name of Evangelist</b>'  
                ,'Giver.Id'=>'<b>Sponsor</b>'  
                ,'publicKr'=>'<b>SEK/month</b>'  
                ,'Evangelist.Tags'=>'<b>Last report</b>'  
                ,'Evangelist.Area1'=>'<b>Area#</b>'  
                ,'Evangelist.Area'=>'<b>Area</b>'  
                
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
    $pdf->ezText("The following sponsor numbers is hereby explained:
-333333 = Waiting for sponsor, -44444 = Lost sponsor -  send new photo, -55555 = Lost sponsor - we have photo.",9);
    $pdf->ezSetDy(-7);
    $pdf->ezSetDy(-5);
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
    $row = $db->GetRow($result);
    if ($row) {
        $page = new Zend_Pdf_Page($templatePage);
        $pdf->pages[] = $page;
        $page->setFont(Zend_Pdf_Font::fontWithName(Zend_Pdf_Font::FONT_HELVETICA), 12);
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
