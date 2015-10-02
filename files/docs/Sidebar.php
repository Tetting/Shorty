<ul class="LiveTree" style="margin-left:0px;padding-left:0px;">
<li><a onclick="App.displayDoc('Home');">Hem</a>
<li class="hasChildren">Sida<ul>
<?
foreach(glob(dirname(__FILE__)."/*.htm") as $file) {
	$f = basename($file,'.htm');
	print "<li><a onclick='App.displayDoc(\"$f\");'>".$f."</a>";
}
?>
</ul>
</ul>
