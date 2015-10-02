function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<div class=\"EditIcons\" style=\"padding-left: 0px; width: 100%;\">\n<center>\n");

if (typeof(dataViews.Payments.curRecordSet.Count) != 'undefined') {
if (typeof(dataViews.Payments.curRecordSet.start) != 'undefined') {
if (typeof(dataViews.Payments.curRecordSet.rPos) != 'undefined') {
if (dataViews.Payments.filterActive) {
    o.push(dataViews.Payments.curRecordSet.start + dataViews.Payments.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Payments.curRecordSet.filteredCount);
} else {
    o.push(dataViews.Payments.curRecordSet.start + dataViews.Payments.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Payments.curRecordSet.Count);
}
}
}
}

 out.push("\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Payments'].firstRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'undefined',target:target});\n        }});\" title=\"F&ouml;rsta\"><span class=\"RecordsetFirstIcon EditIcon\"> </span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Payments'].previousRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Payments',target:target});\n        },NoNewPage:function(){\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"F&ouml;reg&aring;ende\"><span class=\"RecordsetPreviousIcon EditIcon\"> </span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Payments'].nextRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Payments',target:target});\n        },NoNewPage:function() {\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"N&auml;sta\"><span class=\"RecordsetNextIcon EditIcon\"> </span></a>\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Payments'].lastRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Payments',target:target});\n        }});\" title=\"Sista\"><span class=\"RecordsetLastIcon EditIcon\"> </span></a>\n    \n    <span style=\"padding-left: 20px;\" id=\"Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"> </span>\n    <span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"Generic334\"> </span>\n<button onclick=\"\n/*\njQuery('input,textarea', document.getElementById('PaymentTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("')).each(function(index,elm) {\n    var t = jQuery(elm).prop('type');\n    if (t == 'radio') {\n        jQuery(elm).removeAttr('checked');\n    } else {\n        elm.value = '';\n    }\n});\njQuery('#Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeAttr('disabled');\ndocument.getElementById('Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').enabled = true;\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','Search').html('s&ouml;k nu>>');\n*/\ndataViews['Payments'].clearFilter();\nApp3.Navigate2('local/Pages/PaymentSearch',{target:'AppPages'});\n\" title=\"Ny s&ouml;kning\"><img src=\"img/icons/search.png\"/></button>\n\n<button class=\"NewBut\" onclick=\"\ndocument.getElementById('Generic334");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\njQuery('#PaymentTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" input').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#PaymentTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" textarea').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').html('skapa');\n\" title=\"Ny\"><img src=\"img/icons/new.png\"/></button>\n\n<button class=\"CopyBut\" onclick=\"\n    document.getElementById('Generic334");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n    var s = String.fromCharCode(39)+'Payment.Id'+String.fromCharCode(39);\n    jQuery('input[data-fieldname='+s+']').val('');\n    jQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').html('skapa');\n\" title=\"Kopiera\"><img src=\"img/icons/copy.png\"/></button>\n\n<button class=\"ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" id=\"Generic334");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = !el.disabled;\n        break;\n    default:\n        if (el.getAttribute('data-fieldname') == 'Payment.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = !el.disabled;\n            } else {\n                el.readOnly = !el.readOnly;\n            }\n        }\n   }\n});\n\n\" title=\"&Auml;ndra\"><img src=\"img/icons/change.png\"/></button>\n<center>\n</div><span class=\"PaymentsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"PaymentProtoHeader\">Betalning</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/PaymentNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Payments\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n");
if (ns.data) {var r= ns.data;
 out.push("<table class=\"EditTable\" id=\"PaymentTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<thead><tr><th colspan=\"7\">Betalningar</th></tr></thead>\n<tr>\n<td style=\"text-align:right\">Datum:</td><td>");
if(r.Date == '0000-00-00') {r.Date = '';}

 out.push("<input class=\"Editable dateEdit\" id=\"Date337");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  onchange=\"EditInPlace4.quickSave('Payments.Date','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\"  data-fieldName=\"Payment.Date\" value=\"");
try{d=r.Date;}catch(e){d=''}out.push(d);
 out.push("\" size=\"12\"/>\n<script>$j('#Date337");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td>\n<td style=\"text-align:right\">Givare:</td><td><input type=\"text\" id=\"GiverId338");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Payment.GiverId\" value=\"");
try{d=r['GiverId']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n<td style=\"text-align:right\">#</td><td><input type=\"text\" id=\"Id336");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Payment.Id\" value=\"");
try{d=r['Id']||'';}catch(e){d=''}out.push(d);
 out.push("\"  disabled='true'  /></td>\n</tr>\n\n<tr>\n<td style=\"text-align:right\">InKrTot:</td><td><input type=\"text\" id=\"InKrTotal911");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Payment.InKrTotal\" value=\"");
try{d=r['InKrTotal']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n<td style=\"text-align:right\">OutKr:</td><td><input type=\"text\" id=\"OutKr342");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Payment.OutKr\" value=\"");
try{d=r['OutKr']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n<td style=\"text-align:right\">src</td><td><input type=\"text\" id=\"PaymentSource345");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Payment.PaymentSource\" value=\"");
try{d=r['PaymentSource']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n</tr>\n\n<tr>\n<td style=\"text-align:right\">AdminKr:</td><td><input type=\"text\" id=\"AdminCharge347");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Payment.AdminCharge\" value=\"");
try{d=r['AdminCharge']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n<td style=\"text-align:right\">Projekt/Barn</td><td><input type=\"text\" id=\"PaymentType343");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Payment.PaymentType\" value=\"");
try{d=r['PaymentType']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n<td style=\"text-align:right\">SrcId:</td><td><input type=\"text\" id=\"PaymentSourceId346");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Payment.PaymentSourceId\" value=\"");
try{d=r['PaymentSourceId']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Admin%:</td><td><input type=\"text\" id=\"AdminPercent348");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Payment.AdminPercent\" value=\"");
try{d=r['AdminPercent']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n<td style=\"text-align:right\">Projekt/Barn #</td><td><input type=\"text\" id=\"ProjectId339");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Payment.ProjectId\" value=\"");
try{d=r['ProjectId']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n<td style=\"text-align:right\">Anv&auml;ndare#:</td><td><input type=\"text\" id=\"AddedByUserId344");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Payment.AddedByUserId\" value=\"");
try{d=r['AddedByUserId']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n</tr>\n\n<tr>\n<td style=\"text-align:right\">InKr:</td><td><input type=\"text\" id=\"InKr341");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Payment.InKr\" value=\"");
try{d=r['InKr']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n<td style=\"text-align:right\"></td><td></td>\n<td style=\"text-align:right\">Anv&auml;ndareNamn:</td><td><input type=\"text\" id=\"AddedBy340");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Payment.AddedBy\" value=\"");
try{d=r['AddedBy']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n</tr>\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<script>\ndataViews.Payments.getRecord({\n    Id:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    ,PK:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("'\n    ,OnComplete:function(Record){\n        App3.Navigate2('");
try{d=ns._fullurl;}catch(e){d=''}out.push(d);
 out.push("?Id=");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',\n            {target:'");
try{d=ns.target;}catch(e){d=''}out.push(d);
 out.push("',data:Record }\n        );\n    }\n});\n</script><img src=\"img/ajaxLoading.gif\"/>ladda...\n\n\n");
}
 out.push("\n\n<script>\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = true;\n        break;\n    default:\n        if (el.getAttribute('data-fieldname') == 'Payment.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = true;\n            } else {\n                el.readOnly = true;\n            }\n        }\n   }\n});\n</script><center>\n\n<button class=\"Ta bort\" onclick=\"\nif (confirm('Vill du verkligen ta bort objektet?')) {\n    dataViews.Payments.deleteRecord({Id:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',PK:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',OnComplete:function(){App3.Navigate2('http://local/Pages/Payments',{target:'AppPages' });}});        \n}\n\">Ta bort</button>\n<button class=\"CancelBut\" onclick=\"\nvar id = document.getElementById('Id336");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value;\nApp3.Navigate2('local/Pages/Payment/'+id,{target:'AppPages'}); \n\">Avbryta</button>\n\n<button class=\"SaveBut\" id=\"Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\nvar fName;\nvar area = document.getElementById('PaymentTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\nswitch(jQuery(this).data('actionName')) {\n    case 'Search':\n        dataViews['Payments'].clearFilter();\n        jQuery('input,textarea', area).each(function(index,elm) {\n            var v = jQuery(elm).val();\n            var t = jQuery(elm).attr('type');\n            fName = jQuery(elm).attr('data-fieldName');\n            if (t == 'radio') {\n                 if (jQuery(elm).attr('checked')) {\n                    dataViews['Payments'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                }\n            } else {\n                if (v != '') {\n                    if (fName) {\n                        dataViews['Payments'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                    }  \n                }\n            }\n        });\n\n        dataViews['Payments'].firstRow({OnComplete:function() {\n        if (dataViews['Payments'].curRecordSet.Count > 0) {\n            var id = dataViews['Payments'].curRecordSet.Rows[0].Id;\n            App3.Navigate2('local/Pages/Payments/'+id,{target:'AppPages'}); \n        } else {\n            alert('Ingen tr&auml;ff');\n        }\n        console.dir(dataViews['Payments'].curRecordSet);\n    },NoNewPage:function() {\n        alert('Ingen tr&auml;ff');\n     }\n    });\n    break;\n    case 'New':\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n            if (elm.value) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'Payment') {\n                        if (fName) {\n                            rec[fName[1]] = jQuery(elm).val();\n                        }\n                    }\n                }  \n            }\n        });\n        dataViews['Payments'].newRecord({\n            NewRecord:rec\n            ,OnComplete:function(response){\n                var r;\n                eval('r='+response);\n                dataViews['Payments'].dataChanged();\n                if (r.Status != 'Created') {\n                    alert('Save Failed');\n                } else {\n                    //App3.Navigate2('local/Pages/Payments/' + r.NewId,{target:'AppPages',forceRead:true });\n                    jQuery('.ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n                    jQuery('input[data-fieldname=Payment.Id]').val(r['NewId']);\n                    jQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','save').html('Spara');\n                    \n                }\n            }\n        });\n    break;\n    case 'Save':\n    case undefined:\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'Payment') {\n                        rec[fName[1]] = jQuery(elm).val();\n                    } \n            }\n        });\n    dataViews['Payments'].updateFields(rec,rec['Id'],function(response) {\n        jQuery('.ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n        console.info(response);\n    });\n    break; \n}\n\">Spara</button>\n<span component=\"Generic350\" task=\"Project4.Task\" class=\"TaskEdit4\"> </span>\n</center>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
