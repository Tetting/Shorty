function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("\n\n<table class=\"EditTable\">\n    <thead><tr><th colspan=3>Barn Rapport</th></tr></thead>\n    <tbody>\n        <tr><td align=top>\nRapport:<select id=\"ReportName\" size=5>\n\n\n<option selected>BarnRamForFoto</option>\n<option>barnrapbrevfoto</option>\n<option>barnrapfoto</option>\n<option>barnrapportallman</option>\n<option>barnrapportbrev</option>\n</select>\n        </td>\n<td>\nBarn:<input id='ChildId' value=\"1\"/>\n<br/>\n<button onclick=\"\ndocument.getElementById('PrintPreview').src = 'pdf/'+document.getElementById('ReportName').value+'.php?id='+document.getElementById('ChildId').value+'&rnd='+Math.random();\n\">kör</button>\n</td>\n</tr>\n<tr><td>\nOmråde:<input id='Area' value=\"52\"/>\n</td><td>\n<button onclick=\"\n$j('#PrintPreview').css({'width': '960px','height': '620px'});\ndocument.getElementById('PrintPreview').src = 'pdf/Barnlista.php?area='+document.getElementById('Area').value+'&rnd='+Math.random();\n\">Barnlista</button>\n</td>\n</tr>\n    </tbody>\n</table>\n<div id=\"testFrame\">\n<iframe src=\"about:blank\" style=\"width: 0px; height: 0px;\" id=\"PrintPreview\"></iframe>\n</div>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
