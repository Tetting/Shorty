function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"ChurchsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"protoHeader602\">F&ouml;rsamlingar</span> \n\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Churchs\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = $('<div/>').html(\"F&ouml;rsamlingar s&ouml;k\").text();\n</script><br/>\n<table class=\"EditTable\">\n<thead><tr><th colspan=\"7\">Uppgifter</th></tr></thead>\n<tr>\n<td style=\"text-align:right\">F&ouml;rsamling:</td><td><input id=\"search_ChurchName604");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=3 value=\"");
out.push(dataViews.Churchs.getFilter('ChurchName','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Nr:</td><td><input id=\"search_Id603");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=8 value=\"");
out.push(dataViews.Churchs.getFilter('Id','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td rowspan=\"6\"><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap=\"off\" cols=\"53\" rows=\"6\" id=\"search_Notes610");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" tabindex=13>");
out.push(dataViews.Churchs.getFilter('Notes','*'));
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">c/o Adress:</td><td><input id=\"search_coAddress636");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=4 value=\"");
out.push(dataViews.Churchs.getFilter('coAddress','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Telefon:</td><td><input id=\"search_Tel608");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=9 value=\"");
out.push(dataViews.Churchs.getFilter('Tel','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Adress:</td><td><input id=\"search_Address605");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=5 value=\"");
out.push(dataViews.Churchs.getFilter('Address','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Kontakt:</td><td><input id=\"search_Contact609");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=10 value=\"");
out.push(dataViews.Churchs.getFilter('Contact','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">PostNr:</td><td><input id=\"search_Zip606");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=6 value=\"");
out.push(dataViews.Churchs.getFilter('Zip','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Epost:</td><td><input id=\"search_Email637");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=11 value=\"");
out.push(dataViews.Churchs.getFilter('Email','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">PostOrt:</td><td><input id=\"search_ZipTown607");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=7 value=\"");
out.push(dataViews.Churchs.getFilter('ZipTown','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Hemsida:</td><td><input id=\"search_Url638");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=12 value=\"");
out.push(dataViews.Churchs.getFilter('Url','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Tags:</td><td><input id=\"search_Tags701");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"");
out.push(dataViews.Churchs.getFilter('Tags','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td><td></td><td></td></tr>\n</table>\n<center>\n<button class=\"CancelBut\" id=\"clear");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\ndataViews.Churchs.clearFilter();\n\n                jQuery('#search_Id603");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_ChurchName604");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Address605");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Zip606");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_ZipTown607");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Tel608");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Contact609");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Notes610");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_coAddress636");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Email637");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Url638");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Tags701");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n//App3.Navigate2('local/Pages/Church/'+id,{target:'AppPages'});\n\">Rensa</button>\n|\n<input class=\"SearchBut\" type=\"button\" id=\"doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" tabindex=14 value=\"S�k\"\n onclick=\"\ndataViews.Churchs.clearFilter();\nvar elm;\n             dataViews.Churchs.addFilter('Id','$',jQuery('#search_Id603");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Churchs.addFilter('ChurchName','*',jQuery('#search_ChurchName604");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Churchs.addFilter('Address','*',jQuery('#search_Address605");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Churchs.addFilter('Zip','*',jQuery('#search_Zip606");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Churchs.addFilter('ZipTown','*',jQuery('#search_ZipTown607");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Churchs.addFilter('Tel','*',jQuery('#search_Tel608");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Churchs.addFilter('Contact','*',jQuery('#search_Contact609");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Churchs.addFilter('Notes','*',jQuery('#search_Notes610");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Churchs.addFilter('coAddress','*',jQuery('#search_coAddress636");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Churchs.addFilter('Email','*',jQuery('#search_Email637");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Churchs.addFilter('Url','*',jQuery('#search_Url638");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n            \ndataViews.Churchs.addFilter('Tags','�',jQuery('#search_Tags701");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \ndataViews.Churchs.firstRow({OnComplete:function() {\n    if (dataViews.Churchs.curRecordSet.Hits > 0) {\n        var id = dataViews.Churchs.curRecordSet.Rows[0]['Id'];\n        App3.Navigate2('local/Pages/Church/'+id,{target:'AppPages'});\n    } else {\n        alert('Ingen tr�ff');\n     }\n},NoNewPage:function() {\n        alert('Ingen tr�ff');\n     }});\n\"/></center>\n\n\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
