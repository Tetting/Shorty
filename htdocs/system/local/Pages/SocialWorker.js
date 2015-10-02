function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<div class=\"EditIcons\" style=\"padding-left: 0px; width: 100%;\">\n<center>\n");

if (typeof(dataViews.SocialWorkers.curRecordSet.Count) != 'undefined') {
if (typeof(dataViews.SocialWorkers.curRecordSet.start) != 'undefined') {
if (typeof(dataViews.SocialWorkers.curRecordSet.rPos) != 'undefined') {
if (dataViews.SocialWorkers.filterActive) {
    o.push(dataViews.SocialWorkers.curRecordSet.start + dataViews.SocialWorkers.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.SocialWorkers.curRecordSet.filteredCount);
} else {
    o.push(dataViews.SocialWorkers.curRecordSet.start + dataViews.SocialWorkers.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.SocialWorkers.curRecordSet.Count);
}
}
}
}

 out.push("\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['SocialWorkers'].firstRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'undefined',target:target});\n        }});\" title=\"F&ouml;rsta\"><span class=\"RecordsetFirstIcon EditIcon\">&nbsp;</span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['SocialWorkers'].previousRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'SocialWorkers',target:target});\n        },NoNewPage:function(){\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"F&ouml;reg&aring;ende\"><span class=\"RecordsetPreviousIcon EditIcon\">&nbsp;</span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['SocialWorkers'].nextRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'SocialWorkers',target:target});\n        },NoNewPage:function() {\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"N&auml;sta\"><span class=\"RecordsetNextIcon EditIcon\">&nbsp;</span></a>\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['SocialWorkers'].lastRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'SocialWorkers',target:target});\n        }});\" title=\"Sista\"><span class=\"RecordsetLastIcon EditIcon\">&nbsp;</span></a>\n    \n    <span style=\"padding-left: 20px;\" id=\"Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">&nbsp;</span>\n    <span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"Generic464\"> </span>\n<button onclick=\"\n/*\njQuery('input,textarea', document.getElementById('SocialWorkerTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("')).each(function(index,elm) {\n    var t = jQuery(elm).prop('type');\n    if (t == 'radio') {\n        jQuery(elm).removeAttr('checked');\n    } else {\n        elm.value = '';\n    }\n});\njQuery('#Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeAttr('disabled');\ndocument.getElementById('Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').enabled = true;\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','Search').html('s&ouml;k nu>>');\n*/\ndataViews['SocialWorkers'].clearFilter();\nApp3.Navigate2('local/Pages/SocialWorkerSearch',{target:'AppPages'});\n\" class=\"SearchBut\" title=\"Ny s&ouml;kning\"><img src=\"img/icons/search.png\"/></button>\n\n<button class=\"NewBut\" onclick=\"\ndocument.getElementById('Generic464");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\njQuery('#SocialWorkerTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" input').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#SocialWorkerTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" textarea').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#StartD77");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(App.Today());\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').html('skapa');\n\" title=\"Ny\"><img src=\"img/icons/new.png\"/></button>\n\n<button class=\"CopyBut\" onclick=\"\n    document.getElementById('Generic464");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n    var s = String.fromCharCode(39)+'SocialWorker.Id'+String.fromCharCode(39);\n    jQuery('input[data-fieldname='+s+']').val('');\n    jQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').html('skapa');\n\" title=\"kopiera\"><img src=\"img/icons/copy.png\"/></button>\n\n<button class=\"ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" EditBut\" id=\"Generic464");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = !el.disabled;\n        break;\n    default:\n        if (el.getAttribute('data-fieldname') == 'SocialWorker.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = !el.disabled;\n            } else {\n                el.readOnly = !el.readOnly;\n            }\n        }\n   }\n});\n$('.tagsinput').each(function(){\n    var id = $(this).attr('id');\n    id = id.substr(0,id.length-10);\n    $j('#'+id).interactiveTags();\n});\n\" tabindex=2 title=\"&Auml;ndra\"><img src=\"img/icons/change.png\"/></button>\n\n</center>\n</div><span class=\"SocialWorkersBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"SocialWorkerProtoHeader\">Socialarbetare</span> \n\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/SocialWorkers\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = $('<div/>').html(\"Socialarbetare ");
try{d=ns.data['Name'];}catch(e){d=''}out.push(d);
 out.push("\").text();\n</script><br/>\n");
if (ns.data) {var r= ns.data;
 out.push("<table class=\"EditTable\" id=\"SocialWorkerTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<tr><th colspan=\"5\">Uppgifter</th></tr>\n<tr><td>Nummer</td><td><input type=\"text\" id=\"Id466");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"SocialWorker.Id\" value=\"");
try{d=r['Id']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=3 /></td><td></td><td></td><td rowspan=\"7\" valign=\"top\">Noteringar:<br/><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap='off'  class=\"Editable\" tabindex=12 cols=\"56\" rows=\"9\" id=\"Notes478");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"  data-fieldName=\"SocialWorker.Notes\">");
try{d=r.Notes;}catch(e){d=''}out.push(d);
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td></tr>\n<tr><td>Namn</td><td colspan=\"3\"><input type=\"text\" id=\"Name467");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"SocialWorker.Name\" value=\"");
try{d=r['Name']||'';}catch(e){d=''}out.push(d);
 out.push("\" size=60 tabindex=4 /></td></tr>\n<tr><td>Adress:</td><td><input type=\"text\" id=\"Address469");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"SocialWorker.Address\" value=\"");
try{d=r['Address']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=5 /></td><td>Landskod:</td><td><input type=\"text\" id=\"Land472");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"SocialWorker.Land\" value=\"");
try{d=r['Land']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=9 /></td></tr>\n<tr><td>ZipCode:</td><td><input type=\"text\" id=\"ZipCode470");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"SocialWorker.ZipCode\" value=\"");
try{d=r['ZipCode']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=6 /></td><td>ZipTown:</td><td><input type=\"text\" id=\"ZipTown471");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"SocialWorker.ZipTown\" value=\"");
try{d=r['ZipTown']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=10 /></td></tr>\n<tr><td>Tel:</td><td><input type=\"text\" id=\"Tel473");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"SocialWorker.Tel\" value=\"");
try{d=r['Tel']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=7 /></td><td>Mob:</td><td><input type=\"text\" id=\"Mob474");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"SocialWorker.Mob\" value=\"");
try{d=r['Mob']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=11 /></td></tr>\n<tr><td><a href=\"mailto:");
try{d=r.Email;}catch(e){d=''}out.push(d);
 out.push("\">Epost</a>:</td><td><input type=\"text\" id=\"Email475");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"SocialWorker.Email\" value=\"");
try{d=r['Email']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=8 /></td><td>Tags:</td><td><input type=\"text\" id=\"Tags700");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"SocialWorker.Tags\" value=\"");
try{d=r['Tags']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td></tr>\n</table>\n<script>\n$('#Tags700");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').tagsInput({\n   height:'20px'\n    ,width:'auto'\n   ,'defaultText':'add tag'\n   ,'removeWithBackspace' : true\n   ,'maxChars':90\n    ,interactive:false\n    ,'delimiter':','\n});\n</script>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<script>\ndataViews.SocialWorkers.getRecord({\n    Id:'");
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
 out.push("\n\n<center>\n<button class=\"CancelBut\" onclick=\"\nvar id = document.getElementById('Id466");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value;\nApp3.Navigate2('local/Pages/SocialWorker/'+id,{target:'AppPages'}); \n\">Avbruta</button>\n\n<button class=\"SaveBut\" tabindex=20 id=\"Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\nvar fName;\nvar area = document.getElementById('SocialWorkerTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\nswitch(jQuery(this).data('actionName')) {\n    case 'Search':\n        dataViews['SocialWorkers'].clearFilter();\n        jQuery('input,textarea', area).each(function(index,elm) {\n            var v = jQuery(elm).val();\n            var t = jQuery(elm).attr('type');\n            fName = jQuery(elm).attr('data-fieldName');\n            if (t == 'radio') {\n                 if (jQuery(elm).attr('checked')) {\n                    dataViews['SocialWorkers'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                }\n            } else {\n                if (v != '') {\n                    if (fName) {\n                        if (jQuery(elm).hasClass('exactSearch')) {\n                            dataViews['SocialWorkers'].addFilter(fName.split('.').join('|'),'+',jQuery(elm).val());\n                        } else {\n                            dataViews['SocialWorkers'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                        }\n                    }  \n                }\n            }\n        });\n\n        dataViews['SocialWorkers'].firstRow({OnComplete:function() {\n        if (dataViews['SocialWorkers'].curRecordSet.Count > 0) {\n            var id = dataViews['SocialWorkers'].curRecordSet.Rows[0].Id;\n            App3.Navigate2('local/Pages/SocialWorkers/'+id,{target:'AppPages'}); \n        } else {\n            alert('Ingen tr&auml;ff');\n        }\n        console.dir(dataViews['SocialWorkers'].curRecordSet);\n    },NoNewPage:function() {\n        alert('Ingen tr&auml;ff');\n     }\n    });\n    break;\n    case 'New':\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n            if (elm.value) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'SocialWorker') {\n                        if (fName) {\n                            rec[fName[1]] = jQuery(elm).val();\n                        }\n                    }\n                }  \n            }\n        });\n        dataViews['SocialWorkers'].newRecord({\n            NewRecord:rec\n            ,OnComplete:function(response){\n                var r;\n                eval('r='+response);\n                dataViews['SocialWorkers'].dataChanged();\n                if (r.Status != 'Created') {\n                    alert('Save Failed');\n                } else {\n                    App3.Navigate2('local/Pages/SocialWorker/' + r.NewId,{target:'AppPages',forceRead:true });\n                    //jQuery('.ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n                    //jQuery('input[data-fieldname=SocialWorker.Id]').val(r['NewId']);\n                    //jQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','save').html('Spara');\n                    \n                }\n            }\n        });\n    break;\n    case 'Save':\n    case undefined:\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'SocialWorker') {\n                        rec[fName[1]] = jQuery(elm).val();\n                    } \n            }\n        });\n    dataViews['SocialWorkers'].updateFields(rec,rec['Id'],function(response) {\n        jQuery('.ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n        console.info(response);\n    });\n    break; \n}\n\">Spara</button>\n<span component=\"Generic485\" task=\"Project4.Task\" class=\"TaskEdit4\"> </span>\n</center><script>\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = true;\n        break;\n    default:\n        if (el['data-fieldname'] == 'Giver.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = true;\n            } else {\n                el.readOnly = true;\n            }\n        }\n   }\n});\n</script>\n");
if(r){
 out.push("\n<div id=\"SocialWorkerAreaDetail795");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"\"><img src=\"img/AjaxLoading2.gif\"/></div>\n<script>\ndataViews.SocialWorkAreas.clearFilter();\ndataViews.SocialWorkAreas.setFilter('SocialWorkerId','=','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("');\ndataViews.SocialWorkAreas.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"local/Pages/SocialWorkAreas\",{target:'SocialWorkerAreaDetail795");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView,SocialWorkerId:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("'});}});\n</script>\n");
}
 out.push("\n\n\n");
if(r){
 out.push("\n<div id=\"SocialWorkerFadderbarnDetail484");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"\"><img src=\"img/AjaxLoading2.gif\"/></div>\n<script>\ndataViews.SocialWorkerFadderbarns.clearFilter();\ndataViews.SocialWorkerFadderbarns.setFilter('Helper','=','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("');\ndataViews.SocialWorkerFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"local/Pages/SocialWorkerFadderbarns\",{target:'SocialWorkerFadderbarnDetail484");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView,Helper:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("'});}});\n</script>\n");
}
 out.push("\n\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
