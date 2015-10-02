function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<div style=\"float:right;margin-right:200px;\"><button title=\"Ny\" onclick=\"\nApp3.Navigate2('local/Pages/Giver/ny',{target:'AppPages'})\n\" class=\"NewBut\" id=\"NewBut276\"><img width=\"32\" height=\"32\" src=\"img/icons/new.png\"></button>\n</div><span class=\"GiversBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"protoHeader150\">Givare</span> \n\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Givers\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = $('<div/>').html(\"Givare s&ouml;k\").text();\n</script><br/>\n<table class=\"EditTable\">\n<thead><tr><th colspan=\"7\">Givare</th></tr></thead>\n<tr>\n<td style=\"text-align:right\">Namn:</td><td><input id=\"search_Name177");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=1  value=\"");
out.push(dataViews.Givers.getFilter('Name','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Nr:</td><td><input id=\"search_Id176");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=8  value=\"");
out.push(dataViews.Givers.getFilter('Id','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Reg:</td><td><input id=\"search_StartD187");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=14 size=8 value=\"");
out.push(dataViews.Givers.getFilter('StartD','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td valign=\"top\" rowspan=\"5\">Noteringar<br/><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap=\"off\" cols=\"20\" rows=\"10\" id=\"search_Notes190");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" tabindex=23>");
out.push(dataViews.Givers.getFilter('Notes','*'));
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Efternamn</td><td><input id=\"search_LastName358");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=2  value=\"");
out.push(dataViews.Givers.getFilter('LastName','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Landskod:</td><td><input id=\"search_Land181");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=9  value=\"");
out.push(dataViews.Givers.getFilter('Land','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Tidning</td><td><label for=\"Paper185\"><input type=\"radio\" id=\"search_Paper185");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"1\" name=\"Paper185\" data-fieldName=\"Giver.Paper\"");

if (dataViews.Givers.getFilter('Paper') == 1) {o.push(' checked ');}

 out.push(" onmouseup=\"\nif (this.checked) {\n    setTimeout('document.getElementById('+String.fromCharCode(39)+this.id+String.fromCharCode(39)+').checked = false',20);\n    return false;\n}\n\"  tabindex=15 /> Ja</label> <br/>\n<label for=\"Paper185\"><input type=\"radio\" id=\"searchN_Paper185");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"0\" name=\"Paper185\" data-fieldName=\"Giver.Paper\"");

if (dataViews.Givers.getFilter('Paper') == 0) {o.push(' checked ');}

 out.push(" onmouseup=\"\nif (this.checked) {\n    setTimeout('document.getElementById('+String.fromCharCode(39)+this.id+String.fromCharCode(39)+').checked = false',20);\n    return false;\n}\n\"  tabindex=16 /> Nej</label>\n\n</td>\n</tr>\n<tr>\n<td style=\"text-align:right\">c/o</td><td><input id=\"search_CoAddress192");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=3  value=\"");
out.push(dataViews.Givers.getFilter('CoAddress','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Telefon:</td><td><input id=\"search_Tel182");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=10  value=\"");
out.push(dataViews.Givers.getFilter('Tel','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Medlem:</td><td><label for=\"Member186\"><input type=\"radio\" id=\"search_Member186");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"1\" name=\"Member186\" data-fieldName=\"Giver.Member\"");

if (dataViews.Givers.getFilter('Member') == 1) {o.push(' checked ');}

 out.push(" onmouseup=\"\nif (this.checked) {\n    setTimeout('document.getElementById('+String.fromCharCode(39)+this.id+String.fromCharCode(39)+').checked = false',20);\n    return false;\n}\n\"  tabindex=17 /> Ja</label> <br/>\n<label for=\"Member186\"><input type=\"radio\" id=\"searchN_Member186");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"0\" name=\"Member186\" data-fieldName=\"Giver.Member\"");

if (dataViews.Givers.getFilter('Member') == 0) {o.push(' checked ');}

 out.push(" onmouseup=\"\nif (this.checked) {\n    setTimeout('document.getElementById('+String.fromCharCode(39)+this.id+String.fromCharCode(39)+').checked = false',20);\n    return false;\n}\n\"  tabindex=18 /> Nej</label>\n\n</td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Adress:</td><td><input id=\"search_Address178");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=4  value=\"");
out.push(dataViews.Givers.getFilter('Address','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Mobiltel:</td><td><input id=\"search_Mob183");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=11  value=\"");
out.push(dataViews.Givers.getFilter('Mob','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Brev:</td><td><label for=\"Letter373\"><input type=\"radio\" id=\"search_Letter373");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"1\" name=\"Letter373\" data-fieldName=\"Giver.Letter\"");

if (dataViews.Givers.getFilter('Letter') == 1) {o.push(' checked ');}

 out.push(" onmouseup=\"\nif (this.checked) {\n    setTimeout('document.getElementById('+String.fromCharCode(39)+this.id+String.fromCharCode(39)+').checked = false',20);\n    return false;\n}\n\"  tabindex=19 /> Ja</label> <br/>\n<label for=\"Letter373\"><input type=\"radio\" id=\"searchN_Letter373");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"0\" name=\"Letter373\" data-fieldName=\"Giver.Letter\"");

if (dataViews.Givers.getFilter('Letter') == 0) {o.push(' checked ');}

 out.push(" onmouseup=\"\nif (this.checked) {\n    setTimeout('document.getElementById('+String.fromCharCode(39)+this.id+String.fromCharCode(39)+').checked = false',20);\n    return false;\n}\n\"  tabindex=20 /> Nej</label>\n\n</td>\n</tr>\n<tr>\n<td style=\"text-align:right\">PostNr:</td><td><input id=\"search_ZipCode179");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=5  value=\"");
out.push(dataViews.Givers.getFilter('ZipCode','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Status:</td><td><input id=\"search_Status189");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=12  value=\"");
out.push(dataViews.Givers.getFilter('Status','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Projkod:</td><td><input id=\"search_ProjCode188");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=21 size=8 value=\"");
out.push(dataViews.Givers.getFilter('ProjCode','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">PostOrt:</td><td><input id=\"search_ZipTown191");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=6  value=\"");
out.push(dataViews.Givers.getFilter('ZipTown','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">PersonNr:</td><td><input id=\"search_PersonNbr359");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=13  value=\"");
out.push(dataViews.Givers.getFilter('PersonNbr','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n<td style=\"text-align:right\">Tags</td><td><input id=\"search_Tags691");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=22  value=\"");
out.push(dataViews.Givers.getFilter('Tags','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td>\n\n</tr>\n<tr>\n<td>Epost:</td><td><input id=\"search_Email184");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  tabindex=7  value=\"");
out.push(dataViews.Givers.getFilter('Email','*'));
 out.push("\" onkeydown=\"if (event.keyCode == 13) document.getElementById('doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click()\"/></td><td colspan=5></td></tr>\n</table>\n<center>\n<button class=\"CancelBut\" id=\"clear");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\ndataViews.Givers.clearFilter();\n\n                jQuery('#search_Id176");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Name177");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Address178");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_ZipCode179");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Land181");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Tel182");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Mob183");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Email184");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n            elm = document.getElementById('search_Paper185");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\n            jQuery(elm).attr('checked', false);   \n            elm = document.getElementById('searchN_Paper185");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\n            jQuery(elm).attr('checked', false);\n            \n            elm = document.getElementById('search_Member186");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\n            jQuery(elm).attr('checked', false);   \n            elm = document.getElementById('searchN_Member186");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\n            jQuery(elm).attr('checked', false);\n            \n                jQuery('#search_StartD187");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_ProjCode188");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Status189");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_Notes190");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_ZipTown191");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_CoAddress192");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_LastName358");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n                jQuery('#search_PersonNbr359");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n            elm = document.getElementById('search_Letter373");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\n            jQuery(elm).attr('checked', false);   \n            elm = document.getElementById('searchN_Letter373");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\n            jQuery(elm).attr('checked', false);\n            \n                jQuery('#search_Tags691");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('');\n            \n//App3.Navigate2('local/Pages/Giver/'+id,{target:'AppPages'});\n\">Rensa</button>\n|\n<input class=\"SearchBut\" type=\"button\" id=\"doSearch");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"  value=\"Sök\"\n onclick=\"\ndataViews.Givers.clearFilter();\nvar elm;\n             dataViews.Givers.addFilter('Id','$',jQuery('#search_Id176");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Givers.addFilter('Name','*',jQuery('#search_Name177");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Givers.addFilter('Address','*',jQuery('#search_Address178");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Givers.addFilter('ZipCode','*',jQuery('#search_ZipCode179");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Givers.addFilter('Land','*',jQuery('#search_Land181");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Givers.addFilter('Tel','*',jQuery('#search_Tel182");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Givers.addFilter('Mob','*',jQuery('#search_Mob183");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Givers.addFilter('Email','*',jQuery('#search_Email184");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n            elm = document.getElementById('search_Paper185");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\n            if (jQuery(elm).attr('checked')) {\n                dataViews.Givers.addFilter('Paper','*',jQuery(elm).val());\n            } else {\n                elm = document.getElementById('searchN_Paper185");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\n                if (jQuery(elm).attr('checked')) {\n                    dataViews.Givers.addFilter('Paper','*',jQuery(elm).val());\n                }\n            }\n            \n            elm = document.getElementById('search_Member186");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\n            if (jQuery(elm).attr('checked')) {\n                dataViews.Givers.addFilter('Member','*',jQuery(elm).val());\n            } else {\n                elm = document.getElementById('searchN_Member186");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\n                if (jQuery(elm).attr('checked')) {\n                    dataViews.Givers.addFilter('Member','*',jQuery(elm).val());\n                }\n            }\n            \n             dataViews.Givers.addFilter('StartD','*',jQuery('#search_StartD187");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Givers.addFilter('ProjCode','*',jQuery('#search_ProjCode188");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Givers.addFilter('Status','*',jQuery('#search_Status189");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Givers.addFilter('Notes','*',jQuery('#search_Notes190");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Givers.addFilter('ZipTown','*',jQuery('#search_ZipTown191");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Givers.addFilter('CoAddress','*',jQuery('#search_CoAddress192");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Givers.addFilter('LastName','*',jQuery('#search_LastName358");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n             dataViews.Givers.addFilter('PersonNbr','*',jQuery('#search_PersonNbr359");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \n            elm = document.getElementById('search_Letter373");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\n            if (jQuery(elm).attr('checked')) {\n                dataViews.Givers.addFilter('Letter','*',jQuery(elm).val());\n            } else {\n                elm = document.getElementById('searchN_Letter373");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\n                if (jQuery(elm).attr('checked')) {\n                    dataViews.Givers.addFilter('Letter','*',jQuery(elm).val());\n                }\n            }\n            \n            \ndataViews.Givers.addFilter('Tags','£',jQuery('#search_Tags691");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n            \ndataViews.Givers.firstRow({OnComplete:function() {\n    if (dataViews.Givers.curRecordSet.Hits > 0) {\n        var id = dataViews.Givers.curRecordSet.Rows[0]['Id'];\n        App3.Navigate2('local/Pages/Giver/'+id,{target:'AppPages'});\n    } else {\n        alert('Ingen träff');\n     }\n},NoNewPage:function() {\n        alert('Ingen träff');\n     }});\n\"/></center>\n\n\n<script>$('#search_Name177");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').select().focus();</script>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
