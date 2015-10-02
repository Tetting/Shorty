<?
session_start();
if (!isset($_SESSION["UserData"])) {
	print "You must login to access this resource";
	exit();
}
//include("../autoload2.php");

include("easyDB.php");
include("easyDBConn2.php");
$db = easyDB('');
include("../ext/PHPExcel/Autoloader.php");
//include("../ext/PHPExcel.php");
$excel = new PHPExcel();

$excel->getProperties()
	->setCreator("Trosgnistan");

foreach($_REQUEST as $key=>$value) {
	if (isset($_COOKIE[$key])) {
		break;
	}
	$query = "";
	if (substr($key,0,1) == '_') {
	
	} else {
		switch($key) {
			case "rnd":/*this should be _rnd*/
			case "datasource":/*this should be _datasource*/
			case "Id":
			case "export":
			break;
			default:
				//check if allowed to filter on this list...
				$value = htmlentities($value,ENT_COMPAT,'UTF-8');	//Swedish encoding
				$key = str_replace("|",".",$key);
				switch(substr($key,0,1)) {
				   case '*':
						if ($value !='') {
							$query .= " AND (".substr($key,1)." like '%$value%' OR ".substr($key,1)."='$value')";
						}
						break;
				   case '-':
						$query .= " AND ".substr($key,1)."!='$value'";
						break;
					case '_':
						//ignore this filter.
						break;
					default:
						$query .= " AND $key='$value'";
						break;
					}

				}
		}
}

		if (isset($_REQUEST['_Sort'])) {
			//add in a sort order..
			$_REQUEST['_Sort'] = str_replace("|",".",$_REQUEST['_Sort']);
			$sort = "Order By ".mysql_real_escape_string($IN['_Sort']);//hardcoded list of allowed fieldnames?
			if ($_REQUEST['_SortType'] == 'DESC'){$sort.= " DESC";}else{$sort.= " ASC";}
		} else { $sort = '';}
		if (isset($_REQUEST['_Size'])) {
			$size = " LIMIT ${_REQUEST['_Start']},${_REQUEST['_Size']}";
		} else { $size = '';}
		$groupby = "";
		//if (isset($datasource['GroupBy'])) {
		//	$groupby = "Group By ".$datasource['GroupBy'];
		//}
		//$countQuery = @$datasource['CountSQL']. "$query $sort";
		$query = "Select * from Giver Where 1 $query $groupby $sort $size";




$q = $db->Query($query);
$fieldList = array(
    'Id'=>'#'
    ,'Name'=>'Namn'
    ,'Address'=>'Adress'
    ,'ZipCode'=>'PostNr'
    ,'ZipTown'=>'PostOrt'
    ,'Land'=>'Land'
    ,'Tel'=>'Tel'
    ,'Email'=>'epost'
    ,'Paper'=>'Tidning'
    ,'Member'=>'Medlem'

);
$fieldPos = array(
    'A','B','C','D','E','F','G','H','I','J'
    );
$row = 1;
$cols = array();
$indexPos = 0;
foreach($fieldList as $key=>$value) {
    $excel->getActiveSheet()->setCellValue($fieldPos[$indexPos] . $row, $value);
    $indexPos++;
}

while($rapport = $db->GetRow($q)) {
    $row++;
    $indexPos = 0;
    foreach($fieldList as $key=>$value) {
        $excel->getActiveSheet()->setCellValue($fieldPos[$indexPos] . $row, utf8_encode(html_entity_decode($rapport[$key])));
	$indexPos++;
    }
}

 /*foreach($fieldPos as $key=>$value) {
        $excel->getActiveSheet()->getColumnDimension($value)->setAutoSize(true);
    }*/
//$excel->getActiveSheet()->setAutoFilter("A1:Q$row");
if (isset($_REQUEST['Excel']) && ($_REQUEST['Excel'] == '2007')) {
    header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    header('Content-Disposition: attachment;filename="rapport.xlsx"');
    header('Cache-Control: max-age=0');

    $objWriter = PHPExcel_IOFactory::createWriter($excel, 'Excel2007');

    $objWriter->save('php://output');
} else {
    header('Content-Type: application/vnd.ms-excel');
    header('Content-Disposition: attachment;filename="myfile.xls"');
    header('Cache-Control: max-age=0');
    $objWriter = PHPExcel_IOFactory::createWriter($excel, 'Excel5');
    $objWriter->save('php://output');
}
