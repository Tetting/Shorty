function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("\n<script>\n$j('#DocEditText2').css('width',$j('#DocsMain3').width()-$j('#Sidebar2').width()-40);\n$j('#DocEditText2').css('height',$j('#DocsMain3').height()-86);\n\n\n docEditor2 = new nicEditor({\n    \niconsPath:'js/lib/nicEditorIcons.gif'\n    ,buttonList : [\n        \n'save'\n        ,'cancel'\n        ,'bold','italic','underline'\n \n       /*,'left','center','right','justify'*/\n        ,'ol','ul'\n \n       /*,'fontSize','fontFamily','fontFormat'*/\n        \n/*,'indent','outdent'*/\n        ,'image'\n        ,'link','unlink'\n\n        ,'forecolor','bgcolor'\n    ]\n    ,onSave:function(content,id,instance)\n {\n      $j.post('docs.php',{\n          SaveName:document.getElementById('DocsPage2').value\n\n          ,Contents:content\n      },function(response) {\n  \n      docEditor2.removeInstance('DocEditText2');\n        \nApp.displayDoc(document.getElementById('DocsPage2').value);\n  \n      $j('.nicEdit-pane').remove();\n        window.setTimeout(\"$j('.nicEdit-pane').remove();\",200);\n\n        //window.setTimeout(\"docEditor2.removeInstance('DocEditText2');App.displayDoc(document.getElementById('DocsPage2').value);\",200);\n\n      })\n    },onCancel:function(id,instance) {\n        \ndocEditor2.removeInstance('DocEditText2');    \n        \nApp.displayDoc(document.getElementById('DocsPage2').value);\n  \n      $j('.nicEdit-pane').remove();\n        window.setTimeout(\"$j('.nicEdit-pane').remove();\",200);\n\n    }\n}).panelInstance('DocEditText2');\n        \n$j.get('docs.php',{\n\n   EditName:document.getElementById('DocsPage2').value\n},function(response)\n {\n    //document.getElementById('DocEditText2').value=response;\n\n    docEditor2.instanceById('DocEditText2').setContent(response);\n   \n docEditor2.instanceById('DocEditText2').elm.focus();\n    \n$j('#DocsEdit2').hide();\n}\n);\n</script>\n<text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push("\n id=\"DocEditText2\"></text");
try{d='area';}catch(e){d=''}out.push(d);
 out.push(">\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
