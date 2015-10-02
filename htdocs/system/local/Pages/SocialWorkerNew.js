function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"SocialWorkersBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"SocialWorkerNew_ProtoHeader\">SocialWorker</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/SocialWorkerNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/SocialWorkers\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan='2'><center><span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"SocialWorkerNew_fields\">Uppgifter</span></center></th></tr>\n</thead>\n<tbody>\n\n<tr><td><label>Name</label>:</td><td><input id=\"SocialWorker_Name_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Address</label>:</td><td><input id=\"SocialWorker_Address_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>ZipCode</label>:</td><td><input id=\"SocialWorker_ZipCode_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>ZipTown</label>:</td><td><input id=\"SocialWorker_ZipTown_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Land</label>:</td><td><input id=\"SocialWorker_Land_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Tel</label>:</td><td><input id=\"SocialWorker_Tel_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Mob</label>:</td><td><input id=\"SocialWorker_Mob_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Email</label>:</td><td><input id=\"SocialWorker_Email_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>StartD</label>:</td><td><input id=\"SocialWorker_StartD_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" value=\"\"/>\n<script>$j('#SocialWorker_StartD_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td></tr>\n\n<tr><td><label>Status</label>:</td><td><input id=\"SocialWorker_Status_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Notes</label>:</td><td><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap=\"off\" cols=\"20\" rows=\"10\" id=\"SocialWorker_Notes_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td></tr>\n\n<tr><td><label>CoAddress</label>:</td><td><input id=\"SocialWorker_CoAddress_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Db</label>:</td><td><input id=\"SocialWorker_Db_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n</tbody>\n<tfoot><tr><td colspan=\"2\"><center Task=\"Project4.Task\" Component=\"SocialWorkerNew_fields\" class=\"TaskEdit4\">\n\n<input type=\"button\" value=\"L&auml;gg till\" onclick=\"\ndataViews.SocialWorkers.newRecord({\nNewRecord:{\nName:document.getElementById('SocialWorker_Name_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nAddress:document.getElementById('SocialWorker_Address_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nZipCode:document.getElementById('SocialWorker_ZipCode_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nZipTown:document.getElementById('SocialWorker_ZipTown_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nLand:document.getElementById('SocialWorker_Land_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nTel:document.getElementById('SocialWorker_Tel_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nMob:document.getElementById('SocialWorker_Mob_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nEmail:document.getElementById('SocialWorker_Email_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nStartD:document.getElementById('SocialWorker_StartD_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nStatus:document.getElementById('SocialWorker_Status_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nNotes:document.getElementById('SocialWorker_Notes_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nCoAddress:document.getElementById('SocialWorker_CoAddress_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nDb:document.getElementById('SocialWorker_Db_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n\n}\n,OnComplete:function(response){\n\n//document.getElementById('NewSocialWorker_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value = '';\n//document.getElementById('NewSocialWorker_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\ndataViews.SocialWorkers.dataChanged();\nApp3.Navigate2('local/Pages/SocialWorkers',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',forceRead:true });\n\n}\n});\n\"/></center>\n</td></tr></tfoot>\n</table>\n<script>\ntry {\ndocument.getElementById('SocialWorker_Name_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\n} catch(e) {\n//no problem.\n}\n</script>\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
