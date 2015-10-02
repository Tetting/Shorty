{"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>");
    o.push("Param: " + (this.i.title || "ingen") || "");
    o.push("</span>");
    return o.join("");
},
"_link":"bd/a35bf1473a7c2beea758452474172f3d689288",
"_name":"pdfParams2",
"contextMenuEdit":function (){
var o=[];
o.push("<table class=\"ContextTable\">\n<tr><td>title:</td><td><input type=\"text\" value='");
o.push(this.i.title||'');o.push("' \nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','title',this.value);\"/></td></tr>\n<tr><td>pName:</td><td><input type=\"text\" value='");
o.push(this.i.pName||'');o.push("'\nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','pName',this.value);\"/></td></tr>\n<tr><td>default value:</td><td><input type=\"text\" value='");
o.push(this.i.dVal||'');o.push("' \nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','dVal',this.value);\"/></td></tr>\n</table>\n<p>Allows parameters for reports.</p>");
return o.join("");
},
"compile":function () {
    var o = [];
    o.push("<tr><td>");
    o.push(this.i.title || "");
    o.push(":</td><td><input name=\"");
    o.push(this.i.pName || "");
    o.push("\" value=\"<?\nif(isset($_REQUEST['");
    o.push(this.i.pName || "");
    o.push("'])) {\n    print $_REQUEST['");
    o.push(this.i.pName || "");
    o.push("'];\n} else {\n    print '");
    o.push(this.i.dVal || "");
    o.push("';\n}\n?>\"/></td></tr>\n");
    return o.join("");
},
"compileParam":function () {
    var o = [];
    o.push(" ");
    if (this.i.pName) {
        o.push("$");
        o.push(this.i.pName || "");
        o.push(" = $_REQUEST['");
        o.push(this.i.pName || "");
        o.push("'];");
    }
    o.push("\n");
    return o.join("");
}}