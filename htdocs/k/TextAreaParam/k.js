{"edit":function (){
var o=[];
o.push("<tr><td>");
o.push(this.i.title||'');o.push(":</td><td><textarea name=\"");
o.push(this.i.pName||'');o.push("\"><?\nif(isset($_REQUEST['");
o.push(this.i.pName||'');o.push("'])) {\n    print $_REQUEST['");
o.push(this.i.pName||'');o.push("'];\n} else {\n    print '");
o.push(this.i.dVal||'');o.push("';\n}\n?></textarea></td></tr>\n");
return o.join("");
},
"_link":"21/0d38c2d5127e83208962d72b799015482ce710",
"_name":"textAreaParam",
"compile":function (){
var o=[];
o.push("<tr><td>");
o.push(this.i.title||'');o.push(":</td><td><textarea ");
 
if(this.i.rows){
    
o.push("rows=\"");
o.push(this.i.rows||'');o.push("\"");

}
if(this.i.cols){
    
o.push(" cols=\"");
o.push(this.i.cols||'');o.push("\"");

}

o.push(" name=\"");
o.push(this.i.pName||'');o.push("\"><?\nif(isset($_REQUEST['");
o.push(this.i.pName||'');o.push("'])) {\n    print $_REQUEST['");
o.push(this.i.pName||'');o.push("'];\n} else {\n    print '");
o.push(this.i.dVal||'');o.push("';\n}\n?></textarea></td></tr>\n");
return o.join("");
},
"contextMenuEdit":function (){
var o=[];
o.push("<table class=\"ContextTable\">\n<tr><td>title:</td><td><input type=\"text\" value='");
o.push(this.i.title||'');o.push("' \nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','title',this.value);\"/></td></tr>\n<tr><td>pName:</td><td><input type=\"text\" value='");
o.push(this.i.pName||'');o.push("' \nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','pName',this.value);\"/></td></tr>\n<tr><td>Rows:</td><td><input type=\"text\" value='");
o.push(this.i.rows||'');o.push("' \nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','rows',this.value);\"/></td></tr>\n<tr><td>Cols:</td><td><input type=\"text\" value='");
o.push(this.i.cols||'');o.push("' \nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','cols',this.value);\"/></td></tr>\n<tr><td>default value:</td><td><textarea \nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','dVal',this.value);\"\n>");
o.push(this.i.dVal||'');o.push("</textarea></td></tr>\n</table>\n<p>Allows entering of longer text into a report.</p>");
return o.join("");
},
"inlineList":function (){
var o=[];
o.push("<span class='title'><span class='csEditLink' data-task='");
o.push(this.t||'');o.push("' data-comp='");
o.push(this.cName||'');o.push("'>&nbsp;</span>");
o.push('TextArea: '+(this.i.title||'ingen')||'');o.push("</span>");
return o.join("");
},
"compileParam":function (){
var o=[];
o.push(" ");
 if (this.i.pName) {
o.push("$");
o.push(this.i.pName||'');o.push(" = utf8_encode($_REQUEST['");
o.push(this.i.pName||'');o.push("']);");
}
o.push("\n");
return o.join("");
}}