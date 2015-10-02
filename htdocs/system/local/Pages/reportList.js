function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("");

 out.push("\n<p>\n</p><div class=\"group\"><img src=\"img/page_white_lightning.png\"/> Rapporter</div>\n<img width=\"7\" height=\"15\" align=\"left\" style=\"padding-left: 8px;\" src=\"img/t.gif\"/><a class=\"sitemaplink ajaxLink\" href=\"Pages/CustomReports\" target=AppPages>List all</a><br clear=\"all\"/>\n");

var r;

for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];
if (ri < ns.data.length-1) {

 out.push("\n<img width=\"7\" height=\"15\" align=\"left\" style=\"padding-left: 8px;\" src=\"img/t.gif\"/><a class=\"sitemaplink ajaxLink\" href=\"Pages/runReport/");
try{d=r['Id'];}catch(e){d=''}out.push(d);
 out.push("\" target=AppPages>");
try{d=r['Name'];}catch(e){d=''}out.push(d);
 out.push("</a><br clear=\"all\"/>\n");

} else {

 out.push("\n<img width=\"7\" height=\"15\" align=\"left\" style=\"padding-left: 8px;\" src=\"img/bt.gif\"/><a class=\"sitemaplink ajaxLink\" href=\"Pages/runReport/");
try{d=r['Id'];}catch(e){d=''}out.push(d);
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
