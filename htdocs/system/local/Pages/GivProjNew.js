function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"GivProjsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"GivProjNew_ProtoHeader\">G&aring;vor</span> \n\n<span class=\"EditIcons\"></span><br/>\n<span class=\"EditIcons\">\n    <span class=\"ListIcon EditIcon\">\n        <a class=\"ajaxLink\" target=\"AppPages\" href=\"/Pages/Giver/");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("\">Lista</a>\n    </span>\n</span>\n\n<table class=\"EditTable\" >\n<thead>\n    <tr><th colspan='2'><center><span class=\"TaskEdit4\" task=\"Project4.Task\" component=\"GivProjNew_fields\">Uppgifter</span></center></th></tr>\n</thead>\n<tbody>\n\n<tr><td><label>Givare</label>:</td><td><input id=\"GivProj_GiverId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("\"/></td></tr>\n\n<tr><td><label>B&ouml;rjat</label>:</td><td><input id=\"GivProj_StartDt_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\" value=\"\"/>\n<script>$j('#GivProj_StartDt_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').date_input();</script>\n</td></tr>\n\n<tr><td><label>Kr/m&aring;n</label>:</td><td><input id=\"GivProj_KrMon_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n<tr><td><label>Projekt#</label>:</td><td><input id=\"GivProj_ProjectId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" type=\"text\"  value=\"\"/></td></tr>\n\n</tbody>\n\n\n<script>\ntry {\ndocument.getElementById('GivProj_GiverId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').focus();\n} catch(e) {\n//no problem.\n}\n</script>\n<tr><td>Projekt Typ:</td><td><select id=\"ProjectType");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<option>Vanlig</option>\n<option ");
if (ns['typ']&&ns['typ']=='Fadderbarn'){o.push('selected');}
 out.push(">Fadderbarn</option>\n<option ");
if (ns['typ']&&ns['typ']=='Evangelist'){o.push('selected');}
 out.push(">Evangelist</option>\n</select></td></tr>\n<tr><td>Fadderbarn Nr/Evangelist Nr</td><td><input type=\"text\" id=\"ProjectTypeId");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\"/></td></tr>\n<tr><td colspan=2><center><button onclick=\"\nvar gId = '");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("';\nif (!gId) gId = document.getElementById('GivProj_GiverId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value;\nvar nbr;\nvar params;\nif (document.getElementById('ProjectType");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value == 'Vanlig') {\n    nbr = document.getElementById('GivProj_ProjectId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value;\n    params = {Id:nbr,type:document.getElementById('ProjectType");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value};\n} else {\n    nbr = document.getElementById('ProjectTypeId");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value;\n    params = {Id:nbr,Project:document.getElementById('GivProj_ProjectId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value,type:document.getElementById('ProjectType");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value};\n}               \n$.post('do/lookupId.php',params,function(response) {\nswitch(response) {\n    case 'Inaktiv':\n        if (document.getElementById('ProjectType");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value == 'Vanlig') {\n            alert('Projekt:'+nbr+' Inaktiv!');\n        } else {\n            alert(document.getElementById('ProjectType");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value+':'+nbr+' Inaktiv!');\n        }\n    break;\n    case 'InaktivProjekt':\n        alert('Projekt:'+document.getElementById('GivProj_ProjectId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value+' Inaktiv!');\n    break;\n    case 'notFound':\n        alert(document.getElementById('ProjectType");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value+':'+nbr+' hittades inte');\n    break;\n    default:\n         var barnId = response;\n dataViews.GivProjs.newRecord({ \n    NewRecord:{ \n        GiverId:document.getElementById('GivProj_GiverId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n        ,StartDt:document.getElementById('GivProj_StartDt_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value \n        ,KrMon:document.getElementById('GivProj_KrMon_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value.replace(',','.')\n        ,ProjectId:document.getElementById('GivProj_ProjectId_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value  \n     },OnComplete:function(response){  \n        //document.getElementById('NewGivProj_Name181').value = ''; \n        //document.getElementById('NewGivProj_Name181').focus(); \n        dataViews.GivProjs.dataChanged(); \n        switch(document.getElementById('ProjectType");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value) {\n            case 'Fadderbarn':\n            case 'Evangelist':\n                 $.post('do/updateGiver.php',{\n                    type:document.getElementById('ProjectType");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n                    ,giverId:gId\n                    ,typeId:barnId\n                    ,StartDt:document.getElementById('GivProj_StartDt_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value \n                   ,KrMon:document.getElementById('GivProj_KrMon_New");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("').value\n                },function(response) {\n                    App3.Navigate2('local/Pages/Giver/'+gId,{target:'AppPages',forceRead:true });  \n                });\n            break;\n            default:\n                 App3.Navigate2('local/Pages/Giver/'+gId,{target:'AppPages',forceRead:true });  \n            break;\n        }\n    } \n}); \n}\n});\n\">L&auml;gg till</button></center></td></tr>\n</table>\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
