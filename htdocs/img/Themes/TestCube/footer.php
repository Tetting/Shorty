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


$(document).on('click','.tagsinput .tag',function() {
	var id = $(this).closest('.tag').parent().attr('id');
	id = id.substr(0,id.length - 10);
	var dat = $('#'+id).attr('data-fieldname');
	var page = 'local/Pages/'+dat.split('.')[0]+'/';
	var datasrc = dataViews[dat.split('.')[0]+'s'];
	var txt = jQuery.trim($(this).closest('.tag').text());
	datasrc.clearFilter();
	datasrc.addFilter(dat.split('.')[1],'£',txt);
	datasrc.firstRow({
		OnComplete:function() {     
			if (datasrc.curRecordSet.Hits > 0) {
				var id = datasrc.curRecordSet.Rows[0]['Id'];
				App3.Navigate2(page+id,{target:'AppPages'});
			} else {
				alert('Ingen träff');
			} 
		},NoNewPage:function() {
			alert('Ingen träff');
		}
	}); 
});
</script>

