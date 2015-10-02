function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("");
if (ns.data) {
 out.push("\n<div id=\"MonthlyPayments");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"float:left\"></div>\n<div id=\"MonthlyPaymentsGraph");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"float:left;width:600px;height:200px;\"></div>\n<script>\n    dataViews.Payment_Sums.getList({OnComplete:function(data,Recordset,DataView){\n       App3.Navigate2(\"local/Pages/Payment_Sums\",{navTarget:'MonthlyPayments");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',target:'MonthlyPayments");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,ProjectId:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'});\n       //create a graph...\n       var gdat = [];\n        \n       for(var i=0;i<data.length;i++) {\n            \n            gdat.push([data[i].Date.replace('-','.'),data[i].InKr]);\n        }  \n        var series = {\n            data: gdat\n            ,lines:{show:true,fill:false}\n        }\n        console.info(series);\n        $j.plot($j(\"#MonthlyPaymentsGraph");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"),[series]);\n    }});\n</script>\n<br style=\"clear:both\"/>\n");
}
 out.push("\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
