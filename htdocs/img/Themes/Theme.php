<?
/**
* Theme loader
*/

$IN = array_merge($_GET,$_POST);

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
	$files=glob("$path/*.htm");
	if ($files) {
		foreach($files as $file) {
			$c++;
			$f = basename($file,'.htm');
			if ($c>1) { print ",";}
			str_repeat("\t",$indent);
			$text = file_get_contents($file);
			$text =str_replace("'","\\'",$text);
			$text =str_replace("\r","",$text);
			$text =str_replace("\n","\\n",$text);
			
			print "$f:'".$text."'";
			//print $file."<br/>\n";	
			
		}
	}
}
$Namespace = 'http://'.$_SERVER['SERVER_NAME'].":".$_SERVER['SERVER_PORT'].dirname(dirname($_SERVER['SCRIPT_NAME']))."?api=WikiApp3&script=system/EditGateway.php";
//$Namespace = $_SERVER['SERVER_NAME'].dirname(dirname($_SERVER['REQUEST_URI']))."?api=WikiApp3";

print "\$j.extend(App3.go.local,{\n";
if (isset($_GET['Theme'])) {
	print "\tTheme:{\n";
	print "\t\t_Namespace:'".$Namespace."',\n";
		dirlist($_GET['Theme']);
	print "\t}\n";
}
print "});\n";
?>