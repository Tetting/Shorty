function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<div id=\"confirmClickAway\"><div style=\"position:absolute;\"><div id=\"confirm\" style=\"\nz-index:99;position:absolute;background-color:grey;\nwidth:400px;height:260px;\nbackground: rgb(99, 99, 99);\nbackground: rgba(99, 99, 99, 0.9);\ndisplay:none;\n\"></div></div>\n<div style=\"float:left\"><span class=\"PaymentOutsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"PaymentOutNew_ProtoHeader\">Utbetalning</span> \n\n<span class=\"EditIcons\"></span><script>\n    document.title = $('<div/>').html(\"Utbetalning\").text();\n</script><br/>\n\n\n<table class=\"EditTable\" id='PaymentTable'>\n<thead>\n    <tr><th colspan='2'><center><span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"PaymentOutNew_fields\">Uppgifter</span></center></th></tr>\n</thead>\n<tbody>\n\n<tr><td><label>Datum</label>:</td><td><input id=\"PaymentOut_Date_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" pattern='[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])' value=\"\"/></td></tr>\n\n<tr><td><label>Projekt#</label>:</td><td><input id=\"PaymentOut_ProjectId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Ut summa</label>:</td><td><input id=\"PaymentOut_OutKr_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Anv&auml;ndare</label>:</td><td><input type=\"hidden\" id=\"PaymentOut_AddedBy_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"");
try{d=App3.LoggedInUser;}catch(e){d=''}out.push(d);
 out.push("\"/>");
try{d=App3.LoggedInUser;}catch(e){d=''}out.push(d);
 out.push("\n\n</td></tr>\n\n</tbody>\n\n\n<script>\ntry {\ndocument.getElementById('PaymentOut_Date_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\n} catch(e) {\n//no problem.\n}\n</script>\n<tfoot><tr><td colspan=\"2\"><center>\n<input type=\"button\" class=\"autoClick\" value=\"Preview\" onclick=\"\nvar dat= {};\n$j('#PaymentTable input').each(function(){\n    if (this.id) {\n        var p = this.id.split('_');\n        dat[p[0]+'_'+p[1]] = $j(this).val();\n    }\n});\n$j('#PaymentTable select').each(function(){\n    dat['Payment_Source'] = $j(this).val();\n});\n$j.post('do/paymentOutPreview.php',dat,function(response) {\n    $j('#confirm').html(response).show();\n\n});\n\"/></center></td></tr></tfoot></table>\n<br/></div><script>\n$j('#confirmClickAway').click(function(e){\n    if ($j(this).closest('#confirm').size() == 0) {\n        $j('#confirm').hide();\n    }\n});\nif (localStorage) {\n    $j('#PaymentOut_ProjectId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(localStorage.getItem('NewPayment_Project'));\n    $j('#PaymentOut_Date_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('isDate').val(localStorage.getItem('NewPayment_Date'));\n}\n$j('#PaymentTable input,select').keydown( function(e) {\n        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;\n        if(key == 13) {\n            var inputs = $j(this).closest('table').find(':input:visible');\n            var next = inputs.eq( inputs.index(this)+ 1 )\n            e.preventDefault();\n            if (next.length>0) {\n                if(next.is('button')) {\n                    var next = inputs.eq( inputs.index(this)+ 2 )\n                }\n                if (next.hasClass('isDate')) {\n                    next.select();\n                } else {\n                    next.focus().select();\n                }\n                if (next.hasClass('autoClick')) {\n                    next.click();\n                }    \n            } else {\n                $j(this).click();\n            }\n        }\n    });\n$j('#PaymentOut_ProjectId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus().select();\n</script></div>\n<div style=\"float:left;padding-left:20px;\" id=\"PaymentList\">\n</div>\n<input type=\"hidden\" id=\"mainPaymentViewId\" value=\"");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"/>\n<script>\nwindow.newPaymentDate=function() {\ndataViews.PaymentOuts.clearFilter();\ndataViews.PaymentOuts.setFilter('Date','=',document.getElementById('PaymentOut_Date_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value);\ndataViews.PaymentOuts.addFilter('PaymentSource','=','utbet');\ndataViews.PaymentOuts.getList({\n    OnComplete:function(data,Recordset,DataView){\n        App3.Navigate2(\"local/Pages/PaymentOuts\",{navTarget:'PaymentList',target:'PaymentList',data:data,Recordset:Recordset,DataView:DataView,PaymentViewId:'");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'});\n}});\n}\nwindow.newPaymentDate();\n</script>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
