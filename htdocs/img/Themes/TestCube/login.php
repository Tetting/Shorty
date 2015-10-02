<div id="login">
<!--[if IE 6]>
<div id="IEWarning" style="display:'none';background-color: #fef5be; border: 2px solid #fdd425;">
<center><i><img src='img/error.gif'/> You are using Internet Explorer 6.<br/>
IE6 is supported, but some operations will be very slow. Please be patient.<br/>
For higher performance upgrade to <a href="http://getfirefox.com">Firefox</a> or <a href="http://www.google.com/chrome">Google Chrome</a>
</i></center></div>
<![endif]-->
<div class="login">
<div class="login-form">
<div id="login-name"></div>
<div id="login-error-msg"></div>
<form id="loginForm" name="loginForm" method="post" onsubmit="AttemptLogin();return false;">
<input id="login-InitPage" type="hidden" value=""/>
<img style="display:none" src="img/Themes/Cube/ajaxProgress.gif"/>

<div class="login-form-block">
<div class="login-inputlabel">Användarnamn</div>
<div><input type="text" size="15" class="login-inputbox" name="username" id="username"
/></div>
<div class="login-inputlabel">Lösenord</div>
<div><input type="password" size="15" class="login-inputbox" name="password" id="password"
/></div>
<div align="left"><input type="submit" value="Login" class="login-button" name="submit"/><span id="LoginProgress"></span></div>
</div>

</form>
</div>
<div class="login-text">
<div class="ctr"><img width="128" height="128" alt="security" src="img/Themes/Cube/Logon.png"/></div>
<br/><br/>
<p></p>
</div>
<div class="clr"/></div>
<div id="loadprogress"></div>
<br/>

</div>
<br/><br/>
<center>
</center>
</div>
<br/>
<script>
$('#username').select().focus();
</script>