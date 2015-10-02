function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span style=\"margin-right:30px;\" component=\"Generic676\" task=\"Project4.Task\" class=\"TaskEdit4\">&nbsp;</span>    <span class=\"NewIcon EditIcon\">\n    <a class=\"ajaxLink\" href=\"/Pages/GivProjNew?GiverId=");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("&typ=Fadderbarn\">Koppla Fadderbarn</a>\n</span>\n\n");

if (typeof(dataViews.GiverFadderbarns.curRecordSet.Count) != 'undefined') {
if (typeof(dataViews.GiverFadderbarns.curRecordSet.start) != 'undefined') {
if (typeof(dataViews.GiverFadderbarns.curRecordSet.rPos) != 'undefined') {
if (dataViews.GiverFadderbarns.filterActive) {
    o.push(dataViews.GiverFadderbarns.curRecordSet.start + dataViews.GiverFadderbarns.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.GiverFadderbarns.curRecordSet.filteredCount);
} else {
    o.push(dataViews.GiverFadderbarns.curRecordSet.start + dataViews.GiverFadderbarns.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.GiverFadderbarns.curRecordSet.Count);
}
}
}
}

 out.push("\n    <a title=\"F&ouml;rsta\" onclick=\"\n       $j('#Prog");
try{d=ns.ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.GiverFadderbarns.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('local/Pages/GiverFadderbarns',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns.ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns.ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\n\"><span class=\"RecordsetFirstIcon EditIcon\"> </span></a>\n\n    <a title=\"F&ouml;reg&aring;ende\" onclick=\"\n       $j('#Prog");
try{d=ns.ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.GiverFadderbarns.previousPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('local/Pages/GiverFadderbarns',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns.ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns.ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\n\"><span class=\"RecordsetPreviousIcon EditIcon\"> </span></a>\n\n    \n<a onclick=\"\n        $j('#Prog");
try{d=ns.ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');dataViews.GiverFadderbarns.nextPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('local/Pages/GiverFadderbarns',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns.ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns.ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\n\" title=\"N&auml;sta\"><span class=\"RecordsetNextIcon EditIcon\"> </span></a>\n    \n<a onclick=\"\n$j('#Prog926').addClass('ajaxLoading');dataViews.GiverFadderbarns.lastPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('local/Pages/GiverFadderbarns',{target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView});$j('#Prog");
try{d=ns.ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');},NoNewPage:function(){$j('#Prog");
try{d=ns.ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');}});\n\" title=\"Sista\"><span class=\"RecordsetLastIcon EditIcon\">&nbsp;</span></a>\n\n    \n    <span style=\"padding-left: 40px;\" id=\"Prog");
try{d=ns.ViewId;}catch(e){d=''}out.push(d);
 out.push("\"> </span>\n\n");

if ((ns.data)&&(!ns['forceRead'])) {
 out.push("\n\n<table class=\"ListTable\" ><tr>\n\n<th width=\"25\" class=\"Col_GiverFadderbarn_Id_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverFadderbarns.setSort('Nbr');\ndataViews.GiverFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>#</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverFadderbarn_Id_List\"> </span></th>\n\n<th width=\"\" class=\"Col_GiverFadderbarn_Name_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverFadderbarns.setSort('Name');\ndataViews.GiverFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Namn</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverFadderbarn_Name_List\"> </span></th>\n\n<th width=\"20\" class=\"Col_GiverFadderbarn_Mkr_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverFadderbarns.setSort('Mkr');\ndataViews.GiverFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>kr/m&aring;n</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverFadderbarn_Mkr_List\"> </span></th>\n\n<th width=\"20\" class=\"Col_GiverFadderbarn_Area1_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverFadderbarns.setSort('Area1');\ndataViews.GiverFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Omr&aring;de#</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverFadderbarn_Area1_List\"> </span></th>\n\n<th width=\"25\" class=\"Col_GiverFadderbarn_Area_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverFadderbarns.setSort('Area');\ndataViews.GiverFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Omr&aring;de</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverFadderbarn_Area_List\"> </span></th>\n\n<th width=\"25\" class=\"Col_GiverFadderbarn_CountryCode_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverFadderbarns.setSort('CountryCode');\ndataViews.GiverFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Land</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverFadderbarn_CountryCode_List\"> </span></th>\n\n<th width=\"25\" class=\"Col_GiverFadderbarn_DOB_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverFadderbarns.setSort('DOB');\ndataViews.GiverFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>F&ouml;dd</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverFadderbarn_DOB_List\"> </span></th>\n\n<th width=\"25\" class=\"Col_GiverFadderbarn_HelpD_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverFadderbarns.setSort('HelpD');\ndataViews.GiverFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>B&ouml;rjat</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverFadderbarn_HelpD_List\"> </span></th>\n\n</tr><tr>\n\n<td><input id=\"Filter_GiverFadderbarn_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverFadderbarns.getFilter('Nbr','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_GiverFadderbarn_Name_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverFadderbarns.getFilter('Name','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_GiverFadderbarn_Mkr_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverFadderbarns.getFilter('Mkr','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_GiverFadderbarn_Area1_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverFadderbarns.getFilter('Area1','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_GiverFadderbarn_Area_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverFadderbarns.getFilter('Area','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_GiverFadderbarn_CountryCode_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverFadderbarns.getFilter('CountryCode','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_GiverFadderbarn_DOB_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverFadderbarns.getFilter('DOB','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_GiverFadderbarn_HelpD_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverFadderbarns.getFilter('HelpD','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n</tr>\n");

var r;

for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];


 out.push("\n<tr >\n\n<td ><a class=ajaxLink href=Pages/Fadderbarn/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push(" target=AppPages>#");
try{d=r.Nbr;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td ><a class=ajaxLink href=Pages/Fadderbarn/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push(" target=AppPages>");
try{d=r.Name;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td style='text-align:right'>");
out.push(dataConvert.toSEK(r['Mkr']))
 out.push("</td>\n\n<td >");
try{d=r['Area1'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['Area'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['CountryCode'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['DOB'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['HelpD'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n</tr>\n");
}
if (ns.data.length == 0) {//no rows code.
 out.push("\n<tr><td colspan=\"22\"><center>Ingen</center></td></tr>\n");
 } 
 out.push("\n\n</table>\n");
} else {
//no data retrieved yet... load it..

 out.push("<script>\ndataViews.GiverFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"");
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
