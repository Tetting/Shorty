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
    $query="Select
    Payment.Date
    ,Member.GiverId
    ,Member.FullName
From
(SELECT
    Id as GiverID
    ,ifnull(Name,'')||ifnull(' '||LastName,'') as 'FullName'
FROM
    Giver
WHERE
    MEMBER = 1
    AND (Status is null or Status != 'Inaktiv')
    AND Land = 'S') as member
    Join Payment ON member.GiverID = Payment.GiverId
Where
      Payment.ProjectId != '150'
      AND Payment.Date > date('now','-1 years')
Group by Payment.GiverId
Order by Payment.Date desc";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["SUM(Payment.InKrTotal)"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["SUM(Payment.InKrTotal)"] = "<b>".$tot."</b>";$row["Giver.FullName"] = "Summa";
    $data[] = $row;
    
    $pdf->doHeader("Utskrift ".date("Y-m-d")."",10,'left');
    $pdf->doHeader("<b>Trosgnistan</b>",10,'right');
    $pdf->ezTable(
        $data
        //columns
	    ,array('Member.GiverId'=>'Givar#'  
                ,'Member.FullName'=>'Namn'  
                ,'Payment.Date'=>'Kr/mån'  
                
        )
	    ,html_entity_decode("<b>GÃ¥vor till projekt $id de senaste 12 mÃ¥n</b>")
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
    $count = count($data)-1;//1 for totals row.
    //$pdf->ezText("No.: <b>$count         Total amount for this area in Swedish currency  $tot sek");
    $pdf->ezText("$count");
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
