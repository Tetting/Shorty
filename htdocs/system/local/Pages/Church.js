function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<div class=\"EditIcons\" style=\"padding-left: 0px; width: 100%;\">\n<center>\n");

if (typeof(dataViews.Churchs.curRecordSet.Count) != 'undefined') {
if (typeof(dataViews.Churchs.curRecordSet.start) != 'undefined') {
if (typeof(dataViews.Churchs.curRecordSet.rPos) != 'undefined') {
if (dataViews.Churchs.filterActive) {
    o.push(dataViews.Churchs.curRecordSet.start + dataViews.Churchs.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Churchs.curRecordSet.filteredCount);
} else {
    o.push(dataViews.Churchs.curRecordSet.start + dataViews.Churchs.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Churchs.curRecordSet.Count);
}
}
}
}

 out.push("\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Churchs'].firstRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'undefined',target:target});\n        }});\" title=\"F&ouml;rsta\"><span class=\"RecordsetFirstIcon EditIcon\">&nbsp;</span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Churchs'].previousRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Churchs',target:target});\n        },NoNewPage:function(){\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"F&ouml;reg&aring;ende\"><span class=\"RecordsetPreviousIcon EditIcon\">&nbsp;</span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Churchs'].nextRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Churchs',target:target});\n        },NoNewPage:function() {\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"N&auml;sta\"><span class=\"RecordsetNextIcon EditIcon\">&nbsp;</span></a>\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Churchs'].lastRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Churchs',target:target});\n        }});\" title=\"Sista\"><span class=\"RecordsetLastIcon EditIcon\">&nbsp;</span></a>\n    \n    <span style=\"padding-left: 20px;\" id=\"Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">&nbsp;</span>\n    <span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"Generic553\">&nbsp;</span>\n<button onclick=\"\n/*\njQuery('input,textarea', document.getElementById('ChurchTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("')).each(function(index,elm) {\n    var t = jQuery(elm).prop('type');\n    if (t == 'radio') {\n        jQuery(elm).removeAttr('checked');\n    } else {\n        elm.value = '';\n    }\n});\njQuery('#Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeAttr('disabled');\ndocument.getElementById('Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').enabled = true;\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','Search').html('s&ouml;k nu>>');\n*/\ndataViews['Churchs'].clearFilter();\nApp3.Navigate2('local/Pages/ChurchSearch',{target:'AppPages'});\n\" class=\"SearchBut\" title=\"Ny s&ouml;kning\"><img src=\"img/icons/search.png\"/></button>\n\n<button class=\"NewBut\" onclick=\"\ndocument.getElementById('Generic553");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\njQuery('#ChurchTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" input').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#ChurchTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" textarea').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#GiverId88");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('-333333');\njQuery('#RegDate364");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(App.Today());\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').html('skapa');\n\" title=\"Ny\"><img src=\"img/icons/new.png\"/></button>\n\n<button class=\"CopyBut\" onclick=\"\n    document.getElementById('Generic553");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n    var s = String.fromCharCode(39)+'Church.Id'+String.fromCharCode(39);\n    jQuery('input[data-fieldname='+s+']').val('');\n    jQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').html('skapa');\n\" title=\"Kopiera\"><img src=\"img/icons/copy.png\"/></button>\n<button class=\"ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" EditBut\" id=\"Generic553");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = !el.disabled;\n        break;\n    default:\n        if (el.getAttribute('data-fieldname') == 'Church.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = !el.disabled;\n            } else {\n                el.readOnly = !el.readOnly;\n            }\n        }\n   }\n});\n$('.tagsinput').each(function(){\n    var id = $(this).attr('id');\n    id = id.substr(0,id.length-10);\n    $j('#'+id).interactiveTags();\n});\n\" tabindex=1 title=\"&Auml;ndra\"><img src=\"img/icons/change.png\"/></button>\n<center>\n</div><span class=\"ChurchsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"ChurchProtoHeader\">F&ouml;rsamling</span> \n\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Churchs\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = \"\"+jQuery('<div/>').html(\"");
try{d=ns.data['ChurchName'];}catch(e){d=''}out.push(d);
 out.push("\").text()+\"\";\n</script><br/>\n");
if (ns.data) {var r= ns.data;
 out.push("<table class=\"EditTable\" id=\"ChurchTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<thead><tr><th colspan=\"7\">Uppgifter</th></tr></thead>\n<tr>\n<td style=\"text-align:right\">F&ouml;rsamling:</td><td><input type=\"text\" id=\"ChurchName121");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Church.ChurchName\" value=\"");
try{d=r['ChurchName']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=3 /></td>\n<td style=\"text-align:right\">Nr:</td><td><input type=\"text\" id=\"Id120");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Church.Id\" value=\"");
try{d=r['Id']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n<td rowspan=\"6\"><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap='on'  class=\"Editable\" tabindex=12 cols=\"60\" rows=\"8\" id=\"Notes127");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"  data-fieldName=\"Church.Notes\">");
try{d=r.Notes;}catch(e){d=''}out.push(d);
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">c/o Adress:</td><td><input type=\"text\" id=\"coAddress632");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Church.coAddress\" value=\"");
try{d=r['coAddress']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=4 /></td>\n<td style=\"text-align:right\">Telefon:</td><td><input type=\"text\" id=\"Tel125");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Church.Tel\" value=\"");
try{d=r['Tel']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=8 /></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Adress:</td><td><input type=\"text\" id=\"Address122");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Church.Address\" value=\"");
try{d=r['Address']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=5 /></td>\n<td style=\"text-align:right\">Kontakt:</td><td><input type=\"text\" id=\"Contact126");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Church.Contact\" value=\"");
try{d=r['Contact']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=9 /></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">PostNr:</td><td><input type=\"text\" id=\"Zip123");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Church.Zip\" value=\"");
try{d=r['Zip']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=6 /></td>\n<td style=\"text-align:right\"><a href=\"mailto:");
try{d=r.Email;}catch(e){d=''}out.push(d);
 out.push("\">Epost</a>:</td><td><input type=\"text\" id=\"Email633");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Church.Email\" value=\"");
try{d=r['Email']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=10 /></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">PostOrt:</td><td><input type=\"text\" id=\"ZipTown124");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Church.ZipTown\" value=\"");
try{d=r['ZipTown']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=7 /></td>\n<td style=\"text-align:right\"><a href=\"");
try{d=r.Url;}catch(e){d=''}out.push(d);
 out.push("\">Hemsida</a>:</td><td><input type=\"text\" id=\"Url634");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Church.Url\" value=\"");
try{d=r['Url']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=11 /></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Tags:</td><td><input type=\"text\" id=\"Tags702");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Church.Tags\" value=\"");
try{d=r['Tags']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n<td></td>\n<td></td>\n</table>\n<script>\n$('#Tags702");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').tagsInput({\n   height:'20px'\n    ,width:'auto'\n   ,'defaultText':'add tag'\n   ,'removeWithBackspace' : true\n   ,'maxChars':90\n    ,interactive:false\n    ,'delimiter':','\n});\n</script>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<script>\ndataViews.Churchs.getRecord({\n    Id:'");
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
 out.push("\n\n<script>\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = true;\n        break;\n    default:\n        if (el['data-fieldname'] == 'Evangelist.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = true;\n            } else {\n                el.readOnly = true;\n            }\n        }\n   }\n});\n</script><center>\n\n<button class=\"CancelBut\" onclick=\"\nvar id = document.getElementById('Id120");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value;\nApp3.Navigate2('local/Pages/Church/'+id,{target:'AppPages'}); \n\">Avbruta</button>\n\n<button class=\"SaveBut\" tabindex=20 id=\"Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\nvar fName;\nvar area = document.getElementById('ChurchTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\nswitch(jQuery(this).data('actionName')) {\n    case 'Search':\n        dataViews['Churchs'].clearFilter();\n        jQuery('input,textarea', area).each(function(index,elm) {\n            var v = jQuery(elm).val();\n            var t = jQuery(elm).attr('type');\n            fName = jQuery(elm).attr('data-fieldName');\n            if (t == 'radio') {\n                 if (jQuery(elm).attr('checked')) {\n                    dataViews['Churchs'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                }\n            } else {\n                if (v != '') {\n                    if (fName) {\n                        if (jQuery(elm).hasClass('exactSearch')) {\n                            dataViews['Churchs'].addFilter(fName.split('.').join('|'),'+',jQuery(elm).val());\n                        } else {\n                            dataViews['Churchs'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                        }\n                    }  \n                }\n            }\n        });\n\n        dataViews['Churchs'].firstRow({OnComplete:function() {\n        if (dataViews['Churchs'].curRecordSet.Count > 0) {\n            var id = dataViews['Churchs'].curRecordSet.Rows[0].Id;\n            App3.Navigate2('local/Pages/Church/'+id,{target:'AppPages'}); \n        } else {\n            alert('Ingen tr&auml;ff');\n        }\n        console.dir(dataViews['Churchs'].curRecordSet);\n    },NoNewPage:function() {\n        alert('Ingen tr&auml;ff');\n     }\n    });\n    break;\n    case 'New':\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n            if (elm.value) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'Church') {\n                        if (fName) {\n                            rec[fName[1]] = jQuery(elm).val();\n                        }\n                    }\n                }  \n            }\n        });\n        dataViews['Churchs'].newRecord({\n            NewRecord:rec\n            ,OnComplete:function(response){\n                var r;\n                eval('r='+response);\n                dataViews['Churchs'].dataChanged();\n                if (r.Status != 'Created') {\n                    alert('Save Failed');\n                } else {\n                    App3.Navigate2('local/Pages/Church/' + r.NewId,{target:'AppPages',forceRead:true });\n                    //jQuery('.ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n                    //jQuery('input[data-fieldname=Church.Id]').val(r['NewId']);\n                    //jQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','save').html('Spara');\n                    \n                }\n            }\n        });\n    break;\n    case 'Save':\n    case undefined:\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'Church') {\n                        rec[fName[1]] = jQuery(elm).val();\n                    } \n            }\n        });\n    dataViews['Churchs'].updateFields(rec,rec['Id'],function(response) {\n        jQuery('.ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n        console.info(response);\n    });\n    break; \n}\n\">Spara</button>\n<span component=\"Generic601\" task=\"Project4.Task\" class=\"TaskEdit4\"> </span>\n</center>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
