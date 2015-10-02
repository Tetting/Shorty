function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"CompanysBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"CompanyNew_ProtoHeader\">F&ouml;retag</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/CompanyNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Companys\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = \"\"+jQuery('<div/>').html(\"F&ouml;retag\").text()+\" \";\n</script><br/>\n\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan='2'><center><span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"CompanyNew_fields\">Uppgifter</span></center></th></tr>\n</thead>\n<tbody>\n\n<tr><td><label>F&ouml;retagsnamn</label>:</td><td><input id=\"Company_CompanyName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Adress</label>:</td><td><input id=\"Company_Address_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Postnr</label>:</td><td><input id=\"Company_Zip_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Postort</label>:</td><td><input id=\"Company_ZipTown_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Tel</label>:</td><td><input id=\"Company_Tel_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>BankGiro</label>:</td><td><input id=\"Company_BankGiro_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>PostGiro</label>:</td><td><input id=\"Company_PostGiro_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>kod</label>:</td><td><input id=\"Company_Code_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n</tbody>\n<tfoot><tr><td colspan=\"2\"><center Task=\"Project4.Task\" Component=\"CompanyNew_fields\" class=\"TaskEdit4\">\n\n<input type=\"button\" value=\"L&auml;gg till\" onclick=\"\ndataViews.Companys.newRecord({\nNewRecord:{\nCompanyName:document.getElementById('Company_CompanyName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nAddress:document.getElementById('Company_Address_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nZip:document.getElementById('Company_Zip_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nZipTown:document.getElementById('Company_ZipTown_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nTel:document.getElementById('Company_Tel_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nBankGiro:document.getElementById('Company_BankGiro_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nPostGiro:document.getElementById('Company_PostGiro_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nCode:document.getElementById('Company_Code_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n\n}\n,OnComplete:function(response){\n\n//document.getElementById('NewCompany_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value = '';\n//document.getElementById('NewCompany_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\ndataViews.Companys.dataChanged();\nApp3.Navigate2('local/Pages/Companys',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',forceRead:true });\n\n}\n});\n\"/></center>\n</td></tr></tfoot>\n</table>\n<script>\ntry {\ndocument.getElementById('Company_CompanyName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\n} catch(e) {\n//no problem.\n}\n</script>\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
