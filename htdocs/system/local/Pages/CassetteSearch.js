function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<table class=\"EditTable\" id=\"ContactTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<thead><tr><th colspan=\"7\">Uppgifter</th></tr></thead>\n<tr>\n<td style=\"text-align:right\">ID:</td><td><input id=\"search_Nr290");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"");
out.push(dataViews.Cassettes.getFilter('Nr','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Nr:</td><td><input id=\"search_Id289");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"");
out.push(dataViews.Cassettes.getFilter('Id','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td rowspan=\"6\"></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Namn:</td><td><input id=\"search_Speaker291");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"");
out.push(dataViews.Cassettes.getFilter('Speaker','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">&Auml;mne:</td><td><input id=\"search_Subject292");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"");
out.push(dataViews.Cassettes.getFilter('Subject','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Datum:</td><td><input id=\"search_Date295");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"");
out.push(dataViews.Cassettes.getFilter('Date','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Status:</td><td><input id=\"search_Status294");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"");
out.push(dataViews.Cassettes.getFilter('Status','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Extra:</td><td><input id=\"search_Extra293");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"");
out.push(dataViews.Cassettes.getFilter('Extra','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\"></td><td></td>\n</tr>\n</table>\n<center>\n<button onclick=\"\ndataViews.Cassettes.clearFilter();\nApp3.Navigate2('local/Pages/Cassette/'+id,{target:'AppPages'});\n\">Rensa</button>\n|\n<input type=\"button\" id=\"doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"Sök\"\n onclick=\"\ndataViews.Cassettes.clearFilter();\nvar elm;\n             dataViews.Cassettes.addFilter('Nr','*',jQuery('#search_Nr290");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Cassettes.addFilter('Speaker','*',jQuery('#search_Speaker291");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Cassettes.addFilter('Subject','*',jQuery('#search_Subject292");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Cassettes.addFilter('Extra','*',jQuery('#search_Extra293");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Cassettes.addFilter('Status','*',jQuery('#search_Status294");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Cassettes.addFilter('Date','*',jQuery('#search_Date295");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \ndataViews.Cassettes.firstRow({OnComplete:function() {\n    if (dataViews.Cassettes.curRecordSet.Hits > 0) {\n        var id = dataViews.Cassettes.curRecordSet.Rows[0]['undefined'];\n        App3.Navigate2('local/Pages/Cassette/'+id,{target:'AppPages'});\n    } else {\n        alert('Ingen träff');\n     }\n},NoNewPage:function() {\n        alert('Ingen träff');\n     }});\n\"/></center>\n\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
