function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"FadderbarnsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"FadderbarnNew_ProtoHeader\">Fadderbarn</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/FadderbarnNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Fadderbarns\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan='2'><center><span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"FadderbarnNew_fields\">Uppgifter</span></center></th></tr>\n</thead>\n<tbody>\n\n<tr><td><label>Namn</label>:</td><td><input id=\"Fadderbarn_Name_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>FathersName</label>:</td><td><input id=\"Fadderbarn_FathersName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>MothersName</label>:</td><td><input id=\"Fadderbarn_MothersName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>F&ouml;dd</label>:</td><td><input id=\"Fadderbarn_DOB_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" value=\"\"/>\n<script>$j('#Fadderbarn_DOB_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td></tr>\n\n<tr><td><label>Socialarbe</label>:</td><td><input id=\"Fadderbarn_HelpD_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" value=\"\"/>\n<script>$j('#Fadderbarn_HelpD_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td></tr>\n\n<tr><td><label>Kronor M&aring;n</label>:</td><td><input id=\"Fadderbarn_Mkr_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Omr&aring;de1</label>:</td><td><input id=\"Fadderbarn_Area1_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Omr&aring;de</label>:</td><td><input id=\"Fadderbarn_Area_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Inkom t TG</label>:</td><td><input id=\"Fadderbarn_TGdt_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" value=\"\"/>\n<script>$j('#Fadderbarn_TGdt_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td></tr>\n\n<tr><td><label>Landkod</label>:</td><td><input id=\"Fadderbarn_CountryCode_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Helper</label>:</td><td><input id=\"Fadderbarn_Helper_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Status</label>:</td><td><input id=\"Fadderbarn_Status_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n</tbody>\n<tfoot><tr><td colspan=\"2\"><center Task=\"Project4.Task\" Component=\"FadderbarnNew_fields\" class=\"TaskEdit4\">\n\n<input type=\"button\" value=\"L&auml;gg till\" onclick=\"\ndataViews.Fadderbarns.newRecord({\nNewRecord:{\nName:document.getElementById('Fadderbarn_Name_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nFathersName:document.getElementById('Fadderbarn_FathersName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nMothersName:document.getElementById('Fadderbarn_MothersName_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nDOB:document.getElementById('Fadderbarn_DOB_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nHelpD:document.getElementById('Fadderbarn_HelpD_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nMkr:document.getElementById('Fadderbarn_Mkr_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nArea1:document.getElementById('Fadderbarn_Area1_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nArea:document.getElementById('Fadderbarn_Area_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nTGdt:document.getElementById('Fadderbarn_TGdt_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nCountryCode:document.getElementById('Fadderbarn_CountryCode_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nHelper:document.getElementById('Fadderbarn_Helper_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n,\nStatus:document.getElementById('Fadderbarn_Status_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n\n}\n,OnComplete:function(response){\n\n//document.getElementById('NewFadderbarn_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value = '';\n//document.getElementById('NewFadderbarn_Name");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\ndataViews.Fadderbarns.dataChanged();\nApp3.Navigate2('local/Pages/Fadderbarns',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',forceRead:true });\n\n}\n});\n\"/></center>\n</td></tr></tfoot>\n</table>\n<script>\ntry {\ndocument.getElementById('Fadderbarn_Name_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\n} catch(e) {\n//no problem.\n}\n</script>\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
