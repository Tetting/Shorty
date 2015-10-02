<?
/**
* Edit gateway for dev machine.
*/
function mkpaths($path)  {
        $dirs = array();
        $dirs = explode("/", $path);
        $i = 0;
        $path = '';//dirname(__FILE__);
        foreach ($dirs AS $element) {
            $path .= $element . "/";
            if(!is_dir($path) && $i != 0) {
	            //print "mkpaths:".$path."\n";
                if(!mkdir($path)){
                    echo "something was wrong at : " . $path;
                    return 0;
                }
            }  
            $i++;
        }
        return true;
        echo $path;
}

$IN = array_merge($_GET,$_POST);

if (isset($IN['InstallUriFile'])) {
	$install = false;
	$t = "../".$IN['InstallUriFile'];//means all files relative to "root" 
	$f = $IN['InstallUriSrc'];//Uri to get file from.
	if (substr($f,0,1)=='/') {
		$f = "http://".$_SERVER['HTTP_HOST']."$f";//removed two slashes for windows7 machine.
	}
	if (isset($IN['AllowOverwrite'])) {
		$install = true;
	} else {
		if (!file_exists($t)) {
			$install = true;
		} else {
			if (filesize($t) < 10) {
				//a small file, perhaps saved before but did not succeed.
				$install = true;	
			}	
		}
	}
	if ($install) {
		$path_parts = pathinfo($t);
		$dir = dirname($t);
		$l = explode("../",$t);
		$offset = realpath("./".str_repeat("../",count($l)-1));
		//print "full offset=".$offset."\n";
		$restdir = dirname($l[count($l)-1]);
		//print "restdir=".$restdir."\n";
		$fulldir = str_replace("\\","/",$offset."/".$restdir);
		//print "full path dir=$fulldir\n";
		
		if (!file_exists($fulldir)) {
			//mkdir($fulldir,0777,true);
			mkpaths($fulldir);
			//print "Created path:$fulldir\n";	
		}
		$f = str_replace("localhost","127.0.0.1",$f);//unable to resolve hosts on windows 7
		if ($path_parts['extension']=='zip') {
			//we are installing a zip, extract it...
			$handle = fopen($f, "rb");//php5.0+
			file_put_contents($t,stream_get_contents($handle));
			fclose($handle);	
			//print '"updates\\unzip.exe" -o '+$t+' -d ../ 2>&1';
			print passthru('"updates\\unzip.exe" -o '.$t.' -d ../ 2>&1');
		} else {
			file_put_contents($t,file_get_contents($f));
		}
		$md5 = md5_file($t);
		//print "installed:".$f."=>".$t;
		print "{message:'installed.',from:'$f',to:'$t',md5:'$md5'}";
	} else {
		print "{message:'$t already installed.'}";
	}
	exit();	
}
if (isset($IN['MD5File'])) {
	$md5 = md5_file('../'.$IN['MD5File']);
	if (isset($IN['CheckMD5'])) {
		if ($md5 == $IN['CheckMD5']) {
			print "{md5:'$md5',changes:'none',target:'${IN['MD5File']}'}";
		} else {
			print "{md5:'$md5',changes:'local',target:'${IN['MD5File']}'}";
		}
	} else {
		print "{md5:'$md5',target:'${IN['MD5File']}'}";
	}
	exit();
}
		
if (isset($IN['InstallFile'])) {
	/**
	* EditGateway.php?InstallGateway=xxx
	*/
	$t = "../".$IN['InstallFile'];//means all files relative to "root" 
	//$t = $IN['InstallFile'];
	$f = $IN['InstallGateway']."?RawSrc=".$IN['InstallSrc'];
	print "$f\n";
	$install = false;
	if (isset($IN['AllowOverwrite'])) {
		$install = true;
	} else {
		if (!file_exists($t)) {
			$install = true;
		} else {
			if (filesize($t) < 10) {
				//a small file, perhaps saved before but did not succeed.
				$install = true;	
			}	
		}
	}
	if ($install) {
		$path_parts = pathinfo($t);
		if ($path_parts['extension']=='zip') {
			//we are installing a zip, extract it...
			$handle = fopen($f, "rb");//php5.0+
			file_put_contents($t,stream_get_contents($handle));
			fclose($handle);	
			//print '"updates\\unzip.exe" -o '+$t+' -d ../ 2>&1';
			print passthru('"updates\\unzip.exe" -o '.$t.' -d ../ 2>&1');
			
	
		} else {
			$dir = dirname($t);
			$l = explode("../",$t);
			$offset = realpath("./".str_repeat("../",count($l)-1));
			//print "full offset=".$offset."\n";
			$restdir = dirname($l[count($l)-1]);
			//print "restdir=".$restdir."\n";
			$fulldir = str_replace("\\","/",$offset."/".$restdir);
			//print "full path dir=$fulldir\n";
			
			if (!file_exists($fulldir)) {
				//mkdir($fulldir,0777,true);
				mkpaths($fulldir);
				//print "Created path:$fulldir\n";	
			}
			
			if (isset($IN['FileType'])) {
				if ($IN['FileType'] == 'Binary') {
					// For PHP 5 and up
					$handle = fopen($f, "rb");
					file_put_contents($t,stream_get_contents($handle));
					fclose($handle);	
				}
			} else {
				file_put_contents($t,file_get_contents($f));
				print "installed:".$f."=>".$t;
			}
		}
	} else {
		print "$t already installed.";
	}
	exit();	
}
if (isset($_GET["RawSrc"])) {
	//return none utf8 encoded source code.
	if (isset($_GET["localname"])) {
		if (substr($_GET["RawSrc"],0,strlen($_GET["localname"])) == $_GET["localname"]) {
			$_GET["RawSrc"] = "local".substr($_GET["RawSrc"],strlen($_GET["localname"]));
		}
	}
	
	$s = dirname(realpath("."))."/".$_GET["RawSrc"];
	//print $s;
	$s = realpath(str_replace("/","\\",$s));
	if (file_exists($s)) {
		print file_get_contents($s);
	} else {
		print "{#WikiText#}\n";
	}
	exit();	
		
}
if (isset($_GET["Src"])) {
	//return source code....
	if (isset($_GET["localname"])) {
		if (substr($_GET["Src"],0,strlen($_GET["localname"])) == $_GET["localname"]) {
			$_GET["Src"] = "local".substr($_GET["Src"],strlen($_GET["localname"]));
		}
	}
	if (file_exists($_GET["Src"])) {
		/* hack since textareas break our codesense control! */
		$s = file_get_contents($_GET["Src"]);
		 $s = str_replace("</text(!&'area'!)","</text(!&'area'!)",$s);
		$s = str_replace("</text(!&'area'!)","</text(!&'area'!)",$s);
	
		print utf8_encode($s);//js is always assumed to be utf8
	} else {
		print "{#WikiText#}\n";
	}
	exit();	
	
}
if (isset($_GET["SaveSrc"])||isset($_POST["SaveSrc"])) {
	//save source code....
	$SaveSrc = @$_GET["SaveSrc"].@$_POST["SaveSrc"];
	
	if (isset($_GET["localname"])) {
		if (substr($SaveSrc,0,strlen($_GET["localname"])) == $_GET["localname"]) {
			$SaveSrc = "local".substr($SaveSrc,strlen($_GET["localname"]));
		}
	}
	
	print "//$SaveSrc\n";
	if (file_exists($SaveSrc)) {
		copy($SaveSrc,$SaveSrc.".old");
	}
	
	if(get_magic_quotes_gpc()) {//undo magic quotes, we are saving to a raw html file :-(
		$_POST["Contents"] =  stripslashes($_POST['Contents']);
	}
	$fp = fopen($SaveSrc,"w");
	fwrite($fp,utf8_decode($_POST["Contents"]));//always posted as utf8?
	fclose($fp);
	exit();	
}

/**
* return JSON object containing pages...
*/
$indent = 0;
function dirlist($path) {
	global $indent;
	$indent++;
	//print "//dirlist($path)<br/>\n";
	$c = 0;
	foreach(glob("$path/*",GLOB_ONLYDIR ) as $dir) {
		$c++;
		if (($dir != ".") && ($dir != "..") ) {
			$dir = basename($dir);
			//print $dir."<br/>\n";	
			if ($c>1) { print ",";}
			str_repeat("\t",$indent);
			print "$dir:{\n";
			dirlist("$path/$dir");
			str_repeat("\t",$indent);
			print "\n}\n";
		}
	}
	//$c = 0;
	//print "//$path/*.js<br/>\n";
	$ls = glob("$path/*.js");
	if ($ls) {
		foreach($ls as $file) {
			$c++;
			$f = basename($file,'.js');
			if ($c>1) { print ",";}
			str_repeat("\t",$indent);
			print "$f:".file_get_contents($file);
			//print $file."<br/>\n";			
		}
	}
}
$Namespace = 'http://'.$_SERVER['SERVER_NAME'].":".$_SERVER['SERVER_PORT'].dirname(dirname($_SERVER['SCRIPT_NAME']))."?api=WikiApp3&script=system/EditGateway.php";
//$Namespace = $_SERVER['SERVER_NAME'].dirname(dirname($_SERVER['REQUEST_URI']))."?api=WikiApp3";

print "\$j.extend(App3.go,{\n";
if (isset($_GET['area'])) {
	print "\t'${_GET['area']}':{\n";
	print "\t\t_Namespace:'".$Namespace."',\n";
		dirlist($_GET['area']);
	print "\t}\n";
} else {
	if (isset($_GET['localarea'])) {
		$Namespace = $Namespace.$_GET['localarea']."/";
		print "\t'${_GET['localarea']}':{\n";
		//print "\t\t_Namespace:".$Namespace;
			dirlist("local");
		print "\t}\n";
	} else {
		print "\t\t_Namespace:'".$Namespace."',\n";
		print "local:{\n";
		dirlist("local");
		print "}\n";
	}
}
print "});\n";
?>