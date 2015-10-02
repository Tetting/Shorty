<?
session_start();
if (!isset($_SESSION["UserData"])) {
	print "You must login to access this resource";
	exit();
}
include("../autoload2.php");


   
include("easyDB.php");
include("easyDBConn2.php");
/*
$DBProvider="sqlite";
$connections["sqlite"]=array(
	''=>array('dbFile'=>dirname(__FILE__)."/../data/data.db",'persist'=>true)
);*/
$db = easyDB('');

$headers = true;
$query = "";
foreach($_REQUEST as $key=>$value) {
	if (isset($_COOKIE[$key])) {
		break;
	}
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
				//$value = htmlentities($value,ENT_COMPAT,'UTF-8');	//Swedish encoding
				$value = htmlentities($value,ENT_COMPAT,'ISO-8859-1');	//Swedish encoding
				$key = str_replace("|",".",$key);
				switch(substr($key,0,1)) {
				   case '*':
						if ($value !='') {
							$query .= " AND (".substr($key,1)." like '%$value%' OR ".substr($key,1)."='$value')";
						}
						break;
				   case '$':
						if ($value !='') {
							$query .= substr($key,1)."='$value'";
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
			$sort = "Order By ".$db->Escape($_REQUEST['_Sort']);//hardcoded list of allowed fieldnames?
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
		
		
		
switch($_REQUEST['datasource']) {
	case 'Fadderbarns':
	$query = "Select * from Fadderbarn Where 1 $query $groupby $sort $size";
	$q = $db->Query($query);
	$fields = array('id'=>'Id'
		,'Nbr#'=>'Nbr'
		,'Name'=>'Name'
		,'FathersName'=>'FathersName'
		,'MothersName'=>'MothersName'
		,'DOB'=>'DOB'
		,'GiverId'=>'GiverId'
		,'HelpD'=>'HelpD'
		,'Mkr'=>'Mkr'
		,'Area1'=>'Area1'
		,'Area'=>'Area'
		,'TGdt'=>'TGdt'
		,'Land'=>'CountryCode'
		,'Status'=>'Status'
		,'RegDate'=>'RegDate'
		,'Db'=>'Db'
	);
	
	break;
	case 'Givers':
	default:
	$query = "Select * from Giver Where 1 $query $groupby $sort $size";

	$q = $db->Query($query);
	$fields = array('#'=>'Id'
		,'Namn'=>'Name'
		,'Efternamn'=>'LastName'
		,'Adress'=>'Address'
		,'PostNr'=>'ZipCode'
		,'PostOrt'=>'ZipTown'
		,'Land'=>'Land'
		,'Tel'=>'Tel'
		,'Mob'=>'Mob'
		,'epost'=>'Email'
		,'Tidning'=>'Paper'
		,'Medlem'=>'Member'
		,'StartD'=>'StartD'
		,'ProjCode'=>'ProjCode'
		,'Status'=>'Status'
		,'CoAddress'=>'CoAddress'
		,'PersonNbr'=>'PersonNbr'
		,'Letter'=>'Letter'
		,'Tags'=>'Tags'
		,'Db'=>'Db'
	);
	break;
}
if ($headers) {
	header('Content-type: application/ms-excel');
	header('Content-Disposition: attachment; filename=Rapport.xls');
	header("Expires: 0");
	header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
}
print "<table border='1'>";
print "<col/><col width='90px;'/>";
print "<tr>";
foreach($fields as $name=>$field) {
	if (is_numeric($name)) { $name = $field;}
	print "<td>$name</td>";
}
print "</tr>";

while($row = $db->GetRow($q)) {
	print "<tr>";
	foreach($fields as $field) {
		print "<td>".html_entity_decode($row[$field])."</td>";
	}		
	print "</tr>\n";
	flush();
}
print "</table>";
?>