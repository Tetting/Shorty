{"contextMenuEdit":function (){
var o=[];
o.push("<table class=\"ContextTable\">\n<tr><td colspan=2>text:<br/>\n<textarea cols=60 rows=6\nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','text',this.value);\">");
o.push(this.i.text||'');o.push("</textarea></td></tr>\n<tr><td>fontSize:</td><td><input type=\"text\" value=\"");
o.push(this.i.fontSize||'');o.push("\" \nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','fontSize',this.value);\"/></td></tr>\n</table>\n<p>Will add a block of text to a page. Text will go to next line when \n is \nfound.\n</p>");
return o.join("");
},
"_link":"f8/8f9332fe304e5d07d88ebbede906c207859d66",
"_name":"ezText",
"edit":function () {
    var o = [];
    o.push("<table>\n<tr><th colspan=\"2\">ezText</th></tr>\n<tr><td>text:</td><td><input type=\"text\" value=\"");
    o.push(this.i.text || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','text',this.value);\"/></td></tr>\n</table>\n<p>Will add a block of text to a page. Text will go to next line when \n is \nfound.\n</p>");
    return o.join("");
},
"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\nezText</span>");
    return o.join("");
},
"compile":function (){
var o=[];
o.push("    $pdf->ezText(\"");
o.push(this.i.text||'');o.push("\"");
 if(this.i.fontSize){
o.push(",");
o.push(this.i.fontSize||'');}
o.push(");\n");
return o.join("");
}}