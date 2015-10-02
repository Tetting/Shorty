function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("\n");
if ((ns.data)&&(!ns['forceRead'])) {

 out.push("<span class=\"EditIcons\" style=\"padding-left:0px;\"><center>\n    <a class=\"ajaxLink\" href=\"/Pages/SocialWorkerNew\" target=\"AppPages\"><span class=\"NewIcon EditIcon\">&nbsp;</span></a>\n    <a title=\"Nsta\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.SocialWorkers.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetFirstIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n    <a title=\"Fende\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.SocialWorkers.previousPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetPreviousIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n    <a title=\"NÃ?Â¤sta\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.SocialWorkers.nextPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetNextIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n    <a title=\"Sista\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.SocialWorkers.lastPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetLastIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n  ");

 if (ns.Recordset) {
    o.push('<i>post '+ns.Recordset.start+' till '+(ns.Recordset.Hits+ns.Recordset.start));
    if (ns.Recordset.Count) {
        if ((ns.DataView)&&(ns.DataView.filterActive==true)) {
            //display filtered count..
            o.push(' av '+ns.Recordset.filteredCount);
        } else {
            o.push(' av '+ns.Recordset.Count);
        }
    }
    o.push('</i>');
}

 out.push("\n<input type=\"button\" style=\"display:none\" id=\"Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\ndataViews.SocialWorkers.clearFilter();\ndataViews.SocialWorkers.addFilter('Id','*',document.getElementById('Filter_Id779");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkers.addFilter('Name','*',document.getElementById('Filter_Name780");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkers.addFilter('LastName','*',document.getElementById('Filter_LastName781");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkers.addFilter('ZipTown','*',document.getElementById('Filter_ZipTown784");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkers.addFilter('Land','*',document.getElementById('Filter_Land785");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\n\ndataViews.SocialWorkers.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView\n });}});\n\"/>\n<span id=\"Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></span>\n<span component=\"SocialWorkerSelect778\" task=\"Project4.Task\" class=\"TaskEdit4\">&nbsp;</span>\n<a style=\"float:right\" title=\"Stang\" onclick=\"$j('#");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("_area').hide();\"><span class=\"CloseWindow EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n</center>\n</span>\n<table style=\"margin-top:2px;margin-bottom:2px;\"><tr>\n    \n<th class=\"Col_Id779\" ><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkers.setSort('Id');\ndataViews.SocialWorkers.getList({OnComplete:function(data){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data });}});\"><u>#</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Id779\">&nbsp;</span></th>\n    \n<th class=\"Col_Name780\" ><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkers.setSort('Name');\ndataViews.SocialWorkers.getList({OnComplete:function(data){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data });}});\"><u>Namn</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Name780\">&nbsp;</span></th>\n    \n<th class=\"Col_LastName781\" ><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkers.setSort('LastName');\ndataViews.SocialWorkers.getList({OnComplete:function(data){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data });}});\"><u>Efternamn</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"LastName781\">&nbsp;</span></th>\n    \n<th class=\"Col_ZipTown784\" ><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkers.setSort('ZipTown');\ndataViews.SocialWorkers.getList({OnComplete:function(data){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data });}});\"><u>ZipTown</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"ZipTown784\">&nbsp;</span></th>\n    \n<th class=\"Col_Land785\" ><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkers.setSort('Land');\ndataViews.SocialWorkers.getList({OnComplete:function(data){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data });}});\"><u>Land</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Land785\">&nbsp;</span></th>\n\n</tr><tr>\n\n<td><input id=\"Filter_Id779");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"\n type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkers.getFilter('Id','*'));
 out.push("\"\n onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Name780");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"\n type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkers.getFilter('Name','*'));
 out.push("\"\n onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_LastName781");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"\n type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkers.getFilter('LastName','*'));
 out.push("\"\n onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_ZipTown784");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"\n type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkers.getFilter('ZipTown','*'));
 out.push("\"\n onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Land785");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"\n type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkers.getFilter('Land','*'));
 out.push("\"\n onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n</tr>\n");

var r;
for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];
classNamn="";

 out.push("\n<tr class=\"");
try{d=classNamn;}catch(e){d=''}out.push(d);
 out.push("\" style=\"cursor:pointer;\" onclick=\"\nconsole.info('selected','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("','");
try{d=r.Name;}catch(e){d=''}out.push(d);
 out.push("');\nvar tar =$j('#");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("_area');\nif (tar.attr('datapk')!=undefined) {\n    EditInPlace4.quickSave(tar.attr('dataview'),tar.attr('datapk'),'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("');\n}\n\ndocument.getElementById(tar.attr('datadisplay')).innerHTML='");
try{d=r.Name;}catch(e){d=''}out.push(d);
 out.push("';\nif (tar.attr('datastoreid')!=undefined) {\n    document.getElementById(tar.attr('datastoreid')).value='");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("';\n    if (document.getElementById(tar.attr('datastoreid')).onchange) {\n        console.info('triggering onchange');\n        jQuery('#'+tar.attr('datastoreid')).trigger('onchange');\n    }\n}\ntar.hide();\ntar = null;\n\">\n\n    <td>");
try{d=r['Id'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n    <td>");
try{d=r['Name'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n    <td>");
try{d=r['LastName'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n    <td>");
try{d=r['ZipTown'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n    <td>");
try{d=r['Land'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n</tr>\n");
}
 out.push("\n</table>\n\n<span class=\"EditIcons\" style=\"padding-left:0px;\"><center>\n    <a class=\"ajaxLink\" href=\"/Pages/SocialWorkerNew\" target=\"AppPages\"><span class=\"NewIcon EditIcon\">&nbsp;</span></a>\n\n    <a title=\"rsta\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.SocialWorkers.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetFirstIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n\n    <a title=\"Fende\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.SocialWorkers.previousPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetPreviousIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n\n    <a title=\"Nsta\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.SocialWorkers.nextPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetNextIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n\n    <a title=\"Sista\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.SocialWorkers.lastPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetLastIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n  ");

 if (ns.Recordset) {
    o.push('<i>post '+ns.Recordset.start+' till '+(ns.Recordset.Hits+ns.Recordset.start));
    if (ns.Recordset.Count) {
        if ((ns.DataView)&&(ns.DataView.filterActive==true)) {
          //display filtered count..
            o.push(' av '+ns.Recordset.filteredCount);
        } else {
            o.push(' av '+ns.Recordset.Count);
        }
    }
    o.push('</i>');
}

 out.push("\n<span id=\"Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></span>\n<span component=\"SocialWorkerSelect778\" task=\"Project4.Task\" class=\"TaskEdit4\">&nbsp;</span>\n<a style=\"float:right\" title=\"Stang\" onclick=\"$j('#");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("_area').hide();\"><span class=\"CloseWindow EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n</center>\n</span><br/>\n\n");
} else {
    //no data retrieved yet... load it..

 out.push("<img src=\"img/ajaxLoading.gif\"/>ladda...<script>\n\ndataViews.SocialWorkers.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("\",{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\n</script>\n");
}
 out.push("\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
