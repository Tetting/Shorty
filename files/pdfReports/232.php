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
<tr><th colspan="2">Barnlista - sen rapport SW</th></tr>
<tr><td colspan="2">Lista på barn som inte skickat rapport de senaste 18 eller 12 månaderna baserat på social arbetare.<br />OBS endast barn som haft fadder i ett år.</td></tr><tr><td>Socialarbetar#:</td><td><input name="swid" value="<?
if(isset($_REQUEST['swid'])) {
    print $_REQUEST['swid'];
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
  $swid = $_REQUEST['swid'];
}
    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
/* temporary fix for now, update the reports for children manually.*/
$query = "
select fadderbarn.id as id from Fadderbarn join socialworkarea on fadderbarn.area1 = socialworkarea.area1 where socialworkarea.socialworkerid = '".$_REQUEST['swid']."'
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
    $area = $_REQUEST['swid'];
    $query = "select * from SocialWorker where Id = '".$_REQUEST['swid']."'";
    $result = $db->Query($query);
    $row = $db->GetRow($result);
    $SWName = $row['Name'];
    $query="Select 
    Fadderbarn.Nbr
    ,Fadderbarn.Name
    ,Fadderbarn.Area1
    ,round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25)) as 'publicKr'
    ,Fadderbarn.GiverId
    ,Fadderbarn.HelpD
    ,Fadderbarn.RepThis as RepThis
    ,Fadderbarn.RepLast as RepLast
From 
    Fadderbarn JOIN SocialWorkArea ON Fadderbarn.Area1 = SocialWorkArea.Area1
Where 
    SocialWorkArea.SocialWorkerId = '".$_REQUEST['swid']."'
    AND (Fadderbarn.RepThis < date('now','-18 months') OR Fadderbarn.RepThis is null)
    AND Fadderbarn.HelpD < date('now','-18 months')
    AND Fadderbarn.GiverId != '-33333'
    AND Fadderbarn.GiverId != '-44444'
    AND Fadderbarn.GiverId != '-55555'
    AND Fadderbarn.GiverId != '0'
    AND (Fadderbarn.Status is null OR Fadderbarn.Status != 'Inaktiv')
    Order by Fadderbarn.Area1,RepThis ASC";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["Fadderbarn.Name"] = "<b>Withheld amount</b>";
    $data[] = $row;
    
    $pdf->ezText("<b>Late report list for social worker $SWName</b>",14);
    $pdf->ezText("<i>List with children that haven't sent report in more than 18 months.
Support is withheld until we get report.</i>",12);
    $pdf->ezSetDy(-10);
    $pdf->ezTable(
        $data
        //columns
	    ,array('Fadderbarn.Nbr'=>'<b>Child#</b>'  
                ,'Fadderbarn.Name'=>'<b>Name of Child</b>'  
                ,'Fadderbarn.GiverId'=>'<b>Sponsor</b>'  
                ,'publicKr'=>'<b>SEK/month</b>'  
                ,'Fadderbarn.Area1'=>'<b>Area</b>'  
                ,'RepThis'=>'<b>Last report</b>'  
                ,'Fadderbarn.HelpD'=>'<b>Support started</b>'  
                
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
    $pdf->ezSetDy(-20);
    $query="Select 
    Fadderbarn.Nbr
    ,Fadderbarn.Name
    ,Fadderbarn.Area1
    ,round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25)) as 'publicKr'
    ,Fadderbarn.GiverId
    ,Fadderbarn.HelpD
    ,Fadderbarn.RepThis as RepThis
    ,Fadderbarn.RepLast as RepLast
From 
    Fadderbarn JOIN SocialWorkArea ON Fadderbarn.Area1 = SocialWorkArea.Area1
Where 
    SocialWorkArea.SocialWorkerId = '".$_REQUEST['swid']."'
    AND ((Fadderbarn.RepThis < date('now','-1 years')
    AND Fadderbarn.RepThis > date('now','-18 months')) OR Fadderbarn.RepThis is null) 
    AND Fadderbarn.HelpD < date('now','-1 years')
    AND Fadderbarn.GiverId != '-33333'
    AND Fadderbarn.GiverId != '-44444'
    AND Fadderbarn.GiverId != '-55555'
    AND Fadderbarn.GiverId != '0'
    AND (Fadderbarn.Status is null OR Fadderbarn.Status != 'Inaktiv')
 Order by Fadderbarn.Area1,RepThis ASC";

    $result = $db->Query($query);
    $data = array();
    while($row = $db->GetRow($result)) {
        $data[] = $row;
    }
    
    $pdf->ezText("<i>List with children that haven't sent report in a year.</i>",12);
    $pdf->ezSetDy();
    $pdf->ezTable(
        $data
        //columns
	    ,array('Fadderbarn.Nbr'=>'<b>Child#</b>'  
                ,'Fadderbarn.Name'=>'<b>Name of Child</b>'  
                ,'Fadderbarn.GiverId'=>'<b>Sponsor</b>'  
                ,'publicKr'=>'<b>SEK/month</b>'  
                ,'Fadderbarn.Area1'=>'<b>Area</b>'  
                ,'RepThis'=>'<b>Last report</b>'  
                ,'Fadderbarn.HelpD'=>'<b>Support started</b>'  
                
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
function pageNoFooter($pdf,$pageno,$pages) {
    $text = "Sida $pageno of $pages";
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
