<?
/**
 * Generic autoloader with little magic
 * maps _ to / in class name then sees if the path exists, 
 * uses spl_autoload so multiple autoloaders can be used.
 * @author Simon Horton <sihorton@gmail.com>
*/
set_include_path(dirname(__FILE__) ."/do/" . PATH_SEPARATOR . get_include_path());//let zend work.
function autoload($class) {
	$path = str_replace("_", "/", $class).".php";
	$path = dirname(__FILE__)."/do/{$path}";
	if (!file_exists($path)) {
		return false;
	} else {
		include($path);
	}
	return true;
}
spl_autoload_register('autoload');