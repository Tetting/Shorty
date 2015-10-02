function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"PaymentInListsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"PaymentInLists_ProtoHeader\">Betalningar</span> \n\n<span class=\"EditIcons\"></span><br/>\n\n");

if ((ns.data)&&(!ns['forceRead'])) {
 out.push("\n\n<span class=\"EditIcons\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentInListList_fields\"> </span>\n");

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
 out.push("').addClass('ajaxLoading');dataViews.PaymentInLists.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.PaymentInLists.previousPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.PaymentInLists.nextPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.PaymentInLists.lastPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("\" onclick=\"\ndataViews.PaymentInLists.clearFilter();\ndataViews.PaymentInLists.addFilter('Date','=','");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("');\ndataViews.PaymentInLists.addFilter('PaymentSource','=','");
try{d=ns.PaymentSource;}catch(e){d=''}out.push(d);
 out.push("');\n\ndataViews.PaymentInLists.addFilter('Id','*',document.getElementById('Filter_PaymentInList_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.PaymentInLists.addFilter('Date','*',document.getElementById('Filter_PaymentInList_Date_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.PaymentInLists.addFilter('GiverId','*',document.getElementById('Filter_PaymentInList_GiverId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.PaymentInLists.addFilter('ProjectId','*',document.getElementById('Filter_PaymentInList_ProjectId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.PaymentInLists.addFilter('InKr','*',document.getElementById('Filter_PaymentInList_InKr_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.PaymentInLists.addFilter('AdminCharge','*',document.getElementById('Filter_PaymentInList_AdminCharge_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.PaymentInLists.addFilter('AdminPercent','*',document.getElementById('Filter_PaymentInList_AdminPercent_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.PaymentInLists.addFilter('InKrTotal','*',document.getElementById('Filter_PaymentInList_InKrTotal_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\n\ndataViews.PaymentInLists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,mainViewId:'");
try{d=ns.mainViewId;}catch(e){d=''}out.push(d);
 out.push("',Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("',PaymentSource:'");
try{d=ns.PaymentSource;}catch(e){d=''}out.push(d);
 out.push("'});}});\n\"/>\n<span id=\"Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></span>\n</span>\n\n<table class=\"ListTable\" ><thead><tr>\n\n<th width=\"2\" class=\"Col_PaymentInList_Id_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentInLists.setSort('Id');\ndataViews.PaymentInLists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,mainViewId:'");
try{d=ns.mainViewId;}catch(e){d=''}out.push(d);
 out.push("',Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("',PaymentSource:'");
try{d=ns.PaymentSource;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>#</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentInList_Id_List\"> </span></th>\n\n<th width=\"2\" class=\"Col_PaymentInList_Date_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentInLists.setSort('Date');\ndataViews.PaymentInLists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,mainViewId:'");
try{d=ns.mainViewId;}catch(e){d=''}out.push(d);
 out.push("',Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("',PaymentSource:'");
try{d=ns.PaymentSource;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Datum</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentInList_Date_List\"> </span></th>\n\n<th width=\"2\" class=\"Col_PaymentInList_GiverId_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentInLists.setSort('GiverId');\ndataViews.PaymentInLists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,mainViewId:'");
try{d=ns.mainViewId;}catch(e){d=''}out.push(d);
 out.push("',Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("',PaymentSource:'");
try{d=ns.PaymentSource;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Givare</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentInList_GiverId_List\"> </span></th>\n\n<th width=\"2\" class=\"Col_PaymentInList_ProjectId_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentInLists.setSort('ProjectId');\ndataViews.PaymentInLists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,mainViewId:'");
try{d=ns.mainViewId;}catch(e){d=''}out.push(d);
 out.push("',Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("',PaymentSource:'");
try{d=ns.PaymentSource;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Projekt</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentInList_ProjectId_List\"> </span></th>\n\n<th width=\"2\" class=\"Col_PaymentInList_InKr_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentInLists.setSort('InKr');\ndataViews.PaymentInLists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,mainViewId:'");
try{d=ns.mainViewId;}catch(e){d=''}out.push(d);
 out.push("',Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("',PaymentSource:'");
try{d=ns.PaymentSource;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>InKr</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentInList_InKr_List\"> </span></th>\n\n<th width=\"2\" class=\"Col_PaymentInList_AdminCharge_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentInLists.setSort('AdminCharge');\ndataViews.PaymentInLists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,mainViewId:'");
try{d=ns.mainViewId;}catch(e){d=''}out.push(d);
 out.push("',Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("',PaymentSource:'");
try{d=ns.PaymentSource;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Admin</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentInList_AdminCharge_List\"> </span></th>\n\n<th width=\"2\" class=\"Col_PaymentInList_AdminPercent_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentInLists.setSort('AdminPercent');\ndataViews.PaymentInLists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,mainViewId:'");
try{d=ns.mainViewId;}catch(e){d=''}out.push(d);
 out.push("',Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("',PaymentSource:'");
try{d=ns.PaymentSource;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Admin%</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentInList_AdminPercent_List\"> </span></th>\n\n<th width=\"2\" class=\"Col_PaymentInList_InKrTotal_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentInLists.setSort('InKrTotal');\ndataViews.PaymentInLists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,mainViewId:'");
try{d=ns.mainViewId;}catch(e){d=''}out.push(d);
 out.push("',Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("',PaymentSource:'");
try{d=ns.PaymentSource;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>InKrTotal</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentInList_InKrTotal_List\"> </span></th>\n\n<th width=\"\" class=\"Col_Generic662\"><a class=\"SortColumn\" onclick=\"\ndataViews.undefineds.setSort('undefined');\ndataViews.undefineds.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,mainViewId:'");
try{d=ns.mainViewId;}catch(e){d=''}out.push(d);
 out.push("',Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("',PaymentSource:'");
try{d=ns.PaymentSource;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Action</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Generic662\"> </span></th>\n\n</tr><tr>\n\n<td><input id=\"Filter_PaymentInList_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentInLists.getFilter('Id','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentInList_Date_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentInLists.getFilter('Date','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentInList_GiverId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentInLists.getFilter('GiverId','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentInList_ProjectId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentInLists.getFilter('ProjectId','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentInList_InKr_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentInLists.getFilter('InKr','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentInList_AdminCharge_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentInLists.getFilter('AdminCharge','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentInList_AdminPercent_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentInLists.getFilter('AdminPercent','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentInList_InKrTotal_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentInLists.getFilter('InKrTotal','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n<td></td>\n</tr></thead><tbody>\n");

var r;
var totIn=0;
var totAdmin = 0;
var totTot = 0;
for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];
totIn += parseFloat(r.InKr);
totAdmin += parseFloat(r.AdminCharge);
totTot += parseFloat(r.InKrTotal);

 out.push("\n<tr >\n\n<td ><a class=ajaxLink href=Pages/Payment/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push(">");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td >");
try{d=r['Date'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td ><a class=ajaxLink target=AppPages href=Pages/Giver/");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push(">");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td ><a class=ajaxLink target=AppPages href=Pages/Project/");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push(">");
try{d=r.ProjectName;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td style='text-align:right'>");
out.push(dataConvert.toSEK(r['InKr']))
 out.push("</td>\n\n<td style='text-align:right'>");
out.push(dataConvert.toSEK(r['AdminCharge']))
 out.push("</td>\n\n<td >");
try{d=r.AdminPercent;}catch(e){d=''}out.push(d);
 out.push("%</td>\n\n<td style='text-align:right'>");
out.push(dataConvert.toSEK(r['InKrTotal']))
 out.push("</td>\n\n<td ><span class=\"DeleteIcon\" style=\"width:32px;height:16px;cursor:pointer;\">\n    <a onclick=\"\nif (confirm('&Auml;r du s&auml;ker p&aring; att du vill ta bort betalningen')) {\n$.post('do/paymentPreview.php?action=del&Id=");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',{},function(response) {\n    dataViews.PaymentInLists.clearFilter();\n    var mainId = document.getElementById('mainPaymentViewId').value;\n    dataViews.PaymentInLists.setFilter('Date','=',document.getElementById('Payment_Date_New'+mainId).value);\n    dataViews.PaymentInLists.addFilter('PaymentSource','=',document.getElementById('PaymentSource653'+mainId).value);\n    dataViews.PaymentInLists.getList({\n    OnComplete:function(data,Recordset,DataView){\n        App3.Navigate2('local/Pages/PaymentInLists',{navTarget:'PaymentList',target:'PaymentList',data:data,Recordset:Recordset,DataView:DataView });\n    }});\n});\n}\n\" >&nbsp;&nbsp;&nbsp;&nbsp;</a>\n</span></td>\n\n</tr>\n");
}
if (ns.data.length == 0) {//no rows code.
 out.push("\n<tr><td colspan=\"20\"><center>Ingen</center></td></tr>\n");
 } 
 out.push("\n</tbody>\n\n");
} else {
//no data retrieved yet... load it..

 out.push("<script>\ndataViews.PaymentInLists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("\",{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,mainViewId:'");
try{d=ns.mainViewId;}catch(e){d=''}out.push(d);
 out.push("',Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("',PaymentSource:'");
try{d=ns.PaymentSource;}catch(e){d=''}out.push(d);
 out.push("'});}});\n\n</script><img src=\"img/ajaxLoading.gif\"/>ladda...\n");
}
 out.push("\n<tr>\n<td colspan=3></td>\n    <td>Tot</td>\n    <th>");
out.push(dataConvert.toSEK(totIn))
 out.push("</th>\n<th>");
out.push(dataConvert.toSEK(totAdmin))
 out.push("</th>\n<td></td>\n<th>");
out.push(dataConvert.toSEK(totTot))
 out.push("</th>\n<td></td>\n</tr><button onclick=\"\n document.getElementById('PaymentReport').src = 'pdf/ManualPayments.php?PaymentSource='+$('#PaymentSource653");
try{d=ns.PaymentViewId;}catch(e){d=''}out.push(d);
 out.push("').val()+'&Date='+$('#Payment_Date_New");
try{d=ns.PaymentViewId;}catch(e){d=''}out.push(d);
 out.push("').val()+'&rnd='+Math.random();  \n\"><img src=\"img/file_pdf.png\" width=24 height=24/> Betalningskontroll</button>\n<iframe style=\"width:0px;height:0px;\" id=\"PaymentReport\" src=\"about:blank\"></iframe>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
