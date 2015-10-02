{"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\nezColor</span>");
    return o.join("");
},
"_link":"36/c22c30c55780d8c87e074e3217fb4d4938db83",
"_name":"ezColor",
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>red:</td><td><input type=\"text\" value=\"");
    o.push(this.i.red || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','red',this.value);\"/></td></tr>\n<tr><td>green:</td><td><input type=\"text\" value=\"");
    o.push(this.i.red || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','green',this.value);\"/></td></tr>\n<tr><td>blue:</td><td><input type=\"text\" value=\"");
    o.push(this.i.red || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','blue',this.value);\"/></td></tr>\n</table>\n<p>Will set the color of future drawing operations.\n</p>");
    return o.join("");
},
"compile":function () {
    var o = [];
    o.push("    $pdf->ezColor(");
    o.push(this.i.red || "");
    o.push(",");
    o.push(this.i.green || "");
    o.push(",");
    o.push(this.i.blue || "");
    o.push(");\n");
    return o.join("");
}}