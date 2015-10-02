function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<div class=\"EditIcons\" style=\"padding-left: 0px; width: 100%;\">\n<center>\n");

if (typeof(dataViews.Companys.curRecordSet.Count) != 'undefined') {
if (typeof(dataViews.Companys.curRecordSet.start) != 'undefined') {
if (typeof(dataViews.Companys.curRecordSet.rPos) != 'undefined') {
if (dataViews.Companys.filterActive) {
    o.push(dataViews.Companys.curRecordSet.start + dataViews.Companys.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Companys.curRecordSet.filteredCount);
} else {
    o.push(dataViews.Companys.curRecordSet.start + dataViews.Companys.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Companys.curRecordSet.Count);
}
}
}
}

 out.push("\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Companys'].firstRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).attr('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'undefined',target:target});\n        }});\" title=\"F&ouml;rsta\"><span class=\"RecordsetFirstIcon EditIcon\">&nbsp;</span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Companys'].previousRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).attr('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Companys',target:target});\n        },NoNewPage:function(){\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"F&ouml;reg&aring;ende\"><span class=\"RecordsetPreviousIcon EditIcon\">&nbsp;</span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Companys'].nextRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).attr('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Companys',target:target});\n        },NoNewPage:function() {\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"N&auml;sta\"><span class=\"RecordsetNextIcon EditIcon\">&nbsp;</span></a>\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Companys'].lastRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).attr('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Companys',target:target});\n        }});\" title=\"Sista\"><span class=\"RecordsetLastIcon EditIcon\">&nbsp;</span></a>\n    \n    <span style=\"padding-left: 20px;\" id=\"Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">&nbsp;</span>\n    <span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"Generic583\">&nbsp;</span>\n<button onclick=\"\n/*\njQuery('input,textarea', document.getElementById('CompanyTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("')).each(function(index,elm) {\n    var t = jQuery(elm).attr('type');\n    if (t == 'radio') {\n        jQuery(elm).removeAttr('checked');\n    } else {\n        elm.value = '';\n    }\n});\njQuery('#Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeAttr('disabled');\ndocument.getElementById('Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').enabled = true;\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','Search').html('s&ouml;k nu>>');\n*/\nApp3.Navigate2('local/Pages/CompanySearch',{target:'AppPages'});\n\" class=\"SearchBut\">Ny s&ouml;kning</button>\n<button onclick=\"\ndocument.getElementById('Generic583");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\njQuery('#CompanyTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" input').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#CompanyTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" textarea').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#GiverId88");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('-333333');\njQuery('#RegDate364");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(App.Today());\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').html('skapa');\n\">Ny</button>\n<button onclick=\"\n    document.getElementById('Generic583");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n    jQuery('input[data-fieldname=Company.Id]').val('');\n    jQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').html('skapa');\n\">Kopiera</button>\n<button class=\"ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" EditBut\" id=\"Generic583");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = !el.disabled;\n        break;\n    default:\n        if (el.getAttribute('data-fieldname') == 'Company.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = !el.disabled;\n            } else {\n                el.readOnly = !el.readOnly;\n            }\n        }\n   }\n});\n\n\" tabindex=1>&Auml;ndra</button>\n<center>\n</div><span class=\"CompanysBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"CompanyProtoHeader\">F&ouml;retag</span> \n\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Companys\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = \"\"+jQuery('<div/>').html(\"");
try{d=ns.data['CompanyName'];}catch(e){d=''}out.push(d);
 out.push("\").text()+\" \";\n</script><br/>\n");
if (ns.data) {var r= ns.data;
 out.push("<table class=\"EditTable\" id=\"CompanyTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<thead><tr><th colspan=\"7\">Givare</th></tr></thead>\n<tr>\n<td style=\"text-align:right\">Namn:</td><td><input type=\"text\" id=\"CompanyName132");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Company.CompanyName\" value=\"");
try{d=r['CompanyName']||'';}catch(e){d=''}out.push(d);
 out.push("\" /></td>\n<td style=\"text-align:right\">Nr:</td><td><input type=\"text\" id=\"Id131");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Company.Id\" value=\"");
try{d=r['Id']||'';}catch(e){d=''}out.push(d);
 out.push("\" /></td>\n<td rowspan=\"6\"><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap='on'  class=\"Editable\"  cols=\"60\" rows=\"8\" id=\"Notes140");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onchange=\"EditInPlace4.quickSave('Companys.Notes','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\" data-fieldName=\"Company.Notes\">");
try{d=r.Notes;}catch(e){d=''}out.push(d);
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Adress:</td><td><input type=\"text\" id=\"Address133");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Company.Address\" value=\"");
try{d=r['Address']||'';}catch(e){d=''}out.push(d);
 out.push("\" /></td>\n<td style=\"text-align:right\">Telefon:</td><td><input type=\"text\" id=\"Tel136");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Company.Tel\" value=\"");
try{d=r['Tel']||'';}catch(e){d=''}out.push(d);
 out.push("\" /></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">PostNr:</td><td><input type=\"text\" id=\"Zip134");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Company.Zip\" value=\"");
try{d=r['Zip']||'';}catch(e){d=''}out.push(d);
 out.push("\" /></td>\n<td style=\"text-align:right\">BankGiro:</td><td><input type=\"text\" id=\"BankGiro137");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Company.BankGiro\" value=\"");
try{d=r['BankGiro']||'';}catch(e){d=''}out.push(d);
 out.push("\" /></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">PostOrt:</td><td><input type=\"text\" id=\"ZipTown135");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Company.ZipTown\" value=\"");
try{d=r['ZipTown']||'';}catch(e){d=''}out.push(d);
 out.push("\" /></td>\n<td style=\"text-align:right\">PosttGiro:</td><td><input type=\"text\" id=\"PostGiro138");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Company.PostGiro\" value=\"");
try{d=r['PostGiro']||'';}catch(e){d=''}out.push(d);
 out.push("\" /></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Epost:</td><td>??</td>\n<td style=\"text-align:right\">kod:</td><td><input type=\"text\" id=\"Code139");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Company.Code\" value=\"");
try{d=r['Code']||'';}catch(e){d=''}out.push(d);
 out.push("\" /></td>\n</tr>\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<script>\ndataViews.Companys.getRecord({\n    Id:'");
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
 out.push("\n\n<script>\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = true;\n        break;\n    default:\n        if (el['data-fieldname'] == 'Company.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = true;\n            } else {\n                el.readOnly = true;\n            }\n        }\n   }\n});\n</script><center><button tabindex=20 id=\"Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\nvar fName;\nvar area = document.getElementById('undefinedTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\nswitch(jQuery(this).data('actionName')) {\n    case 'Search':\n        dataViews['undefineds'].clearFilter();\n        jQuery('input,textarea', area).each(function(index,elm) {\n            var v = jQuery(elm).val();\n            var t = jQuery(elm).attr('type');\n            fName = jQuery(elm).attr('data-fieldName');\n            if (t == 'radio') {\n                 if (jQuery(elm).attr('checked')) {\n                    dataViews['undefineds'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                }\n            } else {\n                if (v != '') {\n                    if (fName) {\n                        if (jQuery(elm).hasClass('exactSearch')) {\n                            dataViews['undefineds'].addFilter(fName.split('.').join('|'),'+',jQuery(elm).val());\n                        } else {\n                            dataViews['undefineds'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                        }\n                    }  \n                }\n            }\n        });\n\n        dataViews['undefineds'].firstRow({OnComplete:function() {\n        if (dataViews['undefineds'].curRecordSet.Count > 0) {\n            var id = dataViews['undefineds'].curRecordSet.Rows[0].Id;\n            App3.Navigate2('local/Pages/undefineds/'+id,{target:'AppPages'}); \n        } else {\n            alert('Ingen tr&auml;ff');\n        }\n        console.dir(dataViews['undefineds'].curRecordSet);\n    },NoNewPage:function() {\n        alert('Ingen tr&auml;ff');\n     }\n    });\n    break;\n    case 'New':\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n            if (elm.value) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'undefined') {\n                        if (fName) {\n                            rec[fName[1]] = jQuery(elm).val();\n                        }\n                    }\n                }  \n            }\n        });\n        dataViews['undefineds'].newRecord({\n            NewRecord:rec\n            ,OnComplete:function(response){\n                var r;\n                eval('r='+response);\n                dataViews['undefineds'].dataChanged();\n                if (r.Status != 'Created') {\n                    alert('Save Failed');\n                } else {\n                    //App3.Navigate2('local/Pages/undefineds/' + r.NewId,{target:'AppPages',forceRead:true });\n                    jQuery('.ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n                    jQuery('input[data-fieldname=undefined.Id]').val(r['NewId']);\n                    jQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','save').html('Spara');\n                    \n                }\n            }\n        });\n    break;\n    case 'Save':\n    case undefined:\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'undefined') {\n                        rec[fName[1]] = jQuery(elm).val();\n                    } \n            }\n        });\n    dataViews['undefineds'].updateFields(rec,rec['Id'],function(response) {\n        jQuery('.ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n        console.info(response);\n    });\n    break; \n}\n\">Spara</button>\n<span component=\"Generic598\" task=\"Project4.Task\" class=\"TaskEdit4\"> </span>\n</center>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
