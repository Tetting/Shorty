function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"GiverPaymentsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"protoHeader209\">Givare Betalning</span> \n\n<span class=\"EditIcons\"></span><br/>\n\n");

if ((ns.data)&&(!ns['forceRead'])) {
 out.push("\n\n<span class=\"EditIcons\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentList197\"> </span>\n");

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
 out.push("').addClass('ajaxLoading');dataViews.GiverPayments.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.GiverPayments.previousPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.GiverPayments.nextPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.GiverPayments.lastPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("\" onclick=\"\ndataViews.GiverPayments.clearFilter();\ndataViews.GiverPayments.addFilter('GiverId','=','");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("');\n\ndataViews.GiverPayments.addFilter('Id','*',document.getElementById('Filter_Id382");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverPayments.addFilter('Date','*',document.getElementById('Filter_Date198");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverPayments.addFilter('ProjectId','*',document.getElementById('Filter_ProjectId200");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverPayments.addFilter('InKrTotal','*',document.getElementById('Filter_InKrTotal387");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverPayments.addFilter('PaymentSource','*',document.getElementById('Filter_PaymentSource204");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\n\ndataViews.GiverPayments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\n\"/>\n<span id=\"Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></span>\n</span>\n\n<table class=\"ListTable\" ><tr>\n\n<th width=\"25\" class=\"Col_Id382\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverPayments.setSort('Id');\ndataViews.GiverPayments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>#</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Id382\"> </span></th>\n\n<th width=\"25\" class=\"Col_Date198\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverPayments.setSort('Date');\ndataViews.GiverPayments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Datum</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Date198\"> </span></th>\n\n<th width=\"25\" class=\"Col_ProjectId200\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverPayments.setSort('ProjectId');\ndataViews.GiverPayments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Projekt</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"ProjectId200\"> </span></th>\n\n<th width=\"25\" class=\"Col_InKrTotal387\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverPayments.setSort('InKrTotal');\ndataViews.GiverPayments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Kr</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"InKrTotal387\"> </span></th>\n\n<th width=\"25\" class=\"Col_PaymentSource204\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverPayments.setSort('PaymentSource');\ndataViews.GiverPayments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Typ</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentSource204\"> </span></th>\n\n</tr><tr>\n\n<td><input id=\"Filter_Id382");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverPayments.getFilter('Id','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Date198");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverPayments.getFilter('Date','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_ProjectId200");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverPayments.getFilter('ProjectId','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_InKrTotal387");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverPayments.getFilter('InKrTotal','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentSource204");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverPayments.getFilter('PaymentSource','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n</tr>\n");

var r;

for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];


 out.push("\n<tr >\n\n<td ><a class=ajaxLink href=Pages/GiverPayment/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("?GiverId=");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push(">#</a></td>\n\n<td >");
try{d=r['Date'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
switch(r['PaymentType']) {
case 'Project':
 out.push("<a href=\"Pages/Project/");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\" target=AppPages>");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("</a>\n");
break;
case 'Transfer':
 out.push("<a href=\"Pages/Project/");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\" target=AppPages>");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("</a>\n");
break;
case 'Fadderbarn':
 out.push("<a href=\"Pages/Fadderbarn/");
try{d=r.PaymentTypeId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\" target=AppPages>Fadderbarn ");
try{d=r.PaymentTypeId;}catch(e){d=''}out.push(d);
 out.push("</a><br/>( <a class=\"ajaxLink\" href=\"Pages/Project/");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("\" target=AppPages>Projekt ");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("</a>)\n");
break;
case 'Error':
 out.push("<a href=\"Pages/Project/");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("\" target=AppPages>Error:");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("</a>\n");
break;
}
 out.push("\n</td>\n\n<td >");
out.push(dataConvert.toSEK(r['InKrTotal']))
 out.push("</td>\n\n<td >");
try{d=r['PaymentSource'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n</tr>\n");
}
if (ns.data.length == 0) {//no rows code.
 out.push("\n<tr><td colspan=\"16\"><center>Ingen</center></td></tr>\n");
 } 
 out.push("\n\n</table>\n");
} else {
//no data retrieved yet... load it..

 out.push("<script>\ndataViews.GiverPayments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"");
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
