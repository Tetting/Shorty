function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"SocialWorkAreasBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"SocialWorkAreaProtoHeader\">Omr&aring;de</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/SocialWorkAreaNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/SocialWorkAreas\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = $('<div/>').html(\"Omr&aring;de ");
try{d=ns.data['Area'];}catch(e){d=''}out.push(d);
 out.push(" ");
try{d=ns.data['Area1'];}catch(e){d=''}out.push(d);
 out.push("\").text();\n</script><br/>\n\n");
if (ns.data) {
var r= ns.data;

 out.push("\n\n<span class=\"EditIcon DeleteIcon\" style=\"float:right\">\n    <a onclick=\"dataViews.SocialWorkAreas.deleteRecord({Id:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',PK:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',OnComplete:function(){App3.Navigate2('http://local/Pages/SocialWorkAreas',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("' });}});\">Ta Bort</a>\n</span>\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan=\"2\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"SocialWorkAreaEdit_fields\">Uppgifter</span></th></tr>\n    <col /><col />\n\n    <tr><td><label>#:</label></td><td>");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Landkod:</label></td><td><span id=\"SocialWorkArea_CountryCode_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"SocialWorkAreas.CountryCode\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['CountryCode']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>Omr&aring;de:</label></td><td><span id=\"SocialWorkArea_Area_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"SocialWorkAreas.Area\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['Area']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>Omr&aring;de#:</label></td><td><span id=\"SocialWorkArea_Area1_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"SocialWorkAreas.Area1\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['Area1']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>SocialWorkerId:</label></td><td>\n<input type=\"hidden\" id=\"SocialWorkArea_SocialWorkerId_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"");
try{d=r.SocialWorkerId;}catch(e){d=''}out.push(d);
 out.push("\" OnChange=\"\"/>\n<a style=\"cursor:pointer;\" onclick=\"\nif($j('#SocialWorkArea_SocialWorkerId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').css('display')=='none') {\n    $j('#SocialWorkArea_SocialWorkerId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').show();\n    App3.Navigate2('local/Pages/SocialWorkerSelect',{target:'SocialWorkArea_SocialWorkerId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'});\n} else {\n    $j('#SocialWorkArea_SocialWorkerId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area').hide();\n}\"><span class=\"EditLink\" id=\"SocialWorkArea_SocialWorkerId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\">");
try{d=r.Socialarbetare;}catch(e){d=''}out.push(d);
 out.push("</span> <button>V&#228;lj</button></a>\n<br/>\n<div id=\"SocialWorkArea_SocialWorkerId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_area\" style=\"display:none;position:relative;\" datapk=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" dataview=\"SocialWorkAreas.SocialWorkerId\" datadisplay=\"SocialWorkArea_SocialWorkerId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("_display\" datastoreid=\"SocialWorkArea_SocialWorkerId_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"><div id=\"SocialWorkArea_SocialWorkerId_EditPopUp");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"PopupSelect\" style=\"position:absolute;background:#EEEEEE;\">loading...</div></div>\n</td>\n\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<img src=\"img/ajaxLoading.gif\"/>ladda...<script>\ndataViews.SocialWorkAreas.getRecord({\n    Id:'");
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
