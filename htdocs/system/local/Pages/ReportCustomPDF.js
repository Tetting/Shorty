function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("\n<span class=\"GiversBigIcon BigIcon\">Rapport</span>\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a class=\"ajaxLink\" href=\"Pages/CustomReports\">Lista</a>\n    </span>\n</span>\n<br/>\n");
if (!ns['data']) {
//no data retrieved yet... load it..
if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n<script>\ndataViews.CustomReports.getRecord({\n    Id:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    ,PK:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    ,OnComplete:function(Record){\n        App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("?Id=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',\n            {target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:Record}\n        );\n    }\n});\n</script><img src=\"img/ajaxLoading.gif\"/>ladda...\n");
} else {
var r= ns.data;
var dat;
console.dir(r);
if (r.Data) {
    eval('dat = '+ r.Data);
} 
if (!r.Query) {
    r.Query = '[ ... ]';
}

 out.push("\n<div style=\"width:100%;\">\n<div style=\"width:400px;float:left\">\n<table class=\"EditTable\">\n<tr><th colspan=\"2\">Custom PDF Report <button onclick=\"\nApp3.Navigate2('local/Pages/CustomReportDo?report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("&action=cloneReport'\n    ,{target:'tableView'}\n);\n\">clone</button></th></tr>\n<tr><td>Namn:</td><td>\n<span datapk=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" dataview=\"CustomReports.Name\" class=\"ajaxEdit3\" id=\"CustomReport_Name_Edit354\">");
try{d=r.Name;}catch(e){d=''}out.push(d);
 out.push("</span>\n</td></tr>\n<tr><td>Query:</td><td>\n<span datapk=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" dataview=\"CustomReports.Query\" class=\"ajaxEdit3\" id=\"CustomReport_Query_Edit354\">");
try{d=r.Query;}catch(e){d=''}out.push(d);
 out.push("</span>\n</td></tr>\n<tr><td>Status:</td><td>\n<select onchange=\"EditInPlace4.quickSave('CustomReports.Status','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\" id=\"CustomReport_Status_Edit318\" class=\"Editable\">\n<option ");
if(r.Status=='Test'){o.push('selected');}
 out.push(" value=\"Test\">Test</option>\n<option ");
if(r.Status=='Utveckling'){o.push('selected');}
 out.push(" value=\"Utveckling\">Utveckling</option>\n<option ");
if(r.Status=='Publicerad'){o.push('selected');}
 out.push(" value=\"Publicerad\">Publicerad</option>\n<option ");
if(r.Status=='Inaktiv'){o.push('selected');}
 out.push(" value=\"Inaktiv\">Inaktiv</option>\n</select>\n</td></tr>\n<tr><td>PDF:<br/>\n<button onClick=\"\ndocument.getElementById('viewer').src='pdf/raw.php?ReportId=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("&v='+Math.random();\n\">Visa</button></td><td><form>\n<input type=\"file\" name=\"custom\" /></br>\n<input type=\"button\" value=\"upload\"\n        onClick=\"App.fileUpload(this.form,'pdf/custom/upload.php?ReportId=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("','upload'); return false;\" >\n<div id=\"upload\"></div>\n</form></td></tr>\n</table>\n<script language=\"Javascript\">\nApp.fileUpload = function(form, action_url, div_id)\n{\n// Create the iframe...\nvar iframe = document.createElement(\"iframe\");\niframe.setAttribute(\"id\",\"upload_iframe\");\niframe.setAttribute(\"name\",\"upload_iframe\");\niframe.setAttribute(\"width\",\"0\");\niframe.setAttribute(\"height\",\"0\");\niframe.setAttribute(\"border\",\"0\");\niframe.setAttribute(\"style\",\"width: 0; height: 0; border: none;\");\n \n// Add to document...\nform.parentNode.appendChild(iframe);\nwindow.frames['upload_iframe'].name=\"upload_iframe\";\n \niframeId = document.getElementById(\"upload_iframe\");\n \n// Add event...\nvar eventHandler = function()  {\n \nif (iframeId.detachEvent)\niframeId.detachEvent(\"onload\", eventHandler);\nelse\niframeId.removeEventListener(\"load\", eventHandler, false);\n \n// Message from server...\nif (iframeId.contentDocument) {\ncontent = iframeId.contentDocument.body.innerHTML;\n} else if (iframeId.contentWindow) {\ncontent = iframeId.contentWindow.document.body.innerHTML;\n} else if (iframeId.document) {\ncontent = iframeId.document.body.innerHTML;\n}\n \ndocument.getElementById(div_id).innerHTML = content;\n \n// Del the iframe...\nsetTimeout('iframeId.parentNode.removeChild(iframeId)', 250);\n}\n \nif (iframeId.addEventListener)\niframeId.addEventListener(\"load\", eventHandler, true);\nif (iframeId.attachEvent)\niframeId.attachEvent(\"onload\", eventHandler);\n \n// Set properties of form...\nform.setAttribute(\"target\",\"upload_iframe\");\nform.setAttribute(\"action\", action_url);\nform.setAttribute(\"method\",\"post\");\nform.setAttribute(\"enctype\",\"multipart/form-data\");\nform.setAttribute(\"encoding\",\"multipart/form-data\");\n \n// Submit the form...\nform.submit();\n \ndocument.getElementById(div_id).innerHTML = \"Uploading...\";\n}\n</script>\n \n<!-- index.php could be any script server-side for receive uploads. -->\n<table class=\"EditTable\">\n<tr><th colspan=\"2\">Preview</th></tr>\n<tr><td>id:</td><td><input type=\"text\" id=\"reportObjectId\" value=\"1\" size=\"36\"/></td>\n<tr><td colspan=\"2\"><center><button onclick=\"\ndocument.getElementById('viewer').src='pdf/custom.php?id='+document.getElementById('reportObjectId').value+'&CustomText='+App.CustomText(document.getElementById('CustomText').value)+'&ReportId=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("&download=true&v='+Math.random();\n\">Spara</button>\n\n<button onclick=\"\ndocument.getElementById('viewer').src='pdf/custom.php?id='+document.getElementById('reportObjectId').value+'&CustomText='+App.CustomText(document.getElementById('CustomText').value)+'&Type=Data&ReportId=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("&v='+Math.random();\n\">Data</button>\n\n<button onclick=\"\ndocument.getElementById('viewer').src='pdf/custom.php?id='+document.getElementById('reportObjectId').value+'&CustomText='+App.CustomText(document.getElementById('CustomText').value)+'&ReportId=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("&v='+Math.random();\n\">Visa</button>\n</center></td></tr>\n</table>\n\n<div id=\"addForm\">\n\n</div>\n<div id=\"tableView\"></div><div id=\"ReportAction\"></div>\n<br/>\n<table class=\"EditTable\">\n<tr><th>Custom Text</th></tr>\n<tr><td><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" id=\"CustomText\" style=\"width: 284px; height: 82px;\"></text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td></tr>\n</table>\n\n<button onclick=\"\nApp3.Navigate2('local/Pages/CustomReportDo?report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("&action=delReport'\n    ,{target:'tableView'}\n);\n\">Delete</button>\n</div>\n<div style=\"width:550px;height:600px;float:left;\">\n<table class=\"EditTable\" style=\"width:100%;height:600px;\">\n<tr><th style=\"height:20px;\">Preview</th></tr>\n<tr><td style=\"vertical-align:top;\"><iframe id=\"viewer\" style=\"width:100%;height:560px;\"></iframe></td></tr>\n</table>\n\n</div>\n<script>\n$j.post('pdf/custom/badGateway.php',{\n    action:'view'\n    ,ReportId:");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("\n},function(response) {\n    console.info(response);\n    var ns = {Id:");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("};\n    eval('ns.data='+response);\n     var out = App3.go.local.Pages.CustomReportTable(ns);\n    console.info(out);\n    $j('#tableView').html(out);\n});\n</script>\n");
}
 out.push("\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
