<?
/**
* Code to init namespace/ functionality for JSON code...
*/
@session_start(); 

if (!isset($_SESSION["UserName"])) {
	//you must login to access these resources??
	$nologin = array('login.php'=>'','DataGateway.php'=>'','UpdateGateway.php'=>'');//these are allowed to run without login,be careful about uniqueness here.
	$file = basename($_SERVER['PHP_SELF']);
	if (!isset($nologin[$file])) {
		//trigger_error("You must login to access this resource!\nYou session may have timed out. Try logging in again.");	
		//exit();
	}
}

function ProgramError($errno, $errmsg, $errfile, $errline) {
	$errortype = array (
                E_ERROR              => 'Error',
                E_WARNING            => 'Warning',
                E_PARSE              => 'Parsing Error',
                E_NOTICE             => 'Notice',
                E_CORE_ERROR         => 'Core Error',
                E_CORE_WARNING       => 'Core Warning',
                E_COMPILE_ERROR      => 'Compile Error',
                E_COMPILE_WARNING    => 'Compile Warning',
                E_USER_ERROR         => 'User Error',
                E_USER_WARNING       => 'User Warning',
                E_USER_NOTICE        => 'User Notice',
                E_STRICT             => 'Runtime Notice',
                //E_RECOVERABLE_ERROR  => 'Catchable Fatal Error'
	);
	if ($errno < error_reporting()) {
		//print "<b>".$errno."::".error_reporting()."</b><br/>";
		/** if you have output buffering, then make sure errors come out before... **/
		if (ob_get_level() > 0) {
			$buff = TRUE;
			$out = ob_get_clean();
		}
		print utf8_encode("\n//".@$errortype[$errno].": (line $errline): $errmsg\n");
		print utf8_encode("alert('Error:".@$errortype[$errno].": (line $errline): $errmsg');\n");
		/** now output the buffer **/
		if ($buff) {
			//note decide what encoding to use here, also restart of buffering may be better to do as a function call
			//note this will not work for multiple levels of output buffer
			//but multiple buffers infers some level of program logic which we don't want to destroy.
			print $out;
			ob_start();
		}
	}
}
function programException($exception) {
	print "\n//".$exception->getMessage()."\n";
	//exit();	
}
set_error_handler("ProgramError"); 
//set_exception_handler("ProgramException");//must have php v5
function encodeSwedish($row) {
	foreach($row as $index=>$value) {
	//å=134,ä=132
		$row[$index] =str_replace(array(
		"å","Å","ö","Ö","ä","Ä"
		),array(
		"&aring;","&Aring;","&ouml;","&Ouml;","&auml;","&Auml;"
		),$value);
	}
	return $row;
}
if (file_exists("local_DBNamespace.php")) {
	include("local_DBNamespace.php");
} else {
	include("DBNamespace.php");
}
function JSONinit() {
	require("JSON.php");
	return new Services_JSON();
}
?>