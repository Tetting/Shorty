function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"SocialWorkersBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"protoHeader612\">Socialarbetare</span> \n\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/SocialWorkers\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = $('<div/>').html(\"Socialarbetare s&ouml;k\").text();\n</script><br/>\n<table class=\"EditTable\" id=\"SocialWorkerSearchTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<thead><tr><th colspan=\"7\">Socialarbetare <span component=\"CustomFieldDisplay65\" task=\"Project4.Task\" class=\"TaskEdit4\"> </span></th></tr></thead>\n<tr><td>Nummer</td><td><input id=\"search_Id449");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=3 value=\"");
out.push(dataViews.SocialWorkers.getFilter('Id','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td><td></td><td></td><td rowspan=\"5\" valign=\"top\">Noteringar:<br/><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap=\"On\" cols=\"46\" rows=\"6\" id=\"search_Notes461");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" tabindex=13>");
out.push(dataViews.SocialWorkers.getFilter('Notes','*'));
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td></tr>\n<tr><td>Namn</td><td colspan=\"3\"><input id=\"search_Name450");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=4 value=\"");
out.push(dataViews.SocialWorkers.getFilter('Name','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td></tr>\n<tr><td>Adress:</td><td><input id=\"search_Address452");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=6 value=\"");
out.push(dataViews.SocialWorkers.getFilter('Address','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td><td>Landskod:</td><td><input id=\"search_Land455");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=10 value=\"");
out.push(dataViews.SocialWorkers.getFilter('Land','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td></tr>\n<tr><td>ZipCode:</td><td><input id=\"search_ZipCode453");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=7 value=\"");
out.push(dataViews.SocialWorkers.getFilter('ZipCode','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td><td>ZipTown:</td><td><input id=\"search_ZipTown454");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=11 value=\"");
out.push(dataViews.SocialWorkers.getFilter('ZipTown','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td></tr>\n<tr><td>Tel:</td><td><input id=\"search_Tel456");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=8 value=\"");
out.push(dataViews.SocialWorkers.getFilter('Tel','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td><td>Mob:</td><td><input id=\"search_Mob457");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=12 value=\"");
out.push(dataViews.SocialWorkers.getFilter('Mob','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td></tr>\n<tr><td>Epost:</td><td><input id=\"search_Email458");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" tabindex=9 value=\"");
out.push(dataViews.SocialWorkers.getFilter('Email','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td><td>Tags:</td><td><input id=\"search_Tags699");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"");
out.push(dataViews.SocialWorkers.getFilter('Tags','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td><td></td></tr>\n</table>\n\n<center>\n<button class=\"CancelBut\" id=\"clear");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\ndataViews.SocialWorkers.clearFilter();\n\n                jQuery('#search_Id449");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Name450");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_LastName451");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Address452");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_ZipCode453");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_ZipTown454");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Land455");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Tel456");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Mob457");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Email458");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_StartD459");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Status460");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Notes461");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_CoAddress462");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Tags699");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n//App3.Navigate2('local/Pages/SocialWorker/'+id,{target:'AppPages'});\n\">Rensa</button>\n|\n<input class=\"SearchBut\" type=\"button\" id=\"doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" tabindex=14 value=\"S�k\"\n onclick=\"\ndataViews.SocialWorkers.clearFilter();\nvar elm;\n             dataViews.SocialWorkers.addFilter('Id','$',jQuery('#search_Id449");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.SocialWorkers.addFilter('Name','*',jQuery('#search_Name450");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.SocialWorkers.addFilter('LastName','*',jQuery('#search_LastName451");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.SocialWorkers.addFilter('Address','*',jQuery('#search_Address452");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.SocialWorkers.addFilter('ZipCode','*',jQuery('#search_ZipCode453");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.SocialWorkers.addFilter('ZipTown','*',jQuery('#search_ZipTown454");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.SocialWorkers.addFilter('Land','*',jQuery('#search_Land455");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.SocialWorkers.addFilter('Tel','*',jQuery('#search_Tel456");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.SocialWorkers.addFilter('Mob','*',jQuery('#search_Mob457");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.SocialWorkers.addFilter('Email','*',jQuery('#search_Email458");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.SocialWorkers.addFilter('StartD','*',jQuery('#search_StartD459");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.SocialWorkers.addFilter('Status','*',jQuery('#search_Status460");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.SocialWorkers.addFilter('Notes','*',jQuery('#search_Notes461");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.SocialWorkers.addFilter('CoAddress','*',jQuery('#search_CoAddress462");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n            \ndataViews.SocialWorkers.addFilter('Tags','�',jQuery('#search_Tags699");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \ndataViews.SocialWorkers.firstRow({OnComplete:function() {\n    if (dataViews.SocialWorkers.curRecordSet.Hits > 0) {\n        var id = dataViews.SocialWorkers.curRecordSet.Rows[0]['Id'];\n        App3.Navigate2('local/Pages/SocialWorker/'+id,{target:'AppPages'});\n    } else {\n        alert('Ingen tr�ff');\n     }\n},NoNewPage:function() {\n        alert('Ingen tr�ff');\n     }});\n\"/></center>\n\n\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}