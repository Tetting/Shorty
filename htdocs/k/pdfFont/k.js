{"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\nFont Size</span> ");
    o.push(this.i.fontSize || "");
    return o.join("");
},
"_link":"df/711d24e2b9e8bc99b2daabea62d83ea4fd2be3",
"_name":"pdfFont",
"compile":function () {
    var o = [];
    o.push("    $page->setFont($page->getFont(), ");
    o.push(this.i.fontSize || "12" || "");
    o.push(");");
    return o.join("");
},
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>fontSize:</td><td><input type=\"text\" value=\"");
    o.push(this.i.fontSize || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','fontSize',this.value);\"/></td></tr>\n</table>\n<p>change font.\n</p>");
    return o.join("");
}}