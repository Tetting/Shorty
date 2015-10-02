{"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>easyDB libDir:</td><td><input type=\"text\" value=\"");
    o.push(this.i.libDir || "../" || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','libDir',this.value);\"/></td></tr>\n<tr><td>DB Name:</td><td><input type=\"text\" value=\"");
    o.push(this.i.dbName || "db" || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','dbName',this.value);\"/></td></tr>\n<tr><td>DB Connection:</td><td><input type=\"text\" value=\"");
    o.push(this.i.dbConn || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','dbConn',this.value);\"/></td></tr>\n</table>\n<p>Will create a database connection to allow you to run queries against.\n</p>");
    return o.join("");
},
"_link":"ba/e473620c1ba21623ac05452712033b8e6cfbaa",
"_name":"zend pdf db",
"compile":function (){
var o=[];
o.push("\n    include(\"$easyDBDir/easyDB.php\");\n    include(\"$easyDBDir/easyDBConn2.php\");\n    $");
o.push(this.i.dbName||'db'||'');o.push(" = easyDB('");
o.push(this.i.dbConn||'');o.push("');\n");
return o.join("");
},
"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\ndb</span>");
    return o.join("");
}}