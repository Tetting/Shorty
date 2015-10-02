function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"GivProjPromisessBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"GivProjPromisesProtoHeader\">Eng&aring;ngsl&ouml;fte</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/GivProjPromisesNew?GiverId=");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/GivProjPromisess?GiverId=");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n\n");
if (ns.data) {
var r= ns.data;

 out.push("\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan=\"2\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GivProjPromisesEdit_fields\">Uppgifter</span></th></tr>\n    <col /><col />\n\n    <tr><td><label>#:</label></td><td>");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Givare#:</label></td><td><input type=\"text\" id=\"GivProjPromises_GiverId_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"GivProjPromises.GiverId\" value=\"");
try{d=r['GiverId']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n\n    <tr><td><label>StartDt:</label></td><td>");
if(r.StartDt == '0000-00-00') {r.StartDt = '';}

 out.push("<input class=\"Editable dateEdit\" id=\"GivProjPromises_StartDt_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  onchange=\"EditInPlace4.quickSave('GivProjPromisess.StartDt','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\"  data-fieldName=\"GivProjPromises.StartDt\" value=\"");
try{d=r.StartDt;}catch(e){d=''}out.push(d);
 out.push("\" size=\"12\"/>\n<script>$j('#GivProjPromises_StartDt_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td>\n\n    <tr><td><label>Projekt#:</label></td><td><input type=\"text\" id=\"GivProjPromises_ProjectId_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"GivProjPromises.ProjectId\" value=\"");
try{d=r['ProjectId']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n\n    <tr><td><label>L&ouml;fte:</label></td><td><span id=\"GivProjPromises_OneTimePromise_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"GivProjPromisess.OneTimePromise\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['OneTimePromise']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>Status:</label></td><td>\n<select class=\"Editable\" id=\"GivProjPromises_Status_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onchange=\"EditInPlace4.quickSave('GivProjPromisess.Status','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\">\n\n<option value=\"Aktiv\" ");
if (r.Status=='Aktiv'){o.push('selected');}
 out.push(">Aktiv</option>\n\n<option value=\"Inaktiv\" ");
if (r.Status=='Inaktiv'){o.push('selected');}
 out.push(">Inaktiv</option>\n\n</select></td>\n\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<img src=\"img/ajaxLoading.gif\"/>ladda...<script>\ndataViews.GivProjPromisess.getRecord({\n    Id:'");
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
