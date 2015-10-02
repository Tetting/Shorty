function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<div id=\"confirmClickAway\"><div style=\"position:absolute;\"><div id=\"confirm\" style=\"\nz-index:99;position:absolute;background-color:grey;\nwidth:400px;height:260px;\nbackground: rgb(99, 99, 99);\nbackground: rgba(99, 99, 99, 0.9);\ndisplay:none;\n\"></div></div>\n<div style=\"float:left\"><input type=\"hidden\" value=\"Transfer\" id=\"PaymentSource653");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"/>\n<table id=\"TransferTable\" class=\"EditTable\">\n<tbody>\n<tr><th colspan=2>Överföring</th></tr>\n<tr><td><label>Datum:</label></td><td><input id=\"Payment_Date_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" pattern='[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])' onchange=\"window.newPaymentDate();\"/></td></tr>\n<tr><th colspan=2>Från</th></tr>\n<tr><td><label>Givare:</label></td><td style=\"border-bottom: 1px solid #D9D9D9;\"><input id=\"transfer_GiverFrom_new\" type=\"text\"/></td></tr>\n<tr><td><label>Projekt:</label></td><td style=\"border: 1px solid #D9D9D9;\"><input id=\"transfer_ProjectFrom_new\" type=\"text\"/></td></tr>\n<tr><th colspan=2>Till</th></tr>\n<tr><td><label>Givare:</label></td><td><input id=\"transfer_GiverTo\" type=\"text\"/></td></tr>\n<tr><td><label>Projekt:</label></td><td><input id=\"transfer_ProjectTo\" type=\"text\"/></td></tr>\n<tr><th colspan=2>Summa</th></tr>\n<tr><td><label>Summa:</label></td><td><input id=\"transfer_sum\" type=\"text\"/></td></tr>\n<tr><td colspan=2><center><input type=\"button\" onclick=\"\nvar dat= {};\nconsole.info($j('#TransferTable input'));\n$j('#TransferTable input').each(function(){\n    console.info(this);\n    if (this.id) {\n        var p = this.id.split('_');\n        dat[p[0]+'_'+p[1]] = $j(this).val();\n    }\n});\n$j.post('do/transferPreview.php',dat,function(response) {\n    $j('#confirm').html(response).show();\n\n});\n\n\" value=\"Preview\" class=\"autoClick\"></center></td></tr>\n</table>\n</div>\n<div style=\"float:left;padding-left:20px;\" id=\"PaymentList\">\n</div> \n<input type=\"hidden\" id=\"mainPaymentViewId\" value=\"");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"/> \n<script> \nwindow.newPaymentDate=function() { \ndataViews.PaymentInLists.clearFilter(); \ndataViews.PaymentInLists.setFilter('Date','=',document.getElementById('Payment_Date_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value); \ndataViews.PaymentInLists.addFilter('PaymentSource','=','Transfer');\ndataViews.PaymentInLists.getList({ \n   OnComplete:function(data,Recordset,DataView){ \n    App3.Navigate2(\"local/Pages/PaymentInLists\",{\n        navTarget:'PaymentList'\n        ,target:'PaymentList'\n        ,data:data,Recordset:Recordset\n        ,DataView:DataView\n        ,PaymentViewId:'");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'\n        ,Date:document.getElementById('Payment_Date_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n        ,PaymentSource:'Transfer'\n    }); \n  }\n});\n}; \nwindow.newPaymentDate();\n\n$j('#TransferTable input,select').keydown( function(e) {\nvar key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;\nif(key == 13) {\nvar inputs = $j(this).closest('table').find(':input:visible');\nvar next = inputs.eq( inputs.index(this)+ 1 )\ne.preventDefault();\nif (next.length>0) {\nif(next.is('button')) {\nvar next = inputs.eq( inputs.index(this)+ 2 )\n}\nif (next.hasClass('isDate')) {\nnext.select();\n} else {\nnext.focus().select();\n}\nif (next.hasClass('autoClick')) {\nnext.click();\n}\n} else {\n$j(this).click();\n}\n}\n});\n$j('#transfer_GiverFrom_new').focus().select(); \n</script> \n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
