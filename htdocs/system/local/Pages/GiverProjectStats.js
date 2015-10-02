function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("\n<span class='NewIcon EditIcon' style=\"margin-left:50px;\">\n        <a class='ajaxLink' href='Pages/GivProjNew?GiverId=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("' target='giverProjectStats'>Nytt Givarprojekt</a>\n    </span>\n<span class=\"EditIcon\" style=\"float:right;margin-right:60px;height:12px;\">\n<a onclick=\"\ndataViews.GivProjs.clearFilter();\ndataViews.GivProjs.addFilter('GiverId','$','");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("');\ndataViews.GivProjs.getList({\n    OnComplete:function(data,Recordset,DataView){\n\n        \nApp3.Navigate2('local/Pages/GivProjs?GiverId=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'AppPages',target:'AppPages',data:data,Recordset:Recordset,DataView:DataView\n,GiverId:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("' });\n    }\n}); \n\" ><img src=\"img/multiple.png\"> Ut&ouml;ka</a>\n</span>\n\n<table class='ListTable'>\n<tr>\n<th>#</th>\n<th>Projekt</th>\n<th>Kr/m&aring;n</th>\n<th>B&ouml;rjat</th>\n<th>Senaste</th><th>12 m&aring;n tot</th></tr>\n");

var r;
if (ns.data.length == 0) {
 out.push("\n<tr><td colspan=6><center>Ingen</center></td></tr>\n");

} else {
for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];
if (r['KrMon'] == 0) {
    r['KrMon'] = '';
}

 out.push("\n<tr >\n<td>\n");
if (r['Id'] && !r['multiple']){
 out.push("\n<a class=\"ajaxLink\" href=\"\nPages/GivProjPromisesMonthly/");
try{d=r['Id'];}catch(e){d=''}out.push(d);
 out.push("?GiverId=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("\">#</a>\n");
} else {
    if (r['multiple']) {
 out.push("\n<a class=\"linkClick\" onclick=\"\ndataViews.GivProjs.clearFilter();\ndataViews.GivProjs.addFilter('GiverId','$','");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("');\ndataViews.GivProjs.getList({\n    OnComplete:function(data,Recordset,DataView){\n\n        \nApp3.Navigate2('local/Pages/GivProjs',{navTarget:'AppPages',target:'AppPages',data:data,Recordset:Recordset,DataView:DataView\n });\n    }\n}); \n\" ><img src=\"img/multiple.png\"/></a>\n");

}
}
 out.push("</td>\n<td ><a class=\"ajaxLink\" target=\"AppPages\" href=\"Pages/Project/");
try{d=r['ProjectId'];}catch(e){d=''}out.push(d);
 out.push("\">");
try{d=r['ProjectId'];}catch(e){d=''}out.push(d);
 out.push("</a></td>\n<td>");
out.push(dataConvert.toSEK(r['KrMon']))
 out.push("</td>\n<td>");
try{d=r['StartDt'];}catch(e){d=''}out.push(d);
 out.push("</td>\n<td>");
try{d=r['Senast'];}catch(e){d=''}out.push(d);
 out.push("</td>\n<td>");
out.push(dataConvert.toSEK(r['tot']))
 out.push("</td>\n</tr>\n");

}
}

 out.push("\n<!--<tr><th colspan=6><center><button onclick=\"\ndataViews.GivProjs.clearFilter();\ndataViews.GivProjs.addFilter('GiverId','$','");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("');\ndataViews.GivProjs.getList({\n    OnComplete:function(data,Recordset,DataView){\n        App3.Navigate2('local/Pages/GivProjs',{navTarget:'AppPages',target:'AppPages',data:data,Recordset:Recordset,DataView:DataView });\n    }\n}); \n\">Ut&ouml;ka</button></center></td></tr>-->\n</table>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
