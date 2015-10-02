function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<div style=\"height:18px;\"></div>\n");
if (ns.data) {
var r= ns.data;

 out.push("\n\n<table class=\"EditTable\" style='width:220px;'>\n<thead>\n    <tr><th colspan=\"2\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverEdit717\">Givare</span></th></tr>\n    <col /><col />\n\n    <tr><td><label>Nr:</label></td><td><a class=ajaxLink target=AppPages href=\"Pages/Giver/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\">");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n    <tr><td><label>Namn:</label></td><td>");
try{d=r.Name;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Efternamn:</label></td><td>");
try{d=r.LastName;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>c/o:</label></td><td>");
try{d=r.CoAddress;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Adress:</label></td><td>");
try{d=r.Address;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>PostNr:</label></td><td>");
try{d=r.ZipCode;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>PostOrt:</label></td><td>");
try{d=r.ZipTown;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<img src=\"img/ajaxLoading.gif\"/>ladda...<script>\ndataViews.Givers.getRecord({\n    Id:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    ,PK:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    ,OnComplete:function(Record){\n        App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',\n            {target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:Record,Id:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("' }\n        );\n    }\n});\n</script>\n");
}
 out.push("\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
