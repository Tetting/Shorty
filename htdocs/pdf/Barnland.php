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
function NewPageCallback($rowIndex) {
    if ($rowIndex > 8000) {
		return 'Bailout';
	}
}
    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    $query="Select 
    * 
From 
    Fadderbarn, Giver 
Where 
	Fadderbarn.GiverId = Giver.Id
	and Giver.Id > 0
	Order by Fadderbarn.Area DESC
";

    $result = $db->Query($query);
    $data = array();
    while($row = $db->GetRow($result)) {
        $data[] = $row;
    }
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('Fadderbarn.Id'=>'Childno'  
                ,'Fadderbarn.Name'=>'Barnnamn'  
                ,'Giver.Id'=>'Givare#'  
                ,'Giver.Name'=>'Givare'  
                ,'Fadderbarn.Mkr'=>'kr'  
                
        )
	    ,"Barnland"
        //options

	    ,array('NewPageCallback' => 'NewPageCallback'
			,'cols'=>array(
                'Fadderbarn.Id'=>array()  
                ,'Fadderbarn.Name'=>array()  
                ,'Giver.Id'=>array()  
                ,'Giver.Name'=>array()  
                ,'Fadderbarn.Mkr'=>array()  
                
			)
)
    );
function pageNoFooter($pdf,$pageno,$pages) {
    $text = "Sida $pageno av $pages";
    $x = ($pdf->ez['pageWidth'] / 2)-strlen($text);

    $y = $pdf->ez['bottomMargin']-15;

    $pdf->addText(($pdf->ez['pageWidth'] / 2)-strlen($text),  $y, 10, $text);
        
}
$pdf->siHeadersAndFooters(array('AllPages'=>'pageNoFooter'));    $pdf->doFooter("Utskrift ".date("Y-m-d")."",10,'left');

//output pdf inline
header('connection:close'); 

$pdf->ezStream();
