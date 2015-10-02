function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"UsersBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"UserProtoHeader\">Anv&auml;ndare</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/UserNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Users\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = \"\"+jQuery('<div/>').html(\"Anv&auml;ndare: ");
try{d=ns.data['Username'];}catch(e){d=''}out.push(d);
 out.push("\").text()+\"\";\n</script><br/>\n\n");
if (ns.data) {
var r= ns.data;

 out.push("\n\n<span class=\"EditIcon DeleteIcon\" style=\"float:right\">\n    <a onclick=\"dataViews.Users.deleteRecord({Id:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',PK:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',OnComplete:function(){App3.Navigate2('http://local/Pages/Users',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("' });}});\">Ta Bort</a>\n</span>\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan=\"2\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"UserEdit_fields\">Uppgifter</span></th></tr>\n    <col /><col />\n\n    <tr><td><label>#:</label></td><td>");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Anv&auml;ndarnamn:</label></td><td><span id=\"User_Username_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Users.Username\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['Username']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>L&ouml;senord:</label></td><td><input type=\"password\" id=\"User_Password_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"****\"/><input type=\"button\" value=\"OK\" onclick=\"EditInPlace4.quickPassSave('Users.Password','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',document.getElementById('User_Password_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value)\"/>\n    \n</td>\n\n    <tr><td><label>F&ouml;rnamn:</label></td><td><span id=\"User_FirstName_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Users.FirstName\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['FirstName']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>Efternamn:</label></td><td><span id=\"User_LastName_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Users.LastName\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['LastName']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>Status:</label></td><td>\n<select class=\"Editable\" id=\"User_Status_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onchange=\"EditInPlace4.quickSave('Users.Status','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\">\n\n<option value=\"Aktiv\" ");
if (r.Status=='Aktiv'){o.push('selected');}
 out.push(">Aktiv</option>\n\n<option value=\"Inaktiv\" ");
if (r.Status=='Inaktiv'){o.push('selected');}
 out.push(">Inaktiv</option>\n\n</select></td>\n\n    <tr><td><label>Notering:</label></td><td><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap='off'  class=\"Editable\"  cols=\"20\" rows=\"10\" id=\"User_Notes_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onchange=\"EditInPlace4.quickSave('Users.Notes','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\" data-fieldName=\"User.Notes\">");
try{d=r.Notes;}catch(e){d=''}out.push(d);
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td>\n\n    <tr><td><label>Db:</label></td><td>\n<select class=\"Editable\" id=\"Db357");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onchange=\"EditInPlace4.quickSave('Users.Db','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\">\n");

var l = dataViews.Databases.allRecordSet.Rows.length;
for(var si=0;si<l;si++) {s=dataViews.Databases.allRecordSet.Rows[si];

 out.push("\n<option value=\"");
try{d=s.Id;}catch(e){d=''}out.push(d);
 out.push("\" ");
if (s.Id==r.Db){o.push('selected');}
 out.push(">");
try{d=s.Name;}catch(e){d=''}out.push(d);
 out.push("</option>\n");
}
 out.push("\n</select></td>\n\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<img src=\"img/ajaxLoading.gif\"/>ladda...<script>\ndataViews.Users.getRecord({\n    Id:'");
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
