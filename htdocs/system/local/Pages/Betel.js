function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<div class=\"EditIcons\" style=\"padding-left: 0px; width: 100%;\">\n<center>\n");

if (typeof(dataViews.Betels.curRecordSet.Count) != 'undefined') {
if (typeof(dataViews.Betels.curRecordSet.start) != 'undefined') {
if (typeof(dataViews.Betels.curRecordSet.rPos) != 'undefined') {
if (dataViews.Betels.filterActive) {
    o.push(dataViews.Betels.curRecordSet.start + dataViews.Betels.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Betels.curRecordSet.filteredCount);
} else {
    o.push(dataViews.Betels.curRecordSet.start + dataViews.Betels.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Betels.curRecordSet.Count);
}
}
}
}

 out.push("\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Betels'].firstRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'undefined',target:target});\n        }});\" title=\"F&ouml;rsta\"><span class=\"RecordsetFirstIcon EditIcon\"> </span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Betels'].previousRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Betels',target:target});\n        },NoNewPage:function(){\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"F&ouml;reg&aring;ende\"><span class=\"RecordsetPreviousIcon EditIcon\"> </span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Betels'].nextRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Betels',target:target});\n        },NoNewPage:function() {\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"N&auml;sta\"><span class=\"RecordsetNextIcon EditIcon\"> </span></a>\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Betels'].lastRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Betels',target:target});\n        }});\" title=\"Sista\"><span class=\"RecordsetLastIcon EditIcon\"> </span></a>\n    \n    <span style=\"padding-left: 20px;\" id=\"Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"> </span>\n    <span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"Generic284\"> </span>\n<button onclick=\"\n/*\njQuery('input,textarea', document.getElementById('BetelTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("')).each(function(index,elm) {\n    var t = jQuery(elm).prop('type');\n    if (t == 'radio') {\n        jQuery(elm).removeAttr('checked');\n    } else {\n        elm.value = '';\n    }\n});\njQuery('#Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeAttr('disabled');\ndocument.getElementById('Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').enabled = true;\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','Search').html('s&ouml;k nu>>');\n*/\ndataViews['Betels'].clearFilter();\nApp3.Navigate2('local/Pages/BetelSearch',{target:'AppPages'});\n\" title=\"Ny s&ouml;kning\"><img src=\"img/icons/search.png\"/></button>\n\n<button class=\"NewBut\" onclick=\"\ndocument.getElementById('Generic284");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\njQuery('#BetelTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" input').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#BetelTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" textarea').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').html('skapa');\n\" title=\"Ny\"><img src=\"img/icons/new.png\"/></button>\n\n<button class=\"CopyBut\" onclick=\"\n    document.getElementById('Generic284");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n    var s = String.fromCharCode(39)+'Betel.Id'+String.fromCharCode(39);\n    jQuery('input[data-fieldname='+s+']').val('');\n    jQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').html('skapa');\n\" title=\"Kopiera\"><img src=\"img/icons/copy.png\"/></button>\n\n<button class=\"ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" EditBut\" id=\"Generic284");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" tabindex=1 onclick=\"\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = !el.disabled;\n        break;\n    default:\n             if (el['data-fieldname'] == 'Betel.Id') {\n                //never allowed to edit the id\n            } else {\n                if ($j(el).is('.dateEdit')) {\n                    el.disabled = !el.disabled;\n                } else {\n                    el.readOnly = !el.readOnly;\n                }\n            }\n   }\n});\n$('.tagsinput').each(function(){\n    var id = $(this).attr('id');\n    id = id.substr(0,id.length-10);\n    $j('#'+id).interactiveTags();\n});\n\" title=\"&Auml;ndra\"><img src=\"img/icons/change.png\"/></button>\n<center>\n</div><span class=\"BetelsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"BetelProtoHeader\">Betel</span> \n\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Betels\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = $('<div/>').html(\"Betel ");
try{d=ns.data['Name'];}catch(e){d=''}out.push(d);
 out.push("\").text();\n</script><br/>\n");
if (ns.data) {var r= ns.data;
 out.push("<table class=\"EditTable\" id=\"BetelTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<thead><tr><th colspan=\"7\">Medlem</th></tr></thead>\n<tr>\n<td style=\"text-align:right\">Namn:</td><td><input type=\"text\" id=\"Name107");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.Name\" value=\"");
try{d=r['Name']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=3 /></td>\n<td style=\"text-align:right\">Nr:</td><td><input type=\"text\" id=\"Id106");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.Id\" value=\"");
try{d=r['Id']||'';}catch(e){d=''}out.push(d);
 out.push("\" disabled=true /></td>\n<td style=\"text-align:right\"></td><td></td>\n<td rowspan=\"6\"><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap='on'  class=\"Editable\" tabindex=16 cols=\"30\" rows=\"10\" id=\"Notes118");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"  data-fieldName=\"Betel.Notes\">");
try{d=r.Notes;}catch(e){d=''}out.push(d);
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Efternamn:</td><td><input type=\"text\" id=\"LastName641");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.LastName\" value=\"");
try{d=r['LastName']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=4 /></td>\n<td style=\"text-align:right\">Landskod:</td><td><input type=\"text\" id=\"CountryCode111");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.CountryCode\" value=\"");
try{d=r['CountryCode']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=9 /></td>\n<td style=\"text-align:right\">F&ouml;dd:</td><td><input type=\"text\" id=\"DOB114");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.DOB\" value=\"");
try{d=r['DOB']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=13 /></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">c/o:</td><td><input type=\"text\" id=\"coAddress624");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.coAddress\" value=\"");
try{d=r['coAddress']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=5 /></td>\n<td style=\"text-align:right\">Telefon:</td><td><input type=\"text\" id=\"Tel116");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.Tel\" value=\"");
try{d=r['Tel']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=10 /></td>\n<td style=\"text-align:right\">D&ouml;pt:</td><td><input type=\"text\" id=\"BapDT115");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.BapDT\" value=\"");
try{d=r['BapDT']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=14 /></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Adress:</td><td><input type=\"text\" id=\"Address108");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.Address\" value=\"");
try{d=r['Address']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=6 /></td>\n<td style=\"text-align:right\">Mobil:</td><td><input type=\"text\" id=\"mobile625");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.mobile\" value=\"");
try{d=r['mobile']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=11 /></td>\n<td style=\"text-align:right\">Status:</td><td><input type=\"text\" id=\"Status117");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.Status\" value=\"");
try{d=r['Status']||'';}catch(e){d=''}out.push(d);
 out.push("\" size=12 tabindex=15 /></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">PostNr:</td><td><input type=\"text\" id=\"Zip109");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.Zip\" value=\"");
try{d=r['Zip']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=7 /></td>\n<td style=\"text-align:right\">Epost</td><td><input type=\"text\" id=\"email626");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.email\" value=\"");
try{d=r['email']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=12 /></td>\n<td style=\"text-align:right\"></td><td></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">PostOrt:</td><td><input type=\"text\" id=\"ZipTown110");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.ZipTown\" value=\"");
try{d=r['ZipTown']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=8 /></td>\n<td style=\"text-align:right\">Tags:</td><td colspan=3><input type=\"text\" id=\"Tags664");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Betel.Tags\" value=\"");
try{d=r['Tags']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n</tr>\n</table>\n<script>\n$('#Tags664");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').tagsInput({\n   height:'20px'\n    ,width:'auto'\n   ,'defaultText':'add tag'\n   ,'removeWithBackspace' : true\n   ,'maxChars':90\n    ,interactive:false\n    ,'delimiter':','\n});\n</script>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<script>\ndataViews.Betels.getRecord({\n    Id:'");
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
 out.push("\n\n<script>\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = true;\n        break;\n    default:\n        if (el['data-fieldname'] == 'Betel.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = true;\n            } else {\n                el.readOnly = true;\n            }\n        }\n   }\n});\n</script><center>\n\n<button class=\"CancelBut\" onclick=\"\nvar id = document.getElementById('Id106");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value;\nApp3.Navigate2('local/Pages/Betel/'+id,{target:'AppPages'}); \n\">Avbruta</button>\n\n<button class=\"SaveBut\" tabindex=20 id=\"Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\nvar fName;\nvar area = document.getElementById('BetelTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\nswitch(jQuery(this).data('actionName')) {\n    case 'Search':\n        dataViews['Betels'].clearFilter();\n        jQuery('input,textarea', area).each(function(index,elm) {\n            var v = jQuery(elm).val();\n            var t = jQuery(elm).attr('type');\n            fName = jQuery(elm).attr('data-fieldName');\n            if (t == 'radio') {\n                 if (jQuery(elm).attr('checked')) {\n                    dataViews['Betels'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                }\n            } else {\n                if (v != '') {\n                    if (fName) {\n                        if (jQuery(elm).hasClass('exactSearch')) {\n                            dataViews['Betels'].addFilter(fName.split('.').join('|'),'+',jQuery(elm).val());\n                        } else {\n                            dataViews['Betels'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                        }\n                    }  \n                }\n            }\n        });\n\n        dataViews['Betels'].firstRow({OnComplete:function() {\n        if (dataViews['Betels'].curRecordSet.Count > 0) {\n            var id = dataViews['Betels'].curRecordSet.Rows[0].Id;\n            App3.Navigate2('local/Pages/Betels/'+id,{target:'AppPages'}); \n        } else {\n            alert('Ingen tr&auml;ff');\n        }\n        console.dir(dataViews['Betels'].curRecordSet);\n    },NoNewPage:function() {\n        alert('Ingen tr&auml;ff');\n     }\n    });\n    break;\n    case 'New':\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n            if (elm.value) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'Betel') {\n                        if (fName) {\n                            rec[fName[1]] = jQuery(elm).val();\n                        }\n                    }\n                }  \n            }\n        });\n        dataViews['Betels'].newRecord({\n            NewRecord:rec\n            ,OnComplete:function(response){\n                var r;\n                eval('r='+response);\n                dataViews['Betels'].dataChanged();\n                if (r.Status != 'Created') {\n                    alert('Save Failed');\n                } else {\n                    App3.Navigate2('local/Pages/Betel/' + r.NewId,{target:'AppPages',forceRead:true });\n                    //jQuery('.ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n                    //jQuery('input[data-fieldname=Betel.Id]').val(r['NewId']);\n                    //jQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','save').html('Spara');\n                    \n                }\n            }\n        });\n    break;\n    case 'Save':\n    case undefined:\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'Betel') {\n                        rec[fName[1]] = jQuery(elm).val();\n                    } \n            }\n        });\n    dataViews['Betels'].updateFields(rec,rec['Id'],function(response) {\n        jQuery('.ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n        console.info(response);\n    });\n    break; \n}\n\">Spara</button>\n<span component=\"Generic286\" task=\"Project4.Task\" class=\"TaskEdit4\"> </span>\n</center>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
