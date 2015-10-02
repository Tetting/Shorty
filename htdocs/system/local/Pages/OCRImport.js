function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<div style=\"float:right\">\n<br/>\n<table class=\"EditTable\" style=\"width:150px;margin-right:50px;\">\n    <tr><th>Ta Bort</th></tr>\n    <tr><td>\nTo replace this import simply <a class=\"ajaxLink\" href=\"Pages/OCR\">Import OCR</a> again.\nBy uploading the same file it will replace all of the current data.\n<p>\nIf you really want to remove this OCR import and all payments from the file then\n<button onclick=\"\nif (confirm('&auml;r du s&auml;ker p&aring; att du vill ta bort OCR och betalningar?')) {\n$.post('do/removeOCR.php',{Id:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'},function(response) {\n    dataViews.OCRImports.dataChanged();\n    dataViews.Payments.dataChanged();\n    App3.Navigate2('local/Pages/OCRImports',{forceRead:true});\n});\n}\n\">Click Me</button>\n</p>  \n</td></tr>\n</table>\n</div><span class=\"OCRImportsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"OCRImportProtoHeader\">OCRImport</span> \n\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/OCRImports\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n\n");
if (ns.data) {
var r= ns.data;

 out.push("\n\n<table class=\"EditTable\" style='float:left;'>\n<thead>\n    <tr><th colspan=\"2\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"OCRImportEdit_fields\">Uppgifter</span></th></tr>\n    <col /><col />\n\n    <tr><td><label>#:</label></td><td>");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Datum:</label></td><td>");
try{d=r.Date;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Konto:</label></td><td>");
try{d=r.AccountNr;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Kontonamn:</label></td><td>");
try{d=r.AccountName;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Fil:</label></td><td>");
try{d=r.FName;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Antal inbetalningar:</label></td><td>");
try{d=r.Rows;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Sum Inbetalningar:</label></td><td>");
try{d=r.Total;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Status:</label></td><td>");
try{d=r.Status;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<img src=\"img/ajaxLoading.gif\"/>ladda...<script>\ndataViews.OCRImports.getRecord({\n    Id:'");
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
 out.push("\n<tr><th colspan=2><button onclick=\"\ndocument.getElementById('GivOCR').src = 'pdf/GivOCR.php?id=");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("&rnd='+Math.random(); \n\">GivOCR</button><iframe src=\"about:blank\" id=\"GivOCR\" style=\"width:0px;height:0px;\"></iframe> \n<button onclick=\"\ndocument.getElementById('GivOCR').src = 'pdf/OCRkontroll.php?id=");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("&rnd='+Math.random(); \n\">kontrolluppgift</button></th></tr>\n</table></table>\n<script>\n$j.get('do/OCR.php?fileId=");
try{d=r['Id'];}catch(e){d=''}out.push(d);
 out.push("',{},function(response){\ndocument.getElementById('Report");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').innerHTML = response;\n});\n</script>\n<div style='float:left' id=\"Report");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></div>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
