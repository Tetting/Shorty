function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"FadderbarnActionsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"FadderbarnActionProtoHeader\">Handling</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/FadderbarnActionNew?entityId=");
try{d=ns.entityId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/FadderbarnActions?entityId=");
try{d=ns.entityId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n\n");
if (ns.data) {
var r= ns.data;

 out.push("\n\n<span class=\"EditIcon DeleteIcon\" style=\"float:right\">\n    <a onclick=\"dataViews.FadderbarnActions.deleteRecord({Id:'");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("',PK:'");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("',OnComplete:function(){App3.Navigate2('http://local/Pages/FadderbarnActions',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("' });}});\">Ta Bort</a>\n</span>\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan=\"2\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"FadderbarnActionEdit_fields\">Uppgifter</span></th></tr>\n    <col /><col />\n\n    <tr><td><label>#:</label></td><td>");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Handelse:</label></td><td><input type=\"text\" id=\"FadderbarnAction_actionName_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"FadderbarnAction.actionName\" value=\"");
try{d=r['actionName']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n\n    <tr><td><label>Datum:</label></td><td>");
if(r.date == '0000-00-00') {r.date = '';}

 out.push("<input class=\"Editable dateEdit\" id=\"FadderbarnAction_date_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  onchange=\"EditInPlace4.quickSave('FadderbarnActions.date','");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\"  data-fieldName=\"FadderbarnAction.date\" value=\"");
try{d=r.date;}catch(e){d=''}out.push(d);
 out.push("\" size=\"12\"/>\n<script>$j('#FadderbarnAction_date_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td>\n\n    <tr><td><label>Notering:</label></td><td><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap='off'  class=\"Editable\"  cols=\"20\" rows=\"10\" id=\"FadderbarnAction_notes_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onchange=\"EditInPlace4.quickSave('FadderbarnActions.notes','");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\" data-fieldName=\"FadderbarnAction.notes\">");
try{d=r.notes;}catch(e){d=''}out.push(d);
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td>\n\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<img src=\"img/ajaxLoading.gif\"/>ladda...<script>\ndataViews.FadderbarnActions.getRecord({\n    Id:'");
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
