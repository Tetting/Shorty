function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"SocialWorkAreasBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"SocialWorkAreaNew_ProtoHeader\">Omr&aring;de</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/SocialWorkAreaNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/SocialWorkAreas\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = $('<div/>').html(\"Ny Omr&aring;de\").text();\n</script><br/>\n\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan='2'><center><span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"SocialWorkAreaNew_fields\">Uppgifter</span></center></th></tr>\n</thead>\n<tbody>\n\n<tr><td><label>Land</label>:</td><td><input id=\"SocialWorkArea_CountryCode_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Omr&aring;de</label>:</td><td><input id=\"SocialWorkArea_Area_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Omr&aring;de1</label>:</td><td><input id=\"SocialWorkArea_Area1_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>SocialWorkerId</label>:</td><td>\n<input type=\"text\" id=\"SocialWorkArea_SocialWorkerId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"0\" OnChange=\"\"/>\n<a style=\"cursor:pointer;\" onclick=\"\nif($j('#SocialWorkArea_SocialWorkerId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').css('display')=='none') {\n$j('#SocialWorkArea_SocialWorkerId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').show();\nApp3.Navigate2('local/Pages/SocialWorkerSelect',{target:'SocialWorkArea_SocialWorkerId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'});\n} else {\n$j('#SocialWorkArea_SocialWorkerId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').hide();\n}\n\"><span class=\"EditLink\" style=\"display:none;\" id=\"SocialWorkArea_SocialWorkerId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\">undefined</span>\n\n<button>Välj</button></a>\n<br/>\n<div id=\"SocialWorkArea_SocialWorkerId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area\" style=\"display:none;position:relative;\" datadisplay=\"SocialWorkArea_SocialWorkerId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\" datastoreid=\"SocialWorkArea_SocialWorkerId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"><div id=\"SocialWorkArea_SocialWorkerId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"PopupSelect\" style=\"position:absolute;background:#EEEEEE;\">loading...</div></div>\n\n</td></tr>\n\n</tbody>\n<tfoot><tr><td colspan=\"2\"><center Task=\"Project4.Task\" Component=\"SocialWorkAreaNew_fields\" class=\"TaskEdit4\">\n\n<input type=\"button\" value=\"L&auml;gg till\" onclick=\"\ndataViews.SocialWorkAreas.newRecord({\nNewRecord:{\nCountryCode:document.getElementById('SocialWorkArea_CountryCode_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nArea:document.getElementById('SocialWorkArea_Area_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nArea1:document.getElementById('SocialWorkArea_Area1_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nSocialWorkerId:document.getElementById('SocialWorkArea_SocialWorkerId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n\n}\n,OnComplete:function(response){\n\n//document.getElementById('NewSocialWorkArea_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value = '';\n//document.getElementById('NewSocialWorkArea_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\ndataViews.SocialWorkAreas.dataChanged();\nApp3.Navigate2('local/Pages/SocialWorkAreas',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',forceRead:true });\n\n}\n});\n\"/></center>\n</td></tr></tfoot>\n</table>\n<script>\ntry {\ndocument.getElementById('SocialWorkArea_CountryCode_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\n} catch(e) {\n//no problem.\n}\n</script>\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
