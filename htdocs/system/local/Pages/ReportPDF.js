function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("\n<span class=\"GiversBigIcon BigIcon\">Rapport</span>\n<span class=\"EditIcons\"> <span class=\"ListIcon EditIcon\">\n<a class=\"ajaxLink\" href=\"Pages/CustomReports\">Lista</a>\n</span>\n</span>\n<br/>\n<div id=\"ReportDisplay\"><img src=\"img/ajaxProgress.gif\"/></div>\n<div id=\"csList\" style=\"clear:both;\"></div>\n");

if(!ns.Id){ns.Id=ns.url.split("/").pop();}
document.title='Design Rapport '+ns.Id;
//is task loaded yet?
if (!window['si5']) {
    //we need to load in si5.
    App3.loadList(['js/task51.js','js/lib/jsonStringify.js','js/lib/src/ace.js'],function() {
        si5.kGetUrl = 'k/';
    si5.tGetUrl = 'do/task.php';
    si5.reportUrl = 'do/task.php';
    si5.reportViewUrl = 'do/task.php';
    si5.depr.forceSlash = false;
    si5.noLinkChange = true;
    si5.tLoad(ns.Id).done(function() {
        var o = $t51(ns.Id).fDo('report', 'edit', {reportId:ns.Id});
	if (typeof o  =='object') {
	    o.done(function(response) {
	        $('#ReportDisplay').html(response);
	    });
	} else {
	    $('#ReportDisplay').html(o);
	}
    });
    });
} else {
    si5.kGetUrl = 'k/';
    si5.tGetUrl = 'do/task.php';
    si5.reportUrl = 'do/task.php';
    si5.reportViewUrl = 'do/task.php';
    si5.depr.forceSlash = false;
    si5.noLinkChange = true;
    si5.tLoad(ns.Id).done(function() {
        var o = $t51(ns.Id).fDo('report', 'edit', {reportId:ns.Id});
	if (typeof o  =='object') {
	    o.done(function(response) {
	        $('#ReportDisplay').html(response);
	    });
	} else {
	    $('#ReportDisplay').html(o);
	}
    }).fail(function() {
        //show wizard or similar...
        $.get('do/task.php',{'action':'pdfWizard',id:ns.Id},function(response) {
            $('#ReportDisplay').html(response);
        });
    });
}

 out.push("\n<br style=\"clear:both\"/>\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}