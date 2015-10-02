function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("\n<div id=\"ReportTree\" style=\"width:100px;overflow:auto;float:left;\">\n<ul class=\"LiveTree\" style=\"margin-left:-40px;\">\n<li class=\"hasChildren\">Reports\n<ul><li>A Report</ul>\n</ul>\n<span component=\"Reports56\" task=\"Project4.Task\" class=\"TaskEdit4\"></span>\n</div>\n<div id=\"ReportContent\">Contents\n</div>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
