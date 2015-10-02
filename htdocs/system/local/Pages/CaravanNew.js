function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"CaravansBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"CaravanNew_ProtoHeader\">Caravan</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/CaravanNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Caravans\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan='2'><center><span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"CaravanNew_fields\">Uppgifter</span></center></th></tr>\n</thead>\n<tbody>\n\n<tr><td><label>Regnr</label>:</td><td><input id=\"Caravan_Regnr_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Notes</label>:</td><td><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap=\"off\" cols=\"20\" rows=\"10\" id=\"Caravan_Notes_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td></tr>\n\n<tr><td><label>Status</label>:</td><td><input id=\"Caravan_Status_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Db</label>:</td><td><input id=\"Caravan_Db_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n</tbody>\n<tfoot><tr><td colspan=\"2\"><center Task=\"Project4.Task\" Component=\"CaravanNew_fields\" class=\"TaskEdit4\">\n\n<input type=\"button\" value=\"L&auml;gg till\" onclick=\"\ndataViews.Caravans.newRecord({\nNewRecord:{\nRegnr:document.getElementById('Caravan_Regnr_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nNotes:document.getElementById('Caravan_Notes_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nStatus:document.getElementById('Caravan_Status_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nDb:document.getElementById('Caravan_Db_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n\n}\n,OnComplete:function(response){\n\n//document.getElementById('NewCaravan_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value = '';\n//document.getElementById('NewCaravan_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\ndataViews.Caravans.dataChanged();\nApp3.Navigate2('local/Pages/Caravans',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',forceRead:true });\n\n}\n});\n\"/></center>\n</td></tr></tfoot>\n</table>\n<script>\ntry {\ndocument.getElementById('Caravan_Regnr_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\n} catch(e) {\n//no problem.\n}\n</script>\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
