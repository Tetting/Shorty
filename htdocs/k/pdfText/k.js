{"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\nText</span>\n&nbsp;&nbsp;&nbsp;<input type=\"text\" style=\"width:26px;\" value=\"");
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
    o.push("','y',this.value);$('#compileBut').click();\" title=\"y\"/>");
    return o.join("");
},
"_link":"b7/d2579e32fcc1e80709c9f8239af17f8343fda2",
"_name":"pdfText",
"compile":function () {
    var o = [];
    o.push("    $page->setFont($page->getFont(), ");
    o.push(this.i.fontSize || 10 || "");
    o.push(");\n    alignedText(array('y'=>'");
    o.push(this.i.y || "");
    o.push("','xStart'=>'");
    o.push(this.i.x || "");
    o.push("','xEnd'=>'");
    o.push(this.i.xEnd || "");
    o.push("','align'=>'");
    o.push(this.i.align || "left" || "");
    o.push("'),utf8_decode(\"");
    o.push(this.i.text || "");
    o.push("\"),$page,$offsety);");
    return o.join("");
},
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>Text:</td><td><input type=\"text\" value=\"");
    o.push(this.i.text || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','text',this.value);\"/></td></tr>\n<tr><td>y:</td><td><input type=\"text\" value=\"");
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
    o.push("','xEnd',this.value);\"/></td></tr>\n<tr><td>fontSize:</td><td><input type=\"text\" value=\"");
    o.push(this.i.fontSize || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','fontSize',this.value);\"/></td></tr>\n<tr><td>align:</td><td><select onchange=\"\n    $t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("', 'align',this.value);\">\n        <option ");
    if (this.i.align == "left") {
        o.push("selected");
    }
    o.push(">left</option>\n        <option ");
    if (this.i.align == "center") {
        o.push("selected");
    }
    o.push(">center</option>\n        <option ");
    if (this.i.align == "right") {
        o.push("selected");
    }
    o.push(">right</option>\n        <option ");
    if (this.i.align == "wrap") {
        o.push("selected");
    }
    o.push(">wrap</option>\n    </select></td></tr>\n\n</table>");
    return o.join("");
}}