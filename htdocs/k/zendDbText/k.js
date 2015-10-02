{"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\ndbText</span>\n<input type=\"text\" style=\"width:26px;\" value=\"");
    o.push(this.i.x || "");
    o.push("\" onchange=\"\n$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','x',this.value);$('#compileBut').click();\" title=\"xStart\"/>-\n<input type=\"text\" style=\"width:26px;\" value=\"");
    o.push(this.i.xEnd || "");
    o.push("\" onchange=\"\n$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','xEnd',this.value);$('#compileBut').click();\" title=\"xEnd\"/>&nbsp;\n<input type=\"text\" style=\"width:26px;\" value=\"");
    o.push(this.i.y || "");
    o.push("\" onchange=\"\n$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','y',this.value);$('#compileBut').click();\" title=\"y\"/>\n<span style=\"\">");
    o.push(this.i.fieldName || "dbText" || "");
    o.push("</span>");
    return o.join("");
},
"_link":"4e/49ed4ab0e7df45455168022c53ddf02533a5e6",
"_name":"dbText",
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>fieldName:</td><td><input type=\"text\" value=\"");
    o.push(this.i.fieldName || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','fieldName',this.value);\"/></td></tr>\n<tr><td>field separator:</td><td><input type=\"text\" value=\"");
    o.push(this.i.sep || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','sep',this.value);\"/></td></tr>\n<tr><td>y:</td><td><input type=\"text\" value=\"");
    o.push(this.i.y || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','y',this.value);\"/></td></tr>\n<tr><td>x:</td><td><input type=\"text\" value=\"");
    o.push(this.i.x || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','x',this.value);\"/></td></tr>\n<tr><td>xEnd:</td><td><input type=\"text\" value=\"");
    o.push(this.i.xEnd || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','xEnd',this.value);\"/></td></tr>\n<tr><td>align:</td><td><select onchange=\"\n    $t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("', 'align',this.value);\">\n        <option ");
    if (this.i.align == "center") {
        o.push("selected");
    }
    o.push(">center</option>\n        <option ");
    if (this.i.align == "left") {
        o.push("selected");
    }
    o.push(">left</option>\n        <option ");
    if (this.i.align == "right") {
        o.push("selected");
    }
    o.push(">right</option>\n        <option ");
    if (this.i.align == "wrap") {
        o.push("selected");
    }
    o.push(">wrap</option>\n    </select></td></tr>\n</table>\n<p>Will print text from the database.\n</p>");
    return o.join("");
},
"compile":function () {
    var o = [];
    o.push("    $t = array('y'=>");
    o.push(this.i.y || "");
    o.push(",'align'=>'");
    o.push(this.i.align || "");
    o.push("','xStart'=>");
    o.push(this.i.x || "");
    o.push(",'xEnd'=>'");
    o.push(this.i.xEnd || "");
    o.push("');\n    alignedText($t,dbTexts('");
    o.push(this.i.fieldName || "");
    o.push("',$row,'");
    o.push(this.i.sep || " " || "");
    o.push("'),$page,$offsety);\n");
    return o.join("");
}}