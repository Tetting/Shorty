function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("\n<div class=\"group\"><img src=\"img/page_white_lightning.png\"/> Rapporter</div>\n");

var r;

for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];
if (ri < ns.data.length-2) {

 out.push("\n<a class=\"sitemaplink ajaxLink\" href=\"Pages/runReport/");
try{d=r['Id'];}catch(e){d=''}out.push(d);
 out.push("?id=");
try{d=ns.entityId;}catch(e){d=''}out.push(d);
 out.push("\" target=AppPages>");
try{d=r['Name'];}catch(e){d=''}out.push(d);
 out.push("</a><br clear=\"all\"/>\n");

} else {

 out.push("\n<a class=\"sitemaplink ajaxLink\" href=\"Pages/runReport/");
try{d=r['Id'];}catch(e){d=''}out.push(d);
 out.push("?id=");
try{d=ns.entityId;}catch(e){d=''}out.push(d);
 out.push("\" target=AppPages>");
try{d=r['Name'];}catch(e){d=''}out.push(d);
 out.push("</a><br clear=\"all\"/>\n");

}
}

 out.push("\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
