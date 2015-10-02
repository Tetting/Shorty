function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<div class=\"EditIcons\" style=\"padding-left: 0px; width: 100%;\">\n<center>\n");

if (typeof(dataViews.Evangelists.curRecordSet.Count) != 'undefined') {
if (typeof(dataViews.Evangelists.curRecordSet.start) != 'undefined') {
if (typeof(dataViews.Evangelists.curRecordSet.rPos) != 'undefined') {
if (dataViews.Evangelists.filterActive) {
    o.push(dataViews.Evangelists.curRecordSet.start + dataViews.Evangelists.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Evangelists.curRecordSet.filteredCount);
} else {
    o.push(dataViews.Evangelists.curRecordSet.start + dataViews.Evangelists.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Evangelists.curRecordSet.Count);
}
}
}
}

 out.push("\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Evangelists'].firstRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'undefined',target:target});\n        }});\" title=\"F&ouml;rsta\"><span class=\"RecordsetFirstIcon EditIcon\">&nbsp;</span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Evangelists'].previousRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Evangelists',target:target});\n        },NoNewPage:function(){\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"F&ouml;reg&aring;ende\"><span class=\"RecordsetPreviousIcon EditIcon\">&nbsp;</span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Evangelists'].nextRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Evangelists',target:target});\n        },NoNewPage:function() {\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"N&auml;sta\"><span class=\"RecordsetNextIcon EditIcon\">&nbsp;</span></a>\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Evangelists'].lastRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Evangelists',target:target});\n        }});\" title=\"Sista\"><span class=\"RecordsetLastIcon EditIcon\">&nbsp;</span></a>\n    \n    <span style=\"padding-left: 20px;\" id=\"Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">&nbsp;</span>\n    <span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"Generic409\"> </span>\n<button onclick=\"\n/*\njQuery('input,textarea', document.getElementById('EvangelistTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("')).each(function(index,elm) {\n    var t = jQuery(elm).prop('type');\n    if (t == 'radio') {\n        jQuery(elm).removeAttr('checked');\n    } else {\n        elm.value = '';\n    }\n});\njQuery('#Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeAttr('disabled');\ndocument.getElementById('Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').enabled = true;\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','Search').attr('title','s&ouml;k nu>>');\n*/\ndataViews['Evangelists'].clearFilter();\nApp3.Navigate2('local/Pages/EvangelistSearch',{target:'AppPages'});\n\" class=\"SearchBut ToolBut\" title=\"Ny s&ouml;kning\"><img src=\"img/icons/search.png\"/></button>\n\n<button id=\"NewBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"NewBut\" onclick=\"\n   $('#Id411");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('oldId',$('#Id411");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n document.getElementById('Generic409");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\njQuery('#EvangelistTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" input').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#EvangelistTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" textarea').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#GiverId88");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('-333333');\njQuery('#RegDate364");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(App.Today());\njQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').attr('title','skapa');\n\" title=\"Ny\"><img src=\"img/icons/new.png\"/></button>\n\n<button id=\"CopyBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"CopyBut\" onclick=\"\n    $('#Id411");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('oldId',$('#Id411");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n    document.getElementById('Generic409");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n    var s = String.fromCharCode(39)+'Evangelist.Id'+String.fromCharCode(39);\n    jQuery('input[data-fieldname='+s+']').val('');\n    jQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').attr('title','skapa');\n\" title=\"Kopiera\"><img src=\"img/icons/copy.png\"/></button>\n\n<button class=\"ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" EditBut\" id=\"Generic409");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = !el.disabled;\n        break;\n    default:\n        if (el.getAttribute('data-fieldname') == 'Evangelist.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = !el.disabled;\n            } else {\n                el.readOnly = !el.readOnly;\n            }\n        }\n   }\n});\n$('.tagsinput').each(function(){\n    var id = $(this).attr('id');\n    id = id.substr(0,id.length-10);\n    $j('#'+id).interactiveTags();\n});\nif ($('#Generic409");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').css('opacity')==0) {\n    $('#NewBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    $('#CopyBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    $('#Generic409");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    $('.ToolBut').animate({opacity:1});\n    \n    $('#CancelBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    $('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    \n} else {\n    $('#CancelBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    $('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    \n    $('#NewBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    $('#CopyBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    $('#Generic409");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    $('.ToolBut').animate({opacity:0});\n    \n}\n\" tabindex=1 title=\"&Auml;ndra\"><img src=\"img/icons/change.png\"/></button>\n\n\n<button id=\"CancelBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"CancelBut\" style=\"opacity:0\" onclick=\"\nvar id = document.getElementById('Id411");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value;\nif (id =='') {\n    id = $('#Id411");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('oldId');\n}\nApp3.Navigate2('local/Pages/Evangelist/'+id,{target:'AppPages'}); \n\" title=\"Avbruta\"><img src=\"img/icons/abort.png\"/></button>\n\n<button class=\"SaveBut\" style=\"opacity:0\" tabindex=20 id=\"Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\nvar fName;\nvar area = document.getElementById('EvangelistTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\nswitch(jQuery(this).data('actionName')) {\n    case 'Search':\n        dataViews['Evangelists'].clearFilter();\n        jQuery('input,textarea', area).each(function(index,elm) {\n            var v = jQuery(elm).val();\n            var t = jQuery(elm).attr('type');\n            fName = jQuery(elm).attr('data-fieldName');\n            if (t == 'radio') {\n                 if (jQuery(elm).attr('checked')) {\n                    dataViews['Evangelists'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                }\n            } else {\n                if (v != '') {\n                    if (fName) {\n                        if (jQuery(elm).hasClass('exactSearch')) {\n                            dataViews['Evangelists'].addFilter(fName.split('.').join('|'),'+',jQuery(elm).val());\n                        } else {\n                            dataViews['Evangelists'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                        }\n                    }  \n                }\n            }\n        });\n\n        dataViews['Evangelists'].firstRow({OnComplete:function() {\n        if (dataViews['Evangelists'].curRecordSet.Count > 0) {\n            var id = dataViews['Evangelists'].curRecordSet.Rows[0].Id;\n            App3.Navigate2('local/Pages/Evangelists/'+id,{target:'AppPages'}); \n        } else {\n            alert('Ingen tr&auml;ff');\n        }\n        console.dir(dataViews['Evangelists'].curRecordSet);\n    },NoNewPage:function() {\n        alert('Ingen tr&auml;ff');\n     }\n    });\n    break;\n    case 'New':\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n            if (elm.value) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'Evangelist') {\n                        if (fName) {\n                            rec[fName[1]] = jQuery(elm).val();\n                        }\n                    }\n                }  \n            }\n        });\n        dataViews['Evangelists'].newRecord({\n            NewRecord:rec\n            ,OnComplete:function(response){\n                var r;\n                eval('r='+response);\n                dataViews['Evangelists'].dataChanged();\n                if (r.Status != 'Created') {\n                    alert('Save Failed');\n                } else {\n                    App3.Navigate2('local/Pages/Evangelist/' + r.NewId,{target:'AppPages',forceRead:true });\n                    //jQuery('.ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n                    //jQuery('input[data-fieldname=Evangelist.Id]').val(r['NewId']);\n                    //jQuery('#Action");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','save').attr('title','Spara');\n                    \n                }\n            }\n        });\n    break;\n    case 'Save':\n    case undefined:\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'Evangelist') {\n                        rec[fName[1]] = jQuery(elm).val();\n                    } \n            }\n        });\n    dataViews['Evangelists'].updateFields(rec,rec['Id'],function(response) {\n        jQuery('.ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n        console.info(response);\n    });\n    break; \n}\n\" title=\"Spara\"><img src=\"img/icons/save.png\"/></button>\n<div style=\"position:absolute\"><div id=\"reportDropDown");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"dropDown\" style=\"\n    position:relative;\n    left:600px;\n    width:200px;\n    display:none;\n    background: rgb(99, 99, 99);\nbackground: rgba(99, 99, 99, 0.9);\n\">\nInga rapporter</div>\n</div>\n<button class=\"ToolBut\" onclick=\"\n$('#reportDropDown");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').slideToggle();\n\" title=\"Rapport\"><img width=\"32\" height=\"32/\" src=\"img/file_pdf.png\"></button>\n<script>\ndataViews.CustomReports.clearFilter();\ndataViews.CustomReports.addFilter('Display','*','E,');\ndataViews.CustomReports.getList({\n    OnComplete:function(data,Recordset,DataView){\n        App3.Navigate2(\"local/Pages/reportListDropDown\"\n            ,{navTarget:'ReportList");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'\n            ,target:'reportDropDown");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'\n            ,entityId:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView\n        });\n    }\n});\n</script>\n\n<span component=\"Generic409\" task=\"Project4.Task\" class=\"TaskEdit4\"> </span>\n</center>\n</div><span class=\"EvangelistsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"EvangelistProtoHeader\">Evangelist</span> \n\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/Evangelists\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><script>\n    document.title = $('<div/>').html(\"Evangelist ");
try{d=ns.data['Name'];}catch(e){d=''}out.push(d);
 out.push("\").text();\n</script><br/>\n");
if (ns.data) {var r= ns.data;
 out.push("<table class=\"EditTable\" id=\"EvangelistTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<tr><th colspan=\"5\">Uppgifter</th></tr>\n<tr><td>Nummer</td><td><input type=\"text\" id=\"Id411");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Evangelist.Id\" value=\"");
try{d=r['Id']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td><td></td><td></td><td rowspan=\"7\" valign=\"top\">Noteringar:<br/><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap='on'  class=\"Editable\" tabindex=16 cols=\"54\" rows=\"9\" id=\"Notes421");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"  data-fieldName=\"Evangelist.Notes\">");
try{d=r.Notes;}catch(e){d=''}out.push(d);
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td></tr>\n<tr><td>Namn</td><td colspan=\"3\"><input type=\"text\" id=\"Name412");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Evangelist.Name\" value=\"");
try{d=r['Name']||'';}catch(e){d=''}out.push(d);
 out.push("\" size=60 tabindex=3 /></td></tr>\n<tr><td>Omr&aring;de#:</td><td><input type=\"text\" id=\"Area1417");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Evangelist.Area1\" value=\"");
try{d=r['Area1']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=5 /></td><td>Omr&aring;de:</td><td><input type=\"text\" id=\"Area418");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Evangelist.Area\" value=\"");
try{d=r['Area']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=4 /></td></tr>\n<tr><td>Landskod:</td><td><input type=\"text\" id=\"CountryCode420");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Evangelist.CountryCode\" value=\"");
try{d=r['CountryCode']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=6 /></td><td>F&ouml;dd:</td><td><input type=\"text\" id=\"DOB413");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Evangelist.DOB\" value=\"");
try{d=r['DOB']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=7 /></td></tr>\n<tr><td><a class=\"ajaxLink\" href=\"Pages/Giver/");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("\">Giv.nr</a>:</td><td><input type=\"text\" id=\"GiverId414");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Evangelist.GiverId\" value=\"");
try{d=r['GiverId']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=8 /></td><td>Inkom:</td><td><input type=\"text\" id=\"TGdt419");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Evangelist.TGdt\" value=\"");
try{d=r['TGdt']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=9 /></td></tr>\n<tr><td>Kr/M&aring;n:</td><td><input type=\"text\" id=\"Mkr416");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Evangelist.Mkr\" value=\"");
try{d=r['Mkr']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=12 /></td><td>Reg:</td><td><input type=\"text\" id=\"RegDate647");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Evangelist.RegDate\" value=\"");
try{d=r['RegDate']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=13 /></td></tr>\n<tr><td>Projekt:</td><td><input type=\"text\" id=\"ProjectId426");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Evangelist.ProjectId\" value=\"");
try{d=r['ProjectId']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=14 /></td><td>B&ouml;rjat:</td><td><input type=\"text\" id=\"HelpD415");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Evangelist.HelpD\" value=\"");
try{d=r['HelpD']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=15 /></td></tr>\n<tr><td>Tags:</td><td><input type=\"text\" id=\"Tags698");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Evangelist.Tags\" value=\"");
try{d=r['Tags']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td><td></td><td></td><td></td></tr>\n</table>\n<script>\n$('#Tags698");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').tagsInput({\n   height:'20px'\n    ,width:'auto'\n   ,'defaultText':'add tag'\n   ,'removeWithBackspace' : true\n   ,'maxChars':90\n    ,interactive:false\n    ,'delimiter':','\n});\n</script>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<script>\ndataViews.Evangelists.getRecord({\n    Id:'");
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
 out.push("\n\n<script>\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = true;\n        break;\n    default:\n        if (el['data-fieldname'] == 'Evangelist.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = true;\n            } else {\n                el.readOnly = true;\n            }\n        }\n   }\n});\n</script><div style=\"float:left;width:260px;margin-left:15px;align:top;\">\n");
if(r){
 out.push("\n<div id=\"EvangelistActionsDetail841");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"\"><img src=\"img/AjaxLoading.gif\"/></div>\n<script>\ndataViews.EvangelistActions.clearFilter();\ndataViews.EvangelistActions.setFilter('entityId','=','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("');\ndataViews.EvangelistActions.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"local/Pages/EvangelistActions\",{target:'EvangelistActionsDetail841");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView,entityId:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',entityName:'Evangelist'});}});\n</script>\n");
}
 out.push("\n\n</div><div style=\"float:left;width:240px;margin-left:15px;align:top;\">");
if(r){
 out.push("\n<br/>\n<div id=\"EvangelistGiver");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"><img src=\"img/AjaxLoading2.gif\"/></div>\n<script>\ndataViews.EvangelistGivers.getRecord({\nId:'");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("'\n,PK:'");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("'\n,OnComplete:function(Record){\nApp3.Navigate2('local/Pages/EvangelistGiver?Id=");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("',\n{target:'EvangelistGiver");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',data:Record }\n);\n}\n});\n</script>\n");
}
 out.push("</div><div style=\"float:left;width:360px;margin-left:15px;align:top;\">");
if(ns.data) {
 out.push("<div style=\"float:left;\">\n<div id=\"giverProjectStats\"></div>\n</div>\n<script>\n$.get('do/giverProjectStats.php',{GiverId:'");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("'},function(resp) {\n    //$('#giverProjectStats').html(resp);\n    var dat;\n    eval(\"dat = \"+resp);\n    App3.Navigate2(\"local/Pages/GiverProjectStats\",{navTarget:'giverProjectStats',target:'giverProjectStats',Id:'");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("',data:dat });\n});\n</script>\n");
}
 out.push("</div>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
