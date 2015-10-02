{"compile":function () {
    var o = [];
    o.push("    $page->rotate(0, 0, deg2rad(");
    o.push(this.i.degrees || "");
    o.push("));");
    return o.join("");
},
"_link":"24/9222adc38fb1e4af59eec2767fe7fa4adffad9",
"_name":"pdfRotate",
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><th colspan=\"2\"><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>pdfRotate</span></th></tr>\n<tr><td>degrees:</td><td><input type=\"text\" value=\"");
    o.push(this.i.degrees || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','degrees',this.value);\"/></td></tr>\n</table>\n<p>Rotate page.\n</p>");
    return o.join("");
},
"inlineList":function () {
    var o = [];
    o.push("Rotate");
    return o.join("");
}}