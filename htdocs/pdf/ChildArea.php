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
    $area = $_REQUEST['area'];
    //$areaName = 'test';
        $query="Select 
    *
    ,round(Fadderbarn.Mkr - ((Fadderbarn.Mkr/100)*25)) as 'publicKr'
From 
    Fadderbarn, Giver 
Where 
	Fadderbarn.GiverId = Giver.Id
	and Giver.Id > 0
    and Fadderbarn.Area1 = '".$_REQUEST['area']."'
	Order by Fadderbarn.Area DESC
";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["publicKr"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["publicKr"] = "<b>".$tot."</b>";$row["Fadderbarn.Name"] = "Total";
    $data[] = $row;
    
    $pdf->ezText("<b>VERY IMPORTANT! Trosgnistan have increased the support for most of the children from last year. See the list. Be sure that 90% of the support reach the children. Please read the new text.</b>");
    $pdf->ezSetDy(-30);
    $pdf->ezText("Children list $area $areaName");
    $pdf->ezSetDy(-15);
    $pdf->ezTable(
        $data
        //columns
	    ,array('Fadderbarn.Area1'=>'<b>Area</b>'  
                ,'Fadderbarn.Id'=>'<b>Childno.</b>'  
                ,'Fadderbarn.Name'=>'<b>Name of Child</b>'  
                ,'Giver.Id'=>'<b>Sponsor</b>'  
                ,'Giver.Name'=>'<b>Givare</b>'  
                ,'publicKr'=>'<b>Sek p/mon.</b>'  
                
        )
	    ,""
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
    $pdf->ezSetDy(-20);
    $count = count($data)-1;//1 for totals row.
    //$pdf->ezText("No.: <b>$count		 Total amount for this area in Swedish currency  $tot sek");
        $pdf->ezText("No.: $count Total amount for this area in Swedish currency $tot sek");
    $pdf->ezSetDy(-20);
    $pdf->ezText("<b>10% is allowed to be kept by the sister organization for administration and various expenses such as traveling costs for the social worker, extra help to needy children or children with less support. 90% of the support MUST reach the sponsored child according to the instructions in the Family Care Policy that you have signed and agreed to follow.</b>");
    $pdf->ezSetDy(-10);
    $pdf->ezText("On the right side of each line there is a date indicating when we got the last report from the child. According to the family care policy each child must send a report at least once a year. It is the responsiblity of the social worker to see that this is done. The support to the children not writing reports on time can be stopped without warning or explanation. If there is anything wrong with this list please contact us immediately.
");
    $pdf->ezSetDy(-10);
    $pdf->ezText("The following sponsor numbers is hereby explained:
-333333 = Waiting for sponsor, -44444 = Lost sponsor -  send new photo, 55555 = Lost sponsor - we have photo.");
function pageNoFooter($pdf,$pageno,$pages) {
    $text = "Page $pageno of $pages";
    $x = ($pdf->ez['pageWidth'] / 2)-strlen($text);

    $y = $pdf->ez['bottomMargin']-15;

    $pdf->addText(($pdf->ez['pageWidth'] / 2)-strlen($text),  $y, 10, $text);
        
}
$pdf->siHeadersAndFooters(array('AllPages'=>'pageNoFooter'));    $pdf->doFooter("".date("Y-m-d")."",10,'left');
    $pdf->doFooter("<b>Trosgnistan</b>",10,'right');
    $pdf->doHeader("".date("Y-m-d")."",10,'left');
    $pdf->doHeader("<b>Trosgnistan</b>",10,'right');

//output pdf inline
header('connection:close'); 

$pdf->ezStream();
