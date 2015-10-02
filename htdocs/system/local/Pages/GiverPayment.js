function(ns) {
	var out = new Array();
	var o=out
	try {
out.push("<span class=\"GiverPaymentsBigIcon BigIcon TaskEdit4\" task=\"Project4.Task\" component=\"protoHeader817\">Givare Betalning</span> \n\n<span class=\"EditIcons\">    <span class=\"ListIcon EditIcon\">\n        <a href=\"Pages/GiverPayments?GiverId=");
try{d=ns.GiverId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxLink\">Lista</a>\n    </span>\n</span><br/>\n");
if (ns.data) {var r= ns.data;
 out.push("<table class=\"EditTable\" id=\"PaymentTab");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\">\n<thead><tr><th colspan=\"7\">Betalningar</th></tr></thead>\n<tr>\n<td style=\"text-align:right\">Datum:</td><td><span id=\"Date820");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Payments.Date\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['Date']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n<td style=\"text-align:right\">Givare:</td><td><span id=\"GiverId821");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Payments.GiverId\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['GiverId']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n<td style=\"text-align:right\">Projekt/Barn #</td><td><span id=\"ProjectId822");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Payments.ProjectId\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['ProjectId']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n</tr>\n\n<tr>\n<td style=\"text-align:right\">InKr:</td><td><span id=\"InKr824");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Payments.InKr\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['InKr']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n<td style=\"text-align:right\">OutKr:</td><td><span id=\"OutKr825");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Payments.OutKr\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['OutKr']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n<td style=\"text-align:right\">Projekt/Barn</td><td><span id=\"PaymentType826");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Payments.PaymentType\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['PaymentType']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n</tr>\n\n<tr>\n<td style=\"text-align:right\">AdminKr:</td><td><span id=\"AdminCharge830");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Payments.AdminCharge\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['AdminCharge']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n<td style=\"text-align:right\">Admin%:</td><td><span id=\"AdminPercent831");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Payments.AdminPercent\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['AdminPercent']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n<td style=\"text-align:right\">#</td><td><input type=\"text\" id=\"Id819");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"Editable\" data-fieldName=\"Payment.Id\" value=\"");
try{d=r['Id']||'';}catch(e){d=''}out.push(d);
 out.push("\" disabled='true' /></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Src:</td><td><span id=\"PaymentSource828");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Payments.PaymentSource\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['PaymentSource']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n<td style=\"text-align:right\">SrcId:</td><td><span id=\"PaymentSourceId829");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Payments.PaymentSourceId\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['PaymentSourceId']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n<td style=\"text-align:right\"></td><td></td>\n</tr>\n<tr>\n<td style=\"text-align:right\">Anv&auml;ndareNamn:</td><td><span id=\"AddedBy823");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Payments.AddedBy\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['AddedBy']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n<td style=\"text-align:right\">Anv&auml;ndare#:</td><td><span id=\"AddedByUserId827");
try{d=ns._ViewId;}catch(e){d=''}out.push(d);
 out.push("\" class=\"ajaxEdit3\" dataView=\"Payments.AddedByUserId\" dataPK=\"");
try{d=r.Id;}catch(e){d=''}out.push(d);
 out.push("\" >");
try{d=r['AddedByUserId']||EditInPlace4.blank;}catch(e){d=''}out.push(d);
 out.push("</span></td>\n<td style=\"text-align:right\"></td><td></td>\n</tr>\n</table>\n\n");
} else {
    //no data retrieved yet... load it..
    if(!ns.Id){ns.Id=ns.url.split("/").pop();}
 out.push("\n\n<script>\ndataViews.GiverPayments.getRecord({\n    Id:'");
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
 out.push("\n\n\n");

	return out.join('');
	}catch(e){
		console.error(e);
		return 'Template Error:'+e.message;
	}
}
