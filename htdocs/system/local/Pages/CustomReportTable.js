function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<table class=\"EditTable\">\n<tr><th colspan=8><center>data</center></th></tr>\n<tr><th>#</th>\n    <th>Typ</th>\n    <th>fält</th>\n    <th>x</th>\n    <th>xEnd</th>\n    <th>y</th>\n    <th></th>\n</tr>\n");

if (ns.data.length == 0) { 
 out.push("\n<tr><td colspan=\"3\"><center>Ingen element</center></td></tr>\n");

} else {
    var r;
    for(var ri=1;ri<ns.data.length;ri++) {
        r = ns.data[ri];
        if (r['type'] == 'text') {

 out.push("<tr>\n<td><a onclick=\"App3.Navigate2('/Pages/CustomReportDo?action=edit&id=");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("&report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',{target:'ReportAction'});\" class=\"ajaxLink linkClick\">");
try{d=r['id'];}catch(e){d=''}out.push(d);
 out.push("</a></td>\n<td>");
try{d=r['type'];}catch(e){d=''}out.push(d);
 out.push("</td>\n<td>\n");

console.info("here");
var tf = r['fieldName'];
if (tf.indexOf(',') > 0) {
    out.push(r['fieldName'].substr(0,tf.indexOf(',')));
} else {
    out.push(r['fieldName']);
}

 out.push("</td>\n    <td>");
try{d=r['xStart'];}catch(e){d=''}out.push(d);
 out.push("</td>\n    <td>");
try{d=r['xEnd'];}catch(e){d=''}out.push(d);
 out.push("</td>\n    <td>");
try{d=r['y'];}catch(e){d=''}out.push(d);
 out.push("</td>\n    <td>\n<a onclick=\"App3.Navigate2('/Pages/CustomReportDo?action=up&id=");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("&report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',{target:'ReportAction'});\" class=\"ajaxLink\"><img src=\"img/arrow_up.png\"/></a>\n\n<a onclick=\"App3.Navigate2('/Pages/CustomReportDo?action=clone&id=");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("&report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',{target:'ReportAction'});\" class=\"ajaxLink\">[ + ]</a>\n\n<a onclick=\"App3.Navigate2('/Pages/CustomReportDo?action=del&id=");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("&report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',{target:'ReportAction'});\" class=\"ajaxLink\">[ x ]</a>\n</td>\n</tr>\n");

} else {
if (r['cmdName'] == 'divider') {
 out.push("<tr><th colspan=6><center>");
try{d=r.comment;}catch(e){d=''}out.push(d);
 out.push("</center></th><th>\n\n<a onclick=\"App3.Navigate2('/Pages/CustomReportDo?action=up&id=");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("&report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',{target:'ReportAction'});\" class=\"ajaxLink\"><img src=\"img/arrow_up.png\"/></a>\n\n<a onclick=\"App3.Navigate2('/Pages/CustomReportDo?action=clone&id=");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("&report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',{target:'ReportAction'});\" class=\"ajaxLink\">[ + ]</a>\n\n<a onclick=\"App3.Navigate2('/Pages/CustomReportDo?action=del&id=");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("&report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',{target:'ReportAction'});\" class=\"ajaxLink\">[ x ]</a></td>\n</th></tr>\n\n");

} else {
 out.push("\n<td><a onclick=\"App3.Navigate2('/Pages/CustomReportDo?action=edit&id=");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("&report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',{target:'ReportAction'});\" class=\"ajaxLink linkClick\">");
try{d=r['id'];}catch(e){d=''}out.push(d);
 out.push("</a></td>\n<td>");
try{d=r['type'];}catch(e){d=''}out.push(d);
 out.push("</td>\n<td>");
try{d=r['cmdName'];}catch(e){d=''}out.push(d);
 out.push("</td>\n    <td>");
try{d=r['xStart'];}catch(e){d=''}out.push(d);
 out.push("</td>\n    <td>");
try{d=r['xEnd'];}catch(e){d=''}out.push(d);
 out.push("</td>\n    <td>");
try{d=r['y'];}catch(e){d=''}out.push(d);
 out.push("</td>\n    <td>\n<a onclick=\"App3.Navigate2('/Pages/CustomReportDo?action=up&id=");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("&report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',{target:'ReportAction'});\" class=\"ajaxLink\"><img src=\"img/arrow_up.png\"/></a>\n\n<a onclick=\"App3.Navigate2('/Pages/CustomReportDo?action=clone&id=");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("&report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',{target:'ReportAction'});\" class=\"ajaxLink\">[ + ]</a>\n\n<a onclick=\"App3.Navigate2('/Pages/CustomReportDo?action=del&id=");
try{d=r.id;}catch(e){d=''}out.push(d);
 out.push("&report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',{target:'ReportAction'});\" class=\"ajaxLink\">[ x ]</a></td>\n</tr>\n");

}
}
}
}

 out.push("\n<tr><td colspan=7><center>\n<a onclick=\"App3.Navigate2('/Pages/CustomReportDo?action=editCmd&report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',{target:'ReportAction'});\" class=\"ajaxLink linkClick\">add cmd</a>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<a onclick=\"App3.Navigate2('/Pages/CustomReportDo?action=edit&report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',{target:'ReportAction'});\" class=\"ajaxLink linkClick\">add text</a>\n</center></td></tr>\n\n</table>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
