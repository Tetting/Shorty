{"edit":function () {
    var o = [];
    o.push("<table>\n<tr><th colspan=\"2\">ezSetDy</th></tr>\n<tr><td>dY:</td><td><input type=\"text\" value=\"");
    o.push(this.i.dy || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','dy',this.value);\"/></td></tr>\n</table>\n<p>Changes vertical position of the writing point by a set amount,\nso to move the pointer 10 units down the page (making a gap to the writing)\nset a value of -10.\n</p>\n<p>\nIf this movement takes the writing point off the end of the page then \na new page will be created and writing point will go to the top of the \npage.\n</p>");
    return o.join("");
},
"_link":"78/a9472f33808b8cfedf27a8f54ad318adbec17d",
"_name":"ezSetDy",
"compile":function () {
    var o = [];
    o.push("    $pdf->ezSetDy(");
    o.push(this.i.dy || "");
    o.push(");\n");
    return o.join("");
},
"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\nezSetDy</span> <input type=\"text\" style=\"width:22px;\" value=\"");
    o.push(this.i.dy || "");
    o.push("\" onchange=\"\n$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','dy',this.value);\"/>");
    return o.join("");
},
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>dY:</td><td><input type=\"text\" value=\"");
    o.push(this.i.dy || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','dy',this.value);\"/></td></tr>\n</table>\n<p>Changes vertical position of the writing point by a set amount,\nso to move the pointer 10 units down the page (making a gap to the writing)\nset a value of -10.\n</p>\n<p>\nIf this movement takes the writing point off the end of the page then \na new page will be created and writing point will go to the top of the \npage.\n</p>");
    return o.join("");
}}