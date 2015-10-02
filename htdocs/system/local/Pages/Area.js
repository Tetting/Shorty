function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("");
if (ns.data) {var r= ns.data;
 out.push("<table class=\"EditTable\">\n<tr><th colspan=6>Omr&aring;de</th></tr>\n<tr><td>Land: ");
try{d=r.CountryCode;}catch(e){d=''}out.push(d);
 out.push("\n</td><td>Area:");
try{d=r.Area;}catch(e){d=''}out.push(d);
 out.push("\n</td><td>Area1:");
try{d=r.Area1;}catch(e){d=''}out.push(d);
 out.push("\n</td></tr>\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<script>\ndataViews.Areas.getRecord({\n    Id:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    ,PK:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    ,OnComplete:function(Record){\n        App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("?Id=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',\n            {target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:Record }\n        );\n    }\n});\n</script><img src=\"img/ajaxLoading.gif\"/>ladda...\n\n\n");
}
 out.push("\n\n");
if(r){
 out.push("\n<br/>\n<div id=\"SocialWorker");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"><img src=\"img/AjaxLoading2.gif\"/></div>\n<script>\ndataViews.SocialWorkers.getRecord({\nId:'");
try{d=r.SocialWorkerId;}catch(e){d=''}out.push(d);
 out.push("'\n,PK:'");
try{d=r.SocialWorkerId;}catch(e){d=''}out.push(d);
 out.push("'\n,OnComplete:function(Record){\nApp3.Navigate2('local/Pages/SocialWorker?Id=");
try{d=r.SocialWorkerId;}catch(e){d=''}out.push(d);
 out.push("',\n{target:'SocialWorker");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',data:Record }\n);\n}\n});\n</script>\n");
}
 out.push("\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
