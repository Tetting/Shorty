function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"EvangelistsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"EvangelistNew_ProtoHeader\">Evangelist</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/EvangelistNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Evangelists\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = $('<div/>').html(\"Ny Evangelist\").text();\n</script><br/>\n\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan='2'><center><span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"EvangelistNew_fields\">Uppgifter</span></center></th></tr>\n</thead>\n<tbody>\n\n<tr><td><label>Name</label>:</td><td><input id=\"Evangelist_Name_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>DOB</label>:</td><td><input id=\"Evangelist_DOB_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>GiverId</label>:</td><td>\n<input type=\"text\" id=\"Evangelist_GiverId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"0\" OnChange=\"\"/>\n<a style=\"cursor:pointer;\" onclick=\"\nif($j('#Evangelist_GiverId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').css('display')=='none') {\n$j('#Evangelist_GiverId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').show();\nApp3.Navigate2('local/Pages/GiverSelect',{target:'Evangelist_GiverId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'});\n} else {\n$j('#Evangelist_GiverId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').hide();\n}\n\"><span class=\"EditLink\" style=\"display:none;\" id=\"Evangelist_GiverId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\">undefined</span>\n\n<button>V�lj</button></a>\n<br/>\n<div id=\"Evangelist_GiverId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area\" style=\"display:none;position:relative;\" datadisplay=\"Evangelist_GiverId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\" datastoreid=\"Evangelist_GiverId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"><div id=\"Evangelist_GiverId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"PopupSelect\" style=\"position:absolute;background:#EEEEEE;\">loading...</div></div>\n\n</td></tr>\n\n<tr><td><label>HelpD</label>:</td><td><input id=\"Evangelist_HelpD_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" value=\"\"/>\n<script>$j('#Evangelist_HelpD_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td></tr>\n\n<tr><td><label>Mkr</label>:</td><td><input id=\"Evangelist_Mkr_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Area1</label>:</td><td><input id=\"Evangelist_Area1_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Area</label>:</td><td><input id=\"Evangelist_Area_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>TGdt</label>:</td><td><input id=\"Evangelist_TGdt_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" value=\"\"/>\n<script>$j('#Evangelist_TGdt_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td></tr>\n\n<tr><td><label>CountryCode</label>:</td><td><input id=\"Evangelist_CountryCode_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Notes</label>:</td><td><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap=\"off\" cols=\"20\" rows=\"10\" id=\"Evangelist_Notes_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td></tr>\n\n<tr><td><label>Status</label>:</td><td><input id=\"Evangelist_Status_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Db</label>:</td><td><input id=\"Evangelist_Db_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n</tbody>\n<tfoot><tr><td colspan=\"2\"><center Task=\"Project4.Task\" Component=\"EvangelistNew_fields\" class=\"TaskEdit4\">\n\n<input type=\"button\" value=\"L&auml;gg till\" onclick=\"\ndataViews.Evangelists.newRecord({\nNewRecord:{\nName:document.getElementById('Evangelist_Name_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nDOB:document.getElementById('Evangelist_DOB_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nGiverId:document.getElementById('Evangelist_GiverId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nHelpD:document.getElementById('Evangelist_HelpD_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nMkr:document.getElementById('Evangelist_Mkr_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nArea1:document.getElementById('Evangelist_Area1_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nArea:document.getElementById('Evangelist_Area_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nTGdt:document.getElementById('Evangelist_TGdt_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nCountryCode:document.getElementById('Evangelist_CountryCode_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nNotes:document.getElementById('Evangelist_Notes_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nStatus:document.getElementById('Evangelist_Status_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nDb:document.getElementById('Evangelist_Db_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n\n}\n,OnComplete:function(response){\n\n//document.getElementById('NewEvangelist_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value = '';\n//document.getElementById('NewEvangelist_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\ndataViews.Evangelists.dataChanged();\nApp3.Navigate2('local/Pages/Evangelists',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',forceRead:true });\n\n}\n});\n\"/></center>\n</td></tr></tfoot>\n</table>\n<script>\ntry {\ndocument.getElementById('Evangelist_Name_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\n} catch(e) {\n//no problem.\n}\n</script>\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
