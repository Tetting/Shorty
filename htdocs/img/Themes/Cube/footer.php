<script>
$j("#WikiApp3").bind("AppInit.Theme",{},function(event){
		//console.warn("WikiApp3 Theme AppInit");
		
	}).bind("AppLoggedIn.Theme",{},function(event, data2){
		//console.warn("WikiApp3 Theme AppLoggedIn");
		App3.Navigate2('local/Theme/Menu',{target:'menu'});
		App3.Navigate2('local/Theme/Footer',{target:'AppFooter'});
		if (data2 && data2.InitPage) {
			App3.Navigate2('local' + data2.InitPage,{target:'AppPages'});
		} else {
			App3.Navigate2('local/Pages/Home',{target:'AppPages'});
		}
		Nifty("div#AppFooter");
		Nifty("div#AppLayout","bottom");
		Nifty("div#menu a","small transparent top");    
	}).bind("AppLogOut.Theme",{},function(event){
		//console.warn("WikiApp3 AppLoggedOut");
		//console.info(window.location.href);
		var l = window.location.href;
		window.location.href = l.substring(0,l.length-window.location.hash.length);
		//console.info(window.location.href);
	});
<?include("shortcuts.php");?>
/*
jQuery(document).bind('keydown','Alt+down',function(evt) {
	$j('.RecordsetNextIcon:first').parent().click();
	return false;
});
jQuery(document).bind('keydown','Alt+up',function(evt) {
	$j('.RecordsetPreviousIcon:first').parent().click();
	return false;
});
jQuery(document).bind('keydown','Alt+left',function(evt) {
	$j('.RecordsetFirstIcon:first').parent().click();
	return false;
});
jQuery(document).bind('keydown','Alt+right',function(evt) {
	$j('.RecordsetLastIcon:first').parent().click();
	return false;
});
*/
/*
jQuery(document).bind('keydown','Alt+a',function(evt) {
	$j('.RecordsetAllIcon:first').parent().click();
	return false;
});
jQuery(document).bind('keydown','Alt+x',function(evt) {
	$j('.RecordsetClearFilterIcon:first').parent().click();
	return false;
});

jQuery(document).bind('keydown','Alt+f',function(evt) {
	$j('.SuperSearch:first').focus();
	return false;
});*/

/*
jQuery(document).bind('keydown','Alt+s',function(evt) {
	$j('.SearchBut:first').click();
	return false;
});
jQuery(document).bind('keydown','Alt+ä',function(evt) {
	$j('.EditBut:first').click();
	return false;
});
jQuery(document).bind('keydown','Alt+e',function(evt) {
	$j('.EditBut:first').click();
	return false;
});
jQuery(document).bind('keydown','Alt+n',function(evt) {
	$j('.NewIcon:first a').click();
	return false;
});
jQuery(document).bind('keydown','Alt+l',function(evt) {
	$j('.ListIcon:first a').click();
	return false;
});
*/
</script>

