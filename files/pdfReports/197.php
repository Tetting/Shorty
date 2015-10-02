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
    SocialWorkArea.Area1 IN('47','47A')
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
	    ,html_entity_decode("<b>Mombasa (K29)</b>")
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
    SocialWorkArea.Area1 IN(50)
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
	    ,html_entity_decode("<b>Wundanyi (K30)</b>")
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
    SocialWorkArea.Area1 IN(51)
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
	    ,html_entity_decode("<b>Nakuru (K21)</b>")
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
    SocialWorkArea.Area1 IN('52','52A','52B','52C','52D','52E','52F','52G','52H','53','53A','53B','53C','53D')
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
	    ,html_entity_decode("<b>Nairobi (K28)</b>")
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
    SocialWorkArea.Area1 IN('55A','55B','55C')
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
	    ,html_entity_decode("<b>MCF (K31)</b>")
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
    SocialWorkArea.Area1 IN('57')
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
	    ,html_entity_decode("<b>Eldoret (K26)</b>")
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
    SocialWorkArea.Area1 IN('59','59A','59B')
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
	    ,html_entity_decode("<b>Tiriki / Maragoli (K22)</b>")
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
    SocialWorkArea.Area1 IN('60','60A','60B')
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
	    ,html_entity_decode("<b>Kericho (K20)</b>")
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
    SocialWorkArea.Area1 IN('61','61A')
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
	    ,html_entity_decode("<b>Kitale (K23)</b>")
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
    SocialWorkArea.Area1 IN('62','62A')
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
	    ,html_entity_decode("<b>Lodwar (K27)</b>")
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
    SocialWorkArea.Area1 IN('63','64','65','65A','65B','66','67','68','69','69A','70','70A','71')
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
	    ,html_entity_decode("<b>Kisii (K17)</b>")
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
    SocialWorkArea.Area1 IN('75A','75B','75C','75D','75E','75F','75G','75H','75I','75J','76A','76B','76C','76D','76E','76F','77A','77B')
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
	    ,html_entity_decode("<b>Central Luo (K09)</b>")
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
    SocialWorkArea.Area1 IN('79A','79B','79C','79D','79E')
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
	    ,html_entity_decode("<b>West Luo (K07)</b>")
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
    SocialWorkArea.Area1 IN('80A','80B','80C','80D','80E')
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
                ,'SocialWorkArea.Area'=>'<b>Omr&ring;de</b>'  
                ,'publicKr'=>'<b>Summa</b>'  
                
        )
	    ,html_entity_decode("<b>Migori West (K08)</b>")
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
    SocialWorkArea.Area1 IN('82F','83A','83B','83C','84A','84B','84C','84D')
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
	    ,html_entity_decode("<b>Luo (K06)</b>")
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
    SocialWorkArea.Area1 IN('85A','85B','85C','85D','85E')
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
	    ,html_entity_decode("<b>Lake Victoria (K18)</b>")
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
    SocialWorkArea.Area1 IN('87A')
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
	    ,html_entity_decode("<b>Migori (K02)</b>")
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
    SocialWorkArea.Area1 IN('89A')
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
	    ,html_entity_decode("<b>Bungoma (K24)</b>")
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
    SocialWorkArea.Area1 IN('90','90B','90C')
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
	    ,html_entity_decode("<b>Kisumu (K19)</b>")
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
    SocialWorkArea.Area1 IN('91A')
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
	    ,html_entity_decode("<b>Bomet (K11)</b>")
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
    SocialWorkArea.Area1 IN('92','92A','92B','92C','92D')
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
	    ,html_entity_decode("<b>Masaii (K10)</b>")
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
    SocialWorkArea.Area1 IN('93A','93B')
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
	    ,html_entity_decode("<b>Kuria West (K12)</b>")
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
    SocialWorkArea.Area1 IN('94A','94B','94C','94D','94E','94F','94G')
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
	    ,html_entity_decode("<b>Kuria East / Nyabsai (K13)</b>")
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
    SocialWorkArea.Area1 IN('95','95A','95B','95C')
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
	    ,html_entity_decode("<b>Kuria East / Bwirege (K14)</b>")
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
    SocialWorkArea.Area1 IN('96A','96B')
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
	    ,html_entity_decode("<b>Kuria Komatutura (K15)</b>")
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
    SocialWorkArea.Area1 IN('97A','97B')
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
	    ,html_entity_decode("<b>Kuria Central (K16)</b>")
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
    SocialWorkArea.Area1 IN('99A','99B')
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
	    ,html_entity_decode("<b>Komotobo (K04)</b>")
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
    SocialWorkArea.Area1 IN('99C','99D')
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
	    ,html_entity_decode("<b>Komotobo (K05)</b>")
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
