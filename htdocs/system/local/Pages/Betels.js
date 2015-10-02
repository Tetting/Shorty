function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"BetelsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"Betels_ProtoHeader\">Betel</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/BetelNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Betels\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = $('<div/>').html(\"Betellista\").text();\n</script><br/>\n\n");

if ((ns.data)&&(!ns['forceRead'])) {
 out.push("\n\n<span class=\"EditIcons\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"BetelList_fields\"> </span>\n");

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
 out.push("').addClass('ajaxLoading');dataViews.Betels.clearFilter();dataViews.Betels.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.Betels.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.Betels.previousPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.Betels.nextPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.Betels.lastPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetLastIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n<a title=\"H&auml;mta alla\" onclick=\"$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.Betels.getAllRows({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\"><span class=\"RecordsetAllIcon EditIcon\">&nb");
try{d='sp';}catch(e){d=''}out.push(d);
 out.push(";</span></a>\n<input type=\"button\" style=\"display:none\" id=\"Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\ndataViews.Betels.clearFilter();\n\ndataViews.Betels.addFilter('Id','*',document.getElementById('Filter_Betel_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Betels.addFilter('Name','*',document.getElementById('Filter_Betel_Name_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Betels.addFilter('Address','*',document.getElementById('Filter_Betel_Address_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Betels.addFilter('Zip','*',document.getElementById('Filter_Betel_Zip_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Betels.addFilter('ZipTown','*',document.getElementById('Filter_Betel_ZipTown_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Betels.addFilter('CountryCode','*',document.getElementById('Filter_Betel_CountryCode_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Betels.addFilter('DOB','*',document.getElementById('Filter_Betel_DOB_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Betels.addFilter('BapDT','*',document.getElementById('Filter_Betel_BapDT_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Betels.addFilter('Tel','*',document.getElementById('Filter_Betel_Tel_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.Betels.addFilter('Status','*',document.getElementById('Filter_Betel_Status_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\n\ndataViews.Betels.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\n\"/>\n<span id=\"Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></span>\n</span>\n\n<table class=\"ListTable\" ><tr>\n\n<th width=\"\" class=\"Col_Betel_Id_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Betels.setSort('Id');\ndataViews.Betels.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>#</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Betel_Id_List\"> </span></th>\n\n<th width=\"\" class=\"Col_Betel_Name_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Betels.setSort('Name');\ndataViews.Betels.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Namn</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Betel_Name_List\"> </span></th>\n\n<th width=\"\" class=\"Col_Betel_Address_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Betels.setSort('Address');\ndataViews.Betels.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Adress</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Betel_Address_List\"> </span></th>\n\n<th width=\"\" class=\"Col_Betel_Zip_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Betels.setSort('Zip');\ndataViews.Betels.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Postnr</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Betel_Zip_List\"> </span></th>\n\n<th width=\"\" class=\"Col_Betel_ZipTown_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Betels.setSort('ZipTown');\ndataViews.Betels.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Postort</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Betel_ZipTown_List\"> </span></th>\n\n<th width=\"\" class=\"Col_Betel_CountryCode_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Betels.setSort('CountryCode');\ndataViews.Betels.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Landkod</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Betel_CountryCode_List\"> </span></th>\n\n<th width=\"\" class=\"Col_Betel_DOB_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Betels.setSort('DOB');\ndataViews.Betels.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>F&ouml;dd</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Betel_DOB_List\"> </span></th>\n\n<th width=\"\" class=\"Col_Betel_BapDT_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Betels.setSort('BapDT');\ndataViews.Betels.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>D&ouml;pdatum</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Betel_BapDT_List\"> </span></th>\n\n<th width=\"\" class=\"Col_Betel_Tel_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Betels.setSort('Tel');\ndataViews.Betels.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Tel</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Betel_Tel_List\"> </span></th>\n\n<th width=\"\" class=\"Col_Betel_Status_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.Betels.setSort('Status');\ndataViews.Betels.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView });}});\"><u>Status</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Betel_Status_List\"> </span></th>\n\n</tr><tr>\n\n<td><input id=\"Filter_Betel_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Betels.getFilter('Id','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Betel_Name_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Betels.getFilter('Name','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Betel_Address_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Betels.getFilter('Address','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Betel_Zip_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Betels.getFilter('Zip','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Betel_ZipTown_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Betels.getFilter('ZipTown','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Betel_CountryCode_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Betels.getFilter('CountryCode','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Betel_DOB_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Betels.getFilter('DOB','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Betel_BapDT_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Betels.getFilter('BapDT','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Betel_Tel_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Betels.getFilter('Tel','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Betel_Status_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.Betels.getFilter('Status','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n</tr>\n");

var r;

for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];


 out.push("\n<tr >\n\n<td ><a class=ajaxLink href=Pages/Betel/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push(">");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td ><a class=ajaxLink href=Pages/Betel/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push(">");
try{d=r.Name;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td >");
try{d=r['Address'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['Zip'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['ZipTown'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['CountryCode'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['DOB'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['BapDT'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['Tel'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['Status'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n</tr>\n");
}
if (ns.data.length == 0) {//no rows code.
 out.push("\n<tr><td colspan=\"13\"><center>Ingen</center></td></tr>\n");
 } 
 out.push("\n\n</table>\n");
} else {
//no data retrieved yet... load it..

 out.push("<script>\ndataViews.Betels.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"");
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
