function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"GivProjsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"GivProjProtoHeader\">Givarprojekt</span> \n\n<span class=\"EditIcons\"></span><br/>\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a class=\"ajaxLink\" href=\"/Pages/GivProjNew?GiverId=");
if(ns['data']){o.push(ns.data['GiverId']);}
 out.push("\">Nytt Givarprojekt</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a class=\"ajaxLink\" target=\"AppPages\" href=\"/Pages/Giver/");
if(ns['data']){o.push(ns.data['GiverId']);}
 out.push("\">Lista</a>\n    </span>\n</span>\n");
if (ns.data) {
var r= ns.data;

 out.push("\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan=\"2\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GivProjEdit_fields\">Uppgifter</span></th></tr>\n    <col /><col />\n\n    <tr><td><label>#:</label></td><td>");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Givare:</label></td><td>\n<input type=\"hidden\" id=\"GivProj_GiverId_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("\" OnChange=\"\"/>\n<a style=\"cursor:pointer;\" onclick=\"\nif($j('#GivProj_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').css('display')=='none') {\n    $j('#GivProj_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').show();\n    App3.Navigate2('local/Pages/GiverSelect',{target:'GivProj_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'});\n} else {\n    $j('#GivProj_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').hide();\n}\"><span class=\"EditLink\" id=\"GivProj_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\">");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("</span> <button>V&#228;lj</button></a>\n<br/>\n<div id=\"GivProj_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area\" style=\"display:none;position:relative;\" datapk=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" dataview=\"GivProjs.GiverId\" datadisplay=\"GivProj_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\" datastoreid=\"GivProj_GiverId_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"><div id=\"GivProj_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"PopupSelect\" style=\"position:absolute;background:#EEEEEE;\">loading...</div></div>\n</td>\n\n    <tr><td><label>B&ouml;rjat:</label></td><td>");
if(r.StartDt == '0000-00-00') {r.StartDt = '';}

 out.push("<input class=\"Editable dateEdit\" id=\"GivProj_StartDt_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  onchange=\"EditInPlace4.quickSave('GivProjs.StartDt','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\"  data-fieldName=\"GivProj.StartDt\" value=\"");
try{d=r.StartDt;}catch(e){d=''}out.push(d);
 out.push("\" size=\"12\"/>\n<script>$j('#GivProj_StartDt_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td>\n\n    <tr><td><label>Kr_m&aring;nad:</label></td><td><span id=\"GivProj_KrMon_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"GivProjs.KrMon\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['KrMon']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>Projekt#:</label></td><td>\n<input type=\"hidden\" id=\"GivProj_ProjectId_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("\" OnChange=\"\"/>\n<a style=\"cursor:pointer;\" onclick=\"\nif($j('#GivProj_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').css('display')=='none') {\n    $j('#GivProj_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').show();\n    App3.Navigate2('local/Pages/ProjectSelect',{target:'GivProj_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'});\n} else {\n    $j('#GivProj_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').hide();\n}\"><span class=\"EditLink\" id=\"GivProj_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\">");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("</span> <button>V&#228;lj</button></a>\n<br/>\n<div id=\"GivProj_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area\" style=\"display:none;position:relative;\" datapk=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" dataview=\"GivProjs.ProjectId\" datadisplay=\"GivProj_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\" datastoreid=\"GivProj_ProjectId_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"><div id=\"GivProj_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"PopupSelect\" style=\"position:absolute;background:#EEEEEE;\">loading...</div></div>\n</td>\n\n    <tr><td><label>Status:</label></td><td>\n<select class=\"Editable\" id=\"GivProj_Status_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onchange=\"EditInPlace4.quickSave('GivProjs.Status','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\">\n\n<option value=\"Aktiv\" ");
if (r.Status=='Aktiv'){o.push('selected');}
 out.push(">Aktiv</option>\n\n<option value=\"Inaktiv\" ");
if (r.Status=='Inaktiv'){o.push('selected');}
 out.push(">Inaktiv</option>\n\n</select></td>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<img src=\"img/ajaxLoading.gif\"/>ladda...<script>\ndataViews.GivProjs.getRecord({\n    Id:'");
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
