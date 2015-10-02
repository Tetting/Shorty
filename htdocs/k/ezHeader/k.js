{"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>ezHeader</span>");
    return o.join("");
},
"_link":"4e/6cd565e006a4d676b9a6a8bffb1035e146986e",
"_name":"ezHeader",
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>text:</td><td><input type=\"text\" value='");
    o.push(this.i.text || "");
    o.push("' \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','text',this.value);\"/></td></tr>\n<tr><td>size:</td><td><input type=\"text\" value=\"");
    o.push(this.i.size || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','size',this.value);\"/></td></tr>\n<tr><td>justification:</td><td><select onchange=\"\n    $t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("', 'justification',this.value);\">\n        <option ");
    if (this.i.justification == "center") {
        o.push("selected");
    }
    o.push(">center</option>\n        <option ");
    if (this.i.justification == "left") {
        o.push("selected");
    }
    o.push(">left</option>\n        <option ");
    if (this.i.justification == "right") {
        o.push("selected");
    }
    o.push(">right</option>\n    </select></td></tr>\n</table>\n<p>Add headers to a pdf.</p>");
    return o.join("");
},
"compile":function () {
    var o = [];
    o.push("    $pdf->doHeader(\"");
    o.push(this.i.text || "");
    o.push("\",");
    o.push(this.i.size || 10 || "");
    o.push(",'");
    o.push(this.i.justification || "center" || "");
    o.push("');\n");
    return o.join("");
}}