function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<div class=\"EditIcons\" style=\"padding-left: 0px; width: 100%;\">\n<center>\n");

if (typeof(dataViews.Projects.curRecordSet.Count) != 'undefined') {
if (typeof(dataViews.Projects.curRecordSet.start) != 'undefined') {
if (typeof(dataViews.Projects.curRecordSet.rPos) != 'undefined') {
if (dataViews.Projects.filterActive) {
    o.push(dataViews.Projects.curRecordSet.start + dataViews.Projects.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Projects.curRecordSet.filteredCount);
} else {
    o.push(dataViews.Projects.curRecordSet.start + dataViews.Projects.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Projects.curRecordSet.Count);
}
}
}
}

 out.push("\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Projects'].firstRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'undefined',target:target});\n        }});\" title=\"F&ouml;rsta\"><span class=\"RecordsetFirstIcon EditIcon\">&nbsp;</span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Projects'].previousRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Projects',target:target});\n        },NoNewPage:function(){\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"F&ouml;reg&aring;ende\"><span class=\"RecordsetPreviousIcon EditIcon\">&nbsp;</span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Projects'].nextRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Projects',target:target});\n        },NoNewPage:function() {\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"N&auml;sta\"><span class=\"RecordsetNextIcon EditIcon\">&nbsp;</span></a>\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Projects'].lastRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Projects',target:target});\n        }});\" title=\"Sista\"><span class=\"RecordsetLastIcon EditIcon\">&nbsp;</span></a>\n    \n    <span style=\"padding-left: 20px;\" id=\"Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">&nbsp;</span>\n    <span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"Generic317\">&nbsp;</span>\n<button onclick=\"\n/*\njQuery('input,textarea', document.getElementById('ProjectTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("')).each(function(index,elm) {\n    var t = jQuery(elm).prop('type');\n    if (t == 'radio') {\n        jQuery(elm).removeAttr('checked');\n    } else {\n        elm.value = '';\n    }\n});\njQuery('#Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeAttr('disabled');\ndocument.getElementById('Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').enabled = true;\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','Search').html('s&ouml;k nu>>');\n*/\nApp3.Navigate2('local/Pages/ProjectSearch',{target:'AppPages'});\n\" title=\"Ny s&ouml;kning\"><img src=\"img/icons/search.png\"/></button>\n<center>\n</div><span class=\"ProjectsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"ProjectProtoHeader\">Projekt</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/ProjectNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Projects\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = $('<div/>').html(\"Project ");
try{d=ns.data['Project'];}catch(e){d=''}out.push(d);
 out.push("\").text();\n</script><br/>\n\n");
if (ns.data) {
var r= ns.data;

 out.push("\n\n<table class=\"EditTable\" style='float:left;min-width:300px'>\n<thead>\n    <tr><th colspan=\"2\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"ProjectEdit_fields\">Uppgifter</span></th></tr>\n    <col /><col />\n\n    <tr><td><label>#:</label></td><td>");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\n</td>\n\n    <tr><td><label>Projekt:</label></td><td><span id=\"Project_Project_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Projects.Project\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['Project']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>Bokf&ouml;rings#:</label></td><td><span id=\"FinanceCode378");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Projects.FinanceCode\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['FinanceCode']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>Avgift%:</label></td><td><span id=\"AdminPercent379");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Projects.AdminPercent\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['AdminPercent']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n    <tr><td><label>Status:</label></td><td>\n<select class=\"Editable\" id=\"Project_Status_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onchange=\"EditInPlace4.quickSave('Projects.Status','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\">\n\n<option value=\"Aktiv\" ");
if (r.Status=='Aktiv'){o.push('selected');}
 out.push(">Aktiv</option>\n\n<option value=\"Inaktiv\" ");
if (r.Status=='Inaktiv'){o.push('selected');}
 out.push(">Inaktiv</option>\n\n<option value=\"Arkiv\" ");
if (r.Status=='Arkiv'){o.push('selected');}
 out.push(">Arkiv</option>\n\n</select></td>\n\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<img src=\"img/ajaxLoading.gif\"/>ladda...<script>\ndataViews.Projects.getRecord({\n    Id:'");
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
 out.push("\n");
if (ns.data) {
 out.push("\n</div><div style=\"float:left;margin-left:15px;\">\n<table class=\"EditTable\"><tr><th>Kommentar</th></tr>\n<tr><td>\n<text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap=\"on\" cols=\"70\" rows=\"6\" id=\"Project_Notes_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onchange=\"EditInPlace4.quickSave('Projects.Notes','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\">");
try{d=r.Notes;}catch(e){d=''}out.push(d);
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(">\n</td></tr>\n</table>\n</div>\n");
}
 out.push("\n<br style=\"clear:both\"/>");
if(ns.data){
 out.push("\n<div id=\"ProjectStats");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></div>\n<br style=\"clear:both\"/>\n<script>\njQuery.get('do/projectStats.php?id=");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',{},function(response) {\n    jQuery('#ProjectStats");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').html(response);\n});\n</script>\n");
}
 out.push("\n<button onclick=\" App3.Navigate2('local/Pages/ProjectBalance/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',{target:'AppPages'}) \">Balancer</button>\n<br/>\n");
if(r){
 out.push("\n<div id=\"ProjectGiversDetail51");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"\"><img src=\"img/AjaxLoading.gif\"/></div>\n<script>\ndataViews.ProjectGivers.clearFilter();\ndataViews.ProjectGivers.setFilter('ProjectId','=','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("');\ndataViews.ProjectGivers.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"local/Pages/ProjectGivers\",{target:'ProjectGiversDetail51");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView,ProjectId:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("'});}});\n</script>\n");
}
 out.push("\n\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
