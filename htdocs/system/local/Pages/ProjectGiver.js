function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"ProjectGiversBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"ProjectGiverProtoHeader\">M&aring;natliga Projekt Givare </span> \n\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/ProjectGivers\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n\n");
if (ns.data) {
var r= ns.data;

 out.push("\n\n<span class=\"EditIcon DeleteIcon\" style=\"float:right\">\n    <a onclick=\"dataViews.ProjectGivers.deleteRecord({Id:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',PK:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',OnComplete:function(){App3.Navigate2('http://local/Pages/ProjectGivers',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("' });}});\">Ta Bort</a>\n</span>\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan=\"2\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"ProjectGiverEdit_fields\">Uppgifter</span></th></tr>\n    <col /><col />\n\n    <tr><td><label>#:</label></td><td>");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Givare:</label></td><td>\n<input type=\"hidden\" id=\"ProjectGiver_GiverId_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("\" OnChange=\"\"/>\n<a style=\"cursor:pointer;\" onclick=\"\nif($j('#ProjectGiver_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').css('display')=='none') {\n    $j('#ProjectGiver_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').show();\n    App3.Navigate2('local/Pages/GiverSelect',{target:'ProjectGiver_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'});\n} else {\n    $j('#ProjectGiver_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').hide();\n}\"><span class=\"EditLink\" id=\"ProjectGiver_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\">");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("</span> <button>V&#228;lj</button></a>\n<br/>\n<div id=\"ProjectGiver_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area\" style=\"display:none;position:relative;\" datapk=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" dataview=\"ProjectGivers.GiverId\" datadisplay=\"ProjectGiver_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\" datastoreid=\"ProjectGiver_GiverId_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"><div id=\"ProjectGiver_GiverId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"PopupSelect\" style=\"position:absolute;background:#EEEEEE;\">loading...</div></div>\n</td>\n\n    <tr><td><label>StartDt:</label></td><td>");
if(r.StartDt == '0000-00-00') {r.StartDt = '';}

 out.push("<input class=\"Editable dateEdit\" id=\"ProjectGiver_StartDt_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  onchange=\"EditInPlace4.quickSave('ProjectGivers.StartDt','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\"  data-fieldName=\"ProjectGiver.StartDt\" value=\"");
try{d=r.StartDt;}catch(e){d=''}out.push(d);
 out.push("\" size=\"12\"/>\n<script>$j('#ProjectGiver_StartDt_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td>\n\n    <tr><td><label>KrMon:</label></td><td><span id=\"ProjectGiver_KrMon_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"ProjectGivers.KrMon\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['KrMon']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>Projekt#:</label></td><td>\n<input type=\"hidden\" id=\"ProjectGiver_ProjectId_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("\" OnChange=\"\"/>\n<a style=\"cursor:pointer;\" onclick=\"\nif($j('#ProjectGiver_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').css('display')=='none') {\n    $j('#ProjectGiver_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').show();\n    App3.Navigate2('local/Pages/ProjectSelect',{target:'ProjectGiver_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'});\n} else {\n    $j('#ProjectGiver_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').hide();\n}\"><span class=\"EditLink\" id=\"ProjectGiver_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\">");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("</span> <button>V&#228;lj</button></a>\n<br/>\n<div id=\"ProjectGiver_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area\" style=\"display:none;position:relative;\" datapk=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" dataview=\"ProjectGivers.ProjectId\" datadisplay=\"ProjectGiver_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\" datastoreid=\"ProjectGiver_ProjectId_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"><div id=\"ProjectGiver_ProjectId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"PopupSelect\" style=\"position:absolute;background:#EEEEEE;\">loading...</div></div>\n</td>\n\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<img src=\"img/ajaxLoading.gif\"/>ladda...<script>\ndataViews.ProjectGivers.getRecord({\n    Id:'");
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
