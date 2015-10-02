function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("\n\n<table class=\"EditTable\" style=\"float:left\">\n    <thead><tr><th colspan=3>Bokföring - Utbetalningar</th></tr></thead>\n    <tbody>\n        <tr><td align=top>datum</td>\n<td><input id=\"ReportFrom");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" value=\"\"/>\n<script>$j('#ReportFrom");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script></td>\n</tr>\n<tr><td colspan=2><center>\n<button onclick=\"\n//'&type='+document.getElementById('type");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\ndocument.getElementById('PrintPreview').src = 'pdf/ManualOutPayments.php?Date='+document.getElementById('ReportFrom");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value+'&forceInline=1&rnd='+Math.random();\nif (localStorage) {\n    localStorage.setItem('FinanceReportFrom',document.getElementById('ReportFrom");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\n}\n\">kör</button></center>\n</td>\n</tr>\n    </tbody>\n</table>\n\n\n<br style=\"clear:both;\"/>\n<div id=\"testFrame\">\n<iframe src=\"about:blank\" style=\"width: 100%; height: 600px;\" id=\"PrintPreview\"></iframe>\n</div>\n<script>\nif (localStorage) {\n    $j('#ReportFrom");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(localStorage.getItem('FinanceReportFrom'));\n}\ndocument.title = 'Rapport: Bokföring - Utbetalningar';\n</script>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
