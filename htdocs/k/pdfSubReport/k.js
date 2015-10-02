{"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\nSubReport</span>");
    return o.join("");
},
"_link":"4a/6c6bad5e8e9a98277056a1e7451b29757ac104",
"_name":"pdfSubReport",
"compile":function () {
    var o = [];
    o.push("    include(\"tmpl/");
    o.push(this.i.subReport || "");
    o.push(".pdf\");");
    return o.join("");
},
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>sub report name:</td><td><input type=\"text\" value=\"");
    o.push(this.i.subReport || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','subReport',this.value);\"/></td></tr>\n</table>");
    return o.join("");
}}