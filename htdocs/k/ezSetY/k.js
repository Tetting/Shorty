{"edit":function () {
    var o = [];
    o.push("<table>\n<tr><th colspan=\"2\">ezSetY</th></tr>\n<tr><td>Y:</td><td><input type=\"text\" value=\"");
    o.push(this.i.y || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','y',this.value);\"/></td></tr>\n</table>\n<p>\nPositions the ezpdf writing co-ordinate to the position you specify. Note that\nfor pdf documents 0 is the bottom of the page and y then increases as you go up the page.\n\n</p>");
    return o.join("");
},
"_link":"95/54986595a87ac328de6b127ee3472c55a34ae7",
"_name":"ezSetY",
"compile":function () {
    var o = [];
    o.push("    $pdf->ezSetY(");
    o.push(this.i.y || "");
    o.push(");\n");
    return o.join("");
},
"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\nezSetY</span> <input type=\"text\" style=\"width:22px;\" value=\"");
    o.push(this.i.y || "");
    o.push("\" onchange=\"\n$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','y',this.value);\"/>");
    return o.join("");
},
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>Y:</td><td><input type=\"text\" value=\"");
    o.push(this.i.y || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','y',this.value);\"/></td></tr>\n</table>\n<p>\nPositions the ezpdf writing co-ordinate to the position you specify. Note that\nfor pdf documents 0 is the bottom of the page and y then increases as you go up the page.\n\n</p>");
    return o.join("");
}}