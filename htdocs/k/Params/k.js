{"compile":function (){
var o=[];
o.push("\nif (isset($_REQUEST['action']) && $_REQUEST['action']=='runReport') {\n?>\n<form target=\"ReportView\" action=\"do/task.php\" method=\"post\">\n<input type=\"hidden\" name=\"_report\" value=\"<?=$_REQUEST['_report']?>\"/>\n<input type=\"hidden\" name=\"action\" value=\"viewReport\"/>\n<input type=\"hidden\" name=\"random\" value=\"<?=rand();?>\"/>\n\n<table class=\"EditTable reportParams\">\n<tr><th colspan=\"2\">");
o.push(this.i.title||'');o.push("</th></tr>\n");

//fire children
var out = $t51(this.t).oEmit(this.cName,'go','compile',{});
o.push(out);

o.push("\n<tr><td colspan=\"2\">\n<button name=\"print\" value=\"1\" style=\"display:none;\">Print</button>\n\n<button style=\"float:right;margin-right:20px;\" onclick=\"\n<?\n/*\nvar params = {};\n\n$in = array_merge($_GET,$_POST);\nforeach($in as $key=>$value) {\n    switch($key) {\n        case '_rnd':\n        case 'action':\n        break;\n        default:\n        print \"params['$key']='$value';\".PHP_EOL;\n        break;\n    }\n}\n\n$(this).closest('table').find('input,select').each(function() {\n    console.log('input:',this);\n    var i = $(this);\n    if (i.attr('name')) {\n        params[i.attr('name')] = i.val();  \n    }\n});\nvar s = '';\nfor(var p in params) {\n    s += '&'+p+'='+encodeURI(params[p]);\n}\ndocument.getElementById('ReportView').src='do/task.php?action=viewReport'+s+'&_rnd='+Math.random();                \n*/\n?>\n\">k&ouml;r</button>\n</td>\n</tr>\n</table>\n</form>\n<br style=\"clear:both;\"/><script>\n$('[name=id]').select().focus();\n</script>\n<?\n    exit();\n} else {\n");

//fire children
var out = $t51(this.t).oEmit(this.cName,'go','compileParam',{});
o.push(out);

o.push("}\n");
return o.join("");
},
"_link":"f5/d83d3d830fdfe09e9f300a652ebd742e38a152",
"_name":"pdfParams",
"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>params</span><span style=\"position:absolute;right:4px;\"><a class=\"taskNav\" href=\"");
    o.push(this.t || "");
    o.push("/");
    o.push(this.cName || "");
    o.push("\">>></a></span>");
    return o.join("");
},
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>title:</td><td><input type=\"text\" value='");
    o.push(this.i.title || "");
    o.push("' \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','title',this.value);\"/></td></tr>\n</table>\n<p>Allows parameters for reports.</p>");
    return o.join("");
}}