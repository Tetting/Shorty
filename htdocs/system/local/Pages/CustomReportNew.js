function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"CustomReportsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"CustomReportNew_ProtoHeader\">Anpassade Report</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/CustomReportNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/CustomReports\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan='2'><center><span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"CustomReportNew_fields\">Uppgifter</span></center></th></tr>\n</thead>\n<tbody>\n\n<tr><td><label>Namn</label>:</td><td><input id=\"CustomReport_Name_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Typ</label>:</td><td>\n<select id=\"CustomReport_Type_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" >\n\n<option value=\"PDF\">PDF</option>\n\n<option value=\"CustomPDF\">CustomPDF</option>\n\n</select></td></tr>\n\n</tbody>\n<tfoot><tr><td colspan=\"2\"><center Task=\"Project4.Task\" Component=\"CustomReportNew_fields\" class=\"TaskEdit4\">\n\n<input type=\"button\" value=\"L&auml;gg till\" onclick=\"\ndataViews.CustomReports.newRecord({\nNewRecord:{\nName:document.getElementById('CustomReport_Name_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nType:document.getElementById('CustomReport_Type_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n\n}\n,OnComplete:function(response){\nvar r;\neval('r='+response);\nif (r['NewId']) {\nApp3.Navigate2('local/Pages/ReportPDF/'+r['NewId'],{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',forceRead:true});\n}\n}\n});\n\"/></center>\n</td></tr></tfoot>\n</table>\n<script>\ntry {\ndocument.getElementById('CustomReport_Name_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\n} catch(e) {\n//no problem.\n}\n</script>\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
