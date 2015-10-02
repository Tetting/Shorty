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
<tr><th colspan="2">Utskickslista (övriga världen)</th></tr>

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
    $db = easyDB('swe+nor');
    $query="SELECT
    SocialWorkArea.*
    ,SUM(round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25))) as 'publicKr'
FROM
    SocialWorkArea Join Fadderbarn On SocialWorkArea.Area1 = Fadderbarn.Area1
WHERE
    SocialWorkArea.Area1 IN(01,02,03,04,'05A','05B','05C',06,07,08,09,10,11,12,13,14,'15A','15B','15C','15D','15E','15F','15G','15H')
    AND (Fadderbarn.Status is null or Fadderbarn.Status != 'Inaktiv')
Group by SocialWorkArea.Area1
Order by SocialWorkArea.Area1";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["SocialWorkArea.Area"] = "<b>Totalt</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('SocialWorkArea.Area1'=>'<b>#</b>'  
                ,'SocialWorkArea.Area'=>'<b>Omr&aring;de</b>'  
                ,'publicKr'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>IPA</b>")
        //options

	    ,array('NewPageCallback' => 'NewPageCallback'
			,'cols'=>array(
                
			)
            ,'maxWidth'=>$pdf->ez['pageWidth']-20
            ,'showHeadings'=>1
            ,'shaded'=>1
            ,'showLines'=>1
		,'showHeadings' => '1'		,'fontSize' => '12')
    );
    $pdf->ezSetDy(-10);
    $query="SELECT
    SocialWorkArea.*
    ,SUM(round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25))) as 'publicKr'
FROM
    SocialWorkArea Join Fadderbarn On SocialWorkArea.Area1 = Fadderbarn.Area1
WHERE
    SocialWorkArea.Area1 IN(16,17,18,19,20,21,22,23,24,25)
    AND (Fadderbarn.Status is null or Fadderbarn.Status != 'Inaktiv')
Group by SocialWorkArea.Area1
Order by SocialWorkArea.Area1";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["SocialWorkArea.Area"] = "<b>Totalt</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('SocialWorkArea.Area1'=>'<b>#</b>'  
                ,'SocialWorkArea.Area'=>'<b>Omr&aring;de</b>'  
                ,'publicKr'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>BFT</b>")
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
    $query="SELECT
    SocialWorkArea.*
    ,SUM(round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25))) as 'publicKr'
FROM
    SocialWorkArea Join Fadderbarn On SocialWorkArea.Area1 = Fadderbarn.Area1
WHERE
    SocialWorkArea.Area1 IN(27)
    AND (Fadderbarn.Status is null or Fadderbarn.Status != 'Inaktiv')
Group by SocialWorkArea.Area1
Order by SocialWorkArea.Area1";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["SocialWorkArea.Area"] = "<b>Totalt</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('SocialWorkArea.Area1'=>'<b>#</b>'  
                ,'SocialWorkArea.Area'=>'<b>Omr&aring;de</b>'  
                ,'publicKr'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>Hope India</b>")
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
    $query="SELECT
    SocialWorkArea.*
    ,SUM(round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25))) as 'publicKr'
FROM
    SocialWorkArea Join Fadderbarn On SocialWorkArea.Area1 = Fadderbarn.Area1
WHERE
    SocialWorkArea.CountryCode = 'T'
    AND (Fadderbarn.Status is null or Fadderbarn.Status != 'Inaktiv')
Group by SocialWorkArea.Area1
Order by SocialWorkArea.Area1";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["SocialWorkArea.Area"] = "<b>Totalt</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('SocialWorkArea.Area1'=>'<b>#</b>'  
                ,'SocialWorkArea.Area'=>'<b>Omr&aring;de</b>'  
                ,'publicKr'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>Tanzania</b>")
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
    $query="SELECT
    SocialWorkArea.*
    ,SUM(round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25))) as 'publicKr'
FROM
    SocialWorkArea Join Fadderbarn On SocialWorkArea.Area1 = Fadderbarn.Area1
WHERE
    SocialWorkArea.CountryCode = 'Q'
    AND (Fadderbarn.Status is null or Fadderbarn.Status != 'Inaktiv')
Group by SocialWorkArea.Area1
Order by SocialWorkArea.Area1";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["SocialWorkArea.Area"] = "<b>Totalt</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('SocialWorkArea.Area1'=>'<b>#</b>'  
                ,'SocialWorkArea.Area'=>'<b>Omr&aring;de</b>'  
                ,'publicKr'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>Filippinerna</b>")
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
    $query="SELECT
    SocialWorkArea.*
    ,SUM(round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25))) as 'publicKr'
FROM
    SocialWorkArea Join Fadderbarn On SocialWorkArea.Area1 = Fadderbarn.Area1
WHERE
    SocialWorkArea.CountryCode = 'M'
    AND (Fadderbarn.Status is null or Fadderbarn.Status != 'Inaktiv')
Group by SocialWorkArea.Area1
Order by SocialWorkArea.Area1";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["SocialWorkArea.Area"] = "<b>Totalt</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('SocialWorkArea.Area1'=>'<b>#</b>'  
                ,'SocialWorkArea.Area'=>'<b>Omr&aring;de</b>'  
                ,'publicKr'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>Myanmar</b>")
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
    $query="SELECT
    SocialWorkArea.*
    ,SUM(round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25))) as 'publicKr'
FROM
    SocialWorkArea Join Fadderbarn On SocialWorkArea.Area1 = Fadderbarn.Area1
WHERE
    SocialWorkArea.CountryCode = 'V'
    AND (Fadderbarn.Status is null or Fadderbarn.Status != 'Inaktiv')
Group by SocialWorkArea.Area1
Order by SocialWorkArea.Area1";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["SocialWorkArea.Area"] = "<b>Totalt</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('SocialWorkArea.Area1'=>'<b>#</b>'  
                ,'SocialWorkArea.Area'=>'<b>Omr&aring;de</b>'  
                ,'publicKr'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>Ukraina</b>")
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
    $query="SELECT
    SocialWorkArea.*
    ,SUM(round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25))) as 'publicKr'
FROM
    SocialWorkArea Join Fadderbarn On SocialWorkArea.Area1 = Fadderbarn.Area1
WHERE
    SocialWorkArea.CountryCode = 'B'
    AND (Fadderbarn.Status is null or Fadderbarn.Status != 'Inaktiv')
Group by SocialWorkArea.Area1
Order by SocialWorkArea.Area1";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["SocialWorkArea.Area"] = "<b>Totalt</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('SocialWorkArea.Area1'=>'<b>#</b>'  
                ,'SocialWorkArea.Area'=>'<b>Omr&aring;de</b>'  
                ,'publicKr'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>Burundi</b>")
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
    $query="SELECT
    SocialWorkArea.*
    ,SUM(round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25))) as 'publicKr'
FROM
    SocialWorkArea Join Fadderbarn On SocialWorkArea.Area1 = Fadderbarn.Area1
WHERE
    SocialWorkArea.CountryCode = 'K'
    AND (Fadderbarn.Status is null or Fadderbarn.Status != 'Inaktiv')
Group by SocialWorkArea.Area1
Order by SocialWorkArea.Area1";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["SocialWorkArea.Area"] = "<b>Totalt</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('SocialWorkArea.Area1'=>'<b>#</b>'  
                ,'SocialWorkArea.Area'=>'<b>Omr&aring;de</b>'  
                ,'publicKr'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>Kongo</b>")
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
    $query="SELECT
    SocialWorkArea.*
    ,SUM(round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25))) as 'publicKr'
FROM
    SocialWorkArea Join Fadderbarn On SocialWorkArea.Area1 = Fadderbarn.Area1
WHERE
    SocialWorkArea.CountryCode = 'U'
    AND (Fadderbarn.Status is null or Fadderbarn.Status != 'Inaktiv')
Group by SocialWorkArea.Area1
Order by SocialWorkArea.Area1";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["SocialWorkArea.Area"] = "<b>Totalt</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('SocialWorkArea.Area1'=>'<b>#</b>'  
                ,'SocialWorkArea.Area'=>'<b>Omr&aring;de</b>'  
                ,'publicKr'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>Uganda</b>")
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
    $query="SELECT
    SocialWorkArea.*
    ,SUM(round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25))) as 'publicKr'
FROM
    SocialWorkArea Join Fadderbarn On SocialWorkArea.Area1 = Fadderbarn.Area1
WHERE
    SocialWorkArea.CountryCode = 'NE'
    AND (Fadderbarn.Status is null or Fadderbarn.Status != 'Inaktiv')
Group by SocialWorkArea.Area1
Order by SocialWorkArea.Area1";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["SocialWorkArea.Area"] = "<b>Totalt</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('SocialWorkArea.Area1'=>'<b>#</b>'  
                ,'SocialWorkArea.Area'=>'<b>Omr&aring;de</b>'  
                ,'publicKr'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>Nepal</b>")
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
    $query="SELECT
    SocialWorkArea.*
    ,SUM(round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25))) as 'publicKr'
FROM
    SocialWorkArea Join Fadderbarn On SocialWorkArea.Area1 = Fadderbarn.Area1
WHERE
    SocialWorkArea.Area1 IN('44A','44B','44C','44D','44E','44F')
    AND (Fadderbarn.Status is null or Fadderbarn.Status != 'Inaktiv')
Group by SocialWorkArea.Area1
Order by SocialWorkArea.Area1";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["SocialWorkArea.Area"] = "<b>Totalt</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('SocialWorkArea.Area1'=>'<b>#</b>'  
                ,'SocialWorkArea.Area'=>'<b>Omr&aring;de</b>'  
                ,'publicKr'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>Ecuador (JA)</b>")
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
    $query="SELECT
    SocialWorkArea.*
    ,SUM(round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25))) as 'publicKr'
FROM
    SocialWorkArea Join Fadderbarn On SocialWorkArea.Area1 = Fadderbarn.Area1
WHERE
    SocialWorkArea.CountryCode = 'R'
    AND (Fadderbarn.Status is null or Fadderbarn.Status != 'Inaktiv')
Group by SocialWorkArea.Area1
Order by SocialWorkArea.Area1";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["SocialWorkArea.Area"] = "<b>Totalt</b>";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('SocialWorkArea.Area1'=>'<b>#</b>'  
                ,'SocialWorkArea.Area'=>'<b>Omr&aring;</b>'  
                ,'publicKr'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>Rwanda</b>")
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
