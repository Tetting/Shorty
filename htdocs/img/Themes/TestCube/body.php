<div id="contextEdit" style="position:absolute;display:none;overflow:hidden;min-width:90px;min-height:90px;width:290px;" class="contextEdit"><img onclick="$(this).parent().hide();" style="float:right;cursor: pointer;" src="img/cancel.gif"/>
<div id="contextTitle">ContextEdit.</div>
<div id="contextContents" style="overflow:auto;width:98%;height:98%;">popup text<br/>
</div>
</div><div id='AppHeader' ><div style="margin:0 auto;width:770px;position:relative;"><span style="float:right;font-size:12px;font-weight: 550;cursor:pointer;color:#FFFFFF;"  onclick="Logout();$j('#WikiApp').trigger('AppLogOut');setTimeout('window.location.href = window.location.pathname+'+String.fromCharCode(34)+'?v='+Math.random()+String.fromCharCode(34),200);"> <span style="top:-6px;position:relative;white-space: nowrap;">Logga ut</span> <img src="img/Themes/Cube/Exit.png"/></span>
</div><div id="DocsTarget"></div>
	<h1>TEST SYSTEM</h1>
		<div id="menu">
			
		</div>
	</div>
<div id='AppLayout'>
	<div id='AppPages' class='undoreset'>
		<? 
		if (!isset($_SESSION["UserName"])) {
			include("login.php");
		} else {
		?><img src='img/AjaxLoading.gif'/>
		<?}?>
	</div>
	
	<div id='AppFooter'>
		<? include("Footer.htm");?>
	</div>
</div>