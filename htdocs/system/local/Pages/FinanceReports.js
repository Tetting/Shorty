function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("\n\n<table class=\"EditTable\" style=\"float:left\">\n    <thead><tr><th colspan=3>Bokföring Underlag</th></tr></thead>\n    <tbody>\n        <tr><td align=top>datum från</td>\n<td><input id=\"ReportFrom");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" value=\"\"/>\n<script>$j('#ReportFrom");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script></td>\n</tr>\n        <tr><td align=top>datum till</td><td><input id=\"ReportTo");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" value=\"\"/>\n<script>$j('#ReportTo");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script></td>\n</tr>\n<tr><td>Typ</td><td><select id=\"ReportType");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n    <option selected value=\"\">Alla</option>\n    <option value=\"autogiro\">Autogiro</option>\n    <option value=\"bankgiro\">Bankgiro</option>\n    <option value=\"diverse\">Diverse</option>\n    <option value=\"OCRImport\">OCR</option>\n    <option value=\"postgiro\">Postgiro</option>\n</select></td></tr>\n<tr><td colspan=2><center>\n<button onclick=\"\n//'&type='+document.getElementById('ReportType");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\ndocument.getElementById('PrintPreview').src = 'pdf/Bookkeeping.php?from='+document.getElementById('ReportFrom");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value+'&to='+document.getElementById('ReportTo");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value+'&type='+document.getElementById('ReportType");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value+'&rnd='+Math.random();\nif (localStorage) {\n    localStorage.setItem('FinanceReportFrom',document.getElementById('ReportFrom");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value); \n    localStorage.setItem('FinanceReportTo',document.getElementById('ReportTo");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value); \n    localStorage.setItem('FinanceReportType',document.getElementById('ReportType");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value); \n}\n\">kör</button></center>\n</td>\n</tr>\n    </tbody>\n</table>\n\n\n<br style=\"clear:both;\"/>\n<div id=\"testFrame\">\n<iframe src=\"about:blank\" style=\"width: 100%; height: 600px;\" id=\"PrintPreview\"></iframe>\n</div>\n<script>\nif (localStorage) {\n    $j('#ReportFrom");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(localStorage.getItem('FinanceReportFrom'));\n    $j('#ReportTo");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(localStorage.getItem('FinanceReportTo'));\n    $j('#ReportType");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(localStorage.getItem('FinanceReportType'));\n}\n\ndocument.title = 'Rapport: Bokföring Underlag';</script>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
