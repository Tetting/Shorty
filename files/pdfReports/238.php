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
    $query=" Select
    Payment.Date
    ,Payment.InKrTotal
    ,Payment.ProjectId
    ,Giver.*
    ,ifnull(Giver.Name,'')||ifnull(' '||Giver.LastName,'') as 'Giver.FullName'
    ,Giver.ZipCode || '  ' || Giver.ZipTown as 'Giver.Post'
From
    Payment LEFT JOIN Giver On Payment.GiverId = Giver.Id
Where
    Payment.ProjectId = '18'
    AND Payment.Date > '2014-09-01'
    AND Giver.Id != '10031'
    AND Payment.InKrTotal > 299
    Group by Giver.Id
    Order by Giver.Id";

    $result = $db->Query($query);
    $data = array();$tot = 0;
    while($row = $db->GetRow($result)) {$tot += $row["Payment.InKrTotal"];
        $data[] = $row;
    }
    
    //add a totals row...
    $row = array();
    $row["Payment.InKrTotal"] = "<b>".$tot."</b>";$row["Giver.FullName"] = "Summa";
    $data[] = $row;
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('Giver.Id'=>''  
                ,'Payment.Date'=>'Datum'  
                ,'Payment.ProjectId'=>'Projekt'  
                ,'Payment.InKrTotal'=>'Kr'  
                
        )
	    ,html_entity_decode("Projekt 51")
        //options

	    ,array('NewPageCallback' => 'NewPageCallback'
			,'cols'=>array(
                
			)
            ,'maxWidth'=>$pdf->ez['pageWidth']-20
            ,'showHeadings'=>1
            ,'shaded'=>1
            ,'showLines'=>1
		,'fontSize' => '12')
    );
$count = count($data)-1;//1 for totals row.    $pdf->ezSetDy(-15);
    $pdf->ezText("Antal: $count");

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
