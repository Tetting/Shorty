{"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\nLoadFont</span>");
    return o.join("");
},
"_link":"29/cc26528787e7379943ab8094cc2e0aa696285d",
"_name":"pdfLoadFont",
"compile":function () {
    var o = [];
    o.push("    $font = Zend_Pdf_Font::fontWithPath($reportPath.'/fonts/");
    o.push(this.i.fontName || "");
    o.push(".ttf',Zend_Pdf_Font::EMBED_SUPPRESS_EMBED_EXCEPTION); \n    $page->setFont($font, ");
    o.push(this.i.fontSize || 12 || "");
    o.push(");\n");
    return o.join("");
},
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>select font</td><td><div id=\"selectFont\"></div></td></tr>\n<tr><td>fontsize</td><td></td></tr>\n<tr><td>font size:</td><td><input type=\"text\" value=\"");
    o.push(this.i.fontSize || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','fontSize',this.value);\"/></td></tr>\n\n<tr><td>upload new ttf font:</td><td>\n\n<form>\n<input type=\"file\" name=\"custom\"><br>\n<input type=\"button\" value=\"upload\" onclick=\"App.fileUpload(this.form,'pdf/custom/uploadFont.php','uploadFont'); return false;\">\n<div id=\"uploadFont\"></div>\n</form>\n</td></table>\n<p>Select font\n</p>\n<script>\n$.get('pdf/custom/fontList.php',{action:'selectFont',curVal:'");
    o.push(this.i.fontName || "");
    o.push("',t:'");
    o.push(this.t || "");
    o.push("',c:'");
    o.push(this.cName || "");
    o.push("',p:'fontName'},function(response) {\n    $('#selectFont').html(response);\n});\n</script>");
    return o.join("");
}}