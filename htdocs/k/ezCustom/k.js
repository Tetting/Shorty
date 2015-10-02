{"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\nCustom</span> <button onclick=\"\neditSrc2({\n        type:'task'\n\t\t,task:'");
    o.push(this.t || "");
    o.push("'\n\t\t,comp:'");
    o.push(this.cName || "");
    o.push("'\n\t\t,prop:'customCode'\n});\n\">Edit Code</button> ");
    o.push(this.i.Name || "" || "");
    return o.join("");
},
"_link":"ee/4dc36453492993e9f105bad17c79bb39f7298f",
"_name":"ezCustom",
"compile":function () {
    var o = [];
    o.push(this.i.customCode || "");
    return o.join("");
},
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>Name:</td><td><input type=\"text\" value=\"");
    o.push(this.i.Name || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','Name',this.value);\"/></td></tr>\n\n<tr><td>Code:</td><td>\n<button onclick=\"\neditSrc2({\n        type:'task'\n        ,task:'");
    o.push(this.t || "");
    o.push("'\n\t\t,comp:'");
    o.push(this.cName || "");
    o.push("'\n\t\t,prop:'customCode'\n});\n\">Edit Code</button>\n</td></tr>\n</table>\n<p>Custom Code.\n</p>\n");
    return o.join("");
}}