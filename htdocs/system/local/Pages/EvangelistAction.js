function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"EvangelistActionsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"EvangelistActionProtoHeader\">Handling</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/EvangelistActionNew?entityId=");
try{d=ns.entityId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/EvangelistActions?entityId=");
try{d=ns.entityId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n\n");
if (ns.data) {
var r= ns.data;

 out.push("\n\n<span class=\"EditIcon DeleteIcon\" style=\"float:right\">\n    <a onclick=\"dataViews.EvangelistActions.deleteRecord({Id:'");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("',PK:'");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("',OnComplete:function(){App3.Navigate2('http://local/Pages/EvangelistActions',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("' });}});\">Ta Bort</a>\n</span>\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan=\"2\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"EvangelistActionEdit_fields\">Uppgifter</span></th></tr>\n    <col /><col />\n\n    <tr><td><label>#:</label></td><td>");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Handling:</label></td><td><span id=\"EvangelistAction_actionName_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"EvangelistActions.actionName\" dataPK=\"");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['actionName']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>Date:</label></td><td><span id=\"EvangelistAction_date_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"EvangelistActions.date\" dataPK=\"");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['date']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>Notering:</label></td><td><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap='off'  class=\"Editable\"  cols=\"20\" rows=\"10\" id=\"EvangelistAction_notes_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onchange=\"EditInPlace4.quickSave('EvangelistActions.notes','");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\" data-fieldName=\"EvangelistAction.notes\">");
try{d=r.notes;}catch(e){d=''}out.push(d);
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td>\n\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<img src=\"img/ajaxLoading.gif\"/>ladda...<script>\ndataViews.EvangelistActions.getRecord({\n    Id:'");
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
