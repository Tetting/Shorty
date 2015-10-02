function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"ProjectsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"protoHeader311\">Projekt</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/ProjectNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Projects\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = $('<div/>').html(\"Projekt s&ouml;k\").text();\n</script><br/>\n<table class=\"EditTable\" id=\"ContactTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<thead><tr><th colspan=\"5\">Uppgifter</th></tr></thead>\n<tr>\n<td style=\"text-align:right\">Namn:</td><td><input id=\"search_Project315");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"");
out.push(dataViews.Projects.getFilter('Project','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td rowspan=\"5\"><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap=\"off\" cols=\"40\" rows=\"5\" id=\"search_Notes316");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" 10>");
out.push(dataViews.Projects.getFilter('Notes','*'));
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Nr:</td><td><input id=\"search_Id313");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"");
out.push(dataViews.Projects.getFilter('Id','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Bokf&ouml;rings#:</td><td><input id=\"search_FinanceCode375");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"");
out.push(dataViews.Projects.getFilter('FinanceCode','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Status:</td><td><input id=\"search_Status314");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"");
out.push(dataViews.Projects.getFilter('Status','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n</tr>\n</table>\n<center>\n<button class=\"CancelBut\" id=\"clear");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\ndataViews.Projects.clearFilter();\n\n                jQuery('#search_Id313");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Status314");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Project315");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Notes316");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n//App3.Navigate2('local/Pages/Project/'+id,{target:'AppPages'});\n\">Rensa</button>\n|\n<input class=\"SearchBut\" type=\"button\" id=\"doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"  value=\"Sök\"\n onclick=\"\ndataViews.Projects.clearFilter();\nvar elm;\n             dataViews.Projects.addFilter('Id','$',jQuery('#search_Id313");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Projects.addFilter('Status','*',jQuery('#search_Status314");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Projects.addFilter('Project','*',jQuery('#search_Project315");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Projects.addFilter('Notes','*',jQuery('#search_Notes316");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \ndataViews.Projects.firstRow({OnComplete:function() {\n    if (dataViews.Projects.curRecordSet.Hits > 0) {\n        var id = dataViews.Projects.curRecordSet.Rows[0]['Id'];\n        App3.Navigate2('local/Pages/Project/'+id,{target:'AppPages'});\n    } else {\n        alert('Ingen träff');\n     }\n},NoNewPage:function() {\n        alert('Ingen träff');\n     }});\n\"/></center>\n\n\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
