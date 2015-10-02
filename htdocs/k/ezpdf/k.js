{"edit":function () {
    var o = [];
    o.push("<div id=\"configArea\" style=\"width:400px;float:left\"><table class=\"EditTable\">\n    <tr><th colspan=2><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'></span>ezPdf <button onclick=\"\n     var cloneName = document.getElementById('reportName').value+'_clone';\n     dataViews.CustomReports.newRecord({ \n        NewRecord:{ \n            Name:cloneName,Type:'PDF'\n        },OnComplete:function(response){ \n            var r; eval('r='+response); \n            if (r['NewId']) { \n                console.log('new id:',r);\n                //save this report over the new one.\n                \n                $t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','Name',cloneName);\n                si5.tSaveAs('");
    o.push(this.t || "");
    o.push("',r['NewId'])\n                .always(function() {\n                     $t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','Name','");
    o.push(this.i.Name || "");
    o.push("');\n                    App3.Navigate2('local/Pages/ReportPDF/'+r['NewId'],{target:'AppPages',forceRead:true}); \n                });\n            } \n        } \n    }); \n    \">clone</button></th></tr>\n    <tr><td>Name:</td><td><input id=\"reportName\" type=\"text\" value=\"");
    o.push(this.i.Name || "");
    o.push("\" onchange=\"\n    $t51('");
    o.push(this.t || "");
    o.push("')\n        .pSet('");
    o.push(this.cName || "");
    o.push("', 'Name',this.value);\n    si5.tSave('");
    o.push(this.t || "");
    o.push("');\n   EditInPlace4.quickSave('CustomReports.Name','");
    o.push(this.i.reportId || "");
    o.push("',this.value);\n    \"/></td></tr>\n    <tr><td>Visning:</td><td><input id=\"reportDisplay\" type=\"text\" value=\"");
    o.push(this.i.Display || "");
    o.push("\" onchange=\"\n    $t51('");
    o.push(this.t || "");
    o.push("')\n        .pSet('");
    o.push(this.cName || "");
    o.push("', 'Display',this.value);\n   si5.tSave('");
    o.push(this.t || "");
    o.push("');\n    EditInPlace4.quickSave('CustomReports.Display','");
    o.push(this.i.reportId || "");
    o.push("',this.value);\n    \"/></td></tr>\n    <tr><td>Paper:</td><td>");
    if (!this.i.orientation) {
        this.i.orientation = "portrait";
    }
    o.push("<select onchange=\"\n    $t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("', 'orientation',this.value);\">\n        <option ");
    if (this.i.orientation == "portrait") {
        o.push("selected");
    }
    o.push(">portrait</option>\n        <option ");
    if (this.i.orientation == "landscape") {
        o.push("selected");
    }
    o.push(">landscape</option>\n    </select>");
    if (!this.i.paper) {
        this.i.paper = "A4";
    }
    o.push("<select onchange=\"\n    $t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("', 'paper',this.value);\">\n        <option ");
    if (this.i.paper == "A1") {
        o.push("selected");
    }
    o.push(">A1</option>\n        <option ");
    if (this.i.paper == "A2") {
        o.push("selected");
    }
    o.push(">A2</option>\n        <option ");
    if (this.i.paper == "A3") {
        o.push("selected");
    }
    o.push(">A3</option>\n        <option ");
    if (this.i.paper == "A4") {
        o.push("selected");
    }
    o.push(">A4</option>\n        <option ");
    if (this.i.paper == "A5") {
        o.push("selected");
    }
    o.push(">A5</option>\n        <option ");
    if (this.i.paper == "A6") {
        o.push("selected");
    }
    o.push(">A6</option>\n        <option ");
    if (this.i.paper == "A7") {
        o.push("selected");
    }
    o.push(">A7</option>\n        <option ");
    if (this.i.paper == "A8") {
        o.push("selected");
    }
    o.push(">A8</option>\n        <option ");
    if (this.i.paper == "B0") {
        o.push("selected");
    }
    o.push(">B0</option>\n        <option ");
    if (this.i.paper == "B1") {
        o.push("selected");
    }
    o.push(">B1</option>\n        <option ");
    if (this.i.paper == "B2") {
        o.push("selected");
    }
    o.push(">B2</option>\n        <option ");
    if (this.i.paper == "B3") {
        o.push("selected");
    }
    o.push(">B3</option>\n        <option ");
    if (this.i.paper == "B4") {
        o.push("selected");
    }
    o.push(">B4</option>\n        <option ");
    if (this.i.paper == "LETTER") {
        o.push("selected");
    }
    o.push(">LETTER</option>\n        <option ");
    if (this.i.paper == "LEGAL") {
        o.push("selected");
    }
    o.push(">LEGAL</option>\n        <option ");
    if (this.i.paper == "EXECUTIVE") {
        o.push("selected");
    }
    o.push(">EXECUTIVE</option>\n        <option ");
    if (this.i.paper == "FOLIO") {
        o.push("selected");
    }
    o.push(">FOLIO</option>\n    </select></td></tr>\n    <!--<tr><td>Output:</td><td><select onchange=\"\n    $t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("', 'output',this.value);\n    \">\n        <option ");
    if (this.i.output == "inline") {
        o.push("selected");
    }
    o.push(">inline</option>\n        <option ");
    if (this.i.output == "download") {
        o.push("selected");
    }
    o.push(">download</option>\n        <option ");
    if (this.i.output == "none") {
        o.push("selected");
    }
    o.push(">none</option>\n    </select></td></tr>-->\n    \n    <tr><td>Test Params:</td><td><input id=\"testParams\" type=\"text\" value=\"");
    o.push(this.i.testParams || "");
    o.push("\" onchange=\"\n    $t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("', 'testParams',this.value);\n   si5.tSave('");
    o.push(this.t || "");
    o.push("');\n    \"/></td></tr>\n    <tr><td>Status:</td><td><select onchange=\"\n    $t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("', 'status',this.value);\n   si5.tSave('");
    o.push(this.t || "");
    o.push("');\n        EditInPlace4.quickSave('CustomReports.Status','");
    o.push(this.i.reportId || "");
    o.push("',this.value)\n    \">\n        <option ");
    if (this.i.status == "Test") {
        o.push("selected");
    }
    o.push(">Test</option>\n        <option ");
    if (this.i.status == "Utveckling") {
        o.push("selected");
    }
    o.push(">Utveckling</option>\n        <option ");
    if (this.i.status == "Publicerad") {
        o.push("selected");
    }
    o.push(">Publicerad</option>\n        <option ");
    if (this.i.status == "Inaktiv") {
        o.push("selected");
    }
    o.push(">Inaktiv</option>\n    </select></td></tr>\n    <tr><th colspan=2><center><button onclick=\"\n    si5.tSave('");
    o.push(this.t || "");
    o.push("');\n    \">Save</button> \n    \n    <button id =\"compileBut\" onclick=\"\n    var o = $t51('");
    o.push(this.t || "");
    o.push("').fDo('report','compile',{});\n    $.post(si5.reportUrl,{contents:o,action:'saveReport',report:'");
    o.push(this.i.reportId || "");
    o.push("'},function(response) {\n        $('#viewer').attr('src',si5.reportViewUrl+'?action=viewReport&_rnd='+Math.random()+'&_report=");
    o.push(this.i.reportId || "");
    o.push("&'+$('#testParams').val());\n        console.info(response);\n    });\n    $('#textEditView').hide();\n    $('#previewView').show();\n    \">View</button><br/>\n    <!--<button onclick=\"\n    $('#viewer').attr('src',si5.reportViewUrl+'?action=viewReport&_rnd='+Math.random()+'&_report=");
    o.push(this.i.reportId || "");
    o.push("&'+$('#testParams').val());\n    \">Visa</button>-->\n   <!-- <button onclick=\"\n    newName = prompt('Enter name of report clone',$('#reportName').val() + ' copy');\n    if(newName) {\n        si5.tSaveAs($('#reportName').val(), newName).done(function() {\n            console.info('cloned');\n        });\n    }\n    \">clone</button>\n    <button onclick=\"\n        var o = $t51('");
    o.push(this.t || "");
    o.push("').fDo('report','compile',{});\n        $.post(si5.reportUrl,{contents:o,action:'saveReport',report:$('#reportName').val()},function(response) {\n            $.post(si5.reportUrl,{action:'publishReport',report:$('#reportName').val()},function(response) {\n                console.info(response);\n                $('#viewer').attr('src','reports/'+$('#reportName').val()+'.php?rnd='+Math.random()+'&'+$('#testParams').val());\n            });\n        });\n    \">Publish</button>-->\n    </th></tr>\n</table><br/>\n<div id=\"ezPdfDelete\" style=\"height:25px;width:50px;\" class=\"dropToDelete ui-droppable\">\n<img style=\"\" src=\"img/delete.png\">\n</div>\n<script>\n    $('#ezPdfDelete').droppable({\ntolerance: 'pointer',\nactiveClass: \"ui-state-hover\",\nhoverClass: \"ui-state-active\",\ndrop:function(event,ui) {\n    if ($(ui.draggable).hasClass('taskComp')) {\n        //we dragged a component from a task to be dropped.\n        var myt = $(ui.draggable).closest('.taskOC').attr('data-task');\n        var myc = $(ui.draggable).attr('data-comp');\n        //console.log(ui.draggable,$(ui.draggable).closest('taskOC'));\n        //console.log('delete',myt,myc);\n        $t51(myt)\n            .cDel(myc);\n        $(ui.draggable).remove();\n    }\n\n}\n}); \n</script>\n\n");
    o.push(window.inlineTaskCompChildren(this, {style: "max-height:300px;overflow:auto;"}));
    o.push("\n</div>\n<div style=\"width:550px;height:600px;float:left;\">\n<div id=\"previewView\">\n<button onclick=\"\n    var o = $t51('");
    o.push(this.t || "");
    o.push("').fDo('report','compile',{});\n    $('#textEditView').show();\n    $('#previewView').hide();\n    aceEditor.getSession().setValue(o);\n    \">Source Code</button>\n    <a class=\"ajaxLink\" href=\"#/Pages/runReport/");
    o.push(this.i.reportId || "");
    o.push("\">view user interface</a>\n<table style=\"width:100%;height:600px;\" class=\"EditTable\">\n<tbody><tr><th style=\"height:20px;\">Preview</th></tr>\n<tr><td style=\"vertical-align:top;\"><iframe style=\"width:100%;height:560px;\" id=\"viewer\"></iframe></td></tr>\n</tbody></table>\n</div><div id=\"textEditView\" style=\"display:none;\">\n<button onclick=\"\nvar o = $t51('");
    o.push(this.t || "");
    o.push("').fDo('report','compile',{});\n    $.post(si5.reportUrl,{contents:o,action:'saveReport',report:'");
    o.push(this.i.reportId || "");
    o.push("'},function(response) {\n        $('#viewer').attr('src',si5.reportViewUrl+'?action=viewReport&_rnd='+Math.random()+'&_report=");
    o.push(this.i.reportId || "");
    o.push("&'+$('#testParams').val());\n        console.info(response);\n    });\n    $('#textEditView').hide();\n    $('#previewView').show();\n\">Preview</button>\n<a class=\"ajaxLink\" href=\"#/Pages/runReport/");
    o.push(this.i.reportId || "");
    o.push("\">view user interface</a>\n<table style=\"width:550px;height:600px;\" class=\"EditTable\">\n<tbody><tr><th style=\"height:20px;\">TextEdit <button onclick=\"saveSrc(aceEditor);\">Save</button></th></tr>\n<tr><td style=\"vertical-align:top;\"><div style=\"width:536px;height:560px;\" id=\"aceEditor\"></div></td></tr>\n</tbody></table><br/>\n<script>\n    window.aceEditor = ace.edit(\"aceEditor\");\n\taceEditor.setTheme(\"ace/theme/textmate\");\n\taceEditor.getSession().setMode(\"ace/mode/php\");\n\taceEditor.srcGate = '/t51/dev/cs50/lib/srcGate.php';\n\taceEditor.setShowPrintMargin(false);\n\taceEditor.setBehavioursEnabled(false);//auto close < tags and so on\n    \n    csBrowse('ezPdf','#csList');\n</script>\n</div>\n</div>\n");
    return o.join("");
},
"_link":"70/05d5bade5ef56e7a05515846dcb71bf502a8e8",
"_name":"ezpdf",
"compile":function (){
var o=[];
o.push("<?\ninclude_once(\"pdfSettings.php\");\nsession_start();\nif (!isset($_SESSION[\"UserData\"])) {\n    print \"You must login to access this resource\";\n	exit();\n}\n/**\n* ezPdf generated report.\n*/\ninclude_once(\"$ezPdfDir/class.si.ezpdf.php\");\n$pdf = new SiCezpdf('");
o.push(this.i.paper||'A4'||'');o.push("', '");
o.push(this.i.orientation||'portrait'||'');o.push("');\n$pdf->ezSetMargins(30,30,30,20);\nfunction NewPageCallback($rowIndex) {\n    if ($rowIndex > 8000) {\n		return 'Bailout';\n	}\n}\n");

//fire children
var out = $t51(this.t).oEmit(this.cName,'go','compile',{});
o.push(out);

o.push("\n//output pdf ");
o.push(this.i.output||'');o.push("\n$dfile = \"");
o.push(this.i.name||'rapport'||'');o.push("$id.pdf\";\nif (stristr($id,',')>0) {\n    $dfile = \"");
o.push(this.i.name||'rapport'||'');o.push(".pdf\";    \n}\nheader('connection:close'); \n");
 if (this.i.output=='none') { 
o.push("\n    \n");
 } else {
if (this.i.output=='download') { 
o.push("\n    header(\"Content-Disposition:attachment;filename=$dfile\");\n    header(\"Content-type: application/x-pdf\");\n    print $pdf->ezOutput();\n");
 } else { 
o.push("\nif (isset($forceInline) || isset($_REQUEST['forceInline'])) {\n    $pdf->ezStream();\n} else {\n    $pdf->ezStream();\n    \n}\n");
 }
}
return o.join("");
},
"inlineList":function () {
    var o = [];
    o.push("pdfRotate");
    return o.join("");
}}