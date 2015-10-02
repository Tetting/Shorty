<?
@session_start();/* we may be able to remove this php code.*/
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
	<?	include("blackboard.php");?>
	<? include("headDeps.php"); ?>
</head><body id="<?=$blackboard['AppId']?>">
<?include("body.php");?>
<span id="WikiApp3"></span><?
//we could output code that should be lazy loaded here (i.e. not in the head so slow loading down)
include("footDeps.php");
include("footer.php");
?>
</body></html>