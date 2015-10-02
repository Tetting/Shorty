function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"SocialWorkerFadderbarnsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"SocialWorkerFadderbarns_ProtoHeader\">Fadderbarn</span> \n\n<span class=\"EditIcons\"></span><br/>\n\n");

if ((ns.data)&&(!ns['forceRead'])) {
 out.push("\n\n<span class=\"EditIcons\"><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"SocialWorkerFadderbarnList_fields\"> </span>\n");

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
 out.push("').addClass('ajaxLoading');dataViews.SocialWorkerFadderbarns.firstPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.SocialWorkerFadderbarns.previousPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.SocialWorkerFadderbarns.nextPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("').addClass('ajaxLoading');dataViews.SocialWorkerFadderbarns.lastPage({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
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
 out.push("\" onclick=\"\ndataViews.SocialWorkerFadderbarns.clearFilter();\ndataViews.SocialWorkerFadderbarns.addFilter('Helper','=','");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("');\n\ndataViews.SocialWorkerFadderbarns.addFilter('Id','*',document.getElementById('Filter_SocialWorkerFadderbarn_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkerFadderbarns.addFilter('Name','*',document.getElementById('Filter_SocialWorkerFadderbarn_Name_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkerFadderbarns.addFilter('FathersName','*',document.getElementById('Filter_SocialWorkerFadderbarn_FathersName_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkerFadderbarns.addFilter('MothersName','*',document.getElementById('Filter_SocialWorkerFadderbarn_MothersName_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkerFadderbarns.addFilter('DOB','*',document.getElementById('Filter_SocialWorkerFadderbarn_DOB_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkerFadderbarns.addFilter('GiverId','*',document.getElementById('Filter_SocialWorkerFadderbarn_GiverId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkerFadderbarns.addFilter('HelpD','*',document.getElementById('Filter_SocialWorkerFadderbarn_HelpD_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkerFadderbarns.addFilter('Mkr','*',document.getElementById('Filter_SocialWorkerFadderbarn_Mkr_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkerFadderbarns.addFilter('Area1','*',document.getElementById('Filter_SocialWorkerFadderbarn_Area1_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkerFadderbarns.addFilter('Area','*',document.getElementById('Filter_SocialWorkerFadderbarn_Area_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkerFadderbarns.addFilter('TGdt','*',document.getElementById('Filter_SocialWorkerFadderbarn_TGdt_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.SocialWorkerFadderbarns.addFilter('CountryCode','*',document.getElementById('Filter_SocialWorkerFadderbarn_CountryCode_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\n\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Helper:'");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("'});}});\n\"/>\n<span id=\"Prog");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></span>\n</span>\n\n<table class=\"ListTable\" ><tr>\n\n<th width=\"\" class=\"Col_SocialWorkerFadderbarn_Id_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkerFadderbarns.setSort('Id');\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Helper:'");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Id</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"SocialWorkerFadderbarn_Id_List\"> </span></th>\n\n<th width=\"\" class=\"Col_SocialWorkerFadderbarn_Name_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkerFadderbarns.setSort('Name');\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Helper:'");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Name</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"SocialWorkerFadderbarn_Name_List\"> </span></th>\n\n<th width=\"\" class=\"Col_SocialWorkerFadderbarn_FathersName_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkerFadderbarns.setSort('FathersName');\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Helper:'");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>FathersName</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"SocialWorkerFadderbarn_FathersName_List\"> </span></th>\n\n<th width=\"\" class=\"Col_SocialWorkerFadderbarn_MothersName_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkerFadderbarns.setSort('MothersName');\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Helper:'");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>MothersName</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"SocialWorkerFadderbarn_MothersName_List\"> </span></th>\n\n<th width=\"\" class=\"Col_SocialWorkerFadderbarn_DOB_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkerFadderbarns.setSort('DOB');\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Helper:'");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>DOB</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"SocialWorkerFadderbarn_DOB_List\"> </span></th>\n\n<th width=\"\" class=\"Col_SocialWorkerFadderbarn_GiverId_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkerFadderbarns.setSort('GiverId');\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Helper:'");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Givare</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"SocialWorkerFadderbarn_GiverId_List\"> </span></th>\n\n<th width=\"\" class=\"Col_SocialWorkerFadderbarn_HelpD_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkerFadderbarns.setSort('HelpD');\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Helper:'");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>HelpD</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"SocialWorkerFadderbarn_HelpD_List\"> </span></th>\n\n<th width=\"\" class=\"Col_SocialWorkerFadderbarn_Mkr_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkerFadderbarns.setSort('Mkr');\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Helper:'");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Mkr</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"SocialWorkerFadderbarn_Mkr_List\"> </span></th>\n\n<th width=\"\" class=\"Col_SocialWorkerFadderbarn_Area1_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkerFadderbarns.setSort('Area1');\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Helper:'");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Area1</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"SocialWorkerFadderbarn_Area1_List\"> </span></th>\n\n<th width=\"\" class=\"Col_SocialWorkerFadderbarn_Area_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkerFadderbarns.setSort('Area');\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Helper:'");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>Area</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"SocialWorkerFadderbarn_Area_List\"> </span></th>\n\n<th width=\"\" class=\"Col_SocialWorkerFadderbarn_TGdt_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkerFadderbarns.setSort('TGdt');\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Helper:'");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>TGdt</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"SocialWorkerFadderbarn_TGdt_List\"> </span></th>\n\n<th width=\"\" class=\"Col_SocialWorkerFadderbarn_CountryCode_List\"><a class=\"SortColumn\" onclick=\"\ndataViews.SocialWorkerFadderbarns.setSort('CountryCode');\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("',{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Helper:'");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("'});}});\"><u>CountryCode</u></a><span class=\"TaskEdit4\" Task=\"Project4.Task\" Component=\"SocialWorkerFadderbarn_CountryCode_List\"> </span></th>\n\n</tr><tr>\n\n<td><input id=\"Filter_SocialWorkerFadderbarn_Id_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkerFadderbarns.getFilter('Id','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_SocialWorkerFadderbarn_Name_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkerFadderbarns.getFilter('Name','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_SocialWorkerFadderbarn_FathersName_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkerFadderbarns.getFilter('FathersName','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_SocialWorkerFadderbarn_MothersName_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkerFadderbarns.getFilter('MothersName','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_SocialWorkerFadderbarn_DOB_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkerFadderbarns.getFilter('DOB','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_SocialWorkerFadderbarn_GiverId_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkerFadderbarns.getFilter('GiverId','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_SocialWorkerFadderbarn_HelpD_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkerFadderbarns.getFilter('HelpD','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_SocialWorkerFadderbarn_Mkr_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkerFadderbarns.getFilter('Mkr','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_SocialWorkerFadderbarn_Area1_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkerFadderbarns.getFilter('Area1','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_SocialWorkerFadderbarn_Area_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkerFadderbarns.getFilter('Area','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_SocialWorkerFadderbarn_TGdt_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkerFadderbarns.getFilter('TGdt','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n<td><input id=\"Filter_SocialWorkerFadderbarn_CountryCode_List");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" style=\"width:95%\" value=\"");
out.push(dataViews.SocialWorkerFadderbarns.getFilter('CountryCode','*'));
 out.push("\" onkeypress=\"var e = (event) ? event : window.event;char=(e.charCode)?e.charCode:e.keyCode;if(char==13){$j('#Filter_");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();}\"/></td>\n\n</tr>\n");

var r;

for(var ri=0;ri<ns.data.length;ri++) {
r = ns.data[ri];


 out.push("\n<tr >\n\n<td ><a class=ajaxLink href=Pages/SocialWorkerFadderbarn/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push(">");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td ><a class=ajaxLink href=Pages/Fadderbarn/");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push(" target=AppPages>");
try{d=r.Name;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td >");
try{d=r['FathersName'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['MothersName'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['DOB'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td ><a class=ajaxLink target=AppPages href=Pages/Giver/");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push(">");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("</a></td>\n\n<td >");
try{d=r['HelpD'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['Mkr'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['Area1'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['Area'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['TGdt'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n<td >");
try{d=r['CountryCode'];}catch(e){d=''}out.push(d);
 out.push("</td>\n\n</tr>\n");
}
if (ns.data.length == 0) {//no rows code.
 out.push("\n<tr><td colspan=\"27\"><center>Ingen</center></td></tr>\n");
 } 
 out.push("\n\n</table>\n");
} else {
//no data retrieved yet... load it..

 out.push("<script>\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("\",{navTarget:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,Helper:'");
try{d=ns.Helper;}catch(e){d=''}out.push(d);
 out.push("'});}});\n\n</script><img src=\"img/ajaxLoading.gif\"/>ladda...\n");
}
 out.push("\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
