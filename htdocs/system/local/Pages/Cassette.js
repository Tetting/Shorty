function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<div class=\"EditIcons\" style=\"padding-left: 0px; width: 100%;\">\n<center>\n");

if (typeof(dataViews.Cassettes.curRecordSet.Count) != 'undefined') {
if (typeof(dataViews.Cassettes.curRecordSet.start) != 'undefined') {
if (typeof(dataViews.Cassettes.curRecordSet.rPos) != 'undefined') {
if (dataViews.Cassettes.filterActive) {
    o.push(dataViews.Cassettes.curRecordSet.start + dataViews.Cassettes.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Cassettes.curRecordSet.filteredCount);
} else {
    o.push(dataViews.Cassettes.curRecordSet.start + dataViews.Cassettes.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Cassettes.curRecordSet.Count);
}
}
}
}

 out.push("\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Cassettes'].firstRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).attr('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'undefined',target:target});\n        }});\" title=\"F&ouml;rsta\"><span class=\"RecordsetFirstIcon EditIcon\"> </span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Cassettes'].previousRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).attr('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Cassettes',target:target});\n        },NoNewPage:function(){\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"F&ouml;reg&aring;ende\"><span class=\"RecordsetPreviousIcon EditIcon\"> </span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Cassettes'].nextRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).attr('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Cassettes',target:target});\n        },NoNewPage:function() {\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"N&auml;sta\"><span class=\"RecordsetNextIcon EditIcon\"> </span></a>\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Cassettes'].lastRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).attr('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Cassettes',target:target});\n        }});\" title=\"Sista\"><span class=\"RecordsetLastIcon EditIcon\"> </span></a>\n    \n    <span style=\"padding-left: 20px;\" id=\"Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"> </span>\n    <span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"Generic304\"> </span>\n<button onclick=\"\n/*\njQuery('input,textarea', document.getElementById('CassetteTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("')).each(function(index,elm) {\n    var t = jQuery(elm).attr('type');\n    if (t == 'radio') {\n        jQuery(elm).removeAttr('checked');\n    } else {\n        elm.value = '';\n    }\n});\njQuery('#Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeAttr('disabled');\ndocument.getElementById('Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').enabled = true;\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','Search').html('s&ouml;k nu>>');\n*/\ndataViews['Cassettes'].clearFilter();\nApp3.Navigate2('local/Pages/CassetteSearch',{target:'AppPages'});\n\">Ny s&ouml;kning</button>\n<button class=\"NewBut\" onclick=\"\ndocument.getElementById('Generic304");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\njQuery('#CassetteTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" input').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#CassetteTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" textarea').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').html('skapa');\n\">Ny</button>\n<button class=\"CopyBut\" onclick=\"\n    document.getElementById('Generic304");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n    var s = String.fromCharCode(39)+'Cassette.Id'+String.fromCharCode(39);\n    jQuery('input[data-fieldname='+s+']').val('');\n    jQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').html('skapa');\n\">Duplicate</button>\n<button class=\"ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" id=\"Generic304");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = !el.disabled;\n        break;\n    default:\n        if (el.getAttribute('data-fieldname') == 'Cassette.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = !el.disabled;\n            } else {\n                el.readOnly = !el.readOnly;\n            }\n        }\n   }\n});\n\n\">&Auml;ndra</button>\n<center>\n</div><span class=\"CassettesBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"CassetteProtoHeader\">Media</span> \n\n<span class=\"EditIcons\"><span class=\"NewIcon EditIcon\">\n        <a href=\"Pages/CassetteNew\" class=\"ajaxLink\">Ny</a>\n    </span>\n    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Cassettes\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n");
if (ns.data) {var r= ns.data;
 out.push("<table class=\"EditTable\" id=\"ContactTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<thead><tr><th colspan=\"7\">Uppgifter</th></tr></thead>\n<tr>\n<td style=\"text-align:right\">ID:</td><td><input type=\"text\" id=\"Nr298");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Cassette.Nr\" value=\"");
try{d=r['Nr']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n<td style=\"text-align:right\">Nr:</td><td><input type=\"text\" id=\"Id297");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Cassette.Id\" value=\"");
try{d=r['Id']||'';}catch(e){d=''}out.push(d);
 out.push("\" readOnly=true /></td>\n<td rowspan=\"6\"></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Namn:</td><td><input type=\"text\" id=\"Speaker299");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Cassette.Speaker\" value=\"");
try{d=r['Speaker']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n<td style=\"text-align:right\">&Auml;mne:</td><td><input type=\"text\" id=\"Subject300");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Cassette.Subject\" value=\"");
try{d=r['Subject']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Datum:</td><td>");
if(r.Date == '0000-00-00') {r.Date = '';}

 out.push("<input class=\"Editable dateEdit\" id=\"Date303");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  onchange=\"EditInPlace4.quickSave('Cassettes.Date','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\"  data-fieldName=\"Cassette.Date\" value=\"");
try{d=r.Date;}catch(e){d=''}out.push(d);
 out.push("\" size=\"12\"/>\n<script>$j('#Date303");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td>\n<td style=\"text-align:right\">Status:</td><td><input type=\"text\" id=\"Status302");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Cassette.Status\" value=\"");
try{d=r['Status']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Extra:</td><td><input type=\"text\" id=\"Extra301");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Cassette.Extra\" value=\"");
try{d=r['Extra']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n<td style=\"text-align:right\"></td><td></td>\n</tr>\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<script>\ndataViews.Cassettes.getRecord({\n    Id:'");
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
 out.push("\n\n<script>\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = true;\n        break;\n    default:\n        if (el.getAttribute('data-fieldname') == 'undefined.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = true;\n            } else {\n                el.readOnly = true;\n            }\n        }\n   }\n});\n</script><center>\n<button class=\"CancelBut\" onclick=\"\nvar id = document.getElementById('Id297");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value;\nApp3.Navigate2('local/Pages/Cassette/'+id,{target:'AppPages'}); \n\">Avbruta</button>\n\n<button class=\"SaveBut\" id=\"Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\nvar fName;\nvar area = document.getElementById('CassetteTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\nswitch(jQuery(this).data('actionName')) {\n    case 'Search':\n        dataViews['Cassettes'].clearFilter();\n        jQuery('input,textarea', area).each(function(index,elm) {\n            var v = jQuery(elm).val();\n            var t = jQuery(elm).attr('type');\n            fName = jQuery(elm).attr('data-fieldName');\n            if (t == 'radio') {\n                 if (jQuery(elm).attr('checked')) {\n                    dataViews['Cassettes'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                }\n            } else {\n                if (v != '') {\n                    if (fName) {\n                        dataViews['Cassettes'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                    }  \n                }\n            }\n        });\n\n        dataViews['Cassettes'].firstRow({OnComplete:function() {\n        if (dataViews['Cassettes'].curRecordSet.Count > 0) {\n            var id = dataViews['Cassettes'].curRecordSet.Rows[0].Id;\n            App3.Navigate2('local/Pages/Cassettes/'+id,{target:'AppPages'}); \n        } else {\n            alert('Ingen tr&auml;ff');\n        }\n        console.dir(dataViews['Cassettes'].curRecordSet);\n    },NoNewPage:function() {\n        alert('Ingen tr&auml;ff');\n     }\n    });\n    break;\n    case 'New':\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n            if (elm.value) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'Cassette') {\n                        if (fName) {\n                            rec[fName[1]] = jQuery(elm).val();\n                        }\n                    }\n                }  \n            }\n        });\n        dataViews['Cassettes'].newRecord({\n            NewRecord:rec\n            ,OnComplete:function(response){\n                var r;\n                eval('r='+response);\n                dataViews['Cassettes'].dataChanged();\n                if (r.Status != 'Created') {\n                    alert('Save Failed');\n                } else {\n                    App3.Navigate2('local/Pages/Cassette/' + r.NewId,{target:'AppPages',forceRead:true });\n                    //jQuery('.ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n                    //jQuery('input[data-fieldname=Cassette.Id]').val(r['NewId']);\n                    //jQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','save').html('Spara');\n                    \n                }\n            }\n        });\n    break;\n    case 'Save':\n    case undefined:\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'Cassette') {\n                        rec[fName[1]] = jQuery(elm).val();\n                    } \n            }\n        });\n    dataViews['Cassettes'].updateFields(rec,rec['Id'],function(response) {\n        console.info(response);\n    });\n    break; \n}\n\">Spara</button>\n<span component=\"Generic306\" task=\"Project4.Task\" class=\"TaskEdit4\"> </span>\n</center>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
