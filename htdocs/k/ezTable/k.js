{"contextMenuEdit":function (){
var o=[];
o.push("<table class=\"ContextTable\">\n<tr><td>title:</td><td><input type=\"text\" value='");
o.push(this.i.title||'');o.push("' \nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','title',this.value);\"/></td></tr>\n<tr><td>dataName:</td><td><input type=\"text\" value=\"");
o.push(this.i.dataName||'data'||'');o.push("\" \nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','dataName',this.value);\"/></td></tr>\n<tr><td>showHeadings:</td><td><select onchange=\"\n    $t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("', 'showHeadings',this.value);\">\n        <option ");
if(this.i.showHeadings==1){o.push('selected');}
o.push(" value=\"1\">Y</option>\n        <option ");
if(this.i.showHeadings==0){o.push('selected');}
o.push(" value=\"0\">N</option>\n    </select></td></tr>\n<tr><td>Shade Odd rows:</td><td><select onchange=\"\n    $t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("', 'shaded',this.value);\">\n        <option ");
if(this.i.shaded==1){o.push('selected');}
o.push(" value=\"1\">Y</option>\n        <option ");
if(this.i.shaded==0){o.push('selected');}
o.push(" value=\"0\">N</option>\n    </select></td></tr>\n<tr><td>Show lines:</td><td><select onchange=\"\n    $t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("', 'showLines',this.value);\">\n        <option ");
if(this.i.showLines==1){o.push('selected');}
o.push(" value=\"1\">1</option>\n        <option ");
if(this.i.showLines==0){o.push('selected');}
o.push(" value=\"0\">0</option>\n        <option ");
if(this.i.showLines==2){o.push('selected');}
o.push(" value=\"2\">2</option>\n        <option ");
if(this.i.showLines==3){o.push('selected');}
o.push(" value=\"3\">3</option>\n    </select></td></tr>\n<tr><td>fontSize:</td><td><input type=\"text\" value=\"");
o.push(this.i.fontSize||''||'');o.push("\" \nonchange=\"$t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','fontSize',this.value);\"/></td></tr>\n</table>\n<p>Displays a data table.</p>");
return o.join("");
},
"_link":"51/36d82bd1f343fdb81b1d75055fea04ef142337",
"_name":"ezTable",
"compile":function (){
var o=[];
o.push("    $pdf->ezTable(\n        $");
o.push(this.i.dataName||'data'||'');o.push("\n        //columns\n	    ,array(");

        var ocList = $t51(this.t).ocList(this.cName,'go');
        var col;
        var vcols = 0;
        for(var oci=0;oci<ocList.length;oci++) { 
            col=$t51(this.t).t.c[ocList[oci]];
            if (col.hide && col.hide == 'Y') {
            } else {
                if (vcols>0)o.push(',')
                vcols++;
            
o.push("'");
o.push(col.colName||'');o.push("'=>'");
o.push(col.title||'');o.push("'  \n                ");

            }
        } 
o.push("\n        )\n	    ,html_entity_decode(\"");
o.push(this.i.title||'');o.push("\")\n        //options\n");

//create an array of options then print them.
var ops = {};
ops['NewPageCallback'] = 'NewPageCallback';
    var ocList = $t51(this.t).ocList(this.cName,'go');
    var col;
    ops['cols'] = {};
    for(var oci=0;oci<ocList.length;oci++) { 
        col=$t51(this.t).t.c[ocList[oci]];
        if (col.hide && col.hide == 'Y') {
            ops['cols'][col.colName] = {};
            if (col.justification) {
                ops['cols'][col.colName]['justification'] = col.justification;
            }
        }
    }
    ops = {};
    if (this.i.showHeadings) ops['showHeadings']=this.i.showHeadings;
    if (this.i.showLines) ops['showLines']=this.i.showLines;
    if (this.i.fontSize) ops['fontSize']=this.i.fontSize;
    console.warn('ops');
    console.dir(ops);

o.push("\n	    ,array('NewPageCallback' => 'NewPageCallback'\n			,'cols'=>array(\n                ");

        var ocList = $t51(this.t).ocList(this.cName,'go');
        var col;
        var vcols = 0;
        for(var oci=0;oci<ocList.length;oci++) { 
            col=$t51(this.t).t.c[ocList[oci]];
            if (col.hide && col.hide == 'Y') {
                if (vcols>0)o.push(',');
                vcols++;
                
            
o.push("'");
o.push(col.colName||'');o.push("'=>array(");

            if (col.justification){o.push("'justification'=>'"+col.justification+"'");}
            
o.push(")  \n                ");

            } 
        }
o.push("\n			)\n            ,'maxWidth'=>$pdf->ez['pageWidth']-20\n            ,'showHeadings'=>");
o.push(this.i.showHeadings||1||'');o.push("\n            ,'shaded'=>");
o.push(this.i.shaded||1||'');o.push("\n            ,'showLines'=>");
o.push(this.i.showLines||1||'');o.push("\n");

        for(i in ops) {
            o.push("		,'"+i+"' => '"+ops[i]+"'");   
        }
        
o.push(")\n    );\n");
return o.join("");
},
"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>ezTable</span><span style=\"position:absolute;right:4px;\"><a class=\"taskNav\" href=\"");
    o.push(this.t || "");
    o.push("/");
    o.push(this.cName || "");
    o.push("\">>></a></span>");
    return o.join("");
}}