	function Logout() {
		if (window['_gaq']) {
			u2 = window.location.pathname+'/Logout/'+App3.LoggedInUserId+'/'+App3.LoggedInUser
			_gaq.push(['_trackPageview', u2.replace(/\/+/g,'/')]);		
		}
		$j.post("do/logout.php",{rnd:Math.random()});
		App3.LoggedIn = false;  
		App3.LoggedInUser = undefined;
		//App3.Navigate2('local/Proto/Login');    
	}
	function AttemptLogin() {
		//document.getElementById('LoginProgress').innerHTML="<img src='images/ajaxProgress.gif'/>";
		document.getElementById('LoginProgress').className = "AjaxProgress";
		$j.ajax({
			url:'do/login.php'
			,type:'POST'
			,dataType:'json'
			,data:{
					user:document.getElementById('username').value
					,pass:document.getElementById('password').value
					,rnd:Math.random()
			},success:function(data) {
				if (data.LoginOk) {
					App3.LoggedInUser = $('<div/>').html(data.LoginOk).text();
			   		App3.LoggedIn = true;
			   		App3.LoggedInUserId = data.UserId;
			   		App3.Navigate2("local/Pages/AppInit",{target:'Hidden'});
					if (window['pageTracker']){
						u2 = window.location.pathname+'/LoginOK/'+App3.LoggedInUser+'/'+App3.LoggedInUserId;
					    pageTracker._trackPageview(u2.replace(/\/+/g,'/'));
					}
					if (window['_gaq']){
						_gaq.push(['_setVar', data.LoginOk]);
						_gaq.push(['_setCustomVar', 1, 'UserName', App3.LoggedInUser,1]);
						_gaq.push(['_setCustomVar', 2, 'UserId', App3.LoggedInUserId,1]);
						u2 = window.location.pathname+'/LoginOK/'+App3.LoggedInUserId+'/'+App3.LoggedInUser;
						_gaq.push(['_trackPageview', u2.replace(/\/+/g,'/')]);
					}
				} else {
			   		document.getElementById('login-error-msg').innerHTML = data.LoginFailed;
					if (window['_gaq']){
						u2 = window.location.pathname+'/LoginReject/'+document.getElementById('username').value;
						_gaq.push(['_trackPageview', u2.replace(/\/+/g,'/')]);
					}
			   		console.info("reject");	
		   		}
		    },error:function(req,status,e) {
			    console.info("failure");
		    }
		    
		});
	}    
	/* old code. */
	function LoginOK(LoggedInUserName) {
		  	 /** note if skip login, won't have a session! **/
		  	 //document.location.href="index.php";
		  	 App.LoggedInUser = LoggedInUserName;
		  	 UserName = LoggedInUserName; 
		  	document.getElementById('LoginProgress').className = "AjaxNormal";
		     document.getElementById('LoginProgress').innerHTML = "";
		     //$('login').hide();
		  	 $('login').style.display='none';
		  	 $('displayArea').style.display = '';
		  	 
		  	var bookmarkedSection = YAHOO.util.History.getBookmarkedState( "App" );
    		var initSection = bookmarkedSection || "Home";
    		//only allow certain types of initSection!
    		//console.log("initSection Navigation="+initSection);
    		if (initSection.substring(0,6)!="Order_") {
	    		initSection = "Home";
    		}
    		App.displayPage(initSection); 
	  	 	//check to see if it worked, strange bug in firefox doesn't navigate properly first time!
	  	 	if (SiHorton_UILayer.TemplateData.PageName != initSection) {
		  	 	console.log("initial Navigation failed, forcing navigation (bugfix)");
		  	 	App.Navigate(initSection,"App");
	  	 	}
			 		
	}         
	function Login() {
		//App.displayPage('Login'); 
		document.getElementById('loadprogress').className = "AjaxNormal";
		$('displayArea').style.display='none';
		$('login-error-msg').innerHTML='';//wipe any error message.
		$('login').style.display='';
	}  
		  function failedLogin(message) {   
		  		UserName = null;
		  	 	document.getElementById('LoginProgress').className = "AjaxNormal";
		     	//document.getElementById('LoginProgress').innerHTML = "";
		    	if (message != undefined) {
			    	$('login-error-msg').innerHTML= message;
	    			
		    	} else {
		     		$('login-error-msg').innerHTML='Login or password incorrect';
	    		}
		     	$('login-error-msg').show(); 
		       	//Windows.focusedWindow.updateHeight();
		       	//new Effect.Shake(Windows.focusedWindow.getId());   
		  }                  
		  
		  loadScript = function(src,forceRead) {
			 	if (forceRead != undefined) {
				 	if (forceRead == true) {
				 		src = src + "&rnd="+Math.random();	
			 		}
			 	}
				headID = document.getElementsByTagName("head")[0]; 
				newScript = document.createElement('script');
				newScript.type = 'text/javascript';   
				newScript.src = src;
				headID.appendChild(newScript);
			}  
		 /**<?
        	if (!isset($_SESSION["UserName"])) {
				//we are not logged in...
				print "var UserName = '';\n";
			} else {
				//print "LoginOK('".$_SESSION["UserName"]."');\n";
				print "var UserName = '';\n";
			}
			
		?>**/