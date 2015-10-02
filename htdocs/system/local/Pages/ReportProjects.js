function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<table class=\"EditTable\"><tr><th>In och Ut betalningar</th></tr>\n<tr><td><div id=\"MonthlyPaymentsGraph");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"width:600px;height:200px;\"></div></td></tr>\n</table>\n<script>\n    dataViews.Payment_Sums.getList({OnComplete:function(data,Recordset,DataView){\n       //App3.Navigate2(\"local/Pages/Payment_Sums\",{navTarget:'MonthlyPayments");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',target:'MonthlyPayments");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView ,ProjectId:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'});\n       //create a graph...\n       var gdat = [];\n        var gdat2=[];\n       var ticks = {};\n       var ticks2 =[];\n       for(var i=0;i<data.length;i++) {\n            gdat.push([data[i].Date.replace('-','.'),data[i].InKr]);\n            gdat2.push([data[i].Date.replace('-','.'),data[i].OutKr]);\n            if (!ticks[data[i].Date]){ticks[data[i].Date]=true;ticks2.push([data[i].Date.replace('-','.'),data[i].Date])}\n        }  \n\n        $j.plot($j(\"#MonthlyPaymentsGraph");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"),\n        [\n            {label:'inbet',data:gdat}\n            ,{label:'utbet',data:gdat2}\n        ],{\n            series:{lines:{show:true},points:{show:true}}\n            ,xaxis:{ticks:ticks2}\n            ,grid: {backgroundColor: { colors: [\"#fff\", \"#eee\"] }}\n        }\n        );\n    }});\n</script>\n<div id=\"MonthlyPayments");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"float:left\"></div>\n\n<br style=\"clear:both\"/>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
