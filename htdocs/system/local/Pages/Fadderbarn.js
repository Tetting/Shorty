function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<div class=\"EditIcons\" style=\"padding-left: 0px; width: 100%;\">\n<center>\n<span style=\"margin-right:30px;\" component=\"Generic244\" task=\"Project4.Task\" class=\"FadderbarnBigIcon BigIcon TaskEdit4\">Fadderbarn</span>\n");

if (typeof(dataViews.Fadderbarns.curRecordSet.Count) != 'undefined') {
if (typeof(dataViews.Fadderbarns.curRecordSet.start) != 'undefined') {
if (typeof(dataViews.Fadderbarns.curRecordSet.rPos) != 'undefined') {
if (dataViews.Fadderbarns.filterActive) {
    o.push(dataViews.Fadderbarns.curRecordSet.start + dataViews.Fadderbarns.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Fadderbarns.curRecordSet.filteredCount);
} else {
    o.push(dataViews.Fadderbarns.curRecordSet.start + dataViews.Fadderbarns.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Fadderbarns.curRecordSet.Count);
}
}
}
}

 out.push("\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Fadderbarns'].firstRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'undefined',target:target});\n        }});\" title=\"F&ouml;rsta\"><span class=\"RecordsetFirstIcon EditIcon\"> </span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Fadderbarns'].previousRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Fadderbarns',target:target});\n        },NoNewPage:function(){\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"F&ouml;reg&aring;ende\"><span class=\"RecordsetPreviousIcon EditIcon\"> </span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Fadderbarns'].nextRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Fadderbarns',target:target});\n        },NoNewPage:function() {\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"N&auml;sta\"><span class=\"RecordsetNextIcon EditIcon\"> </span></a>\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Fadderbarns'].lastRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Fadderbarns',target:target});\n        }});\" title=\"Sista\"><span class=\"RecordsetLastIcon EditIcon\"> </span></a>\n\n<span class=\"ListIcon EditIcon\" style=\"margin-left: 40px;\">\n        <a class=\"ajaxLink\" href=\"Pages/Fadderbarns\">Lista</a>\n    </span>\n    \n    <span style=\"padding-left: 40px;\" id=\"Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"> </span>\n    <span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"Generic244\"> </span>\n\n<button class=\"SearchBut ToolBut\" onclick=\"\ndataViews['Fadderbarns'].clearFilter();\nApp3.Navigate2('local/Pages/FadderbarnSearch',{target:'AppPages',newSearch:true});\n\" class=\"SearchBut\" title=\"Ny s&ouml;kning\"><img src=\"img/icons/search.png\" width=32 height=32/></button>\n\n<button id=\"NewBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"NewBut\" onclick=\"\n    $('#Id83");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('oldId',$('#Id83");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n document.getElementById('EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n\n$('#BarnNum");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').text('');\njQuery('#FadderbarnTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" input').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#FadderbarnTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" textarea').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#GiverId88");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val('-33333');\njQuery('#RegDate364");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(App.Today());\njQuery('#ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').attr('title', 'Skapa');\n\" title=\"Ny\"><img src=\"img/icons/new.png\" width=32 height=32/></button>\n\n<button id=\"CopyBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"CopyBut\" onclick=\"\n    $('#Id83");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('oldId',$('#Id83");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n    document.getElementById('EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n    var s = String.fromCharCode(39)+'Fadderbarn.Id'+String.fromCharCode(39);\njQuery('input[data-fieldname='+s+']').val('');\n    jQuery('#ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').attr('title', 'skapa');\n\" title=\"Kopiera\"><img src=\"img/icons/copy.png\" width=32 height=32/></button>\n\n<button class=\"ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" EditBut\" id=\"EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = !el.disabled;\n        break;\n    default:\n        if (el.getAttribute('data-fieldname') == 'Fadderbarn.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = !el.disabled;\n            } else {\n                el.readOnly = !el.readOnly;\n            }\n        }\n   }\n});\n$j('#HelperShow");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').hide();\n$('.tagsinput').each(function(){\n    var id = $(this).attr('id');\n    id = id.substr(0,id.length-10);\n    $j('#'+id).interactiveTags();\n});\nif ($('#EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').css('opacity')==0) {\n    $('#NewBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    $('#CopyBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    $('#EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    $('#setId");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    $('.ToolBut').animate({opacity:1});\n    \n    $('#CancelBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    $('#ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    \n} else {\n    $('#CancelBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    $('#ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    \n    $('#NewBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    $('#CopyBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    $('#EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    $('#setId");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    $('.ToolBut').animate({opacity:0});\n    \n}\n\" tabindex=1 title=\"&Auml;ndra\"><img src=\"img/icons/change.png\" width=32 height=32/></button>\n\n<button id=\"CancelBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"CancelBut\" style=\"opacity:0\" onclick=\"\nvar id = document.getElementById('Id83");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value;\nif (id =='') {\n    id = $('#Id83");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('oldId');\n}\nApp3.Navigate2('local/Pages/Fadderbarn/'+id,{target:'AppPages'}); \n\" title=\"Avbryt\"><img src=\"img/icons/abort.png\" width=32 height=32/></button>\n\n<button id=\"ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"opacity:0\" class=\"SaveBut\" tabindex=20 onclick=\"\nvar fName;\nvar area = document.getElementById('FadderbarnTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\nswitch(jQuery(this).data('actionName')) {\n    case 'Search':\n        dataViews['Fadderbarns'].clearFilter();\n        jQuery('input,textarea', area).each(function(index,elm) {\n            var v = jQuery(elm).val();\n            var t = jQuery(elm).attr('type');\n            fName = jQuery(elm).attr('data-fieldName');\n            if (t == 'radio') {\n                if (jQuery(elm).attr('checked')) {\n                    dataViews['Fadderbarns'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                }\n            } else {\n                if (v != '') {\n                    if (fName) {\n                        if (jQuery(elm).hasClass('exactSearch')) {\n                            dataViews['Fadderbarns'].addFilter(fName.split('.').join('|'),'+',jQuery(elm).val());\n                        } else {\n                            dataViews['Fadderbarns'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                        }\n                    }  \n                }\n            }\n        });\n\n        dataViews['Fadderbarns'].firstRow({OnComplete:function() {\n        if (dataViews['Fadderbarns'].curRecordSet.Count > 0) {\n            var id = dataViews['Fadderbarns'].curRecordSet.Rows[0].Id;\n            App3.Navigate2('local/Pages/Fadderbarn/'+id,{target:'AppPages'}); \n        } else {\n            alert('Ingen tr&auml;ff');\n        }\n        //console.dir(dataViews['Fadderbarns'].curRecordSet);\n    },NoNewPage:function() {\n        alert('Ingen tr&auml;ff');\n     }\n    });\n    break;\n    case 'New':\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n            if (elm.value) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'Fadderbarn') {\n                        if (fName) {\n                            rec[fName[1]] = jQuery(elm).val();\n                        }\n                    }\n                }  \n            }\n        });\n        dataViews['Fadderbarns'].newRecord({\n            NewRecord:rec\n            ,OnComplete:function(response){\n                var r;\n                eval('r='+response);\n                dataViews['Fadderbarns'].dataChanged();\n                if (r.Status != 'Created') {\n                    alert('Save Failed');\n                } else {\n                    App3.Navigate2('local/Pages/Fadderbarn/' + r.NewId,{target:'AppPages',forceRead:true });\n                    //jQuery('.ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n                    //jQuery('input[data-fieldname=Fadderbarn.Id]').val(r['NewId']);\n                    //jQuery('#ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','save').html('Spara');\n                \n                }\n            }\n        });\n    break;\n    case 'Save':\n    case undefined:\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'Fadderbarn') {\n                        rec[fName[1]] = jQuery(elm).val();\n                    } \n            }\n        });\n		dataViews['Fadderbarns'].updateFields(rec,rec['Id'],function(response) {\n        jQuery('#EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n        if (console) console.info(response);\n    });\n    break; \n}\n//$('#CancelBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n//$('#ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n//$('#EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n\" title=\"Spara\"><img src=\"img/icons/save.png\" width=32 height=32/></button>\n\n<button id=\"setId");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\n    //assign this child a new number...\n    if (confirm('Vill du verkligen tilldela ett barn nummer?')) {\n        $.post('do/assignChildNumber.php',{\n            Id:document.getElementById('Id83");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n        },function(response) {\n            //refresh page..\n            var id = document.getElementById('Id83");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value;\n        App3.Navigate2('local/Pages/Fadderbarn/'+id,{target:'AppPages'}); \n            console.log(response);\n        });\n        /*dataViews['Fadderbarns'].updateFields({Status:'Inaktiv'},document.getElementById('Id83");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value,function(response) {\n            console.log(response);\n        });*/         \n    }\n\" title=\"tilldela Barnnr\"><img src=\"img/icons/setid.png\" width=32 height=32/></button>\n\n<!--<button class=\"Ta bort\" onclick=\"\nif (confirm('Vill du verkligen ta bort objektet?')) {\n    dataViews['Fadderbarns'].updateFields({Status:'Inaktiv'},document.getElementById('Id83");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value,function(response) {\n        console.log(response);\n    });         \n}\n\">Ta bort</button>-->\n\n<button class=\"ToolBut\" onclick=\"\nif (confirm('Vill du verkligen ta bort barnnr?')) {\n    $.post('do/inactiveChild.php',{\n        Id:document.getElementById('Id83");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n    },function(response) {\n        //refresh page..\n        var id = document.getElementById('Id83");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value;\n    App3.Navigate2('local/Pages/Fadderbarn/'+id,{target:'AppPages'}); \n    });\n    /*dataViews['Fadderbarns'].updateFields({Status:'Inaktiv'},document.getElementById('Id83");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value,function(response) {\n        console.log(response);\n    });*/         \n}\n\" title=\"Inaktiv\"><img src=\"img/icons/inactive.png\" width=32 height=32/></button>\n\n<button class=\"ToolBut\" onclick=\"\ndocument.getElementById('ExcelExport').src='do/fastExcel.php?_export=1' + dataViews.Fadderbarns.getQueryUrl();\n\" title=\"Export Excel\"><img src=\"img/icons/excel.png\" width=32 height=32/></button><iframe style=\"width:0px;height:0px;\" id=\"ExcelExport\" src=\"about:blank\"></iframe>\n\n<!--<button onclick=\"\ndocument.getElementById('RapportView').src='pdf/PdfInjection.php?datasource=photoReport&id=");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("';\n\">Rapport</button><iframe id=\"RapportView\" src=\"about:blank\" width=0 height=0 style=\"display:none;\"></iframe>-->\n\n<div style=\"position:absolute\"><div id=\"reportDropDown\" class=\"dropDown\" style=\"\n    position:relative;\n    left:800px;\n    width:200px;\n    display:none;\n    background: rgb(99, 99, 99);\nbackground: rgba(99, 99, 99, 0.9);\n\">\nInga rapporter</div>\n</div>\n<button class=\"ToolBut\" onclick=\"\n$('#reportDropDown').slideToggle();\n\" title=\"Rapport\"><img width=\"32\" height=\"32/\" src=\"img/file_pdf.png\"></button>\n\n<script>\ndataViews.CustomReports.clearFilter();\ndataViews.CustomReports.addFilter('Display','*','F,');\ndataViews.CustomReports.getList({\n    OnComplete:function(data,Recordset,DataView){\n        App3.Navigate2(\"local/Pages/reportListDropDown\"\n            ,{navTarget:'ReportList");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'\n            ,target:'reportDropDown");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'\n            ,entityId:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView\n        });\n    }\n});\n</script>\n<span component=\"Generic244\" task=\"Project4.Task\" class=\"TaskEdit4\"> </span>\n<br/>\n</center>\n</div>");
if (ns.data) {var r= ns.data;
 out.push("<table class=\"EditTable\" id=\"FadderbarnTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<tr><th colspan=\"5\">Uppgifter</th></tr>\n<tr><td>Barnnr</td><td><span id=\"BarnNum");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">");
try{d=r.Nbr;}catch(e){d=''}out.push(d);
 out.push("\n</span></td><td>Id:</td><td><input type=\"text\" id=\"Id83");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.Id\" value=\"");
try{d=r['Id']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td><td rowspan=\"6\" valign=\"top\">Noteringar:<br/><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap='on'  class=\"Editable\" tabindex=17 cols=\"54\" rows=\"10\" id=\"Notes95");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"  data-fieldName=\"Fadderbarn.Notes\">");
try{d=r.Notes;}catch(e){d=''}out.push(d);
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td></tr>\n<tr><td>Namn</td><td colspan=\"3\"><input type=\"text\" id=\"Name84");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.Name\" value=\"");
try{d=r['Name']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=1 /></td></tr>\n<tr><td><a class=\"ajaxLink\" href=\"Pages/Area/");
try{d=r.Area1;}catch(e){d=''}out.push(d);
 out.push("\">Omr&aring;de#</a>:</td><td><input type=\"text\" id=\"Area191");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.Area1\" value=\"");
try{d=r['Area1']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=2 size=14 /><button tabindex=2 onclick=\"\n$.post('do/lookupArea.php',{area:document.getElementById('Area191");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value},function(response) {\ntry {\n\nif (response=='false') {\nalert('Area '+document.getElementById('Area191");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value+ ' kunde inte hittas');\n} else {\nvar res;\neval('res='+response);\n\n//update fields from the area...\n$('#Area92");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(res['SocialWorkArea.Area']);\n$('#CountryCode94");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(res['SocialWorkArea.CountryCode']);\n//$('#SocialWorker99");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').html('<a class=ajaxLink href=Pages/SocialWorker/'+res['SocialWorker.Id']+'>'+res['SocialWorker.Name']+'</a>');\n$('#SocialWorker99");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').html(res['SocialWorker.Name']);\n$('input[TabIndex=5]').focus();\n}\n}catch(e) {\nalert('Area '+document.getElementById('Area191");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value+ ' kunde inte hittas');\n}\n});\n\">...</button></td><td>Omr&aring;de:</td><td><input type=\"text\" id=\"Area92");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.Area\" value=\"");
try{d=r['Area']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=3 /></td></tr>\n<tr><td>Landskod:</td><td><input type=\"text\" id=\"CountryCode94");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.CountryCode\" value=\"");
try{d=r['CountryCode']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=4 /></td><td>F&ouml;dd:</td><td><input type=\"text\" id=\"DOB87");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.DOB\" value=\"");
try{d=r['DOB']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=5 /></td></tr>\n<tr><td><a class=\"ajaxLink\" href=\"Pages/Giver/");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("\">Giv.nr</a>:</td><td><input type=\"text\" id=\"GiverId88");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.GiverId\" value=\"");
try{d=r['GiverId']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=6 /></td><td>Inkom:</td><td><input type=\"text\" id=\"TGdt93");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.TGdt\" value=\"");
try{d=r['TGdt']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=7 /></td></tr>\n<tr><td>Kr/M&aring;n:</td><td><input type=\"text\" id=\"Mkr90");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.Mkr\" value=\"");
try{d=r['Mkr']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=8 /></td><td>Reg:</td><td><input type=\"text\" id=\"RegDate364");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.RegDate\" value=\"");
try{d=r['RegDate']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=9 /></td></tr>\n<tr><td>Projekt</td><td><input type=\"text\" id=\"ProjectId366");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.ProjectId\" value=\"");
try{d=r['ProjectId']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=10 /></td><td>B&ouml;rjat:</td><td><input type=\"text\" id=\"HelpD89");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.HelpD\" value=\"");
try{d=r['HelpD']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=12 /></td><td rowspan=\"5\">Egna Noteringar:<br/><text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap='on'  class=\"Editable\" tabindex=18 cols=\"54\" rows=\"4\" id=\"OwnNotes98");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"  data-fieldName=\"Fadderbarn.OwnNotes\">");
try{d=r.OwnNotes;}catch(e){d=''}out.push(d);
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td></tr>\n\n<tr><td>Faderns namn:</td><td><input type=\"text\" id=\"FathersName85");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.FathersName\" value=\"");
try{d=r['FathersName']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=13 /></td><td>Social Worker</td><td><span id=\"SocialWorker99");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"><a class=\"ajaxLink\" href=\"Pages/SocialWorker/");
try{d=r.SocialWorkerId;}catch(e){d=''}out.push(d);
 out.push("\">");
try{d=r['SocialWorker'];}catch(e){d=''}out.push(d);
 out.push("</a></span></td></tr>\n<tr><td>Moderns namn:</td><td><input type=\"text\" id=\"MothersName86");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.MothersName\" value=\"");
try{d=r['MothersName']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=15 /></td><td>Guardian:</td><td><input type=\"text\" id=\"Guardian214");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.Guardian\" value=\"");
try{d=r['Guardian']||'';}catch(e){d=''}out.push(d);
 out.push("\" size=12 tabindex=16 /></td></tr>\n<tr><td>Tags:</td><td><input type=\"text\" id=\"Tags696");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Fadderbarn.Tags\" value=\"");
try{d=r['Tags']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td><td></td><td></td>\n</table>\n<script>\n$('#Tags696");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').tagsInput({\n   height:'20px'\n    ,width:'auto'\n   ,'defaultText':'add tag'\n   ,'removeWithBackspace' : true\n   ,'maxChars':90\n    ,interactive:false\n    ,'delimiter':','\n});\n</script>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<script>\ndataViews.Fadderbarns.getRecord({\n    Id:'");
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
 out.push("\n\n<script>\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = true;\n        break;\n    default:\n        if (el['data-fieldname'] == 'Fadderbarn.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = true;\n            } else {\n                el.readOnly = true;\n            }\n        }\n   }\n});\n</script><div><div style=\"float:left;width:80px;align:top;\">");

if (ns.data) {
    var nbr = ns.data['Nbr'];
}

 out.push("\n<br style=\"clear:both\"/>\n<script>\ndataViews.CustomReports.clearFilter();\ndataViews.CustomReports.addFilter('Display','*','F,');\ndataViews.CustomReports.getList({\n    OnComplete:function(data,Recordset,DataView){\n        App3.Navigate2(\"local/Pages/reportListDropDown\"\n            ,{navTarget:'pageReportList'\n            ,target:'reportDropDown'\n            ,entityId:'");
try{d=nbr;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView\n        });\n    }\n});\n</script></div><div style=\"float:left;width:260px;margin-left:15px;align:top;\">\n");
if(r){
 out.push("\n<div id=\"FadderbarnActionsDetail689");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"\"><img src=\"img/AjaxLoading.gif\"/></div>\n<script>\ndataViews.FadderbarnActions.clearFilter();\ndataViews.FadderbarnActions.setFilter('entityId','=','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("');\ndataViews.FadderbarnActions.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"local/Pages/FadderbarnActions\",{target:'FadderbarnActionsDetail689");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView,entityId:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',entityName:'Fadderbarn'});}});\n</script>\n");
}
 out.push("\n\n</div><div style=\"float:left;width:240px;margin-left:15px;align:top;\">");
if(r){
 out.push("\n<div id=\"FadderbarnGiver");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"><img src=\"img/AjaxLoading2.gif\"/></div>\n<script>\ndataViews.FadderbarnGivers.getRecord({\nId:'");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("'\n,PK:'");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("'\n,OnComplete:function(Record){\nApp3.Navigate2('local/Pages/FadderbarnGiver?Id=");
try{d=r.GiverId;}catch(e){d=''}out.push(d);
 out.push("',\n{target:'FadderbarnGiver");
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
 out.push("</div><script>\ndocument.title = $('<div/>').html(\"Fadderbarn ");
try{d=ns.data['Nbr'];}catch(e){d=''}out.push(d);
 out.push(" ");
try{d=ns.data['Name'];}catch(e){d=''}out.push(d);
 out.push("\").text();\n</script>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
