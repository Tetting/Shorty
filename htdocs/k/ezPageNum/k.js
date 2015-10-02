{"inlineList":function () {
    var o = [];
    o.push("<span class='title'><span class='csEditLink' data-task='");
    o.push(this.t || "");
    o.push("' data-comp='");
    o.push(this.cName || "");
    o.push("'>&nbsp;</span>ezPageNum</span> ");
    o.push(this.i.headerFooter || "");
    o.push(" ");
    o.push(this.i.justification || "");
    return o.join("");
},
"_link":"bb/b9377144f952ec9dd990a2a58a709d94c6ff4d",
"_name":"ezPageNum",
"contextMenuEdit":function () {
    var o = [];
    o.push("<table class=\"ContextTable\">\n<tr><td>PageLocation:</td><td><select onchange=\"\n    $t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("', 'headerFooter',this.value);\">\n        <option ");
    if (this.i.headerFooter == "Header") {
        o.push("selected");
    }
    o.push(">Header</option>\n        <option ");
    if (this.i.headerFooter == "Footer") {
        o.push("selected");
    }
    o.push(">Footer</option>\n    </select></td></tr>\n<tr><td>Justification:</td><td><select onchange=\"\n    $t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("', 'justification',this.value);\">\n        <option ");
    if (this.i.justification == "left") {
        o.push("selected");
    }
    o.push(">left</option>\n        <option ");
    if (this.i.justification == "center") {
        o.push("selected");
    }
    o.push(">center</option>\n        <option ");
    if (this.i.justification == "right") {
        o.push("selected");
    }
    o.push(">right</option>\n   </select></td></tr>\n<tr><td>font size:</td><td><input type=\"text\" value=\"");
    o.push(this.i.fontSize || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','fontSize',this.value);\"/></td></tr>\n<tr><td>text:</td><td><input type=\"text\" value=\"");
    o.push(this.i.text || "");
    o.push("\" \nonchange=\"$t51('");
    o.push(this.t || "");
    o.push("').pSet('");
    o.push(this.cName || "");
    o.push("','text',this.value);\"/></td></tr>\n\n</table>\n<p>Add page numbering to the header or footer.\n</p>");
    return o.join("");
},
"compile":function () {
    var o = [];
    o.push("function pageNo");
    o.push(this.i.headerFooter || "");
    o.push("($pdf,$pageno,$pages) {\n    $text = \"");
    o.push(this.i.text || "Sida $pageno av $pages" || "");
    o.push("\";\n");
    switch (this.i.justification) {
      case "center":
        o.push("    $x = ($pdf->ez['pageWidth'] / 2)-strlen($text);\n");
        if (this.i.headerFooter == "header") {
            o.push("\n    $y = $pdf->ez['pageHeight'] - $pdf->ez['topMargin'] + 15 ;\n");
        } else {
            o.push("\n    $y = $pdf->ez['bottomMargin']-15;\n");
        }
        break;
      case "left":
        o.push("\n            $x = $pdf->ez['leftMargin'];\n            ");
        if (this.i.headerFooter == "header") {
            o.push("\n            $y = $pdf->ez['pageHeight'] - $pdf->ez['topMargin'] + 15 ;\n           ");
        } else {
            o.push("\n           $y = $pdf->ez['bottomMargin']-15;\n           ");
        }
        o.push("\n        ");
        break;
      case "right":
        o.push("\n            $x = $pdf->ez['pageWidth'] - $pdf->getTextWidth(");
        o.push(this.i.fontSize || 10 || "");
        o.push(", $text) - $pdf->ez['rightMargin'] ;\n           ");
        if (this.i.headerFooter == "header") {
            o.push("\n            $y = $pdf->ez['pageHeight'] - $pdf->ez['topMargin'] + 15 ;\n           ");
        } else {
            o.push("\n           $y = $pdf->ez['bottomMargin']-15;\n           ");
        }
        o.push("\n        ");
        break;
      default:;
    }
    o.push("\n    $pdf->addText(($pdf->ez['pageWidth'] / 2)-strlen($text),  $y, ");
    o.push(this.i.fontSize || 10 || "");
    o.push(", $text);\n        \n}\n$pdf->siHeadersAndFooters(array('AllPages'=>'pageNo");
    o.push(this.i.headerFooter || "");
    o.push("'));");
    return o.join("");
}}