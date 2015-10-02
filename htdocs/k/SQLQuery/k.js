{"edit":function () {
    var o = [];
    o.push("<table>\n<tr><th colspan=\"2\">ezSQLQuery</th></tr>\n<tr><td>dataName:</td><td><input type=\"text\" value=\"");
    o.push(this.i.dataName || "data" || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','dataName',this.value);\"/></td></tr>\n<tr><td>sql:</td><td><textarea onchange=\"\n$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','sql',this.value);\n\">");
    o.push(this.i.sql || "");
    o.push("</textarea></td></tr>\n<tr><td>dbName:</td><td><input type=\"text\" value=\"");
    o.push(this.i.dbName || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','dbName',this.value);\"/></td></tr>\n</table>\n<p>Run a query.\n</p>");
    return o.join("");
},
"_link":"6f/09310b9c0f38f8de5121e574d04628926db24a",
"_name":"zendPdf sql query",
"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>\ndbQuery</span> <button onclick=\"\neditSrc2({\n        type:'task'\n        ,task:'");
    o.push(this.t || "");
    o.push("'\n\t\t,comp:'");
    o.push(this.cName || "");
    o.push("'\n\t\t,prop:'sql'\n});\n\">Edit</button> <button onclick=\"\neditSrc2({\n        type:'task'\n        ,task:'");
    o.push(this.t || "");
    o.push("'\n\t\t,comp:'");
    o.push(this.cName || "");
    o.push("'\n\t\t,prop:'queryParams'\n});\n\">Params</button>");
    return o.join("");
},
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>dataName:</td><td><input type=\"text\" value=\"");
    o.push(this.i.dataName || this.cName || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','dataName',this.value);\"/></td></tr>\n<tr><td>sql:</td><td><button onclick=\"\neditSrc2({\n        type:'task'\n    \t,task:'");
    o.push(this.t || "");
    o.push("'\n\t\t,comp:'");
    o.push(this.cName || "");
    o.push("'\n\t\t,prop:'sql'\n});\n\">Edit</button></td></tr>\n<tr><td>DB Name:</td><td><input type=\"text\" value=\"");
    o.push(this.i.dbName || "db" || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','dbName',this.value);\"/></td></tr>\n<tr><td>CalculateTotals:</td><td><input type=\"text\" value=\"");
    o.push(this.i.totalFields || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','totalFields',this.value);\"/><br/>\nvarName=Table.Field&shortFieldName&var2=Table.Field2 (if FieldName does not have dots in)<br/>\nUI here should be improved.</td></tr>\n<tr><td>TotalText FieldName:</td><td><input type=\"text\" value='");
    o.push(this.i.totalTextField || "");
    o.push("' \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','totalTextField',this.value);\"/></td></tr>\n<tr><td>TotalText:</td><td><input type=\"text\" value='");
    o.push(this.i.totalText || "");
    o.push("' \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','totalText',this.value);\"/></td></tr>\n\n</table>\n<p>Runs a query against the database.</p>");
    return o.join("");
},
"compile":function () {
    var o = [];
    o.push("    $query=\"");
    o.push(this.i.sql || "");
    o.push("\";\n");
    o.push(this.i.queryParams || "" || "");
    o.push("\n    $result = $");
    o.push(this.i.dbName || "db" || "");
    o.push("->Query($query);\n    $row = $db->GetRow($result);\n    \n");
    return o.join("");
}}