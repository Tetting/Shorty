function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("");

ns.EditClass = '';
if (ns.data && ns.data.Status == 'Inaktiv') {
    ns.EditClass='Inaktiv';
}
 out.push("<div id=\"viewWrap");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"");
try{d=ns.EditClass;}catch(e){d=''}out.push(d);
 out.push("\"><div id=\"viewBar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"EditIcons\" style=\"padding-left: 0px; width: 100%;\">\n\n<span style=\"margin-right:30px;\" component=\"Generic146\" task=\"Project4.Task\" class=\"GiversBigIcon BigIcon TaskEdit4\">Givare</span>\n");

if (typeof(dataViews.Givers.curRecordSet.Count) != 'undefined') {
if (typeof(dataViews.Givers.curRecordSet.start) != 'undefined') {
if (typeof(dataViews.Givers.curRecordSet.rPos) != 'undefined') {
if (dataViews.Givers.filterActive) {
    o.push(dataViews.Givers.curRecordSet.start + dataViews.Givers.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Givers.curRecordSet.filteredCount);
} else {
    o.push(dataViews.Givers.curRecordSet.start + dataViews.Givers.curRecordSet.rPos + 1);
    o.push(' av ');
    o.push(dataViews.Givers.curRecordSet.Count);
}
}
}
}

 out.push("\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Givers'].firstRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'undefined',target:target});\n        }});\" title=\"F&ouml;rsta\"><span class=\"RecordsetFirstIcon EditIcon\"> </span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Givers'].previousRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Givers',target:target});\n        },NoNewPage:function(){\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"F&ouml;reg&aring;ende\"><span class=\"RecordsetPreviousIcon EditIcon\"> </span></a>\n    \n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Givers'].nextRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Givers',target:target});\n        },NoNewPage:function() {\n            $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n        }});\" title=\"N&auml;sta\"><span class=\"RecordsetNextIcon EditIcon\"> </span></a>\n    <a onclick=\"\n        $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n        dataViews['Givers'].lastRow({IdField:'Id',OnComplete:function(Id){\n            //reload ourselves...\n            var target = 'AppPages';\n            var l = jQuery('#'+target).prop('loc').split('/');\n            var oldId = l.pop();\n            App3.Navigate2(l.join('/')+'/'+Id,{View:'Givers',target:target});\n        }});\" title=\"Sista\"><span class=\"RecordsetLastIcon EditIcon\"> </span></a>\n\n<span class=\"ListIcon EditIcon\" style=\"margin-left: 40px;\">\n        <a class=\"ajaxLink\" href=\"Pages/Givers\">Lista</a>\n    </span>\n    \n    <span style=\"padding-left: 40px;\" id=\"Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"> </span>\n    <span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"Generic146\"> </span>\n\n<button class=\"SearchBut ToolBut\" onclick=\"\ndataViews['Givers'].clearFilter();\nApp3.Navigate2('local/Pages/GiverSearch',{target:'AppPages',newSearch:true});\n\" class=\"SearchBut\" title=\"Ny s&ouml;kning\"><img src=\"img/icons/search.png\" width=32 height=32/></button>\n\n<button id=\"NewBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"NewBut\" onclick=\"\n$('#Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('oldId',$('#Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\ndocument.getElementById('EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\njQuery('#GiverTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" input').each(function(index,elm) {\n    switch(elm.type) {\n        case 'radio':\n        break;\n        default:\n            elm.value = '';\n        break;\n    }\n});\njQuery('#GiverTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" textarea').each(function(index,elm) {\n    elm.value = '';\n});\njQuery('#StartD77");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(App.Today());\n\njQuery('#ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').attr('title','Skapa');\n\" title=\"Ny\"><img src=\"img/icons/new.png\" width=32 height=32/></button>\n\n<button id=\"CopyBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"CopyBut\" onclick=\"\n    $('#Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('oldId',$('#Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val());\n    document.getElementById('EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n    var s = String.fromCharCode(39)+'Giver.Id'+String.fromCharCode(39);\n    jQuery('input[data-fieldname='+s+']').val('');\n    var d = new Date();\n    var dd = d.getFullYear();\n    var m = d.getMonth()+1;\n    if (m<10) m= '0'+m;\n    var da = d.getDate();\n    if (da<10) da='0'+da;\n    jQuery('#StartD77");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').val(dd+'-'+m+'-'+da);\n    jQuery('#ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('actionName','New').attr('title','skapa');\n\" title=\"Kopiera\"><img src=\"img/icons/copy.png\" width=32 height=32/></button>\n\n<button class=\"ChangeBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push(" EditBut\" id=\"EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onclick=\"\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = !el.disabled;\n        break;\n    default:\n        if (el.getAttribute('data-fieldname') == 'Giver.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = !el.disabled;\n            } else {\n                el.readOnly = !el.readOnly;\n            }\n        }\n   }\n});\n$('.tagsinput').each(function(){\n    var id = $(this).attr('id');\n    id = id.substr(0,id.length-10);\n    $j('#'+id).interactiveTags();\n});\n/*\nif ($('#EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').css('opacity')==0) {\n    $('#NewBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    $('#CopyBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    $('#EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    $('.ToolBut').animate({opacity:1});\n    \n    $('#CancelBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    $('#ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    \n} else {\n    $('#CancelBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    $('#ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:1});\n    $('#NewBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    $('.ToolBut').animate({opacity:0});\n    $('#CopyBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    $('#EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').animate({opacity:0});\n    //also focus the first field...\n    $('.EditTable').find('input').eq(0).focus();                \n}\n*/\nif ($('#editingBar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').css('display') == 'none') {\n    $('#viewBar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').css({opacity:0,display:'none'});\n    $('#editingBar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').css({opacity:0,display:''}).animate({opacity:1});\n} else {\n    $('#editingBar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').css({opacity:0,display:'none'});\n    $('#viewBar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').css({opacity:0,display:''}).animate({opacity:1});\n\n}\n\" tabindex=2 title=\"&Auml;ndra\"><img src=\"img/icons/change.png\" width=32 height=32/></button>\n\n<!--<button class=\"Ta bort\" onclick=\"\nif (confirm('Vill du verkligen ta bort objektet?')) {\n    dataViews['Givers'].updateFields({Status:'Inaktiv'},document.getElementById('Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value,function(response) {\n         $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').addClass('ajaxLoading');\n         dataViews['Givers'].nextRow({IdField:'Id',OnComplete:function(Id){\n             //reload ourselves...\n             var target = 'AppPages';\n             var l = jQuery('#'+target).prop('loc').split('/');\n             var oldId = l.pop();\n             App3.Navigate2(l.join('/')+'/'+Id,{View:'Givers',target:target});\n         },NoNewPage:function(){\n             $j('#Toolbar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').removeClass('ajaxLoading');\n         }});\n\n    });         \n}\n\">Ta bort</button>-->\n\n\n\n<!--<button onclick=\"\ndocument.getElementById('ExcelExport').src='do/excelExport.php?_export=1' + dataViews.Givers.getQueryUrl();\n\">Excel</button>-->\n\n<button class=\"ToolBut\" onclick=\"\ndocument.getElementById('ExcelExport').src='do/fastExcel.php?_export=1' + dataViews.Givers.getQueryUrl();\n\" title=\"Excel\"><img src=\"img/icons/excel.png\" width=32 height=32/></button><iframe src=\"about:blank\" id=\"ExcelExport\" style=\"width:0px;height:0px;\"></iframe>\n\n<div style=\"position:absolute\"><div id=\"reportDropDown");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"dropDown\" style=\"\n    position:relative;\n    left:600px;\n    width:200px;\n    display:none;\n    background: rgb(99, 99, 99);\nbackground: rgba(99, 99, 99, 0.9);\n\">\nInga rapporter</div>\n</div>\n<button class=\"ToolBut\" onclick=\"\n$('#reportDropDown");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').slideToggle();\n\" title=\"Rapport\"><img width=\"32\" height=\"32/\" src=\"img/file_pdf.png\"></button>\n<script>\n\ndataViews.CustomReports.clearFilter();\ndataViews.CustomReports.addFilter('Display','*','G,');\ndataViews.CustomReports.getList({\n    OnComplete:function(data,Recordset,DataView){\n        App3.Navigate2(\"local/Pages/reportListDropDown\"\n            ,{navTarget:'ReportList");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'\n            ,target:'reportDropDown");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("'\n            ,entityId:'");
try{d=ns.Id;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView\n        });\n    }\n});\n</script>\n</div>\n<div id=\"editingBar");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"display:none;\">\n<span style=\"margin-right:30px;\" component=\"Generic146\" task=\"Project4.Task\" class=\"GiversBigIcon BigIcon TaskEdit4\">Givare</span>\n<span style=\"width:300px;display:inline-block;\">&nbsp;</span>\n<button id=\"CancelBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"CancelBut\" style=\"\" onclick=\"\nvar id = document.getElementById('Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value;\nif (id =='') {\n    id = $('#Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').data('oldId');\n}\nApp3.Navigate2('local/Pages/Giver/'+id,{target:'AppPages'}); \n\" title=\"Avbryt\"><img src=\"img/icons/abort.png\" width=32 height=32/></button>\n\n<button id=\"ActionBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"SaveBut\" style=\"\" tabindex=20 onclick=\"\nvar fName;\nvar saveEntity = 'Giver';\nvar area = document.getElementById('GiverTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("');\nswitch(jQuery(this).data('actionName')) {\n    case 'Search':\n        dataViews['Givers'].clearFilter();\n        jQuery('input,textarea', area).each(function(index,elm) {\n            var v = jQuery(elm).val();\n            var t = jQuery(elm).attr('type');\n            fName = jQuery(elm).attr('data-fieldName');\n            if (t == 'radio') {\n                if (jQuery(elm).attr('checked')) {\n                    dataViews['Givers'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                }\n            } else {\n                if (v != '') {\n                    if (fName) {\n                        if (jQuery(elm).hasClass('exactSearch')) {\n                            dataViews['Givers'].addFilter(fName.split('.').join('|'),'+',jQuery(elm).val());\n                        } else {\n                            dataViews['Givers'].addFilter(fName.split('.').join('|'),'*',jQuery(elm).val());\n                        }\n                    }  \n                }\n            }\n        });\n\n        dataViews['Givers'].firstRow({OnComplete:function() {\n        if (dataViews['Givers'].curRecordSet.Count > 0) {\n            var id = dataViews['Givers'].curRecordSet.Rows[0].Id;\n            App3.Navigate2('local/Pages/Giver/'+id,{target:'AppPages'}); \n        } else {\n            alert('Ingen tr&auml;ff');\n        }\n        //console.dir(dataViews['Givers'].curRecordSet);\n    },NoNewPage:function() {\n        alert('Ingen tr&auml;ff');\n     }\n    });\n    break;\n    case 'New':\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n            //if (elm.value) {\n                fName = jQuery(elm).attr('data-fieldName');\n                if (fName) {\n                    fName = fName.split('.');\n                    if (fName[0] == 'Giver') {\n                        if (fName) {\n                            switch(elm.type) {\n                                case 'radio':\n                                console.log('radio',fName[1],jQuery(elm).attr('checked'),jQuery(elm).val(),elm);\n                                     if (jQuery(elm).attr('checked')) {\n				        //take this value\n					rec[fName[1]] = jQuery(elm).val();\n				    }\n                                break;\n                                default:\n                                    rec[fName[1]] = jQuery(elm).val();\n                                break;\n                            }\n                        }\n                    }\n                }  \n            //}\n        });\n        dataViews['Givers'].newRecord({\n            NewRecord:rec\n            ,OnComplete:function(response){\n                var r;\n                eval('r='+response);\n                dataViews['Givers'].dataChanged();\n                if (r.Status != 'Created') {\n                    alert('Save Failed');\n                } else {\n                    App3.Navigate2('local/Pages/Giver/' + r.NewId,{target:'AppPages',forceRead:true });\n                }\n            }\n        });\n    break;\n    case 'Save':\n    case undefined:\n        var rec = {};\n        jQuery('input,textarea',area).each(function(index,elm) {\n			fName = jQuery(elm).attr('data-fieldName');\n            if (fName) {\n			   fName = fName.split('.');\n			   if (fName[0] == 'Giver') {     \n				   switch(elm.type) {\n					   case 'radio':\n						   if (jQuery(elm).attr('checked')) {\n							   //take this value\n							   rec[fName[1]] = jQuery(elm).val();\n							}\n						break;\n						default:\n							rec[fName[1]] = jQuery(elm).val();\n						break;\n					}\n				} \n            }       \n        });\n        dataViews['Givers'].updateFields(rec,rec['Id'],function(response) {\n        jQuery('#EditBut");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').click();\n        if (console) console.info(response);\n                //go back to an unedited state.\n                /*\n                jQuery('input,textarea',area).each(function(index,el){ \n        	switch(el.type) {    \n        		case 'radio':         \n        			el.disabled = !el.disabled;         \n        		break;\n        		default:\n        		if (el.getAttribute('data-fieldname') == 'Giver.Id') {\n        			//never allowed to edit the id         \n        		} else {\n        		if ($j(el).is('.dateEdit')) {\n        			el.disabled = !el.disabled;             \n        		} else {\n        			el.readOnly = !el.readOnly;\n        		}\n        	}\n            }\n         });  */\n    });\n    break; \n}\n\" title=\"Spara\"><img src=\"img/icons/save.png\" width=32 height=32/></button>\n\n</div>");
if (ns.data) {var r= ns.data;
 out.push("<table class=\"EditTable ");
try{d=ns.EditClass;}catch(e){d=''}out.push(d);
 out.push("\" id=\"GiverTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<thead><tr><th colspan=\"7\">Givare <span component=\"CustomFieldDisplay65\" task=\"Project4.Task\" class=\"TaskEdit4\"> </span></th></tr></thead>\n<tr>\n<td style=\"text-align:right\">Namn:</td><td><input type=\"text\" id=\"Name67");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Giver.Name\" value=\"");
try{d=r['Name']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=3 size=30 /></td>\n<td style=\"text-align:right\">Nr:</td><td><input type=\"text\" id=\"Id66");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Giver.Id\" value=\"");
try{d=r['Id']||'';}catch(e){d=''}out.push(d);
 out.push("\"  disabled='true' size=12 /></td>\n<td style=\"text-align:right\">Reg:</td><td><input type=\"text\" id=\"StartD77");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Giver.StartD\" value=\"");
try{d=r['StartD']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=13 size=8 /></td>\n<td valign=\"top\" rowspan=\"6\">\nNoteringar<br/>\n<text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(" wrap='on'  class=\"Editable\" tabindex=18 cols=\"32\" rows=\"10\" id=\"Notes80");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"  data-fieldName=\"Giver.Notes\">");
try{d=r.Notes;}catch(e){d=''}out.push(d);
 out.push("</text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Efternamn:</td><td><input type=\"text\" id=\"LastName351");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Giver.LastName\" value=\"");
try{d=r['LastName']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=4 size=30 /></td>\n<td style=\"text-align:right\">Landskod:</td><td><input type=\"text\" id=\"Land71");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Giver.Land\" value=\"");
try{d=r['Land']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=8 size=12 /></td>\n<td style=\"text-align:right\">Tidning</td><td><label for=\"Paper75\"><input type=\"radio\" tabindex=14  id=\"Paper75");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"1\" name=\"Paper75\" data-fieldName=\"Giver.Paper\" ");
if(r['Paper']==1){out.push('checked');}
 out.push(" /> Ja</label> <br/>\n<label for=\"Paper75\"><input tabindex=14  type=\"radio\" value=\"0\" name=\"Paper75\" data-fieldName=\"Giver.Paper\" ");
if(r['Paper']==0){out.push('checked');}
 out.push(" /> Nej</label>\n\n</td>\n</tr>\n<tr>\n<td style=\"text-align:right\">c/o</td><td><input type=\"text\" id=\"CoAddress148");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Giver.CoAddress\" value=\"");
try{d=r['CoAddress']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=5 size=30 /></td>\n<td style=\"text-align:right\">Telefon:</td><td><input type=\"text\" id=\"Tel72");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Giver.Tel\" value=\"");
try{d=r['Tel']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=9 size=12 /></td>\n<td style=\"text-align:right\">Medlem:</td><td><label for=\"Member76\"><input type=\"radio\" tabindex=15  id=\"Member76");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"1\" name=\"Member76\" data-fieldName=\"Giver.Member\" ");
if(r['Member']==1){out.push('checked');}
 out.push(" /> Ja</label> <br/>\n<label for=\"Member76\"><input tabindex=15  type=\"radio\" value=\"0\" name=\"Member76\" data-fieldName=\"Giver.Member\" ");
if(r['Member']==0){out.push('checked');}
 out.push(" /> Nej</label>\n\n</td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Adress:</td><td><input type=\"text\" id=\"Address68");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Giver.Address\" value=\"");
try{d=r['Address']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=5 size=30 /></td>\n<td style=\"text-align:right\">Mobiltel:</td><td><input type=\"text\" id=\"Mob73");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Giver.Mob\" value=\"");
try{d=r['Mob']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=10 size=12 /></td>\n<td style=\"text-align:right\">Brev</td><td><label for=\"Letter372\"><input type=\"radio\" tabindex=16  id=\"Letter372");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" value=\"1\" name=\"Letter372\" data-fieldName=\"Giver.Letter\" ");
if(r['Letter']==1){out.push('checked');}
 out.push(" /> Ja</label> <br/>\n<label for=\"Letter372\"><input tabindex=16  type=\"radio\" value=\"0\" name=\"Letter372\" data-fieldName=\"Giver.Letter\" ");
if(r['Letter']==0){out.push('checked');}
 out.push(" /> Nej</label>\n\n</td>\n</tr>\n<tr>\n<td style=\"text-align:right\">PostNr:</td><td><input type=\"text\" id=\"ZipCode69");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Giver.ZipCode\" value=\"");
try{d=r['ZipCode']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=6 size=30 /></td>\n<td style=\"text-align:right\">Status:</td><td>\n<select class=\"Editable\" id=\"Status79");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" onchange=\"EditInPlace4.quickSave('Givers.Status','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',this.value)\">\n\n<option value=\"Aktiv\" ");
if (r.Status=='Aktiv'){o.push('selected');}
 out.push(">Aktiv</option>\n\n<option value=\"Inaktiv\" ");
if (r.Status=='Inaktiv'){o.push('selected');}
 out.push(">Inaktiv</option>\n\n</select></td>\n<td style=\"text-align:right\"></td><td></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">PostOrt:</td><td><input type=\"text\" id=\"ZipTown81");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Giver.ZipTown\" value=\"");
try{d=r['ZipTown']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=7 size=30 /></td>\n<td style=\"text-align:right\">PersonNr:</td><td><input type=\"text\" id=\"PersonNbr352");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Giver.PersonNbr\" value=\"");
try{d=r['PersonNbr']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=12 size=12 /></td>\n<td style=\"text-align:right\">Tags</td><td colspan=\"2\"><input type=\"text\" id=\"Tags693");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Giver.Tags\" value=\"");
try{d=r['Tags']||'';}catch(e){d=''}out.push(d);
 out.push("\"  /></td>\n</tr>\n<tr>\n<td><a href=\"mailto:");
try{d=r.Email;}catch(e){d=''}out.push(d);
 out.push("\">Epost</a>:</td><td><input type=\"text\" id=\"Email74");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Giver.Email\" value=\"");
try{d=r['Email']||'';}catch(e){d=''}out.push(d);
 out.push("\" tabindex=11 size=30 /></td><td></td><td></td><td></td><td></td><td></td></tr>\n</tr>\n</table>\n<script>\n$('#Tags693");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').tagsInput({\n   height:'20px'\n    ,width:'auto'\n   ,'defaultText':'add tag'\n   ,'removeWithBackspace' : true\n   ,'maxChars':90\n    ,interactive:false\n    ,'delimiter':','\n});\n</script>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<script>\ndataViews.Givers.getRecord({\n    Id:'");
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
 out.push("\n\n");
if (r) {
 out.push("<center><div id=\"Summary");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></div></center>\n\n<script>\n$j.get('do/paymentSummary.php',{GiverId:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("'},function(response) {\n    var r;\n    eval('r=' + response);\n    o = [];\n    var o4 = [];\n    var o5 = [];\n    o.push('<table class=EditTable><tr><th colspan=14><span component=\"Generic210\" task=\"Project4.Task\" class=\"TaskEdit4\">Inbetalt</span></th></tr>');\n    o4.push('<tr>');\n    o5.push('<tr>');\n    for(var i=0;i<r.length;i++) {\n        switch(i) {\n        case 12:\n            o4.push('<td>12 m&aring;n</td>');\n            break;\n        case 13:\n            o4.push('<td>inbet totalt</td>');\n            break;\n        default:\n            o4.push('<td>' + r[i].name + '</td>');\n        }\n        o5.push('<td>' + dataConvert.toSEK(r[i].tot) + '</td>');\n    }\n    o4.push('</tr>');\n    o5.push('</tr>');\n    o.push(o4.join(''));\n    o.push(o5.join(''));\n    o.push('</table>');  \n    document.getElementById('Summary");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').innerHTML = o.join('');\n});\n</script>\n");
}
 out.push("");
if(ns.data) {
 out.push("<div style=\"float:left;\">\n<div id=\"giverProjectStats\"></div>\n</div>\n<script>\n$.get('do/giverProjectStats.php',{GiverId:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("'},function(resp) {\n    //$('#giverProjectStats').html(resp);\n    var dat;\n    eval(\"dat = \"+resp);\n    App3.Navigate2(\"local/Pages/GiverProjectStats\",{navTarget:'giverProjectStats',target:'giverProjectStats',Id:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("',data:dat });\n});\n</script>\n");
}
 out.push("\n");
if(r){
 out.push("\n<div id=\"GiverFadderbarnDetail145");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"width:600px;float:left;margin-left:4px;\"><img src=\"img/AjaxLoading.gif\"/></div>\n<script>\ndataViews.GiverFadderbarns.clearFilter();\ndataViews.GiverFadderbarns.setFilter('GiverId','=','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("');\ndataViews.GiverFadderbarns.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"local/Pages/GiverFadderbarns\",{target:'GiverFadderbarnDetail145");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView,GiverId:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("' });}});\n</script>\n");
}
 out.push("\n\n<br style=\"clear:both;height:2px;\"/><table><tr><td valign=\"top\">\n");
if(r){
 out.push("\n<div id=\"GiverPaymentsDetail208");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"\"><img src=\"img/AjaxLoading.gif\"/></div>\n<script>\ndataViews.GiverPayments.clearFilter();\ndataViews.GiverPayments.setFilter('GiverId','=','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("');\ndataViews.GiverPayments.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"local/Pages/GiverPayments\",{target:'GiverPaymentsDetail208");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView,GiverId:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("'});}});\n</script>\n");
}
 out.push("\n\n</td><td valign=\"top\">\n");
if(r){
 out.push("\n<div id=\"GiverPromises879");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"\"><img src=\"img/AjaxLoading.gif\"/></div>\n<script>\ndataViews.GivProjPromisess.clearFilter();\ndataViews.GivProjPromisess.setFilter('GiverId','=','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("');\ndataViews.GivProjPromisess.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"local/Pages/GivProjPromisess\",{target:'GiverPromises879");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView,GiverId:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("'});}});\n</script>\n");
}
 out.push("\n\n</td></tr></table>\n\n");
if(r){
 out.push("\n<div id=\"GiverEvangelistsDetail444");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"\"><img src=\"img/AjaxLoading.gif\"/></div>\n<script>\ndataViews.GiverEvangelists.clearFilter();\ndataViews.GiverEvangelists.setFilter('GiverId','=','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("');\ndataViews.GiverEvangelists.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"local/Pages/GiverEvangelists\",{target:'GiverEvangelistsDetail444");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView,GiverId:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("'});}});\n</script>\n");
}
 out.push("\n\n\n");
if(r){
 out.push("\n<div id=\"GiverCaravanDetail623");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" style=\"\"><img src=\"img/AjaxLoading.gif\"/></div>\n<script>\ndataViews.GiverCaravans.clearFilter();\ndataViews.GiverCaravans.setFilter('GivNr','=','");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("');\ndataViews.GiverCaravans.getList({OnComplete:function(data,Recordset,DataView){App3.Navigate2(\"local/Pages/GiverCaravans\",{target:'GiverCaravanDetail623");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("',data:data,Recordset:Recordset,DataView:DataView,GivNr:'");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("'});}});\n</script>\n");
}
 out.push("\n\n<script>\njQuery('input,textarea',document.getElementById('AppPages')).each(function(index,el){\nswitch(el.type) {\n    case 'radio':\n        el.disabled = true;\n        break;\n    default:\n        if (el['data-fieldname'] == 'Giver.Id') {\n            //never allowed to edit the id\n        } else {\n            if ($j(el).is('.dateEdit')) {\n                el.disabled = true;\n            } else {\n                el.readOnly = true;\n            }\n        }\n   }\n});\n</script><div id=\"ReportList");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"></div>\n</div><script>\ndocument.title = $('<div/>').html(\"Givare ");
try{d=ns.data['Name'];}catch(e){d=''}out.push(d);
 out.push(" ");
try{d=ns.data['LastName'];}catch(e){d=''}out.push(d);
 out.push("\").text();\n</script>");

if (ns.Id=='ny' && ns.data) {
    setTimeout("$('.NewBut').click();",20);
}

 out.push("\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
