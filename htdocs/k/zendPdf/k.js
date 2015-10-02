{"edit":function (){
var o=[];
 var reportId =this.i.Name
o.push("\n<div id=\"configArea\" style=\"width:400px;float:left\"><table class=\"EditTable\">\n    <tr><th colspan=2><span class='csEditLink' data-task='");
o.push(this.t||'');o.push("' data-comp='");
o.push(this.cName||'');o.push("'></span>zendPdf <button onclick=\"\n     var cloneName = document.getElementById('reportName').value+'_clone';\n     dataViews.CustomReports.newRecord({ \n        NewRecord:{ \n            Name:cloneName,Type:'PDF'\n        },OnComplete:function(response){ \n            var r; eval('r='+response); \n            if (r['NewId']) { \n                console.log('new id:',r);\n                //save this report over the new one.\n                \n                $t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','Name',cloneName);\n                si5.tSaveAs('");
o.push(this.t||'');o.push("',r['NewId'])\n                .always(function() {\n                     $t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("','Name','");
o.push(this.i.Name||'');o.push("');\n                    App3.Navigate2('local/Pages/ReportPDF/'+r['NewId'],{target:'AppPages',forceRead:true}); \n                });\n            } \n        } \n    }); \n    \">clone</button></th></tr>\n    <tr><td>Name:</td><td><input id=\"reportName\" type=\"text\" value=\"");
o.push(this.i.Name||'');o.push("\" onchange=\"\n    $t51('");
o.push(this.t||'');o.push("')\n        .pSet('");
o.push(this.cName||'');o.push("', 'Name',this.value);\n    si5.tSave('");
o.push(this.t||'');o.push("');     \n    EditInPlace4.quickSave('CustomReports.Name','");
o.push(this.i.reportId||'');o.push("',this.value);\n    \"/></td></tr>\n    <tr><td>Visning:</td><td><input id=\"reportDisplay\" type=\"text\" value=\"");
o.push(this.i.Display||'');o.push("\" onchange=\"\n    $t51('");
o.push(this.t||'');o.push("')\n        .pSet('");
o.push(this.cName||'');o.push("', 'Display',this.value);\n    si5.tSave('");
o.push(this.t||'');o.push("');     \n    EditInPlace4.quickSave('CustomReports.Display','");
o.push(this.i.reportId||'');o.push("',this.value);\n    \"/></td></tr>    \n    <tr><td>Paper:</td><td>");
if (!this.i.orientation){this.i.orientation='portrait';}
o.push("<select onchange=\"\n    $t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("', 'orientation',this.value);\">\n        <option ");
if(this.i.orientation=='portrait'){o.push('selected');}
o.push(">portrait</option>\n        <option ");
if(this.i.orientation=='landscape'){o.push('selected');}
o.push(">landscape</option>\n    </select>\n    ");
if (!this.i.paper){this.i.paper='A4';}
o.push("<select onchange=\"\n    $t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("', 'paper',this.value);\">\n        <option ");
if(this.i.paper=='A1'){o.push('selected');}
o.push(">A1</option>\n        <option ");
if(this.i.paper=='A2'){o.push('selected');}
o.push(">A2</option>\n        <option ");
if(this.i.paper=='A3'){o.push('selected');}
o.push(">A3</option>\n        <option ");
if(this.i.paper=='A4'){o.push('selected');}
o.push(">A4</option>\n        <option ");
if(this.i.paper=='A5'){o.push('selected');}
o.push(">A5</option>\n        <option ");
if(this.i.paper=='A6'){o.push('selected');}
o.push(">A6</option>\n        <option ");
if(this.i.paper=='A7'){o.push('selected');}
o.push(">A7</option>\n        <option ");
if(this.i.paper=='A8'){o.push('selected');}
o.push(">A8</option>\n        <option ");
if(this.i.paper=='B0'){o.push('selected');}
o.push(">B0</option>\n        <option ");
if(this.i.paper=='B1'){o.push('selected');}
o.push(">B1</option>\n        <option ");
if(this.i.paper=='B2'){o.push('selected');}
o.push(">B2</option>\n        <option ");
if(this.i.paper=='B3'){o.push('selected');}
o.push(">B3</option>\n        <option ");
if(this.i.paper=='B4'){o.push('selected');}
o.push(">B4</option>\n        <option ");
if(this.i.paper=='LETTER'){o.push('selected');}
o.push(">LETTER</option>\n        <option ");
if(this.i.paper=='LEGAL'){o.push('selected');}
o.push(">LEGAL</option>\n        <option ");
if(this.i.paper=='EXECUTIVE'){o.push('selected');}
o.push(">EXECUTIVE</option>\n        <option ");
if(this.i.paper=='FOLIO'){o.push('selected');}
o.push(">FOLIO</option>\n    </select></td></tr>\n    <!--<tr><td>Output:</td><td><select onchange=\"\n    $t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("', 'output',this.value);\n    \">\n        <option ");
if(this.i.output=='inline'){o.push('selected');}
o.push(">inline</option>\n        <option ");
if(this.i.output=='download'){o.push('selected');}
o.push(">download</option>\n        <option ");
if(this.i.output=='none'){o.push('selected');}
o.push(">none</option>\n    </select></td></tr>-->\n    <tr><td>Status:</td><td><select onchange=\"\n    $t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("', 'status',this.value);\n    si5.tSave('");
o.push(this.t||'');o.push("');     \n    EditInPlace4.quickSave('CustomReports.Status','");
o.push(this.i.reportId||'');o.push("',this.value)\n    \">\n        <option ");
if(this.i.status=='Test'){o.push('selected');}
o.push(">Test</option>\n        <option ");
if(this.i.status=='Utveckling'){o.push('selected');}
o.push(">Utveckling</option>\n        <option ");
if(this.i.status=='Publicerad'){o.push('selected');}
o.push(">Publicerad</option>\n        <option ");
if(this.i.status=='Inaktiv'){o.push('selected');}
o.push(">Inaktiv</option>\n    </select></td></tr>\n    \n    <!--<tr><td>Pages:</td><td><input id=\"pages\" type=\"text\" value=\"");
o.push(this.i.pages||'');o.push("\" onchange=\"\n    $t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("', 'pages',this.value);\n    $.post('do/reportPageLinks.php',{pages:this.value,id:'");
o.push(this.i.reportId||'');o.push("',name:'");
o.push(this.i.Name||'');o.push("'},function(response) {\n        \n    });\n    \"/></td></tr>--!>\n    <tr><td>Test Params:</td><td><input id=\"testParams\" type=\"text\" value=\"");
o.push(this.i.testParams||'');o.push("\" onchange=\"\n    $t51('");
o.push(this.t||'');o.push("').pSet('");
o.push(this.cName||'');o.push("', 'testParams',this.value);\n    si5.tSave('");
o.push(this.t||'');o.push("');     \n    \"/></td></tr>\n    <tr><td>\n<button onClick=\"\ndocument.getElementById('viewer').src='pdf/raw.php?ReportId=");
o.push(this.i.reportId||'');o.push("&v='+Math.random();\n     \n\">Background PDF</button></td><td><form>\n<input type=\"file\" name=\"custom\" size=2/>\n<input type=\"button\" value=\"upload\"\nonClick=\"App.fileUpload(this.form,'pdf/custom/upload.php?ReportId=");
o.push(this.i.reportId||'');o.push("','upload'); return false;\" >\n<div id=\"upload\"></div>\n</form></td></tr>\n<script language=\"Javascript\">\nApp.fileUpload = function(form, action_url, div_id)\n{\n// Create the iframe...\nvar iframe = document.createElement(\"iframe\");\niframe.setAttribute(\"id\",\"upload_iframe\");\niframe.setAttribute(\"name\",\"upload_iframe\");\niframe.setAttribute(\"width\",\"0\");\niframe.setAttribute(\"height\",\"0\");\niframe.setAttribute(\"border\",\"0\");\niframe.setAttribute(\"style\",\"width: 0; height: 0; border: none;\");\n\n// Add to document...\nform.parentNode.appendChild(iframe);\nwindow.frames['upload_iframe'].name=\"upload_iframe\";\n\niframeId = document.getElementById(\"upload_iframe\");\n\n// Add event...\nvar eventHandler = function() {\n\nif (iframeId.detachEvent)\niframeId.detachEvent(\"onload\", eventHandler);\nelse\niframeId.removeEventListener(\"load\", eventHandler, false);\n\n// Message from server...\nif (iframeId.contentDocument) {\ncontent = iframeId.contentDocument.body.innerHTML;\n} else if (iframeId.contentWindow) {\ncontent = iframeId.contentWindow.document.body.innerHTML;\n} else if (iframeId.document) {\ncontent = iframeId.document.body.innerHTML;\n}\n\ndocument.getElementById(div_id).innerHTML = content;\n\n// Del the iframe...\nsetTimeout('iframeId.parentNode.removeChild(iframeId)', 250);\n}\n\nif (iframeId.addEventListener)\niframeId.addEventListener(\"load\", eventHandler, true);\nif (iframeId.attachEvent)\niframeId.attachEvent(\"onload\", eventHandler);\n\n// Set properties of form...\nform.setAttribute(\"target\",\"upload_iframe\");\nform.setAttribute(\"action\", action_url);\nform.setAttribute(\"method\",\"post\");\nform.setAttribute(\"enctype\",\"multipart/form-data\");\nform.setAttribute(\"encoding\",\"multipart/form-data\");\n\n// Submit the form...\nform.submit();\n\ndocument.getElementById(div_id).innerHTML = \"Uploading...\";\n}\n</script>\n\n    \n    <tr><th colspan=2><center>\n    <button onclick=\"\n    si5.tSave('");
o.push(this.t||'');o.push("');\n    \">Spara</button>\n     <button id =\"compileBut\" onclick=\"\n    var o = $t51('");
o.push(this.t||'');o.push("').fDo('report','compile',{});\n    $.post(si5.reportUrl,{contents:o,action:'saveReport',report:'");
o.push(this.i.reportId||'');o.push("'},function(response) {\n        $('#viewer').attr('src',si5.reportViewUrl+'?action=viewReport&_report=");
o.push(this.i.reportId||'');o.push("&'+$('#testParams').val()+'&_rnd='+Math.random());\n        console.info(response);\n    });\n    $('#textEditView').hide();\n    $('#previewView').show();\n    \">Visa</button><br/>\n    </th></tr>\n</table>\n\n<center><div id=\"zendPdfDelete\" title=\"delete\" style=\"float:left;height:25px;margin-left:50px;width:150px;\" class=\"dropToDelete ui-droppable\">\n<img style=\"\" src=\"img/delete.png\">\n</div></center>\n\n<script>\n    $('#zendPdfDelete').droppable({\ntolerance: 'pointer',\nactiveClass: \"ui-state-hover\",\nhoverClass: \"ui-state-active-delete\",\ndrop:function(event,ui) {\n    if ($(ui.draggable).hasClass('taskComp')) {\n        //we dragged a component from a task to be dropped.\n        var myt = $(ui.draggable).closest('.taskOC').attr('data-task');\n        var myc = $(ui.draggable).attr('data-comp');\n        //console.log(ui.draggable,$(ui.draggable).closest('taskOC'));\n        //console.log('delete',myt,myc);\n        $t51(myt)\n            .cDel(myc);\n        $(ui.draggable).remove();\n    }\n\n}\n}); \n</script>\n");

o.push(inlineTaskCompChildren(this,{style:'max-height:300px;overflow:auto;'}));

o.push("\n</div>\n<div style=\"width:550px;height:800px;float:left;\">\n<div id=\"previewView\">\n<button onclick=\"\nvar o = $t51('");
o.push(this.t||'');o.push("').fDo('report','compile',{});\n    $('#textEditView').show();\n    $('#previewView').hide();\n    aceEditor.getSession().setValue(o);\n\">View Source Code</button>\n<a class=\"ajaxLink\" href=\"#/Pages/runReport/");
o.push(this.i.reportId||'');o.push("\">view user interface</a>\n<table style=\"width:100%;height:800px;\" class=\"EditTable\">\n<tbody><tr><th style=\"height:20px;\">Preview</th></tr>\n<tr><td style=\"vertical-align:top;\"><iframe style=\"width:100%;height:760px;\" id=\"viewer\"></iframe></td></tr>\n</tbody></table>\n</div><div id=\"textEditView\" style=\"display:none;\">\n<button onclick=\"\n$('#textEditView').hide();\n$('#previewView').show();\n\">Visa Pdf</button>\n<a class=\"ajaxLink\" href=\"#/Pages/runReport/");
o.push(this.i.reportId||'');o.push("\">view user interface</a>\n<table style=\"width:100%;height:600px;\" class=\"EditTable\">\n<tbody><tr><th style=\"height:20px;\">TextEdit <button onclick=\"saveSrc(aceEditor);\">Save</button></th></tr>\n<tr><td style=\"vertical-align:top;\"><div style=\"width:100%;height:560px;\" id=\"aceEditor\"></div></td></tr>\n</tbody></table>\n<script>\n    window.aceEditor = ace.edit(\"aceEditor\");\n    aceEditor.setTheme(\"ace/theme/textmate\");\n	aceEditor.getSession().setMode(\"ace/mode/php\");\n	aceEditor.srcGate = '/t51/dev/cs50/lib/srcGate.php';\n	aceEditor.setShowPrintMargin(false);\n	aceEditor.setBehavioursEnabled(false);//auto close < tags and so on\n    \n    csBrowse('zendPdf','#csList');\n</script>\n</div>\n</div>\n");
return o.join("");
},
"_link":"9c/db693629f6a3b6b7a8eaec5769dfb183c36795",
"_name":"zendPdf",
"compile":function (){
var o=[];
o.push("<?\ninclude_once(\"pdfSettings.php\");\nsession_start();\nif (!isset($_SESSION[\"UserData\"])) {\n    print \"You must login to access this resource\";\n    exit();\n}\nerror_reporting(0);\n/**\n* zendPdf generated report.\n*/\ninclude(\"$autoLoadDir/autoload2.php\");\ninclude(dirname(__FILE__).\"/zendPdfSupport.php\");\ninclude(dirname(__FILE__).\"/ZendPdfExtend.php\");\n$doc = $_REQUEST['_report'].\".pdf\";\n$usingTemplate = false;\nif (!file_exists($reportPath.$doc)) {\n    $pdf = new Zend_Pdf();   \n    $templatePage = $pdf->newPage(Zend_Pdf_Page::SIZE_A4); \n    $pdf->pages[] = $templatePage;\n    $usingTemplate = true;\n    $page = $pdf->pages[0];\n} else {\n    $pdf = Library_Pdf_Base::load($reportPath.$doc);\n    $templatePageIndex = count($pdf->pages)-1;\n    $templatePage = $pdf->pages[$templatePageIndex];\n    $page = new Zend_Pdf_Page($templatePage);\n    unset($pdf->pages[$templatePageIndex]);\n	$pdf->pages[] = $page;\n}\n$offsety = 0;\n\n$page->setFont(Zend_Pdf_Font::fontWithName(Zend_Pdf_Font::FONT_HELVETICA), 12); \n\n");

//fire children
var out = $t51(this.t).oEmit(this.cName,'go','compile',{});
o.push(out);

o.push("\n\nif (isset($_REQUEST['print'])) {\n    $pdf->setEmbeddedJs(\"this.print(true);\");\n}\n//output pdf ");
o.push(this.i.output||'');o.push("\n$dfile = \"");
o.push(this.i.Name||'');o.push("$id.pdf\";\nif (strpos($id,',')>0) {\n    $dfile = \"");
o.push(this.i.Name||'');o.push(".pdf\";\n}\n");
 if (this.i.output=='none') { 
o.push("\n\n");
 } else {
if (this.i.output=='download') { 
o.push("\n    header(\"Content-Disposition: attachment; filename=$dfile\");\n    header(\"Content-type: application/x-pdf\");\n    print $pdf->render();\n");
 } else {
o.push("\n    header(\"Content-type: application/pdf\");\n    header(\"Content-Disposition: inline; filename=$dfile\");\n    print $pdf->render();\n");
 } 
} 
return o.join("");
}}