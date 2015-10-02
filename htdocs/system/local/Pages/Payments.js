function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"PaymentsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"Payments_ProtoHeader\">Betalningar</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/PaymentNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n</span><script>\n    document.title = $('<div/>').html(\"Betalningar\").text();\n</script><br/>\n\n");

if ((ns.data)&&(!ns['forceRead'])) {
 out.push("\n\n<span class=\"EditIcons\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentList_fields\"> </span>\n");

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
 out.push("').addClass('ajaxLoading');dataViews.Payments.clearFilter();dataViews.Payments.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.Payments.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.Payments.previousPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.Payments.nextPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.Payments.lastPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("\" onclick=\"\ndataViews.Payments.clearFilter();\n\ndataViews.Payments.addFilter('Id','*',document.getElementById('Filter_Payment_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Payments.addFilter('Date','*',document.getElementById('Filter_Payment_Date_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Payments.addFilter('GiverId','*',document.getElementById('Filter_Payment_GiverId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Payments.addFilter('ProjectId','*',document.getElementById('Filter_Payment_ProjectId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Payments.addFilter('InKrTotal','*',document.getElementById('Filter_InKrTotal688");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Payments.addFilter('InKr','*',document.getElementById('Filter_Payment_InKr_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Payments.addFilter('OutKr','*',document.getElementById('Filter_Payment_OutKr_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Payments.addFilter('PaymentSource','*',document.getElementById('Filter_PaymentSource683");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Payments.addFilter('AddedBy','*',document.getElementById('Filter_Payment_AddedBy_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\n\ndataViews.Payments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\n\"/>\n<span id=\"Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></span>\n</span>\n\n<table class=\"ListTable\" ><tr>\n\n<th width=\"50\" class=\"Col_Payment_Id_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Payments.setSort('Id');\ndataViews.Payments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>#</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Payment_Id_List\"> </span></th>\n\n<th width=\"1\" class=\"Col_Payment_Date_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Payments.setSort('Date');\ndataViews.Payments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Datum</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Payment_Date_List\"> </span></th>\n\n<th width=\"1\" class=\"Col_Payment_GiverId_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Payments.setSort('GiverId');\ndataViews.Payments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Givare</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Payment_GiverId_List\"> </span></th>\n\n<th width=\"20\" class=\"Col_Payment_ProjectId_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Payments.setSort('ProjectId');\ndataViews.Payments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Objekt</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Payment_ProjectId_List\"> </span></th>\n\n<th width=\"15\" class=\"Col_InKrTotal688\"><a class=\"SortColumn\" onclick=\"\ndataViews.Payments.setSort('InKrTotal');\ndataViews.Payments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Inbet tot</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"InKrTotal688\"> </span></th>\n\n<th width=\"20\" class=\"Col_Payment_InKr_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Payments.setSort('InKr');\ndataViews.Payments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Inbet</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Payment_InKr_List\"> </span></th>\n\n<th width=\"20\" class=\"Col_Payment_OutKr_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Payments.setSort('OutKr');\ndataViews.Payments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Utbet</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Payment_OutKr_List\"> </span></th>\n\n<th width=\"1\" class=\"Col_PaymentSource683\"><a class=\"SortColumn\" onclick=\"\ndataViews.Payments.setSort('PaymentSource');\ndataViews.Payments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Typ</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentSource683\"> </span></th>\n\n<th width=\"\" class=\"Col_Payment_AddedBy_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Payments.setSort('AddedBy');\ndataViews.Payments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Anv&auml;ndare</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Payment_AddedBy_List\"> </span></th>\n\n</tr><tr>\n\n<td><input id=\"Filter_Payment_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Payments.getFilter('Id','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Payment_Date_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Payments.getFilter('Date','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Payment_GiverId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Payments.getFilter('GiverId','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Payment_ProjectId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Payments.getFilter('ProjectId','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_InKrTotal688");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Payments.getFilter('InKrTotal','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Payment_InKr_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Payments.getFilter('InKr','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Payment_OutKr_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Payments.getFilter('OutKr','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentSource683");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Payments.getFilter('PaymentSource','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Payment_AddedBy_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Payments.getFilter('AddedBy','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n</tr>\n");

var r;

for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];


 out.push("\n<tr >\n\n<td ><a class=ajaxLink href=Pages/Payment/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push(">");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td >");
try{d=r['Date'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td ><a class=ajaxLink href=Pages/Giver/");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push(">");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td >");
switch(r['PaymentType']) {
case 'Project':
 out.push("<a href=\"Pages/Project/");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\">Projekt#");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("</a>\n");
break;
case 'FadderBarn':
 out.push("<a href=\"Pages/Fadderbarn/");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\">Fadderbarn#");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("</a>\n");
break;
case 'Error':
 out.push("<a href=\"Pages/Project/");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("\">Error:");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("</a>\n");
break;
default:
 out.push("<a href=\"Pages/Project/");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("\">Projekt:");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("</a>\n");
break;
}
 out.push("\n</td>\n\n<td style='text-align:right'>");
out.push(dataConvert.toSEK(r['InKrTotal']))
 out.push("</td>\n\n<td style='text-align:right'>");
out.push(dataConvert.toSEK(r['InKr']))
 out.push("</td>\n\n<td style='text-align:right'>");
out.push(dataConvert.toSEK(r['OutKr']))
 out.push("</td>\n\n<td >");
try{d=r['PaymentSource'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['AddedBy'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n</tr>\n");
}
if (ns.data.length == 0) {//no rows code.
 out.push("\n<tr><td colspan=\"16\"><center>Ingen</center></td></tr>\n");
 } 
 out.push("\n\n</table>\n");
} else {
//no data retrieved yet... load it..

 out.push("<script>\ndataViews.Payments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"");
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
