function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"GivProjPromisessBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"GivProjPromisesNew_ProtoHeader\">Eng&aring;ngsl&ouml;fte</span> \n\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/GivProjPromisess?GiverId=");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan='2'><center><span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"GivProjPromisesNew_fields\">Uppgifter</span></center></th></tr>\n</thead>\n<tbody>\n\n<tr><td><label>Givare#</label>:</td><td><input type=\"hidden\" id=\"GivProjPromises_GiverId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("\"/>");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("\n\n</td></tr>\n\n<tr><td><label>StartDt</label>:</td><td><input id=\"GivProjPromises_StartDt_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" value=\"\"/>\n<script>$j('#GivProjPromises_StartDt_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td></tr>\n\n<tr><td><label>Projekt#</label>:</td><td>\n<input type=\"text\" id=\"GivProjPromises_ProjectId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"0\" OnChange=\"\"/>\n<a style=\"cursor:pointer;\" onclick=\"\nif($j('#GivProjPromises_ProjectId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').css('display')=='none') {\n$j('#GivProjPromises_ProjectId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').show();\nApp3.Navigate2('local/Pages/ProjectSelect',{target:'GivProjPromises_ProjectId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'});\n} else {\n$j('#GivProjPromises_ProjectId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').hide();\n}\n\"><span class=\"EditLink\" style=\"display:none;\" id=\"GivProjPromises_ProjectId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\">undefined</span>\n\n<button>Välj</button></a>\n<br/>\n<div id=\"GivProjPromises_ProjectId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area\" style=\"display:none;position:relative;\" datadisplay=\"GivProjPromises_ProjectId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\" datastoreid=\"GivProjPromises_ProjectId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"><div id=\"GivProjPromises_ProjectId_NewPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"PopupSelect\" style=\"position:absolute;background:#EEEEEE;\">loading...</div></div>\n\n</td></tr>\n\n<tr><td><label>L&ouml;fte</label>:</td><td><input id=\"GivProjPromises_OneTimePromise_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n</tbody>\n<tfoot><tr><td colspan=\"2\"><center Task=\"Project4.Task\" Component=\"GivProjPromisesNew_fields\" class=\"TaskEdit4\">\n\n<input type=\"button\" value=\"L&auml;gg till\" onclick=\"\ndataViews.GivProjPromisess.newRecord({\nNewRecord:{\nGiverId:document.getElementById('GivProjPromises_GiverId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nStartDt:document.getElementById('GivProjPromises_StartDt_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nProjectId:document.getElementById('GivProjPromises_ProjectId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nOneTimePromise:document.getElementById('GivProjPromises_OneTimePromise_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n\n}\n,OnComplete:function(response){\nApp3.Navigate2('local/Pages/GivProjPromisess?GiverId=");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("',forceRead:true });\n}\n});\n\"/></center>\n</td></tr></tfoot>\n</table>\n<script>\ntry {\ndocument.getElementById('GivProjPromises_GiverId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\n} catch(e) {\n//no problem.\n}\n</script>\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
