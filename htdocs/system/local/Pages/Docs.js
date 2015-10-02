function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<input type=\"hidden\" id=\"DocsPage2\" onchange=\"console.warn('doc changed:',this.value);\" value=\"Home\"/>\n<div id=\"DocsWinDiv2\" class=\"jqDnR\" style=\"z-index:120;position:absolute;top:50px;left:460px;min-height:60px;width:400px;overflow:hidden;padding-bottom:32px;\">\n\n<div class=\"jqHandle jqDrag\"><span id=\"DocsTitle2\" style=\"float:left;margin-left:2px;\">Docs</span>\n<span style=\"float:right;padding-left:10px;padding-right:2px;cursor:pointer;\"\n onclick=\"$j('#DocsWinDiv2').hide();\"><img src=\"img/window_close.png\"\n height=\"16\" width=\"16\"/></span></div>\n<div style=\"overflow:auto;width:100%;height:100%;\" id=\"DocsMain3\" ondblclick=\"App.editDoc();\"><table class='blankTable' style=\"border:0px;\">\n<tr><td valign=\"top\" id=\"Sidebar2\"></td><td valign=\"top\" id=\"DocsMain2\"></td></tr>\n</table></div>\n<div class=\"WinFooter\" style=\"position:absolute;bottom:0px;width:100%;\"><span id=\"DocsEdit\">[ <a onclick=\"App.editDoc();\">Edit</a>  ]</span>&nbsp;[ <a onclick=\"\n$j('#DocEditText2').css('width',$j('#DocsMain3').width()-$j('#Sidebar2').width()-40);\n$j('#DocEditText2').css('height',$j('#DocsMain3').height()-86);\n\">Resize</a> ]\n<img src=\"img/window_resize.png\" class=\"jqHandle jqResize\"></span></div>\n</div>\n<script>\nif ($j('#AppPages').prop('loc')) {\n    locs = $j('#AppPages').prop('loc').split('/');\n    document.getElementById('DocsPage2').value = locs[2];\n} \ndocument.getElementById('DocsTitle2').innerHTML = 'Docs: '+document.getElementById('DocsPage2').value;\n$j.get('docs.php',{\n    Name:document.getElementById('DocsPage2').value\n    },function(response){\n       document.getElementById('DocsMain2').innerHTML=response;\n    }\n);\n$j.get('docs.php',{\n    Name:'Sidebar'\n    },function(response) {\n       document.getElementById('Sidebar2').innerHTML=response;\n    }\n);\n//$j('#DocsWinDiv2').jqDrag('.jqDrag').jqResize('.jqResize');\n$j('#DocsWinDiv2').draggable().resizable();\nvar w = $j(window).width()-90;if(w<60){w=60}if(w>400){w=400}\nvar h = $j(window).height()-90;if(h<60){h=60}if(h>400){h=400}\n$j('#DocsWinDiv2').css('height',h).css('width',w);\n</script>\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
