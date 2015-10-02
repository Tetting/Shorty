function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"PaymentOutsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"PaymentOuts_ProtoHeader\">Utbetalningar</span> \n\n<span class=\"EditIcons\"></span><br/>\n\n");

if ((ns.data)&&(!ns['forceRead'])) {
 out.push("\n\n<span class=\"EditIcons\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentOutList_fields\"> </span>\n");

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
 out.push("').addClass('ajaxLoading');dataViews.PaymentOuts.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.PaymentOuts.previousPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.PaymentOuts.nextPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.PaymentOuts.lastPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("\" onclick=\"\ndataViews.PaymentOuts.clearFilter();\ndataViews.PaymentOuts.addFilter('Date','=','");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("');\n\ndataViews.PaymentOuts.addFilter('Id','*',document.getElementById('Filter_PaymentOut_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.PaymentOuts.addFilter('Date','*',document.getElementById('Filter_PaymentOut_Date_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.PaymentOuts.addFilter('PaymentType','*',document.getElementById('Filter_PaymentOut_PaymentType_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.PaymentOuts.addFilter('ProjectId','*',document.getElementById('Filter_PaymentOut_ProjectId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.PaymentOuts.addFilter('OutKr','*',document.getElementById('Filter_PaymentOut_OutKr_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.PaymentOuts.addFilter('AddedBy','*',document.getElementById('Filter_PaymentOut_AddedBy_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.PaymentOuts.addFilter('PaymentSource','*',document.getElementById('Filter_PaymentOut_PaymentSource_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\n\ndataViews.PaymentOuts.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("'});}});\n\"/>\n<span id=\"Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></span>\n</span>\n\n<table class=\"ListTable\" ><thead><tr>\n\n<th width=\"2\" class=\"Col_PaymentOut_Id_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentOuts.setSort('Id');\ndataViews.PaymentOuts.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>#</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentOut_Id_List\"> </span></th>\n\n<th width=\"2\" class=\"Col_PaymentOut_Date_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentOuts.setSort('Date');\ndataViews.PaymentOuts.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Datum</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentOut_Date_List\"> </span></th>\n\n<th width=\"2\" class=\"Col_PaymentOut_PaymentType_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentOuts.setSort('PaymentType');\ndataViews.PaymentOuts.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>BetTyp</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentOut_PaymentType_List\"> </span></th>\n\n<th width=\"2\" class=\"Col_PaymentOut_ProjectId_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentOuts.setSort('ProjectId');\ndataViews.PaymentOuts.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Projekt</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentOut_ProjectId_List\"> </span></th>\n\n<th width=\"2\" class=\"Col_PaymentOut_OutKr_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentOuts.setSort('OutKr');\ndataViews.PaymentOuts.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>OutKr</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentOut_OutKr_List\"> </span></th>\n\n<th width=\"2\" class=\"Col_PaymentOut_AddedBy_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentOuts.setSort('AddedBy');\ndataViews.PaymentOuts.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Anv&auml;ndare</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentOut_AddedBy_List\"> </span></th>\n\n<th width=\"2\" class=\"Col_PaymentOut_PaymentSource_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.PaymentOuts.setSort('PaymentSource');\ndataViews.PaymentOuts.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Typ</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"PaymentOut_PaymentSource_List\"> </span></th>\n\n<th width=\"\" class=\"Col_Generic905\"><a class=\"SortColumn\" onclick=\"\ndataViews.undefineds.setSort('undefined');\ndataViews.undefineds.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Action</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Generic905\"> </span></th>\n\n</tr><tr>\n\n<td><input id=\"Filter_PaymentOut_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentOuts.getFilter('Id','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentOut_Date_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentOuts.getFilter('Date','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentOut_PaymentType_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentOuts.getFilter('PaymentType','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentOut_ProjectId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentOuts.getFilter('ProjectId','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentOut_OutKr_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentOuts.getFilter('OutKr','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentOut_AddedBy_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentOuts.getFilter('AddedBy','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_PaymentOut_PaymentSource_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.PaymentOuts.getFilter('PaymentSource','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n<td></td>\n</tr></thead><tbody>\n");

var r;
var totOut=0;
for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];
totOut += parseFloat(r.OutKr);

 out.push("\n<tr >\n\n<td ><a class=ajaxLink href=Pages/PaymentOut/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push(">");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td >");
try{d=r['Date'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['PaymentType'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td ><a class=ajaxLink href=Pages/Project/");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push(">");
try{d=r.ProjectId;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td style='text-align:right'>");
out.push(dataConvert.toSEK(r['OutKr']))
 out.push("</td>\n\n<td >");
try{d=r['AddedBy'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['PaymentSource'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td ><span class=\"DeleteIcon\" style=\"width:32px;height:16px;cursor:pointer;\">\n    <a onclick=\"\nif (confirm('&Auml;r du s&auml;ker p&aring; att du vill ta bort betalningen?')) {\n$.post('do/paymentOutPreview.php?action=del&Id=");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',{},function(response) {\n    dataViews.PaymentOuts.clearFilter();\n    var mainId = document.getElementById('mainPaymentViewId').value;\n    dataViews.PaymentOuts.setFilter('Date','=',document.getElementById('PaymentOut_Date_New'+mainId).value);\n    //dataViews.PaymentOuts.addFilter('PaymentSource','=',document.getElementById('PaymentSource653'+mainId).value);\n    dataViews.PaymentOuts.getList({\n    OnComplete:function(data,Recordset,DataView){\n        App3.Navigate2('local/Pages/PaymentOuts',{navTarget:'PaymentList',target:'PaymentList',data:data,Recordset:Recordset,DataView:DataView });\n    }});\n});\n}\n\" >&nbsp;&nbsp;&nbsp;&nbsp;</a>\n</span></td>\n\n</tr>\n");
}
if (ns.data.length == 0) {//no rows code.
 out.push("\n<tr><td colspan=\"17\"><center>Ingen</center></td></tr>\n");
 } 
 out.push("\n</tbody>\n\n");
} else {
//no data retrieved yet... load it..

 out.push("<script>\ndataViews.PaymentOuts.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("\",{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Date:'");
try{d=ns.Date;}catch(e){d=''}out.push(d);
 out.push("'});}});\n\n</script><img src=\"img/ajaxLoading.gif\"/>ladda...\n");
}
 out.push("\n<tr>\n<td colspan=3></td>\n    <td>Tot</td>\n    <th>");
out.push(dataConvert.toSEK(totOut))
 out.push("</th>\n<td colspan=3></td>\n</tr><button onclick=\"\n document.getElementById('PaymentReport').src = 'pdf/ManualOutPayments.php?PaymentSource=utbet&Date='+$('#PaymentOut_Date_New");
try{d=ns.PaymentViewId;}catch(e){d=''}out.push(d);
 out.push("').val()+'&rnd='+Math.random();  \n\"><img src=\"img/file_pdf.png\" width=24 height=24/> Utbetalningsrapport</button>\n<iframe style=\"width:0px;height:0px;\" id=\"PaymentReport\" src=\"about:blank\"></iframe>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
