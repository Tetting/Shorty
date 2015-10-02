function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("");

var d = {
    "fieldName":'Name'
    ,"type":ns.defaultType
    ,"fontSize":'12'
    ,"xStart":200
    ,"xEnd":600
    ,"y":90
    ,"align":'left'
};
$j.extend(d,ns.data);
ns.data = d;
if (ns.data.type == 'cmd') {

 out.push("\n<input type=\"hidden\" value=\"add\" name=\"action\">\n<input type=\"hidden\" value=\"");
try{d=ns.data.id;}catch(e){d=''}out.push(d);
 out.push("\" id=\"addFormId\" name=\"id\"/>\n<table class=\"EditTable\">\n    <tr><th colspan=2>cmd #");
try{d=ns.data.id;}catch(e){d=''}out.push(d);
 out.push("</th></tr>\n    <tr><td>cmdName:</td><td><input id=cmdName value=\"");
try{d=ns.data.cmdName;}catch(e){d=''}out.push(d);
 out.push("\"/></td></tr>\n");
switch(ns.data['cmdName']) {
    case 'rotate':
 out.push("\n        <tr><td>degrees:</td><td><input id=degrees value=\"");
try{d=ns.data.degrees;}catch(e){d=''}out.push(d);
 out.push("\"/></td></tr>\n    ");
break;
    case 'font':
 out.push("\n        <tr><td>typeface:</td><td><input id=typeface value=\"");
try{d=ns.data.typeface;}catch(e){d=''}out.push(d);
 out.push("\"/></td></tr>\n        <tr><td>Upload ttf font</td><td><form>\n<input type=\"file\" name=\"custom\"><br>\n<input type=\"button\" onclick=\"App.fileUpload(this.form,'pdf/custom/uploadFont.php','uploadFont'); return false;\" value=\"upload\">\n<div id=\"uploadFont\"></div>\n</form></td></tr>\n    ");
break;
    case 'color':
 out.push("\n        <tr><td>Color:</td><td><input id=color value=\"");
try{d=ns.data.color;}catch(e){d=''}out.push(d);
 out.push("\"/></td></tr>\n    ");
break;
    case 'divider':
 out.push("\n        <tr><td>Comment:</td><td><input id=comment value=\"");
try{d=ns.data.comment;}catch(e){d=''}out.push(d);
 out.push("\"/></td></tr>\n    ");
break;
    case 'extratext':
 out.push("\n        <tr><td>Text:</td><td><input id=extratext value=\"");
try{d=ns.data.extratext;}catch(e){d=''}out.push(d);
 out.push("\"/></td></tr>\n        <tr><td>fontSize:</td><td><input value=\"");
try{d=ns.data.fontSize;}catch(e){d=''}out.push(d);
 out.push("\" name=\"fontSize\" id=\"fontSize\"></td></tr>\n        <tr><td>xStart:</td><td><input value=\"");
try{d=ns.data.xStart;}catch(e){d=''}out.push(d);
 out.push("\" name=\"xStart\" id=\"xStart\"></td></tr>\n        <tr><td>xEnd:</td><td><input value=\"");
try{d=ns.data.xEnd;}catch(e){d=''}out.push(d);
 out.push("\" name=\"xEnd\" id=\"xEnd\"></td></tr>\n        <tr><td>y:</td><td><input value=\"");
try{d=ns.data.y;}catch(e){d=''}out.push(d);
 out.push("\" name=\"y\" id=\"y\"></td></tr>\n        <tr><td>align:</td><td><input value=\"");
try{d=ns.data.align;}catch(e){d=''}out.push(d);
 out.push("\" name=\"align\" id=\"align\" title=\"left,right,center,wrap\"></td></tr>\n    ");
break;
    case 'subReport':
 out.push("\n        <tr><td>Sub-ReportId:</td><td><input id=subReportId value=\"");
try{d=ns.data.subReportId;}catch(e){d=''}out.push(d);
 out.push("\"/></td></tr>\n        <tr><td>y:</td><td><input value=\"");
try{d=ns.data.y;}catch(e){d=''}out.push(d);
 out.push("\" name=\"y\" id=\"subReporty\"></td></tr>\n        <tr><td>y-size:</td><td><input value=\"");
try{d=ns.data.ySize;}catch(e){d=''}out.push(d);
 out.push("\" name=\"y\" id=\"subReportySize\"></td></tr>\n    ");
break;
    default:
 out.push("\n        <tr><td>Available Cmds:</td><td>rotate,color,font,divider,extratext,subReport,</td></tr>\n    ");
break;
    
}
 out.push("\n\n\n<tr><th colspan=2><center>\n");
if(ns.data['id']) {
 out.push("\n<button onclick=\"\nvar myDat = {\n    action:'update'\n    ,ReportId:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    ,type:'cmd'\n    ,cmdName:document.getElementById('cmdName').value\n    ,id:document.getElementById('addFormId').value\n};\nswitch('");
try{d=ns.data.cmdName;}catch(e){d=''}out.push(d);
 out.push("') {\n    case 'rotate':\n        myDat['degrees'] = document.getElementById('degrees').value\n    break;\n    case 'color':\n        myDat['color'] = document.getElementById('color').value\n    break;\n    case 'extratext':\n        myDat['extratext'] = document.getElementById('extratext').value\n        myDat['y'] = document.getElementById('y').value\n        myDat['fontSize'] = document.getElementById('fontSize').value\n        myDat['align'] = document.getElementById('align').value\n        myDat['xStart'] = document.getElementById('xStart').value\n        myDat['xEnd'] = document.getElementById('xEnd').value\n    break;\n    case 'subReport':\n        myDat['subReportId'] = document.getElementById('subReportId').value\n        myDat['y'] = document.getElementById('subReporty').value\n        myDat['ySize'] = document.getElementById('subReportySize').value\n    break;\n    case 'font':\n        myDat['typeface'] = document.getElementById('typeface').value\n    break;\n}    \n$j.post('pdf/custom/badGateway.php',myDat,function(response) {\n    var ns = {\n        Id:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    };\n    eval('ns.data='+response);\n     var out = App3.go.local.Pages.CustomReportTable(ns);\n    $j('#tableView').html(out);\n  });\n\">Update</button>\n<button onclick=\"\nvar myDat = {\n    action:'update'\n    ,ReportId:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    ,type:'cmd'\n    ,cmdName:document.getElementById('cmdName').value\n    ,id:document.getElementById('addFormId').value\n}\nswitch('");
try{d=ns.data.cmdName;}catch(e){d=''}out.push(d);
 out.push("') {\n    case 'rotate':\n        myDat['degrees'] = document.getElementById('degrees').value\n    break;\n    case 'color':\n        myDat['color'] = document.getElementById('color').value\n    break;\n    case 'extratext':\n        myDat['extratext'] = document.getElementById('extratext').value\n        myDat['y'] = document.getElementById('y').value\n        myDat['fontSize'] = document.getElementById('fontSize').value\n        myDat['align'] = document.getElementById('align').value\n        myDat['xStart'] = document.getElementById('xStart').value\n        myDat['xEnd'] = document.getElementById('xEnd').value\n    break;\n    case 'subReport':\n        myDat['subReportId'] = document.getElementById('subReportId').value\n        myDat['y'] = document.getElementById('subReporty').value\n        myDat['ySize'] = document.getElementById('subReportySize').value\n    break;\n    case 'font':\n        myDat['typeface'] = document.getElementById('typeface').value\n    break;\n\n} \n$j.post('pdf/custom/badGateway.php',myDat,function(response) {\n    var ns = {\n        Id:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    };\n    eval('ns.data='+response);\n     var out = App3.go.local.Pages.CustomReportTable(ns);\n    $j('#tableView').html(out);\n    document.getElementById('viewer').src='pdf/custom.php?id='+document.getElementById('reportObjectId').value+'&CustomText='+App.CustomText(document.getElementById('CustomText').value)+'&ReportId=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("&v='+Math.random();\n});\n\">Update & View</button>\n\n");
}else{
 out.push("\n<button onclick=\"\n$j.post('pdf/custom/badGateway.php',{\n    action:'add'\n    ,ReportId:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    ,type:'cmd'\n    ,cmdName:document.getElementById('cmdName').value\n    \n},function(response) {\n    var ns = {\n        Id:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    };\n    eval('ns.data='+response);\n     var out = App3.go.local.Pages.CustomReportTable(ns);\n    $j('#tableView').html(out);\n});\n\">Add</button>\n");
}
 out.push("\n</center></th></tr>\n\n</table>\n");


} else {

 out.push("\n    <input type=\"hidden\" value=\"add\" name=\"action\">\n    <input type=\"hidden\" value=\"");
try{d=ns.data.id;}catch(e){d=''}out.push(d);
 out.push("\" id=\"addFormId\" name=\"id\"/>\n\n<table class=\"EditTable\">\n    <tr><th colspan=2>text #");
try{d=ns.data.id;}catch(e){d=''}out.push(d);
 out.push("</th></tr>\n    <tr><td>fontSize:</td><td><input value=\"");
try{d=ns.data.fontSize;}catch(e){d=''}out.push(d);
 out.push("\" name=\"fontSize\" id=\"fontSize\"></td></tr>\n    <tr><td>fieldName:</td><td><input value=\"");
try{d=ns.data.fieldName;}catch(e){d=''}out.push(d);
 out.push("\" name=\"fieldName\" id=\"fieldName\"></td></tr>\n    <tr><td>xStart:</td><td><input value=\"");
try{d=ns.data.xStart;}catch(e){d=''}out.push(d);
 out.push("\" name=\"xStart\" id=\"xStart\"></td></tr>\n    <tr><td>xEnd:</td><td><input value=\"");
try{d=ns.data.xEnd;}catch(e){d=''}out.push(d);
 out.push("\" name=\"xEnd\" id=\"xEnd\"></td></tr>\n    <tr><td>y:</td><td><input value=\"");
try{d=ns.data.y;}catch(e){d=''}out.push(d);
 out.push("\" name=\"y\" id=\"y\"></td></tr>\n    <tr><td>align:</td><td><input value=\"");
try{d=ns.data.align;}catch(e){d=''}out.push(d);
 out.push("\" name=\"align\" id=\"align\" title=\"left,right,center,wrap\"></td></tr>\n<tr><th colspan=2><center>\n");
if(ns.data['id']) {
 out.push("\n<button onclick=\"\n$j.post('pdf/custom/badGateway.php',{\n    action:'update'\n    ,ReportId:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    ,fontSize:document.getElementById('fontSize').value\n    ,fieldName:document.getElementById('fieldName').value\n    ,xStart:document.getElementById('xStart').value\n    ,xEnd:document.getElementById('xEnd').value\n    ,y:document.getElementById('y').value\n    ,align:document.getElementById('align').value\n    ,id:document.getElementById('addFormId').value\n},function(response) {\n    var ns = {\n        Id:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    };\n    eval('ns.data='+response);\n     var out = App3.go.local.Pages.CustomReportTable(ns);\n    $j('#tableView').html(out);\n  });\n\">Update</button>\n<button onclick=\"\n$j.post('pdf/custom/badGateway.php',{\n    action:'update'\n    ,ReportId:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    ,fontSize:document.getElementById('fontSize').value\n    ,fieldName:document.getElementById('fieldName').value\n    ,xStart:document.getElementById('xStart').value\n    ,xEnd:document.getElementById('xEnd').value\n    ,y:document.getElementById('y').value\n    ,align:document.getElementById('align').value\n    ,id:document.getElementById('addFormId').value\n},function(response) {\n    var ns = {\n        Id:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    };\n    eval('ns.data='+response);\n     var out = App3.go.local.Pages.CustomReportTable(ns);\n    $j('#tableView').html(out);\n    document.getElementById('viewer').src='pdf/custom.php?id='+document.getElementById('reportObjectId').value+'&CustomText='+App.CustomText(document.getElementById('CustomText').value)+'&ReportId=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("&v='+Math.random();\n});\n\">Update & View</button>\n\n");
}else{
 out.push("\n<button onclick=\"\n$j.post('pdf/custom/badGateway.php',{\n    action:'add'\n    ,ReportId:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    ,fontSize:document.getElementById('fontSize').value\n    ,fieldName:document.getElementById('fieldName').value\n    ,xStart:document.getElementById('xStart').value\n    ,xEnd:document.getElementById('xEnd').value\n    ,align:document.getElementById('align').value\n    ,y:document.getElementById('y').value\n\n},function(response) {\n    var ns = {\n        Id:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    };\n    eval('ns.data='+response);\n     var out = App3.go.local.Pages.CustomReportTable(ns);\n    $j('#tableView').html(out);\n});\n\">Add</button>\n");
}
 out.push("\n</center></th></tr>\n</table>\n");
}
 out.push("\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
