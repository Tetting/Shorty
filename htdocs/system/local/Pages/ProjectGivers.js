function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"ProjectGiversBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"ProjectGivers_ProtoHeader\">M&aring;natliga Projekt Givare</span> \n\n<span class=\"EditIcons\"></span><br/>\n\n");

if ((ns.data)&&(!ns['forceRead'])) {
 out.push("\n\n<span class=\"EditIcons\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"ProjectGiverList_fields\"> </span>\n");

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
 out.push("').addClass('ajaxLoading');dataViews.ProjectGivers.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.ProjectGivers.previousPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.ProjectGivers.nextPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.ProjectGivers.lastPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("\" onclick=\"\ndataViews.ProjectGivers.clearFilter();\ndataViews.ProjectGivers.addFilter('ProjectId','=','");
try{d=ns.ProjectId;}catch(e){d=''}out.push(d);
 out.push("');\n\ndataViews.ProjectGivers.addFilter('Id','*',document.getElementById('Filter_ProjectGiver_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.ProjectGivers.addFilter('GiverId','*',document.getElementById('Filter_ProjectGiver_GiverId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.ProjectGivers.addFilter('StartDt','*',document.getElementById('Filter_ProjectGiver_StartDt_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.ProjectGivers.addFilter('KrMon','*',document.getElementById('Filter_ProjectGiver_KrMon_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.ProjectGivers.addFilter('LastPayment','*',document.getElementById('Filter_ProjectGiver_LastPayment_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.ProjectGivers.addFilter('LastPaymentTot','*',document.getElementById('Filter_ProjectGiver_LastPaymentTot_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.ProjectGivers.addFilter('PaidTot','*',document.getElementById('Filter_ProjectGiver_PaidTot_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.ProjectGivers.addFilter('Status','*',document.getElementById('Filter_ProjectGiver_Status_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\n\ndataViews.ProjectGivers.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,ProjectId:'");
try{d=ns.ProjectId;}catch(e){d=''}out.push(d);
 out.push("'});}});\n\"/>\n<span id=\"Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></span>\n</span>\n\n<table class=\"ListTable\" ><tr>\n\n<th width=\"15\" class=\"Col_ProjectGiver_Id_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.ProjectGivers.setSort('Id');\ndataViews.ProjectGivers.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,ProjectId:'");
try{d=ns.ProjectId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>#</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"ProjectGiver_Id_List\"> </span></th>\n\n<th width=\"15\" class=\"Col_ProjectGiver_GiverId_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.ProjectGivers.setSort('GiverId');\ndataViews.ProjectGivers.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,ProjectId:'");
try{d=ns.ProjectId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Givare</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"ProjectGiver_GiverId_List\"> </span></th>\n\n<th width=\"15\" class=\"Col_ProjectGiver_StartDt_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.ProjectGivers.setSort('StartDt');\ndataViews.ProjectGivers.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,ProjectId:'");
try{d=ns.ProjectId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>StartDt</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"ProjectGiver_StartDt_List\"> </span></th>\n\n<th width=\"15\" class=\"Col_ProjectGiver_KrMon_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.ProjectGivers.setSort('KrMon');\ndataViews.ProjectGivers.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,ProjectId:'");
try{d=ns.ProjectId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>KrMon</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"ProjectGiver_KrMon_List\"> </span></th>\n\n<th width=\"15\" class=\"Col_ProjectGiver_LastPayment_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.ProjectGivers.setSort('LastPayment');\ndataViews.ProjectGivers.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,ProjectId:'");
try{d=ns.ProjectId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>sista bet</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"ProjectGiver_LastPayment_List\"> </span></th>\n\n<th width=\"15\" class=\"Col_ProjectGiver_LastPaymentTot_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.ProjectGivers.setSort('LastPaymentTot');\ndataViews.ProjectGivers.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,ProjectId:'");
try{d=ns.ProjectId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Sista bet summa</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"ProjectGiver_LastPaymentTot_List\"> </span></th>\n\n<th width=\"15\" class=\"Col_ProjectGiver_PaidTot_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.ProjectGivers.setSort('PaidTot');\ndataViews.ProjectGivers.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,ProjectId:'");
try{d=ns.ProjectId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>bet summa</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"ProjectGiver_PaidTot_List\"> </span></th>\n\n<th width=\"15\" class=\"Col_ProjectGiver_Status_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.ProjectGivers.setSort('Status');\ndataViews.ProjectGivers.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,ProjectId:'");
try{d=ns.ProjectId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Status</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"ProjectGiver_Status_List\"> </span></th>\n\n</tr><tr>\n\n<td><input id=\"Filter_ProjectGiver_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.ProjectGivers.getFilter('Id','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_ProjectGiver_GiverId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.ProjectGivers.getFilter('GiverId','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_ProjectGiver_StartDt_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.ProjectGivers.getFilter('StartDt','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_ProjectGiver_KrMon_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.ProjectGivers.getFilter('KrMon','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_ProjectGiver_LastPayment_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.ProjectGivers.getFilter('LastPayment','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_ProjectGiver_LastPaymentTot_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.ProjectGivers.getFilter('LastPaymentTot','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_ProjectGiver_PaidTot_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.ProjectGivers.getFilter('PaidTot','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_ProjectGiver_Status_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.ProjectGivers.getFilter('Status','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n</tr>\n");

var r;

for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];


 out.push("\n<tr >\n\n<td ><a class=ajaxLink href=Pages/ProjectGiver/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push(">#</a></td>\n\n<td ><a class=ajaxLink href=Pages/Giver/");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push(">");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td >");
try{d=r['StartDt'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td style='text-align:right'>");
out.push(dataConvert.toSEK(r['KrMon']))
 out.push("</td>\n\n<td >");
try{d=r['LastPayment'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td style='text-align:right'>");
out.push(dataConvert.toSEK(r['LastPaymentTot']))
 out.push("</td>\n\n<td style='text-align:right'>");
out.push(dataConvert.toSEK(r['PaidTot']))
 out.push("</td>\n\n<td >");
try{d=r['Status'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n</tr>\n");
}
if (ns.data.length == 0) {//no rows code.
 out.push("\n<tr><td colspan=\"12\"><center>Ingen</center></td></tr>\n");
 } 
 out.push("\n\n</table>\n");
} else {
//no data retrieved yet... load it..

 out.push("<script>\ndataViews.ProjectGivers.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("\",{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,ProjectId:'");
try{d=ns.ProjectId;}catch(e){d=''}out.push(d);
 out.push("'});}});\n\n</script><img src=\"img/ajaxLoading.gif\"/>ladda...\n");
}
 out.push("\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
