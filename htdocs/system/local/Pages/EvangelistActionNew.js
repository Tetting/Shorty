function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"EvangelistActionsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"EvangelistActionNew_ProtoHeader\">Handling</span> \n\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/EvangelistActions?entityId=");
try{d=ns.entityId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan='2'><center><span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"EvangelistActionNew_fields\">Uppgifter</span></center></th></tr>\n</thead>\n<tbody>\n\n<tr><td><label>Handelse</label>:</td><td>\n<select id=\"EvangelistAction_actionName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" >\n\n<option value=\"Ny rapport\">Ny rapport</option>\n\n</select></td></tr>\n\n<tr><td><label>datum</label>:</td><td><input id=\"EvangelistAction_date_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>noteringar</label>:</td><td><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap=\"off\" cols=\"20\" rows=\"10\" id=\"EvangelistAction_notes_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td></tr>\n\n<tr><td><label>Typ</label>:</td><td><input type=\"hidden\" id=\"EvangelistAction_entityName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"");
try{d='Evangelist';}catch(e){d=''}out.push(d);
 out.push("\"/>");
try{d='Evangelist';}catch(e){d=''}out.push(d);
 out.push("\n\n</td></tr>\n\n<tr><td><label>#</label>:</td><td><input type=\"hidden\" id=\"EvangelistAction_entityId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"");
try{d=ns.entityId;}catch(e){d=''}out.push(d);
 out.push("\"/>");
try{d=ns.entityId;}catch(e){d=''}out.push(d);
 out.push("\n\n</td></tr>\n\n</tbody>\n<tfoot><tr><td colspan=\"2\"><center Task=\"Project4.Task\" Component=\"EvangelistActionNew_fields\" class=\"TaskEdit4\">\n\n<input type=\"button\" value=\"L&auml;gg till\" onclick=\"\ndataViews.EvangelistActions.newRecord({\nNewRecord:{\nactionName:document.getElementById('EvangelistAction_actionName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nentityName:document.getElementById('EvangelistAction_entityName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nentityId:document.getElementById('EvangelistAction_entityId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\ndate:document.getElementById('EvangelistAction_date_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nnotes:document.getElementById('EvangelistAction_notes_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n\n}\n,OnComplete:function(response){\n\n//document.getElementById('NewEvangelistAction_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value = '';\n//document.getElementById('NewEvangelistAction_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\ndataViews.EvangelistActions.dataChanged();\nApp3.Navigate2('local/Pages/EvangelistActions',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',forceRead:true });\n\n}\n});\n\"/></center>\n</td></tr></tfoot>\n</table>\n<script>\ntry {\ndocument.getElementById('EvangelistAction_actionName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\n} catch(e) {\n//no problem.\n}\n</script>\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
