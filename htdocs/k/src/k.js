{"inlineList":function () {
    var o = [];
    o.push(this.cName || "");
    o.push(" <button onclick=\"editSrc('");
    o.push(this.t || "");
    o.push("/");
    o.push(this.cName || "");
    o.push(".htm',{type:'jsTmpl',node:'");
    o.push(this.t || "");
    o.push("',cName:'");
    o.push(this.cName || "");
    o.push("'});\">Edit</button>");
    return o.join("");
},
"_link":"c5/4529fb6166f9e9850548b2c7a854d76505bd6e",
"_name":"src"}