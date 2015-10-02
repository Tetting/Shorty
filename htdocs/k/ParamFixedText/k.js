{"compile":function (){
var o=[];
o.push("<tr><td colspan=\"2\">");
o.push(this.i.text||'');o.push("</td></tr>");
return o.join("");
},
"_link":"54/035325ebcc446816dad4a0d10e952c1ac3da9b",
"_name":"paramFixedHTML",
"inlineList":function (){
var o=[];
o.push("<span class='title'><span class='csEditLink' data-task='");
o.push(this.t||'');o.push("' data-comp='");
o.push(this.cName||'');o.push("'>&nbsp;</span>");
o.push('FixedText '+(this.i.title||'')||'');o.push("</span>");
return o.join("");
},
"contextMenuEdit":function (){
var o=[];
o.push("<table class=\"ContextTable\">\n<tr><td>title:</td><td><input type=\"text\" value='");
o.push(this.i.title||'');o.push("' \nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','title',this.value);\"/></td></tr>\n<tr><td>Text:</td><td><textarea \nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','text',this.value);\"\n>");
o.push(this.i.text||'');o.push("</textarea></td></tr>\n</table>\n<p>Fixed text to display in a report.</p>");
return o.join("");
},
"compileParam":function (){
var o=[];
o.push(" ");
return o.join("");
}}