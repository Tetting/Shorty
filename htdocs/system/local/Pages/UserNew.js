function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"UsersBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"UserNew_ProtoHeader\">Anv&auml;ndare</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/UserNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Users\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan='2'><center><span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"UserNew_fields\">Uppgifter</span></center></th></tr>\n</thead>\n<tbody>\n\n<tr><td><label>Anv&auml;ndarnamn</label>:</td><td><input id=\"User_Username_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>L&ouml;senord</label>:</td><td><input id=\"User_Password_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"password\" value=\"\"/></td></tr>\n\n<tr><td><label>F&ouml;rnamn</label>:</td><td><input id=\"User_FirstName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Efternamn</label>:</td><td><input id=\"User_LastName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Status</label>:</td><td>\n<select id=\"User_Status_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n\n<option value=\"Aktiv\">Aktiv</option>\n\n<option value=\"Inaktiv\">Inaktiv</option>\n\n</select></td></tr>\n\n</tbody>\n<tfoot><tr><td colspan=\"2\"><center Task=\"Project4.Task\" Component=\"UserNew_fields\" class=\"TaskEdit4\">\n\n<input type=\"button\" value=\"L&auml;gg till\" onclick=\"\ndataViews.Users.newRecord({\nNewRecord:{\nUsername:document.getElementById('User_Username_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nPassword:document.getElementById('User_Password_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nFirstName:document.getElementById('User_FirstName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nLastName:document.getElementById('User_LastName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nStatus:document.getElementById('User_Status_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n\n}\n,OnComplete:function(response){\n\n//document.getElementById('NewUser_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value = '';\n//document.getElementById('NewUser_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\ndataViews.Users.dataChanged();\nApp3.Navigate2('local/Pages/Users',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',forceRead:true });\n\n}\n});\n\"/></center>\n</td></tr></tfoot>\n</table>\n<script>\ntry {\ndocument.getElementById('User_Username_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\n} catch(e) {\n//no problem.\n}\n</script>\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
