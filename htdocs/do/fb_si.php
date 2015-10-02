<?php
/**
* Detect if firebug is installed, and send debug statements, otherwise eat all debug.
*	fb('Info message' ,FirePHP::INFO);
*	fb($_SERVER, 'Server Variables', FirePHP::WARN);
*	fb($_SERVER, 'Server Variables', FirePHP::ERROR);
*/

if (isset($_SERVER['HTTP_USER_AGENT'])) {
	if (stristr($_SERVER['HTTP_USER_AGENT'],"FirePHP")>-1) {
		ob_start();
		require_once 'fb.php';
} else {
		class FirePHP { 
		  const LOG = 'LOG';
		  const INFO = 'INFO';
		  const WARN = 'WARN';
		  const ERROR = 'ERROR';
		  const DUMP = 'DUMP';
		  const EXCEPTION = 'EXCEPTION';
		}function fb(){};
	}
} else {
	class FirePHP { 
	  const LOG = 'LOG';
	  const INFO = 'INFO';
	  const WARN = 'WARN';
	  const ERROR = 'ERROR';
	  const DUMP = 'DUMP';
	  const EXCEPTION = 'EXCEPTION';
	}function fb(){};
}
?>