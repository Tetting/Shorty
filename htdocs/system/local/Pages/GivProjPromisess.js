function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"GivProjPromisessBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"GivProjPromisess_ProtoHeader\">Eng&aring;ngs l&ouml;fte</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/GivProjPromisesNew?GiverId=");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/GivProjPromisess?GiverId=");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n\n");

if ((ns.data)&&(!ns['forceRead'])) {
 out.push("\n\n<span class=\"EditIcons\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GivProjPromisesList_fields\"> </span>\n");

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

 out.push("\n<a title=\"Ta bort filter\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.GivProjPromisess.clearFilter();dataViews.GivProjPromisess.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetClearFilterIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n<a title=\"F&ouml;rsta\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.GivProjPromisess.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.GivProjPromisess.previousPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.GivProjPromisess.nextPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.GivProjPromisess.lastPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("\" onclick=\"\ndataViews.GivProjPromisess.clearFilter();\n\ndataViews.GivProjPromisess.addFilter('#','*',document.getElementById('Filter_GivProjPromises_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GivProjPromisess.addFilter('ProjectId','*',document.getElementById('Filter_GivProjPromises_ProjectId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GivProjPromisess.addFilter('StartDt','*',document.getElementById('Filter_GivProjPromises_StartDt_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GivProjPromisess.addFilter('OneTimePromise','*',document.getElementById('Filter_GivProjPromises_OneTimePromise_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GivProjPromisess.addFilter('OneTimePromisePaid','*',document.getElementById('Filter_OneTimePromisePaid881");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\n\ndataViews.GivProjPromisess.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\n\"/>\n<span id=\"Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></span>\n</span>\n\n<table class=\"ListTable\" ><tr>\n\n<th width=\"15\" class=\"Col_GivProjPromises_Id_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GivProjPromisess.setSort('#');\ndataViews.GivProjPromisess.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Id</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GivProjPromises_Id_List\"> </span></th>\n\n<th width=\"25\" class=\"Col_GivProjPromises_ProjectId_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GivProjPromisess.setSort('ProjectId');\ndataViews.GivProjPromisess.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Projekt</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GivProjPromises_ProjectId_List\"> </span></th>\n\n<th width=\"25\" class=\"Col_GivProjPromises_StartDt_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GivProjPromisess.setSort('StartDt');\ndataViews.GivProjPromisess.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Datum</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GivProjPromises_StartDt_List\"> </span></th>\n\n<th width=\"25\" class=\"Col_GivProjPromises_OneTimePromise_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GivProjPromisess.setSort('OneTimePromise');\ndataViews.GivProjPromisess.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>L&ouml;fte</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GivProjPromises_OneTimePromise_List\"> </span></th>\n\n<th width=\"15\" class=\"Col_OneTimePromisePaid881\"><a class=\"SortColumn\" onclick=\"\ndataViews.GivProjPromisess.setSort('OneTimePromisePaid');\ndataViews.GivProjPromisess.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Betalt</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"OneTimePromisePaid881\"> </span></th>\n\n</tr><tr>\n\n<td><input id=\"Filter_GivProjPromises_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GivProjPromisess.getFilter('#','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_GivProjPromises_ProjectId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GivProjPromisess.getFilter('ProjectId','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_GivProjPromises_StartDt_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GivProjPromisess.getFilter('StartDt','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_GivProjPromises_OneTimePromise_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GivProjPromisess.getFilter('OneTimePromise','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_OneTimePromisePaid881");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GivProjPromisess.getFilter('OneTimePromisePaid','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n</tr>\n");

var r;

for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];


 out.push("\n<tr >\n\n<td ><a class=ajaxLink href=Pages/GivProjPromises/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("?GiverId=");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push(">#</a></td>\n\n<td ><a class=ajaxLink href=Pages/Project/");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push(" target=AppPages>");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td ><span class=Promise");
try{d=r.OneTimePromisePaid;}catch(e){d=''}out.push(d);
 out.push(">");
try{d=r.StartDt;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n\n<td >");
out.push(dataConvert.toSEK(r['OneTimePromise']))
 out.push("</td>\n\n<td ><button class='Promise");
try{d=r.OneTimePromisePaid;}catch(e){d=''}out.push(d);
 out.push("' onclick='App.Paid(this,\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\");'>Betalt</button></td>\n\n</tr>\n");
}
if (ns.data.length == 0) {//no rows code.
 out.push("\n<tr><td colspan=\"14\"><center>Ingen</center></td></tr>\n");
 } 
 out.push("\n\n</table>\n");
} else {
//no data retrieved yet... load it..

 out.push("<script>\ndataViews.GivProjPromisess.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("\",{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\n\n</script><img src=\"img/ajaxLoading.gif\"/>ladda...\n");
}
 out.push("\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
