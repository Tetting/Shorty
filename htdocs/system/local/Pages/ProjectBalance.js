function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("");

    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n<div id=\"confirmClickAway\">\n<div style=\"position:absolute;\"><div style=\"z-index: 99; position: absolute; width: 400px; height: 260px; background: none repeat scroll 0% 0% rgba(99, 99, 99, 0.9); display: none;\" id=\"confirm\">\n</div></div>\n</div>\n<script>\n$j('#confirmClickAway').click(function(e){\n    if ($j(this).closest('#confirm').size() == 0) {\n        $j('#confirm').hide();\n    }\n});\n</script></div>\n<table style=\"float:left;min-width:300px\" class=\"EditTable\">\n<thead>\n    <tr><th colspan=\"2\">Välj Projekt</span></th></tr>\n    </thead><colgroup><col><col>\n\n    </colgroup><tbody>\n<tr><td><label>Projekt:</label></td><td><input type=\"text\" id=\"ProjectId\"\nonchange=\"$.post('do/projectStats.php',{\n    id:document.getElementById('ProjectId').value\n},function(response) {\n    $('#projectView");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').html(response);\n});\n\"\nvalue=\"");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("\"/>\n<button id=\"viewProject\" onclick=\"\n$.post('do/projectStats.php',{\n    id:document.getElementById('ProjectId').value\n},function(response) {\n    $('#projectView");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').html(response);\n});\n\">Go</button></td></tr>\n</tbody></table>\n\n<br style=\"clear:both\"/>\n<div id=\"projectView");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></div>\n<br style=\"clear:both\"/>\n\n<table style=\"float:left;min-width:300px\" class=\"EditTable\">\n<thead>\n    <tr><th colspan=\"2\">Ställa balansen</span></th></tr>\n    </thead><colgroup><col><col>\n\n    </colgroup><tbody>\n<tr><td><label>Datum:</label></td><td>\n<input type=\"text\" size=\"12\" value=\"\" \nid=\"BalanceDate");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable dateEdit\">\n<script>$j('#BalanceDate");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td></tr>\n<tr><td><label>Saldo:</label></td><td><input id=\"Saldo");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"/></td></tr>\n<tr><td colspan=\"2\"><center><button onclick=\"\nvar dat={};\ndat.ProjectId = $('#ProjectId').val();\ndat.Date = $('#BalanceDate");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val();\ndat.Saldo = $('#Saldo");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val();\n$j.post('do/setBalancePreview.php',dat,function(response) {\n    $j('#confirm').html(response).show();\n});\n\">Preview</button></center></td></tr>\n</tbody></table>\n\n\n</div>\n<script>\n    document.title = 'Ställa balansen';\n    ");
if (ns.Id) {
 out.push("        \n$.post('do/projectStats.php',{\n    id:document.getElementById('ProjectId').value\n},function(response) {\n    $('#projectView");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').html(response);\n});    \n    ");
}
 out.push("\n</script>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
