function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"EvangelistsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"protoHeader445\">Evangelister</span> \n\n<span class=\"EditIcons\"></span><br/>\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a class=\"ajaxLink\" href=\"/Pages/GivProjNew?GiverId=");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("&typ=Evangelist\">Koppla Evangelist</a>\n    </span>\n</span>\n");

if ((ns.data)&&(!ns['forceRead'])) {
 out.push("\n\n<span class=\"EditIcons\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"GiverEvangelistList429\"> </span>\n");

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
 out.push("').addClass('ajaxLoading');dataViews.GiverEvangelists.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.GiverEvangelists.previousPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.GiverEvangelists.nextPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.GiverEvangelists.lastPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("\" onclick=\"\ndataViews.GiverEvangelists.clearFilter();\ndataViews.GiverEvangelists.addFilter('GiverId','=','");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("');\n\ndataViews.GiverEvangelists.addFilter('Id','*',document.getElementById('Filter_Id430");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverEvangelists.addFilter('Name','*',document.getElementById('Filter_Name431");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverEvangelists.addFilter('Mkr','*',document.getElementById('Filter_Mkr435");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverEvangelists.addFilter('Area1','*',document.getElementById('Filter_Area1436");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverEvangelists.addFilter('Area','*',document.getElementById('Filter_Area437");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverEvangelists.addFilter('CountryCode','*',document.getElementById('Filter_CountryCode439");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.GiverEvangelists.addFilter('HelpD','*',document.getElementById('Filter_HelpD434");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\n\ndataViews.GiverEvangelists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("});}});\n\"/>\n<span id=\"Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></span>\n</span>\n\n<table class=\"ListTable\" ><tr>\n\n<th width=\"25\" class=\"Col_Id430\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverEvangelists.setSort('Id');\ndataViews.GiverEvangelists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("});}});\"><u>#</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Id430\"> </span></th>\n\n<th width=\"\" class=\"Col_Name431\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverEvangelists.setSort('Name');\ndataViews.GiverEvangelists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("});}});\"><u>Namn</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Name431\"> </span></th>\n\n<th width=\"25\" class=\"Col_Mkr435\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverEvangelists.setSort('Mkr');\ndataViews.GiverEvangelists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("});}});\"><u>kr/m&aring;n</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Mkr435\"> </span></th>\n\n<th width=\"\" class=\"Col_Area1436\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverEvangelists.setSort('Area1');\ndataViews.GiverEvangelists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("});}});\"><u>Omr&aring;de#</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Area1436\"> </span></th>\n\n<th width=\"\" class=\"Col_Area437\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverEvangelists.setSort('Area');\ndataViews.GiverEvangelists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("});}});\"><u>Omr&aring;de</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"Area437\"> </span></th>\n\n<th width=\"\" class=\"Col_CountryCode439\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverEvangelists.setSort('CountryCode');\ndataViews.GiverEvangelists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("});}});\"><u>Land</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"CountryCode439\"> </span></th>\n\n<th width=\"\" class=\"Col_HelpD434\"><a class=\"SortColumn\" onclick=\"\ndataViews.GiverEvangelists.setSort('HelpD');\ndataViews.GiverEvangelists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("});}});\"><u>B&ouml;rjat</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"HelpD434\"> </span></th>\n\n</tr><tr>\n\n<td><input id=\"Filter_Id430");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverEvangelists.getFilter('Id','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Name431");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverEvangelists.getFilter('Name','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Mkr435");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverEvangelists.getFilter('Mkr','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Area1436");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverEvangelists.getFilter('Area1','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_Area437");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverEvangelists.getFilter('Area','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_CountryCode439");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverEvangelists.getFilter('CountryCode','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_HelpD434");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.GiverEvangelists.getFilter('HelpD','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n</tr>\n");

var r;

for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];


 out.push("\n<tr >\n\n<td >");
try{d=r['Id'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td ><a class=ajaxLink href=Pages/Evangelist/");
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
try{d=r['HelpD'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n</tr>\n");
}
if (ns.data.length == 0) {//no rows code.
 out.push("\n<tr><td colspan=\"14\"><center>Ingen</center></td></tr>\n");
 } 
 out.push("\n\n</table>\n");
} else {
//no data retrieved yet... load it..

 out.push("<script>\ndataViews.GiverEvangelists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("\",{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,GiverId:'");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("});}});\n\n</script><img src=\"img/ajaxLoading.gif\"/>ladda...\n");
}
 out.push("\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
