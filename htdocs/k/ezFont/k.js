{"edit":function () {
    var o = [];
    o.push("<table>\n<tr><th colspan=\"2\">ezFont</th></tr>\n<tr><td>fontName:</td><td><input type=\"text\" value=\"");
    o.push(this.i.fontName || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','fontName',this.value);\"/></td></tr>\n</table>\n<p>Change the active font.\n</p>");
    return o.join("");
},
"_link":"52/234da8fb908294403364416b2f4a402a8e411b",
"_name":"ezFont",
"compile":function () {
    var o = [];
    o.push("    $pdf->selectFont('../pdfcode/fonts/");
    o.push(this.i.fontName || "");
    o.push(".afm');\n");
    return o.join("");
},
"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\nezFont</span> ");
    o.push(this.i.fontName || "");
    return o.join("");
},
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>fontName:</td><td><input type=\"text\" value=\"");
    o.push(this.i.fontName || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','fontName',this.value);\"/></td></tr>\n</table>\n<p>Change the active font.\n</p>");
    return o.join("");
}}