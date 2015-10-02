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
    * 
From 
    Betel
Where 
    Name <> ''
Order by Name
";

    $result = $db->Query($query);
    $data = array();
    while($row = $db->GetRow($result)) {
        $data[] = $row;
    }
    
    $pdf->ezTable(
        $data
        //columns
	    ,array('Name'=>'Namn'  
                ,'Address'=>'Adress'  
                ,'Zip'=>'Post'  
                ,'ZipTown'=>'Ort'  
                
        )
	    ,"Betel"
        //options

	    ,array('NewPageCallback' => 'NewPageCallback'
			,'cols'=>array(
                
			)
            ,'maxWidth'=>$pdf->ez['pageWidth']-20
            ,'showHeadings'=>1
            ,'shaded'=>1
            ,'showLines'=>1
		,'showHeadings' => '1'		,'showLines' => '1')
    );
    $pdf->doHeader("<b>Trosgnistan</b>",10,'right');
    $pdf->doFooter("<b>Trosgnistan</b>",10,'right');
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
