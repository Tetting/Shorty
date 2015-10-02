function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("");

ns.EditClass = '';
if (ns.data && ns.data.Status == 'Inaktiv') {
    ns.EditClass='Inaktiv';
}
 out.push("<div id=\"viewBar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"EditIcons\" style=\"padding-left: 0px; width: 100%;\">\n<span style=\"margin-right:30px;\" component=\"Generic530\" task=\"Project4.Task\" class=\"CaravansBigIcon BigIcon TaskEdit4\">Husvagn</span>\n");

if (typeof(dataViews.Caravans.curRecordSet.Count) != 'undefined') {
if (typeof(dataViews.Caravans.curRecordSet.start) != 'undefined') {
if (typeof(dataViews.Caravans.curRecordSet.rPos) != 'undefined') {
if (dataViews.Caravans.filterActive) {
    o.push(dataViews.Caravans.curRecordSet.start + dataViews.Caravans.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Caravans.curRecordSet.filteredCount);
} else {
    o.push(dataViews.Caravans.curRecordSet.start + dataViews.Caravans.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Caravans.curRecordSet.Count);
}
}
}
}

 out.push("\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Caravans'].firstRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'undefined',target:target});\n        }});\" title=\"F&ouml;rsta\"><span class=\"RecordsetFirstIcon EditIcon\">&nbsp;</span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Caravans'].previousRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Caravans',target:target});\n        },NoNewPage:function(){\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"F&ouml;reg&aring;ende\"><span class=\"RecordsetPreviousIcon EditIcon\">&nbsp;</span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Caravans'].nextRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Caravans',target:target});\n        },NoNewPage:function() {\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"N&auml;sta\"><span class=\"RecordsetNextIcon EditIcon\">&nbsp;</span></a>\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Caravans'].lastRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Caravans',target:target});\n        }});\" title=\"Sista\"><span class=\"RecordsetLastIcon EditIcon\">&nbsp;</span></a>\n<span style=\"margin-left: 40px;\" class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Caravans\" class=\"ajaxLink\">Lista</a>\n    </span>    \n    <span style=\"padding-left: 20px;\" id=\"Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">&nbsp;</span>\n    <span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"Generic530\"> </span>\n<button onclick=\"\n/*\njQuery('input,textarea', document.getElementById('CaravanTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("')).each(function(index,elm) {\n    var t = jQuery(elm).prop('type');\n    if (t == 'radio') {\n        jQuery(elm).removeAttr('checked');\n    } else {\n        elm.value = '';\n    }\n});\njQuery('#Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeAttr('disabled');\ndocument.getElementById('Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').enabled = true;\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','Search').html('s&ouml;k nu>>');\n*/\ndataViews['Caravans'].clearFilter();\nApp3.Navigate2('local/Pages/CaravanSearch',{target:'AppPages'});\n\" class=\"SearchBut\" title=\"Ny s&ouml;kning\"><img src=\"img/icons/search.png\"/></button>\n\n<button class=\"NewBut\" onclick=\"\n$('#Id532");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('oldId',$('#Id532");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\ndocument.getElementById('EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\njQuery('#CaravanTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" input').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#CaravanTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" textarea').each(function(index,elm) {\n    elm.value = '';\n});\n//jQuery('#GiverId88");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('-333333');\n//jQuery('#RegDate364");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(App.Today());\njQuery('#ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New');\n\" title=\"Ny\"><img src=\"img/icons/new.png\"/></button>\n\n<button class=\"CopyBut\" onclick=\"\n    $('#Id532");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('oldId',$('#Id532");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n    document.getElementById('EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n    var s = String.fromCharCode(39)+'Caravan.Id'+String.fromCharCode(39);\n    jQuery('input[data-fieldname='+s+']').val('');\n    jQuery('#ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New');\n\" title=\"Kopiera\"><img src=\"img/icons/copy.png\"/></button>\n\n<button class=\"ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" EditBut\" id=\"EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = !el.disabled;\n        break;\n    default:\n        if (el.getAttribute('data-fieldname') == 'Caravan.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = !el.disabled;\n            } else {\n                el.readOnly = !el.readOnly;\n            }\n        }\n   }\n});\nif ($('#editingBar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').css('display') == 'none') {\n    $('#viewBar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').css({opacity:0,display:'none'});\n    $('#editingBar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').css({opacity:0,display:''}).animate({opacity:1});\n} else {\n    $('#editingBar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').css({opacity:0,display:'none'});\n    $('#viewBar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').css({opacity:0,display:''}).animate({opacity:1});\n\n}\n\" tabindex=1 title=\"&Auml;ndra\"><img src=\"img/icons/change.png\"/></button>\n<center>\n</div>\n</div>\n\n<div id=\"editingBar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"display:none;\">\n<span component=\"CaravanProtoHeader\" task=\"Project4.Task\" class=\"CaravansBigIcon BigIcon TaskEdit4\">Husvagn</span>\n<span style=\"width:300px;display:inline-block;\"> </span>\n<button id=\"CancelBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"CancelBut\" style=\"\" onclick=\"\nvar id = document.getElementById('Id532");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value;\nif (id =='') {\n    id = $('#Id532");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('oldId');\n}\nApp3.Navigate2('local/Pages/Caravan/'+id,{target:'AppPages'}); \n\" title=\"Avbryt\"><img src=\"img/icons/abort.png\" width= height=/></button>\n\n<button id=\"ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"SaveBut\" style=\"\" tabindex=20 onclick=\"\nvar fName;\nvar saveEntity = 'Caravan';\nvar area = document.getElementById('CaravanTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\nswitch(jQuery(this).data('actionName')) {\n    case 'Search':\n        dataViews['Caravans'].clearFilter();\n        jQuery('input,textarea', area).each(function(index,elm) {\n            var v = jQuery(elm).val();\n            var t = jQuery(elm).attr('type');\n            fName = jQuery(elm).attr('data-fieldName');\n            if (t == 'radio') {\n                if (jQuery(elm).attr('checked')) {\n                    dataViews['Caravans'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                }\n            } else {\n                if (v != '') {\n                    if (fName) {\n                        if (jQuery(elm).hasClass('exactSearch')) {\n                            dataViews['Caravans'].addFilter(fName.split('.').join('|'),'+',jQuery(elm).val());\n                        } else {\n                            dataViews['Caravans'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                        }\n                    }  \n                }\n            }\n        });\n\n        dataViews['Caravans'].firstRow({OnComplete:function() {\n        if (dataViews['Caravans'].curRecordSet.Count > 0) {\n            var id = dataViews['Caravans'].curRecordSet.Rows[0].Id;\n            App3.Navigate2('local/Pages/Caravan/'+id,{target:'AppPages'}); \n        } else {\n            alert('Ingen tr&auml;ff');\n        }\n        //console.dir(dataViews['Caravans'].curRecordSet);\n    },NoNewPage:function() {\n        alert('Ingen tr&auml;ff');\n     }\n    });\n    break;\n    case 'New':\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n            //if (elm.value) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'Caravan') {\n                        if (fName) {\n                            switch(elm.type) {\n                                case 'radio':\n                                console.log('radio',fName[1],jQuery(elm).attr('checked'),jQuery(elm).val(),elm);\n                                     if (jQuery(elm).attr('checked')) {\n				        //take this value\n					rec[fName[1]] = jQuery(elm).val();\n				    }\n                                break;\n                                default:\n                                    rec[fName[1]] = jQuery(elm).val();\n                                break;\n                            }\n                        }\n                    }\n                }  \n            //}\n        });\n        dataViews['Caravans'].newRecord({\n            NewRecord:rec\n            ,OnComplete:function(response){\n                var r;\n                eval('r='+response);\n                dataViews['Caravans'].dataChanged();\n                if (r.Status != 'Created') {\n                    alert('Save Failed');\n                } else {\n                    App3.Navigate2('local/Pages/Caravan/' + r.NewId,{target:'AppPages',forceRead:true });\n                }\n            }\n        });\n    break;\n    case 'Save':\n    case undefined:\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n			fName = jQuery(elm).attr('data-fieldName');\n            if (fName) {\n			   fName = fName.split('.');\n			   if (fName[0] == 'Caravan') {     \n				   switch(elm.type) {\n					   case 'radio':\n						   if (jQuery(elm).attr('checked')) {\n							   //take this value\n							   rec[fName[1]] = jQuery(elm).val();\n							}\n						break;\n						default:\n							rec[fName[1]] = jQuery(elm).val();\n						break;\n					}\n				} \n            }       \n        });\n        dataViews['Caravans'].updateFields(rec,rec['Id'],function(response) {\n        jQuery('#EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n        if (console) console.info(response);\n                //go back to an unedited state.\n                /*\n                jQuery('input,textarea',area).each(function(index,el){ \n        	switch(el.type) {    \n        		case 'radio':         \n        			el.disabled = !el.disabled;         \n        		break;\n        		default:\n        		if (el.getAttribute('data-fieldname') == 'Caravan.Id') {\n        			//never allowed to edit the id         \n        		} else {\n        		if ($j(el).is('.dateEdit')) {\n        			el.disabled = !el.disabled;             \n        		} else {\n        			el.readOnly = !el.readOnly;\n        		}\n        	}\n            }\n         });  */\n    });\n    break; \n}\n\" title=\"Spara\"><img src=\"img/icons/save.png\" width= height=/></button>\n</div>");
if (ns.data) {var r= ns.data;
 out.push("<table class=\"EditTable ");
try{d=ns.EditClass;}catch(e){d=''}out.push(d);
 out.push("\" id=\"CaravanTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<tr><th colspan=\"5\">Uppgifter</th></tr>\n<tr><td>Nummer</td><td><input type=\"text\" id=\"Nr619");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.Nr\" value=\"");
try{d=r['Nr']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=3 /></td><td>M&auml;rke</td><td><input type=\"text\" id=\"Make537");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.Make\" value=\"");
try{d=r['Make']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=11 /></td><td rowspan=\"7\" valign=\"top\">Utrustning:<br/><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap='on'  class=\"Editable\" tabindex=18 cols=\"56\" rows=\"6\" id=\"Equipment544");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"  data-fieldName=\"Caravan.Equipment\">");
try{d=r.Equipment;}catch(e){d=''}out.push(d);
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td></tr>\n<tr><td>RegNr</td><td><input type=\"text\" id=\"Regnr533");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.Regnr\" value=\"");
try{d=r['Regnr']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=4 /></td><td>&Aring;rsmodel</td><td><input type=\"text\" id=\"Year614");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.Year\" value=\"");
try{d=r['Year']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=12 /></td></tr>\n<tr><td>&Auml;gareNamn:</td><td><input type=\"text\" id=\"OwnerName538");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.OwnerName\" value=\"");
try{d=r['OwnerName']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=5 /></td><td>&Auml;garePostNr:</td><td><input type=\"text\" id=\"OwnerPostCode540");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.OwnerPostCode\" value=\"");
try{d=r['OwnerPostCode']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=13 /></td></tr>\n<tr><td>&Auml;gareAdres:</td><td><input type=\"text\" id=\"OwnerAddress539");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.OwnerAddress\" value=\"");
try{d=r['OwnerAddress']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=6 /></td><td>&Auml;garePos:</td><td><input type=\"text\" id=\"OwnerPostTown541");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.OwnerPostTown\" value=\"");
try{d=r['OwnerPostTown']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=14 /></td></tr>\n<tr><td>Tel</td><td><input type=\"text\" id=\"Tel542");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.Tel\" value=\"");
try{d=r['Tel']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=7 /></td><td>Placering:</td><td><input type=\"text\" id=\"Location545");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.Location\" value=\"");
try{d=r['Location']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=15 /></td></tr>\n<tr><td>Pris:</td><td><input type=\"text\" id=\"Price543");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.Price\" value=\"");
try{d=r['Price']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=8 /></td><td>Bekr&auml;ftSki</td><td><input type=\"text\" id=\"ConfirmDate548");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.ConfirmDate\" value=\"");
try{d=r['ConfirmDate']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=16 /></td></tr>\n<tr><td>Totalpris:</td><td><input type=\"text\" id=\"TotalPrice615");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.TotalPrice\" value=\"");
try{d=r['TotalPrice']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=9 /></td><td>UthyrdTill:</td><td><input type=\"text\" id=\"HiredBy546");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.HiredBy\" value=\"");
try{d=r['HiredBy']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=17 /></td></tr>\n<tr><td><a class=\"ajaxLink\" href=\"Pages/Giver/");
try{d=r.GivNr;}catch(e){d=''}out.push(d);
 out.push("\">Giv.nr</a>:</td><td><input type=\"text\" id=\"GivNr547");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.GivNr\" value=\"");
try{d=r['GivNr']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=10 /></td><td>#</td><td><input type=\"text\" id=\"Id532");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Caravan.Id\" value=\"");
try{d=r['Id']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td><td>Status:\n<select class=\"Editable\" id=\"Status535");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onchange=\"EditInPlace4.quickSave('Caravans.Status','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\">\n\n<option value=\"Aktiv\" ");
if (r.Status=='Aktiv'){o.push('selected');}
 out.push(">Aktiv</option>\n\n<option value=\"Inaktiv\" ");
if (r.Status=='Inaktiv'){o.push('selected');}
 out.push(">Inaktiv</option>\n\n</select></td></tr>\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<script>\ndataViews.Caravans.getRecord({\n    Id:'");
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
 out.push("\n\n<script>\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = true;\n        break;\n    default:\n        if (el['data-fieldname'] == 'Caravan.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = true;\n            } else {\n                el.readOnly = true;\n            }\n        }\n   }\n});\n</script>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
