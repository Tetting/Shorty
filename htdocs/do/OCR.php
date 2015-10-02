<?
//include("fb_si.php");
function fb(){}
session_start();

if (file_exists("local_filesDir.php")) {
	include("local_filesDir.php");
} else {
	$filesPath = dirname(__FILE__)."/../files/";
}
$target_path = "$filesPath/ocr/";
include("easyDB.php");
include("easyDBConn2.php");

$db = easyDB('');
$db->Debug = true;

if (isset($_REQUEST['fileId'])) {
	$result = $db->Query("select * from OCRImport Where Id='".$_REQUEST['fileId']."'");
	if ($db->RowCount($result)>0) {
		$row = $db->GetRow($result);		
		print file_get_contents($target_path.$row['FName'].".htm");
	}
	exit();
}
?>
<html>
	<head>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
	<link type="text/css" rel="stylesheet" href="../img/Themes/Cube/AppStyle.css">
	</head>
<body style="background-color: white;">
<?
if ($_FILES) {
	// Where the file is going to be placed
	$upload_name = "OCRFile";
	//$target_path = preg_replace($SlashesPattern,'/',$target_path);
	//var_dump($blackboard);
	//var_dump($_POST);
	// Check the upload
	if (!isset($_FILES[$upload_name])) {
		HandleError("No upload found in \$_FILES for " . $upload_name);
		exit(0);
	} else if (isset($_FILES[$upload_name]["error"]) && $_FILES[$upload_name]["error"] != 0) {
		$uploadErrors = array(
	        0=>"There is no error, the file uploaded with success",
	        1=>"The uploaded file exceeds the upload_max_filesize directive in php.ini",
	        2=>"The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form",
	        3=>"The uploaded file was only partially uploaded",
	        4=>"No file was uploaded",
	        6=>"Missing a temporary folder"
		);
		HandleError($uploadErrors[$_FILES[$upload_name]["error"]]);
		//var_dump($_FILES);
		exit(0);
	} else if (!isset($_FILES[$upload_name]["tmp_name"]) || !@is_uploaded_file($_FILES[$upload_name]["tmp_name"])) {
		HandleError("Upload failed is_uploaded_file test.");
		exit(0);
	} else if (!isset($_FILES[$upload_name]['name'])) {
		HandleError("File has no name.");
		exit(0);
	}
	
	/* Add the original filename to our target path.
	Result is "uploads/filename.extension" */
	//var_dump($_FILES);
	$path_info = pathinfo($_FILES[$upload_name]['name']);
	$file_extension = strtolower($path_info["extension"]);
	$target_file = basename($_FILES[$upload_name]['name']);
	//$target_file = $path_info["filename"];
	//print $target_path;
	//var_dump($_FILES);
	if (!strtolower($path_info["extension"]) == 'txt') {
		HandleError("Invalid file extension".$path_info["extension"]);
		exit(0);
	}

	
	/*include("$rootDir/do/DBNamespace.php");
	$db = sqliteConnect('');
	$sql = "INSERT INTO Resource2(Filename,Type,Path) VALUES('${target_file}','".strtolower($file_extension)."','${id}.$file_extension')";
	sqlite_query($db,$sql) or HandleError("Error Saving Resource to Database.");
	$id = sqlite_last_insert_rowid($db);
*/
	$target =  $target_path."$target_file";
	if(move_uploaded_file($_FILES[$upload_name]['tmp_name'],$target)) {
		//print "$id|$file_extension|".basename($target_file,'.'.$file_extension);
	} else {
		echo "There was an error uploading the file, please try again!";
		if (isset($_FILES[$upload_name]["error"]) && $_FILES[$upload_name]["error"] != 0) {
			$uploadErrors = array(
				0=>"There is no error, the file uploaded with success",
				1=>"The uploaded file exceeds the upload_max_filesize directive in php.ini",
				2=>"The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form",
				3=>"The uploaded file was only partially uploaded",
				4=>"No file was uploaded",
				6=>"Missing a temporary folder"
			);
			print $uploadErrors[$_FILES[$upload_name]["error"]];
		}
	}
	//print $_FILES[$upload_name]['name'] . "<br/>";
	//do the import...
	include("fin.php");
	$f = new Finance();
	$f->setDb($db);
	$db->Query("BEGIN TRANSACTION");
	
	$file=fopen($target,"r");
	$lastTyp = '';
	$errors = array();
	$OCRRows = array();
	$fileDat = array();
	while(!feof($file)) {
	  $line = fgets($file);
	  //split by file definition...
	  $typ = substr($line,0,2);
	  $dat = array();
	  switch($typ) {
		case '00':
			$fileDat['AccountNr'] = substr($line,2,6);
			$fileDat['AccountName'] = substr($line,8,33);
			$fileDat['CompanyCodeIS'] = substr($line,41,3);
			$fileDat['IS-nummer-OCR'] = substr($line,44,3);//Redovisningsenhet=Inbetalningsservicenummer (OCR) - "IS-nummer(OCR)" som redovisas p� samma datamedia till "Servicebyr�n, tilldelas av Nordea.
			$fileDat['datamediaTyp']=substr($line,44,2);//Typ av datamedia - Nordeas interna kod.
			$fileDat['CodeEntity'] = substr($line,46,2);//L�pnummer = en "redovisningsenhet", om servicebyr�n tar emot flera fysiska medier av samma typ.
			$fileDat['LayoutKod'] = substr($line,48,1);//Layout kod = N
			$fileDat['Produktionsdatum'] = substr($line,49,6);//Produktionsdatum his Nordea,��MMDD
			$fileDat['Reserv'] = substr($line,55,2);//Blanka/Reserv
			$fileDat['Kompletterings'] = substr($line,65,1);//Kompletteringsregister f�r avtalad rejectregistrering, J eller blank.
			$fileDat['Reserv2'] = substr($line,66,14);//Layout kod = N
			$dat = $fileDat;
			$dat['Typ'] = 'Inledningspost';
			break;
		case '10':
			$dat['Typ'] = 'Kundpost';
			break;
		case '20':
			$dat['Typ'] = 'IS-nummer (OCR)-post';
			break;
		case '30':
			$dat['Typ'] = 'Bokföringsdatumpost';
			break;
		case '40':
			$rowDat = array();
			$rowDat['Kundreferens'] = trim(substr($line,2,25));//kundreferens h�gerst�llt,blankutfyllt.
			$rowDat['Belopp'] = trim(substr($line,27,13));//Belopp,kronor och �ren, numeriskt, nollutfyllt.
			$rowDat['Belopp'] = substr($rowDat['Belopp'],0,11).",".substr($rowDat['Belopp'],11);
			$rowDat['Belopp'] = ltrim($rowDat['Belopp'],'0');
			$rowDat['Reserv1'] = substr($line,40,7);//kundreferens h�gerst�llt,blankutfyllt.
			$rowDat['Avsandarkonto'] = substr($line,47,1);//Avs�ndarkonto, intern kod.
			$rowDat['PlusGiroJournalNr'] = substr($line,48,10);//PlusGirokonto/journalnummer,numeriskt.
			$rowDat['Filmnummer'] = substr($line,58,8);//Filmnummer.
			$rowDat['Komplettering'] = substr($line,66,1);//Kompletteringsmarkering. J = Avtalad rejectregistrering, annars blank.
			$rowDat['Reserv2'] = substr($line,67,13);//Blanka/Reserv.
			$OCRRows[] = $rowDat;
			$dat = $rowDat;
			$dat['Typ'] = 'Inbetalningspost';

			break;
		case '50':
		case '60':
		case '90':
		case '':
			break;
		default:
			print "<tr><td colspan='15'>ERROR, unknown line read:" . $line ."</td></tr>";
			break;
	  }
	  /*if ($lastTyp != $typ) {
		print "<tr><th>Typ</th>";
		foreach($dat as $name=>$value) {
			print "<th>$name</th>";
		}
		print "</tr>";
	  }
		//print "<tr><td colspan='14'>$line</td></tr>";
		print "<tr><td>$typ</td>";
		foreach($dat as $name=>$value) {
			if ($name=='Kundreferens') {
				$value = trim($value);
				$result = $db->Query("select * from Giver Where Id='".substr($value,0,5)."'");
				if ($db->RowCount($result)>0) {
					$row = $db->GetRow($result);
					print "<td>${row['Name']} - $value</td>";
				} else {
					print "<td><b>$value</b></td>";
				}
			} else {
				print "<td>$value</td>";
			}
		}
		print "</tr>";
	  $lastTyp = $typ;

	   */
	}

	fclose($file);
	//print '20'.substr($fileDat['Produktionsdatum'],0,2).'-'.substr($fileDat['Produktionsdatum'],2,2).'-'.substr($fileDat['Produktionsdatum'],4,2)."<br/>";
	$imp = array(
		'Date' => '20'.substr($fileDat['Produktionsdatum'],0,2).'-'.substr($fileDat['Produktionsdatum'],2,2).'-'.substr($fileDat['Produktionsdatum'],4,2),
		'AccountNr' => $fileDat['AccountNr'],
		'AccountName' => $fileDat['AccountName'],
		'Fname' => basename($target),
		'Src' => json_encode($fileDat),
		'Rows'=>count($OCRRows)
		);
	$f->addOCRImport($imp);
	foreach($OCRRows as $row) {
		$row['GiverId'] = substr($row['Kundreferens'],0,5);
		$f->addOCRRow($row);
		ob_flush();flush();
	}
	$report =  "<table class='EditTable' border='1'>
	<tr><th colspan=9>";
	$report .= $_FILES[$upload_name]['name'] . " - ";
	$report .= '20'.substr($fileDat['Produktionsdatum'],0,2).'-'.substr($fileDat['Produktionsdatum'],2,2).'-'.substr($fileDat['Produktionsdatum'],4,2);
	$report .= "</th></tr>
	<tr><th>GiverId</th><th>Givare</th><th>Belopp</th><th>Payments</th><th>Status</th></tr>
";
	print $report;
	function result($progress) {
		global $report;
		$out = '';
		$dir = dirname(dirname($_SERVER['REQUEST_URI']));
		$out .= "<tr class='{$progress['Status']}'>
			<td><a target='extern' href='http://{$_SERVER['HTTP_HOST']}$dir/#/Pages/Giver/{$progress['OCRRow']['GiverId']}'>{$progress['OCRRow']['GiverId']}</a></td>
			<td>{$progress['Giver']['Name']}</td>
			<td>{$progress['OCRRow']['Belopp']}</td>
			<td><table border=0>";
			$i = 0;
			foreach($progress['Payments'] as $Payment) {
				$info = $progress['PaymentInfo'][$i];
				$status = $info['Status'];
				$name = $info['Name'];
				$statusText = '';
				if ($status != "Paid") {
					$statusText = $status;
				}
				switch($Payment['PaymentType']) {
				case 'Fadderbarn':
				$out .= "<tr><td>$statusText <a target='_blank' href='http://{$_SERVER['HTTP_HOST']}$dir/#/Pages/Fadderbarn/{$Payment['PaymentTypeId']}'>{$Payment['PaymentTypeId']} $name</a> " . number_format($Payment['InKr'],2,',','.') ."kr admin:".number_format($Payment['AdminCharge'],2,',','.')."kr</td></tr>";
				break;
				case 'Project':
				$out .= "<tr><td>$statusText <a target='_blank' href='http://{$_SERVER['HTTP_HOST']}$dir/#/Pages/Project/{$Payment['ProjectId']}'>Projekt {$Payment['ProjectId']} $name</a> ".number_format($Payment['InKr'],2,',','.')."kr admin:".number_format($Payment['AdminCharge'],2,',','.')."kr</td></tr>";
				break;
				default:
					$out .= "<tr><td>$statusText {$Payment['PaymentType']} <a target='_blank' href='http://{$_SERVER['HTTP_HOST']}$dir/#/Pages/Project/{$Payment['ProjectId']}'>Projekt {$Payment['ProjectId']} $name</a> ".number_format($Payment['InKr'],2,',','.')."kr admin:".number_format($Payment['AdminCharge'],2,',','.')."kr</td></tr>";
				}
				$i++;
			}
			$out .= "</table></td><td>{$progress['Status']}</td>
		</tr>";
		/*print "<tr><td colspan='15'>";
		var_dump($progress);
		print "</td></tr>";*/
		$report .= $out;
		print $out;
		ob_flush();flush();
	}
	$f->processOCRImport(null,'result');
	$report .="</table>";
	print "</table>";
	$db->Query("END TRANSACTION");
	file_put_contents($target.".htm",$report);
} else {
	?><form enctype="multipart/form-data" method="POST">
<input type="hidden" name="MAX_FILE_SIZE" value="100000" />
Choose a file to upload: <input name="OCRFile" type="file" /><br />
<input type="submit" value="Upload File" />
</form>
<?
}


function HandleError($message) {
	//header("HTTP/1.1 500 Internal Server Error");
	echo "Error:".$message;
}
?>
</body></html>