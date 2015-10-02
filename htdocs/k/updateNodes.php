<?
//update local codes from context space..
$csNodes = "C:/Portable/vhosts/localhost/t51/dev/cs50/nodes/";
$kNodes = array(
	'ezpdf'=> '70/05d5bade5ef56e7a05515846dcb71bf502a8e8'
	,'staticText'=>'c2/88e49f7418ed36404df4b3b6e1b1b92be1a2af'
	,'ezSetY'=>'95/54986595a87ac328de6b127ee3472c55a34ae7'
	,'ezSetDy'=>'78/a9472f33808b8cfedf27a8f54ad318adbec17d'
	,'ezText'=>'f8/8f9332fe304e5d07d88ebbede906c207859d66'
	,'ezFont'=>'52/234da8fb908294403364416b2f4a402a8e411b'
	,'ezColor'=>'36/c22c30c55780d8c87e074e3217fb4d4938db83'
	,'ezCustom'=>'ee/4dc36453492993e9f105bad17c79bb39f7298f'
	,'ezDB'=>'2a/32d1aad43d220d31b7f344309c8de91038ac02'
	,'ezSQLQuery'=>'c5/39c85f01d5a8432cf0a497aa96e04d6dbb660b'
	,'ezTable'=>'51/36d82bd1f343fdb81b1d75055fea04ef142337'
	,'ezTableColumn'=>'eb/7362d84ac66b5a825c0f224e24bc170b3c4bf3'
	,'ezHeader'=>'4e/6cd565e006a4d676b9a6a8bffb1035e146986e'
	,'ezFooter'=>'ce/a28bc1b2174306eba213c6b6ead799b891c17f'
	,'ezPageNum'=>'bb/b9377144f952ec9dd990a2a58a709d94c6ff4d'
	
	,'zendPdf'=>'9c/db693629f6a3b6b7a8eaec5769dfb183c36795'
	,'pdfText'=>'b7/d2579e32fcc1e80709c9f8239af17f8343fda2'
	,'pdfRotate'=>'24/9222adc38fb1e4af59eec2767fe7fa4adffad9'
	,'pdfLoadFont'=>'29/cc26528787e7379943ab8094cc2e0aa696285d'
	,'pdfFont'=>'df/711d24e2b9e8bc99b2daabea62d83ea4fd2be3'
	,'pdfColor'=>'11/db229d1cdf9166265cfd397e8feffba8e7b69e'
	,'pdfSubReport'=>'4a/6c6bad5e8e9a98277056a1e7451b29757ac104'
	,'zendPdfDB'=>'ba/e473620c1ba21623ac05452712033b8e6cfbaa'
	,'SQLQuery'=>'6f/09310b9c0f38f8de5121e574d04628926db24a'
	,'zendDbText'=>'4e/49ed4ab0e7df45455168022c53ddf02533a5e6'
	,'separator'=>'ac/4ea36b5e15ba7dc4917704bebeff0bdadf850f'
	,'Params'=>'f5/d83d3d830fdfe09e9f300a652ebd742e38a152'
	,'TextParam'=>'bd/a35bf1473a7c2beea758452474172f3d689288'
	,'TextAreaParam'=>'21/0d38c2d5127e83208962d72b799015482ce710'
	,'ParamFixedText'=>'54/035325ebcc446816dad4a0d10e952c1ac3da9b'
);
foreach($kNodes as $name=>$link) {
	if (!file_exists(dirname(__FILE__)."/$name/")) {
		mkdir(dirname(__FILE__)."/$name/");
	}
	print $csNodes.$link.'/k.js'." ===> ".dirname(__FILE__)."/$name/k.js<br/>";
	copy($csNodes.$link.'/k.js',dirname(__FILE__)."/$name/k.js");
}