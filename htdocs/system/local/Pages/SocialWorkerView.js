function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("\n<img src=\"img/ajaxLoading.gif\"/>ladda...<script>\n");
var nam=ns.url.split("/").pop();
var cleanName = unescape(nam);

 out.push("\ndataViews.SocialWorkers.clearFilter();\ndataViews.SocialWorkers.addFilter('Name','*','");
try{d=cleanName;}catch(e){d=''}out.push(d);
 out.push("');\n\ndataViews.SocialWorkers.firstRow({\n    OnComplete:function(Id){\n        App3.Navigate2('local/Pages/SocialWorker/'+Id,\n            {target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("'}\n        );\n    },NoNewPage:function(){\n        alert('Socialarbetare ");
try{d=cleanName;}catch(e){d=''}out.push(d);
 out.push(" kunde inte hittas');\n        App3.Navigate2('local/Pages/SocialWorkerSearch',\n            {target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("'}\n        );\n    }\n});\n</script>");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
