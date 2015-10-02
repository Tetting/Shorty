function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("");

if(!ns.Id){ns.Id=ns.url.split("/").pop();}

 out.push("\n<div id=\"ReportParams\">\n<table class=\"EditTable\">\n<tr><th colspan=2>Rapport</th></tr>\n<tr><td>id:</td><td><input id=\"id\" value=\"");
try{d=ns.id;}catch(e){d=''}out.push(d);
 out.push("\"/></td></tr> \n<tr><td colspan=2><center><button class=\"ActionButton\" onclick=\"\n    var s = '&_report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("';\ndocument.getElementById('ReportView').src='do/task.php?action=viewReport'+s+'&amp;_rnd='+Math.random();\n//have to select the application again...\n$('#id').select().focus();\n\" title=\"kör\"><img src=\"img/file_pdf.png\" width=32 height=32/></button>\n</center></td></tr>\n</table>\n</div>\n<br style=\"clear:both;\"/>\n<div id=\"testFrame\">\n<iframe id=\"ReportView\" name=\"ReportView\" style=\"width: 100%; height: 600px;\" src=\"about:blank\"></iframe>\n</div>\n<script>\n$.ajax({\n    type:'GET'\n    ,url:\"do/task.php?action=runReport&_report=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("\"\n    ,data:{");

var com = '';
for(var i in ns.params) {
    out.push(com+i+':"');
    out.push(ns.params[i]);
    out.push('"');
    com = ',';
}

 out.push("}    \n    ,success:function(response,textStatus,XMLHttpRequest) {\n        var r = XMLHttpRequest.getResponseHeader('Content-Type');\n        if (r.split(';')[0] == 'text/html') {\n            $('#ReportParams').html(response);\n        }\n    },error:function(XMLHttpRequest, textStatus, errorThrown) {\n        console.log(\"error\",errorThrown);\n    }\n});\ndocument.title=\"Anpassade Rapport ");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("\";\n</script>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
