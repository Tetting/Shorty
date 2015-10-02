function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"CustomReportsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"CustomReportProtoHeader\">CustomReport</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/CustomReportNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/CustomReports\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n\n");
if (ns.data) {
var r= ns.data;

 out.push("\n\n<span class=\"EditIcon DeleteIcon\" style=\"float:right\">\n    <a onclick=\"dataViews.CustomReports.deleteRecord({Id:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',PK:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',OnComplete:function(){App3.Navigate2('http://local/Pages/CustomReports',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("' });}});\">Ta Bort</a>\n</span>\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan=\"2\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"CustomReportEdit_fields\">Uppgifter</span></th></tr>\n    <col /><col />\n\n    <tr><td><label>#:</label></td><td>");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Namn:</label></td><td><span id=\"CustomReport_Name_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"CustomReports.Name\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['Name']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>Typ:</label></td><td><span id=\"CustomReport_Type_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"CustomReports.Type\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['Type']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>Data:</label></td><td><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap='off'  class=\"Editable\"  cols=\"20\" rows=\"10\" id=\"CustomReport_Data_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onchange=\"EditInPlace4.quickSave('CustomReports.Data','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\" data-fieldName=\"CustomReport.Data\">");
try{d=r.Data;}catch(e){d=''}out.push(d);
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td>\n\n    <tr><td><label>Status:</label></td><td>\n<select class=\"Editable\" id=\"Status713");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onchange=\"EditInPlace4.quickSave('CustomReports.Status','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\">\n\n<option value=\"Test\" ");
if (r.Status=='Test'){o.push('selected');}
 out.push(">Test</option>\n\n<option value=\"Utveckling\" ");
if (r.Status=='Utveckling'){o.push('selected');}
 out.push(">Utveckling</option>\n\n<option value=\"Publicerad\" ");
if (r.Status=='Publicerad'){o.push('selected');}
 out.push(">Publicerad</option>\n\n<option value=\"Inaktiv\" ");
if (r.Status=='Inaktiv'){o.push('selected');}
 out.push(">Inaktiv</option>\n\n</select></td>\n\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<img src=\"img/ajaxLoading.gif\"/>ladda...<script>\ndataViews.CustomReports.getRecord({\n    Id:'");
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
