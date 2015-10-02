{"compile":function () {
    var o = [];
    o.push("    $page->setFillColor(new Zend_Pdf_Color_HTML(");
    o.push(this.i.color || "");
    o.push("));\n");
    return o.join("");
},
"_link":"11/db229d1cdf9166265cfd397e8feffba8e7b69e",
"_name":"pdfColor",
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>color:</td><td><input type=\"text\" value=\"");
    o.push(this.i.color || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','color',this.value);\"/></td></tr>\n</table>\n");
    return o.join("");
},
"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\nColour</span>");
    return o.join("");
}}