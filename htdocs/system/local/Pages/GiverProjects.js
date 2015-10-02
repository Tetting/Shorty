function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"GiverProjectsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"GiverProjects_ProtoHeader\">Givarprojekt</span> \n\n<span class=\"EditIcons\"></span><br/>\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a class=\"ajaxLink\" href=\"/Pages/GivProjNew?GiverId=");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("\">Nytt Givarprojekt</a>\n    </span>\n</span>\n");

if ((ns.data)&&(!ns['forceRead'])) {
 out.push("\n\n<span class=\"EditIcons\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverProjectList_fields\"> </span>\n");

if (ns.Recordset) {
if (ns.Recordset.Hits ==0) {
out.push('<i>0 Poster');
} else {
out.push('<i>Post '+(ns.Recordset.start+1)+' till '+(ns.Recordset.Hits+ns.Recordset.start));
}
if (ns.Recordset.Count) {
if ((ns.DataView)&&(ns.DataView.filterActive==true)) {
//display filtered count..
out.push(' av '+ns.Recordset.filteredCount);
} else {
out.push(' av '+ns.Recordset.Count);
}
}
out.push('</i>');
}

 out.push("\n\n<a title=\"F&ouml;rsta\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.GiverProjects.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetFirstIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n<a title=\"F&ouml;reg&aring;nde\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.GiverProjects.previousPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetPreviousIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n<a title=\"N&auml;sta\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.GiverProjects.nextPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetNextIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n<a title=\"Sista\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.GiverProjects.lastPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetLastIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n\n<input type=\"button\" style=\"display:none\" id=\"Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\ndataViews.GiverProjects.clearFilter();\ndataViews.GiverProjects.addFilter('GiverId','=','");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("');\n\ndataViews.GiverProjects.addFilter('Id','*',document.getElementById('Filter_GiverProject_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverProjects.addFilter('ProjectId','*',document.getElementById('Filter_GiverProject_ProjectId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverProjects.addFilter('KrMon','*',document.getElementById('Filter_GiverProject_KrMon_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverProjects.addFilter('OneTimePromise','*',document.getElementById('Filter_GiverProject_OneTimePromise_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverProjects.addFilter('LastPayment','*',document.getElementById('Filter_GiverProject_LastPayment_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverProjects.addFilter('Sum','*',document.getElementById('Filter_Sum708");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\n\ndataViews.GiverProjects.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\n\"/>\n<span id=\"Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></span>\n</span>\n\n<table class=\"ListTable\" ><tr>\n\n<th width=\"20\" class=\"Col_GiverProject_Id_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverProjects.setSort('Id');\ndataViews.GiverProjects.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>#</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverProject_Id_List\"> </span></th>\n\n<th width=\"25\" class=\"Col_GiverProject_ProjectId_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverProjects.setSort('ProjectId');\ndataViews.GiverProjects.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Projekt#</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverProject_ProjectId_List\"> </span></th>\n\n<th width=\"25\" class=\"Col_GiverProject_KrMon_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverProjects.setSort('KrMon');\ndataViews.GiverProjects.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Kr/m&aring;n</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverProject_KrMon_List\"> </span></th>\n\n<th width=\"25\" class=\"Col_GiverProject_OneTimePromise_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverProjects.setSort('OneTimePromise');\ndataViews.GiverProjects.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Eng&aring;ngs<br/>l&ouml;fte</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverProject_OneTimePromise_List\"> </span></th>\n\n<th width=\"25\" class=\"Col_GiverProject_LastPayment_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverProjects.setSort('LastPayment');\ndataViews.GiverProjects.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Senaste betalning</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverProject_LastPayment_List\"> </span></th>\n\n<th width=\"20\" class=\"Col_Sum708\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverProjects.setSort('Sum');\ndataViews.GiverProjects.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Total</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Sum708\"> </span></th>\n\n</tr><tr>\n\n<td><input id=\"Filter_GiverProject_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverProjects.getFilter('Id','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_GiverProject_ProjectId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverProjects.getFilter('ProjectId','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_GiverProject_KrMon_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverProjects.getFilter('KrMon','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_GiverProject_OneTimePromise_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverProjects.getFilter('OneTimePromise','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_GiverProject_LastPayment_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverProjects.getFilter('LastPayment','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Sum708");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverProjects.getFilter('Sum','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n</tr>\n");

var r;

for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];


 out.push("\n<tr >\n\n<td ><a class=ajaxLink  href=Pages/GivProj/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push(">#</a></td>\n\n<td ><a class=ajaxLink target=AppPages href=Pages/Project/");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push(">");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td >");
try{d=r['KrMon'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['OneTimePromise'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['LastPayment'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['Sum'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n</tr>\n");
}
if (ns.data.length == 0) {//no rows code.
 out.push("\n<tr><td colspan=\"13\"><center>Ingen</center></td></tr>\n");
 } 
 out.push("\n\n</table>\n");
} else {
//no data retrieved yet... load it..

 out.push("<script>\ndataViews.GiverProjects.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("\",{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\n\n</script><img src=\"img/ajaxLoading.gif\"/>ladda...\n");
}
 out.push("\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
