function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("\n<span class=\"OCRImportsBigIcon BigIcon\">OCRImport</span>\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a class=\"ajaxLink\" onclick=\"dataViews.OCRImports.dataChanged();\" href=\"Pages/OCRImports\">Lista</a>\n    </span>\n</span>\n<br/><br/>\n<iframe src=\"do/OCR.php\" style=\"width:98%;height:460px;border:0px;\"></iframe>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
