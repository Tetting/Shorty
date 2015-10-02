function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("\n<span component=\"ChurchProtoHeader\" task=\"Project4.Task\" class=\"BigIcon\">Mass Handlingar</span>\n\n<table class=\"EditTable\">\n<thead>\n<tr><th colspan=2>Handlingar</th></tr>\n</thead>\n<tbody>\n<tr><td>#lista</td><td><input id=\"list");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"/></td></tr>\n<tr><td>Handelse:</td><td><select id=\"FadderbarnAction_actionName_New31\">\n<option value=\"Nytt foto\">Nytt foto</option>\n<option value=\"Ny allmän rapport\">Ny allmän rapport</option>\n<option value=\"Ny rapport\">Ny rapport</option>\n</select></td></tr>\n<tr><td>Datum:</td><td>\n<input class=\"dateEdit\" id=\"MassAction_date_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  onchange=\"\" value=\"\" size=\"12\"/>\n<script>$j('#MassAction_date_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td></tr>\n<tr><td>noteringar:</td><td>\n<textarea id=\"MassAction_notes");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" rows=\"10\" cols=\"20\" wrap=\"off\"></textarea>\n</td></tr>\n<tr><td colspan=2><center><button onclick=\"\n$.post('do/massActions.php',{\n    list:$('#list");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val()\n&nbsp;   ,date:$('#MassAction_date_Edit");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val()\n&nbsp;   ,action:$('#FadderbarnAction_actionName_New31').val()\n&nbsp;   ,notes:$('#MassAction_notes");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val()\n    ,entityName:'Fadderbarn'\n},function(response) {\n    $('#list");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus().select();\n    console.log(response);\n});\n\">lägg till</button></center></td></tr>\n</table>\n<script>\ndocument.title = 'Mass Handlingar';\n</script>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
