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
//a custom params implementation for now!

if (isset($_REQUEST['action']) && $_REQUEST['action']=='runReport') {
?>
<form target="ReportView" action="do/task.php" method="post">
<input type="hidden" name="_report" value="<?=$_REQUEST['_report']?>"/>
<input type="hidden" name="action" value="viewReport"/>

<table class="EditTable reportParams">
<tr><th colspan="2">Givare Brev</th></tr>
<tr><td>Givarelista:</td><td><input name="id" value="<?
if(isset($_REQUEST['id'])) {
    print $_REQUEST['id'];
} else {
    print '11711,10002';
}
?>"/></td></tr>
<tr><td>Brevtext:</td><td><textarea name="letter" rows=15 cols=112 id="letter">
Hello Friend,

I am writing an example letter to you today!

Long text will be word wrapped so that you can write several paragraphs of text and the pdf will just keep on formatting the text for you so that it correctly displays on the page.

To write <b>bold</b> text enclose the text in a b tag.
To write <i>italics</i> use an i tag.

Thanks, 

Trosgnistan</textarea>

<tr><td colspan="2"><center>
<button>k&ouml;r brev</button></center>
</td>
</tr>
</table>
</form>
<br style="clear:both;"/>
<?
    exit();
} else {
 $id = $_REQUEST['id'];
}    include("$easyDBDir/easyDB.php");
    include("$easyDBDir/easyDBConn2.php");
    $db = easyDB('');
    $query="Select
    Giver.*
From
    Giver
Where
    Giver.Id IN($id)
    ";

    $result = $db->Query($query);
    $data = array();
    while($row = $db->GetRow($result)) {
        $data[] = $row;
    }
    
$letter= $_REQUEST['letter'];

 $size = 11;
 $rowPos = 0;
 foreach($data as $row) {
     if ($rowPos > 0) {
        $pdf->newPage();   
     }
     $rowPos++;
     //var_dump($data);
    $text = $row['Id'].PHP_EOL;
    if ($row['CoAddress']) {
        $text .= $row['CoAddress'].PHP_EOL;
    }
    $text .= $row['Name'];
    if ($row['LastName']) {
        $text .= ' '.$row['LastName'].PHP_EOL;
    } else {
        $text .= PHP_EOL;   
    }
    if ($row['Address']) {
        $text .= $row['Address'].PHP_EOL;
    }
    $text .= $row['ZipCode'].' '.$row['ZipTown'] . PHP_EOL;
       
    //,Giver.Name,Giver.CoAddress,Giver.Address,Giver.Post
    $lines = explode(PHP_EOL,$text);
    foreach($lines as $line) {
     $pdf->ezText($line,$size,array(
        'justification'=>'right'
        ,'right'=>20
        
    ));   
    }
    $pdf->ezText("Boln&auml;s " .date("Y-m-d"),$size,array(
        'justification'=>'right'
        ,'right'=>20
    ));
    $pdf->ezText($letter);
 }



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
