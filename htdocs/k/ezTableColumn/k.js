{"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\nColumn</span>: <input type=\"text\" style=\"width:125px;\" value=\"");
    o.push(this.i.colName || "");
    o.push("\" onchange=\"\n$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','colName',this.value);\"/>");
    return o.join("");
},
"_link":"eb/7362d84ac66b5a825c0f224e24bc170b3c4bf3",
"_name":"ezTableColumn",
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>Field:</td><td><input type=\"text\" value=\"");
    o.push(this.i.colName || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','colName',this.value);\"/></td></tr>\n<tr><td>Title:</td><td><input type=\"text\" value=\"");
    o.push(this.i.title || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','title',this.value);\"/></td></tr>\n<tr><td>justification:</td><td><select onchange=\"\n    $t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("', 'justification',this.value);\">\n        <option ");
    if (this.i.justification == "left") {
        o.push("selected");
    }
    o.push(">left</option>\n        <option ");
    if (this.i.justification == "center") {
        o.push("selected");
    }
    o.push(">center</option>\n        <option ");
    if (this.i.justification == "right") {
        o.push("selected");
    }
    o.push(">right</option>\n    </select></td></tr>\n<tr><td>hide:</td><td><select onchange=\"\n    $t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("', 'hide',this.value);\">\n        <option ");
    if (this.i.hide == "Y") {
        o.push("selected");
    }
    o.push(">Y</option>\n        <option ");
    if (this.i.hide != "Y") {
        o.push("selected");
    }
    o.push(">N</option>\n    </select></td></tr>\n</table>");
    return o.join("");
},
"compile":function () {
    var o = [];
    return o.join("");
}}