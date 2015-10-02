{"edit":function () {
    var o = [];
    o.push("<table>\n<tr><th colspan=\"2\">Static Text</th></tr>\n<tr><td>Text:</td><td><input type=\"text\" value=\"");
    o.push(this.i.text || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','text',this.value);\"/></td></tr>\n<tr><td>x:</td><td><input type=\"text\" value=\"");
    o.push(this.i.x || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','x',this.value);\"/></td></tr>\n<tr><td>y:</td><td><input type=\"text\" value=\"");
    o.push(this.i.y || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','y',this.value);\"/></td></tr>\n</table>");
    return o.join("");
},
"_link":"c2/88e49f7418ed36404df4b3b6e1b1b92be1a2af",
"_name":"staticText",
"compile":function () {
    var o = [];
    o.push("    $pdf->addText(");
    o.push(this.i.x || "");
    o.push(",");
    o.push(this.i.y || "");
    o.push(",");
    o.push(this.i.size || "");
    o.push(",'");
    o.push(this.i.text || "");
    o.push("');\n");
    return o.join("");
},
"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\nStatic Text</span>\n<input type=\"text\" value=\"");
    o.push(this.i.x || "");
    o.push("\" style=\"width:22px;\"/>x <input type=\"text\" value=\"");
    o.push(this.i.y || "");
    o.push("\" style=\"width:22px;\"/>");
    return o.join("");
},
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>x:</td><td><input type=\"text\" value=\"");
    o.push(this.i.x || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','x',this.value);\"/></td></tr>\n<tr><td>y:</td><td><input type=\"text\" value=\"");
    o.push(this.i.y || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','y',this.value);\"/></td></tr>\n<tr><td>Size:</td><td><input type=\"text\" value=\"");
    o.push(this.i.size || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','size',this.value);\"/></td></tr>\n<tr><td>Text:</td><td><input type=\"text\" value=\"");
    o.push(this.i.text || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','text',this.value);\"/></td></tr>\n</table>");
    return o.join("");
}}