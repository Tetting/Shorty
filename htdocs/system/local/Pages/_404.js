function(params){
	/* automatically display proto pages. */
	console.info("404=",params,this);
	if (params._404_mod.substring(0,12) == "local/Pages/") {
		if (App3.go.local.Proto[params._404_mod.substring(12)]) {
			params.url = params._fullurl;
			return App3.go.local.Proto[params._404_mod.substring(12)](params);
		} else {
			//if(!ns.Id){ns.Id=ns.url.split("/").pop();}	
			//a little hacky, to deal with links that include ids...
			var p = params._404_mod.substring(12).split("/").slice(0,-1).join('');
			if (App3.go.local.Proto[p]) {
				params.url = params._fullurl;
				return App3.go.local.Proto[p](params);
			}
		}
	}
	console.info(params,this);
	var o=new Array();
	o.push('404: Page not found!  ('+params['_404']+')<br/>');
	//o.push('(tried:'+params['_404_mod']+')<br/>');
	o.push('<a href="/Pages/Home" class="ajaxLink">Home</a><br/>');
	if (App3.go['editor'] != undefined) {
		if (params['_404_mod'] != undefined) {
			//we have a modified 404, i.e. what we were actually looking for...
			//useful for injection...
			o.push('<a href="http://editor/CreatePage.php?PageName='+params['_404_mod']+'" class="ajaxLink">Create</a><br/>');
		} else {
			//a full url..
			o.push('<a href="http://editor/CreatePage.php?fullpage='+params['_404']+'" class="ajaxLink">Create</a><br/>');
		}
	}
	return o.join('');
}