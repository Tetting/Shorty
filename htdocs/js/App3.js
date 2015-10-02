/**
* we can bind to custom events, therefore the page div we are injecting into can 
* have a custom event, unload, that gets fired before injection of new content.
*	- can we have an inject function, that gets added, then we could call inject func on the actual target element..(is this good?)

Can also bind to click.namespacename, meaning you can then unbind click.namespacename
instead of unbind of all click functions.
*
**/
/**
* simple/easy way to work with parameters to a function, ensuring default options are always provided. 
* also then possible for people to over-ride the defaults ($.fn.hilight.defaults.foreground = 'blue';)
      // plugin definition
      $.fn.hilight = function(options) {
        // Extend our default options with those provided.
        // Note that the first arg to extend is an empty object -
        // this is to keep from overriding our "defaults" object.
        var opts = $.extend({}, $.fn.hilight.defaults, options);
        // Our plugin implementation code goes here.
      };
       
      // plugin defaults - added as a property on our plugin function
      $.fn.hilight.defaults = {
        foreground: 'red',
        background: 'yellow'
      };
*/
/**
* We can have a plugin like architecture through the mechanism of exposing defaults and functions...

      $.fn.cycle.transitions = {
        ...
      };

i.e. others can now insert additional functions into the object.
In this way we can provide some default handlers to start with,
perhaps then we point particular names at a given handler
then plugins/applications can setup the environment and then run.
*/
/**
Support for meta data:-
/ plugin definition
$.fn.hilight = function(options) {
  ...
  // build main options before element iteration
  var opts = $.extend({}, $.fn.hilight.defaults, options);

  return this.each(function() {
    var $this = $(this);
    // build element specific options
    var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
    ...

*/
function l(a,b) {
	//console.warn("LOG",arguments,a,b);	
}
function l2(a,b) {
	//console.warn("LOG TAB CLOSE",arguments,a,b);	
}
function l3(panel,w,h) {
	try {
		var p = panel.id.substring(1)+"__Edit";
		
		//console.warn("tab body Resize",p,panel,w,h);	
		if (window[p]) {
			//window[p].size(w-3,h-3);
			window[p].size(w-1+"px",h-1+"px");
			//window[p].clientWidth = w;
			//window[p].clientHeight = h;
		} else{
			//console.error("CodeSense not found:",p);	//this is not really an 'error'
		}
	} catch(e) {
		console.error(e);
	}
}
function resizeTab(panel) {
	//alter the related codesense control..
	var p = panel.id.substring(1)+"__Edit";
	if (window[p]) {
		window[p].size(panel.lastSize.width-20,panel.lastSize.height-5);
	}	
}
function removeTab(Panel) {
	//remove anything to do with the tab..
	var i = Panel.id.substring(1)+"__Edit";
	//remove codesense...
	delete(window[i]);
}
function addTab2(tabs,tabproperties) {
	//console.info("addTab2",tabproperties);
	/*
	* pass tabproperties.autoScroll = true, to add in scrolling.
	*/
	/**
	var scroll = false;
	if (tabproperties.autoScroll==undefined) {
		scroll = false;	
	} else {
		scroll=	tabproperties.autoScroll;
	}
	**/
	var blankTab = {
		id:'EditTab_'+App3.NewUniqueID/*default id, but pass in an id to be sure.*/
        ,title: 'No title property'
        ,iconCls: 'tabs'
        ,html: 'No HTML property passed'
        ,closable:true
        ,autoScroll:false
        ,close:function() {
	     	console.log("tab close");   
	     	console.log("tab close",arguments);   
        }
        ,listeners: {
	        //activate:l,
	        close: l2,
	        bodyclose: l2,
	        beforedestroy:removeTab,
	        destroy:l2,
	        beforeremove:l2,
	        bodyresize:l3
	    }
	}//defaults...
	var newTab = $j.extend(blankTab,tabproperties);
	var t = tabs.add(newTab).show();
	//do a little resize...
	//t.listeners.bodyresize(t);
	l3(t);
	return t;	
}
function addTab(tabs,title,html,id,src,target){
	//console.log("addTab:",src,target);
	var newTab = $j.extend({},this.NavigateDefaults,options);//modifies first argument.
			
	console.info("addTab():",tabs,title,id,src,target,html);
    var t = tabs.add({
	    id:id,
	    targetdiv:target,
	    src:src,
        title: title,
        iconCls: 'tabs',
        html: html,
        closable:true,
        close:function() {
	     	console.log("tab close");   
	     	console.log("tab close",arguments);   
        }
        ,listeners: {
	        activate:l,
	        close: l2,
	        bodyclose: l2,
	        beforedestroy:removeTab,
	        destroy:l2,
	        beforeremove:l2,
	        bodyresize:l3
	    }
    }).show();
    return t;
}
var _404loopcount = 0;
var App3 = {
	LastUniqueID:1
	,NewUniqueID:function() {
		this.LastUniqueID++;
		return this.LastUniqueID;
	}
	/** bootstrap loading code. **/
	,AllLinksExternal:true /* true converts all links to open in an external window (so you don't break app)*/
	,ExternalTarget:'_blank'//'anyName'|'_blank' (magic opens in new window).
	,ModifyAjaxLinks:true /** Modify 'relative' ajax links to be #/... so that open in new tab works. **/
	/*@cc_on
	,ModifyAjaxLinks:false
	@*/
	,DefaultPage:'index.php' /** needed for parsing bug fix :-) **/
	,Data:{}
	,AppLoaded:false
	,LoggedInUser:undefined
	,LoggedInUserId:0
	,LoggedIn:false
	,loadScript:function(src,OnLoadedHandler,forceRead,OnErrorHandler) {
		//console.info("loadScript:",src,OnLoadedHandler,forceRead,OnErrorHandler);
		if (OnLoadedHandler == undefined){OnLoadedHandler=function(){}}//prevent errors.
		
		function IAmLoaded() {
			if (this.fired == undefined) {
				this.fired = true;//prevent multiple events for same url
				OnLoadedHandler(this.src||this.href);
			}
		};
		function LoadError() {
			console.error("Failed to load:"+this.src);
			if (OnErrorHandler != undefined) {OnErrorHandler(this.src||this.href)}else{OnLoadedHandler(this.src||this.href)}//this.href used if you load css this way.	
		}
		
		var e = src.split("?");
		var ext = e[0].split(".").pop();
		switch(ext) {
			case 'css':
				var newScript = document.createElement('link');
				newScript.setAttribute('rel','stylesheet');
				newScript.setAttribute('type','text/css');
				newScript.setAttribute('href',src);
				/* Firefox doesn't give any loaded events, so just assume it loads instantly!... */
				//if (this.moz) {simpleLoadListWaitingScripts--;}
				newScript.onload = IAmLoaded;//called for CSS in IE!
				newScript.onerror = LoadError;
				/*newScript.onreadystatechange = function () {
					console.info("css state change",newScript.readyState);
	            }*/
	            document.getElementsByTagName('head')[0].appendChild(newScript);	
				if ( (  ( navigator.userAgent.indexOf('Gecko')!=-1 ) ) ? true : false) {
					/** ugly workaround for firefox not giving loaded events **/
					newScript.onload();		
				}
			
			break;
			default:
			//assume js
			if ((forceRead != undefined) && (forceRead == true)) {
				var d = new Date();
				if (src.indexOf("?") == -1) {
				 	src += "?rnd="+d.getTime();
			 	} else {
					src += "&rnd="+d.getTime();
			 	}
			}
			headID = document.getElementsByTagName("head")[0]; 
			newScript = document.createElement('script');
			newScript.setAttribute('type','text/javascript');	
			newScript.src = src;
			newScript.onreadystatechange = function() {
				if (this.readyState == 'complete'||this.readyState == 'loaded') {
					if (this.fired == undefined) {this.fired = true;OnLoadedHandler(src);}
				}
				return false;
			};
			newScript.onload = IAmLoaded;//called for CSS in IE!
			newScript.onerror = LoadError;
			headID.appendChild(newScript);
			
			break;
		}
	}
	,loadList:function(list,OnLoaded,forceRead) {
		//use closure round inline handler so we keep track of number loaded in this call
		var LoadWaiting = list.length;
		function LoadHandler(url) {
			//console.info("loaded:",url);
			LoadWaiting--;
			if (LoadWaiting==0) {
				OnLoaded();//call handler.
			}
		}
		for(var i=0;i<list.length;i++) {
			this.loadScript(list[i],LoadHandler,forceRead);
		}
	}
	
	/**
	* Navigation Defaults
	*	- you can over-ride in application setup.
	*	- also over-ridden with the options object passed into the Navigate2 function.
	*/
	,NavigateDefaults: {
		target:'AppPages'	
		//,page:document.location.href
		//,basehref:document.location.href //Navigate relative to this (so local: links come from here).
		,basehref:'http://local'+document.location.pathname
		,ajaxLinkHandler:function(event) {
			console.log("click navigation",this.href,this.target,event.data.target,event.data);
			if (this.target) {
				event.data.Obj.Navigate2(this.href,{target:this.target});
			} else {
				event.data.Obj.Navigate2(this.href,{target:event.data.target});	
			}
			event.preventDefault();//or just return false?
		}
	}
	/**
	* This function is called when browser back,forward buttons are pressed.
	*/
	,NavigateHistoryEvent:function(newLocation, historyData) {
		if (newLocation == '') {
			newLocation = '/Pages/Home';
		}//occurs when no location entered.
		App3.doNavigation(newLocation,App3.NavigateDefaults);//target will be NavigateDefaults.target
	}
	/**
	* Tell the application to perform a navigation.
	*/
	,Navigate2:function(url,options) {
		/**
		try {
			var params = $j.extend({},this.NavigateDefaults,options);//modifies first argument.
			if (params.target == App3.NavigateDefaults.target) {
				var loc = App3.doNavigation(url,params);
				//tell browser we are now at a new page.
				dhtmlHistory.add(loc,'');
			} else {
				//no history, e.g. for a component display
				App3.doNavigation(url,params);
			}
		} catch(e) {
	 		console.error(e);	
		}
		return false;//cancel default action for click handlers
		*/
		_404loopcount = 0;//wipe loop count whenever user clicks navigation.
		options = $j.extend({},this.NavigateDefaults,options);//modifies first argument.
		var params = App3.doNavigation(url,options);
		if (params.target == App3.NavigateDefaults.target) {
			//filter out built in functions...
			var u = params.url;
			if (params.uri.host == "local") {
				u = params.uri.path;
			}
			if (u.indexOf("/_") > 0) {//could instead have /_404  /_500
				//this is basically some form of internal page,
				//do not cache.
				//perhaps better to recieve something back on the params object instead..
				console.info("Navigation Complete (no history entry made):",u,params);
			} else {
				dhtmlHistory.add(u,'');//create history entry
				u2 = window.location.pathname+'/'+u;
				if (window['pageTracker']){
					if (App3['LoggedinUser']) {pageTracker._setVar(unescape(App3['LoggedinUser']));pageTracker._setCustomVar(1,"UserName",unescape(App3['LoggedinUser']),1);}//visitor-level
					if (App3['LoggedinUserId']) {pageTracker._setCustomVar(2,"UserId",App3['LoggedinUserId'],1);}//visitor-level
					pageTracker._trackPageview(u2.replace(/\/+/g,'/'));
				}
				if (window['_gaq']){
					_gaq.push(['_trackPageview',u2.replace(/\/+/g,'/')]);
				}
				console.info("Navigation Complete (history entry made):",u,u2.replace(/\/+/g,'/'),params);
			}
		}
		
	}
	/**
	* Basehref=='http://local/' i.e. just the host name needed.
	*	App3.applyAjax('TaskTree',o2.join(''),ns.basehref,ns.url);
	*	- in script tag:  ,'(!&ns.basehref!)','(!&ns.url!)');
	*		-use ns parameter to template functions to make this applyAjax parameters easier to call.
	*/
	,applyAjax:function(targetDivId,Contents,basehref,paramurl) {
		console.info("applying ajax",targetDivId,basehref,paramurl);
		$j('#'+targetDivId)
			.addClass('ajaxPage')//mark div
			.attr('loc',paramurl)
			.each(function(){this.innerHTML = Contents;})//IE bug with .html(r)
			.find('script').each(function(){
				if ( this.src ){ jQuery.getScript( this.src ); }else{
				 	try{jQuery.globalEval( this.text || this.textContent || this.innerHTML || '' )}catch(e){
				    	console.error("Script Eval Failed:",basehref,paramurl,e,this.text);	
				   	}
				} 
			});
			
			//navigation links...
			if (document.getElementById(targetDivId)) {//ensure target exists, otherwise you run handlers on entire document.
								 	
									
				$j('.ajaxLink',document.getElementById(targetDivId))
					/*.each(function(){console.log("binding",$j(this));})*/
					.each(function(){
						if (App3.ModifyAjaxLinks) {
							/* modify href attribute. */
							
							if (document.location.href.indexOf('/#/') > 0) {	
								//document location is... http://../directory/#/Page
								var match = document.location.protocol+"//"+document.location.host+document.location.pathname;	
								
								//var match = 
								//console.info("Modify:",this.href,match,this.href.substring(0,match.length),document.location);
								if (this.href.substring(0,match.length) == match) {
    								//modify this href..
    								//console.info("DoMod",this.href.substring(match.length));	
    								this.href="#/"+this.href.substring(match.length);
								}
							} else {
								//document location is... http://../directory/script.php#/Page
								var test = parseUri(document.location.href);	
								var l = test.file.length;
								var match = document.location.protocol+"//"+document.location.host+document.location.pathname.substring(0,document.location.pathname.length-l);		
								//console.log("Modify2:",this.href,test,match);
								if (this.href.substring(0,match.length) == match) {
    								//modify this href..
    								//console.info("DoMod",this.href.substring(match.length));	
    								this.href="#/"+this.href.substring(match.length);
								}
							}
						}
					})
					.unbind("click.AjaxApp3") //Namespaces enable tidy add/remove, required jQuery 1.2+
						.bind("click.AjaxApp3",
						{target:targetDivId,Obj:this,Count:this.NewUniqueID(),basehref:basehref}
						//don't eat memory with inline handler...
						//,params.ajaxLinkHandler// skip creating inline function...
						,function(event) {
							try {
								//console.log("click navigation",this.href,this.target,event.data);
								//console.log("click navigation",this.href,this.target,event.data.target,event.data);
								if (this.target) {
									console.log("Binding click event1:",this.href,this.target,event.data.basehref);
									event.data.Obj.Navigate2(this.href,{target:this.target,basehref:event.data.basehref});//,basehref:event.data.basehref
								} else {
									console.log("Binding click event2:",this.href,event.data.target,event.data,event.data.basehref);
									event.data.Obj.Navigate2(this.href,{target:event.data.target,basehref:event.data.basehref});//,basehref:event.data.basehref
								}
							} catch (e) {
								console.error(e);
							} finally {
								event.preventDefault();
							}
						}
				);
				/* Handle all links, so linking on a "missed" link 
				* opens a new window, instead of unloading the application
				* a lot of the time this is what you want an Ajax app to do.
				*/
				if (App3.AllLinksExternal) {
					$j('a',document.getElementById(targetDivId))
			    		.each(function(){
				    		if (this.className.indexOf('ajaxLink')>-1) {
					    		//this is an ajax link.
				    		} else {
				    			if (this.target) {
					    			//don't mess with targeted link
					    			
					    		} else {
						    		if (this.href) {
						    			//make this link external...
						    			//$j(this).html(this.text + " Modified");
						    			$j(this).addClass('externalLink');	
					    				$j(this).unbind("click.ExternalLink").bind("click.ExternalLink",function(event) {
						    					var newwin = window.open(this.href);
					    						event.preventDefault();
					    				});
				    				}
				    			}
			    			}
			    		})
						/*
						.bind("click.ExternalLink",function(){
				    		console.info('external click handler',this);	
				    		if (this.target) {
				    			console.info("AllLinksExternal: link already has a target");
					    	} else {
						    	console.info("AllLinksExternal:adding a target to force open in new window");
				    			this.target = App3.ExternalTarget;
			    			}
				    	})
				    	*/
			    }
				$j('.ajaxForm',document.getElementById(targetDivId))
					//.each(function(){console.log("binding",$j(this));})
					.unbind("submit.AjaxApp3") //Namespaces enable tidy add/remove, required jQuery 1.2+
						.bind("submit.AjaxApp3",
						{target:targetDivId,Obj:this,Count:this.NewUniqueID(),basehref:basehref}
						//don't eat memory with inline handler...
						//,params.ajaxLinkHandler// skip creating inline function...
						,function(event) {
							try {
								//capture form info, and pass it in as parameters.
								var params = {
									basehref:event.data.basehref	
								};
								if (this.target) {
									params.target = this.target;
								} else {
									params.target = event.data.target;
								}
								for(var i=0; i<this.elements.length; i++) {
									if (this.elements[i].name) {
										params[this.elements[i].name] = this.elements[i].value;
									}
								}
								event.data.Obj.Navigate2(this.action,params);
							} catch (e) {
								console.error(e);
							} finally {
								event.preventDefault();
								return false;//always prevent submit.	
							}
						}
				);
				$j('.ajaxComp',document.getElementById(targetDivId))
					.each(function() {
						//this is a component, implemented as a standard navigation...
						var nav = $j(this).attr("uri");
						/* expensive but pretty/ easy */
						var params = {};
						if ($j(this).attr("params")) {
							try {
								eval("params ="+$j(this).attr("params"));	
							} catch (e){
								console.error("ajaxComp params error:",$j(this).attr("params"),e);	
							}
						}
						//default target of component is the tag with the ajaxComp class on it.
						if (!params.target){params.target = $j(this).attr("id");}
						//target attribute over-rides JSON params attribute :-)
						if ($j(this).attr("target")) {params.target = $j(this).attr(target);} 
							
						console.log("ajaxComponent:",this,nav,params);
						App3.Navigate2(nav,params);
					})
				;
			}
	}
	/* Navigate options.target div to the "contents" of url location	*/
	,doNavigation2:function(url,options) {
		try {
			/**
			* This function recieves both internal navigation from script, and most often
			*	navigation from page clicks.
			*	- need to check that navigation is relative to the current page...
			*	- current code will fail if you link to: page2.php#.... from page1.php#....
			*	- Also not just important to check against our document
			*	- but must check against base href instead (since we can navigate relative to another document)
			*/
			//var s2 = url.indexOf("#");
			//if (s2 > 0) {
				//just navigate to rest of # instead...
			//	url = url.substring(s2+1);
			//}	
			/**
			* url parsing fails for http://host/directory/#Navigation
			*	- works for http://host/directory/index.php#Navigation
			*	- hence need a bugfix...
			*/
			/**
			var s = url.indexOf("/#/");
			if (s>-1) {
				//perform a fix.
				url = "http://local" + url.substring(s+2);
			} else {
				//check for other # navigation...
				var s2 = url.indexOf("#");
				if (s2 > 0) {
					//just navigate to rest of # instead...
					url = url.substring(s2+1);
				}	
			}
			**/
			//console.info("doNavigation2(), url in:",url,options);
			
			
			var params = {
				_fullurl:url
				,url:url
				,uri:parseUri(url)//done so params written directly to object
			};
			/**
			* Idea here is we are merging things from many sources, 
			* hence we are able to set the target, and other properties at different levels.
			*  - however this also leads to certain problems if we make things too crazy
			*/
			$j.extend(params,this.NavigateDefaults,params.uri.queryKey,options);
			
			params.params = params.uri.queryKey;
			params.uri = parseUri(url);
			params.baseuri = parseUri(params.basehref);
			/**
			* Link Cleanup: we want to clean the incoming links...
			
			href="/Pages/Home"
			href="Pages/Home"                                    -- easier to map to "real" php files...
			href="http://appserver/MyApp/#/Pages/Home"
			href="http://appserver/OtherApp/#/Pages/Home"
			href="ajaxcomp2:/Components/Table"                    -- more common as component uri's
			href="Pages/Home.php" 
			
			*/
			
			//detect if the link had NO host name (i.e. a relative link), and add in the default hostname
			//e.g. incomming http://localhost:8080/ converts to http://local/.... or http://wikiapp3/...  
			if (params.uri.host == document.location.hostname) {
				//if (params.uri.host == params.baseuri.host) {
				var u = params.baseuri.host ? params.baseuri.host : 'local';
			} else {
				//link to an external host, i.e. link contains that hostname..
				//ToDo: have a lookuplist for hosts, so links work for real (with no javascript).
				var u = params.uri.host ? params.uri.host : 'local';
			}
			var proto = params.uri.protocol ? params.uri.protocol : 'http';
			if (params.uri.directory.substring(0,params.baseuri.directory.length) == params.baseuri.directory) {
				//link relative to my page directory
				var s2 = url.indexOf("#");
				if (s2 > 0) {
					//this is an anchor navigation (#)
					u += url.substring(s2+1);
					return this.doNavigation2(u,options);//anchor messes up navigation, so attempt again without the #
				} else {
					u += "/"+ params.uri.directory.substring(params.baseuri.directory.length)+params.uri.file.split(".")[0];
				}
			} else {
				//abs link
				u += params.uri.directory+params.uri.file.split(".")[0];
			}
			
			//console.warn("doNavigation2",u,params);
			params.url = u;//clean up later on
			paramurl = params.url;//need to be careful here with being able to edit text from different sources.
			params.uri = parseUri(u);//update links object.
			console.info("App3.doNavigation2():",params.url,"default target:",params.target,params);
			loc = this.go;
			var links = params.url.split("/");
			var pos = 0;
			var cont = true;
			var r = false;
			do {
				//console.log(links[pos],loc[links[pos]],links);
				r = false;
				switch(typeof(loc[links[pos]])) {
					case "undefined":
						cont = false;//404
						break;
					case "object":
						//continue search...
						//console.info("found:",links[pos],links);
						loc = loc[links[pos]];
						break;
						
					case "string":
						/*
						* Skin File, simpler implementation, just HTML to inject, i.e. no js functionality/processing available
						*	- but ajaxLinks/Components/Script/Style blocks are processed.
						*/
						//this is a "skin file", inject the raw text into the HTML, then process the injected text..
						r = loc[links[pos]];
					case "function":
						//search complete, we have a function to call.
						try {
							params._links = links;
							params._pos = pos;
							params._ViewId = App3.NewUniqueID();
							//console.warn("Navigation found",params);
							if (r == false) {
								r = loc[links[pos]](params);//call function, retrieve results
							}//else: this was a string i.e. skin file.
							//return params;
							
							
							//App3.applyAjax(params.target,r);
							
							//if (r==false) {
								//can cancel navigation by returning false.
							//} else {
								$j('#'+params.target)
									.addClass('ajaxPage')//mark div
									.attr('loc',paramurl)
									.each(function(){this.innerHTML = r;})//IE bug with .html(r)
									.find('script').each(function(){
								    	if ( this.src ){ jQuery.getScript( this.src ); }else{
									    	try{jQuery.globalEval( this.text || this.textContent || this.innerHTML || '' )}catch(e){
										    	console.error("Script Eval Failed:",url,e,this.text);	
									    	}
								    	} 
								    });
								    //navigation links...
									if (document.getElementById(params.target)) {//ensure target exists, otherwise you run handlers on entire document.
										
									
										$j('.ajaxLink',document.getElementById(params.target))
		    								//.each(function(){console.log("binding",$j(this));})
		    								.each(function(){
			    								if (App3.ModifyAjaxLinks) {
				    								/* modify href attribute. */
				    								
				    								if (document.location.href.indexOf('/#/') > 0) {	
					    								//document location is... http://../directory/#/Page
					    								var match = document.location.protocol+"//"+document.location.host+document.location.pathname;	
				    									
					    								//var match = 
					    								//console.info("Modify:",this.href,match,this.href.substring(0,match.length),document.location);
					    								if (this.href.substring(0,match.length) == match) {
						    								//modify this href..
						    								//console.info("DoMod",this.href.substring(match.length));	
						    								this.href="#/"+this.href.substring(match.length);
					    								}
				    								} else {
					    								//document location is... http://../directory/script.php#/Page
					    								var test = parseUri(document.location.href);	
					    								var l = test.file.length;
					    								var match = document.location.protocol+"//"+document.location.host+document.location.pathname.substring(0,document.location.pathname.length-l);		
					    								//console.log("Modify2:",this.href,test,match);
					    								if (this.href.substring(0,match.length) == match) {
						    								//modify this href..
						    								//console.info("DoMod",this.href.substring(match.length));	
						    								this.href="#/"+this.href.substring(match.length);
					    								}
				    								}
			    								}
			    							})
		    								.unbind("click.AjaxApp3") //Namespaces enable tidy add/remove, required jQuery 1.2+
		    									.bind("click.AjaxApp3",
												{target:params.target,Obj:this,Count:this.NewUniqueID(),basehref:params.basehref}
												//don't eat memory with inline handler...
												//,params.ajaxLinkHandler// skip creating inline function...
												,function(event) {
													try {
														//console.log("click navigation",this.href,this.target,event.data);
														//console.log("click navigation",this.href,this.target,event.data.target,event.data);
														if (this.target) {
															//console.log("Binding click event1:",this.href,this.target);
															event.data.Obj.Navigate2(this.href,{target:this.target,basehref:event.data.basehref});//,basehref:event.data.basehref
														} else {
															//console.log("Binding click event2:",this.href,event.data.target,event.data);
															event.data.Obj.Navigate2(this.href,{target:event.data.target,basehref:event.data.basehref});//,basehref:event.data.basehref
														}
													} catch (e) {
														console.error(e);
													} finally {
														event.preventDefault();
													}
												}
										);
										
										/* Handle all links, so linking on a "missed" link 
										* opens a new window, instead of unloading the application
										* a lot of the time this is what you want an Ajax app to do.
										*/
										if (App3.AllLinksExternal) {
											$j('a',document.getElementById(params.target))
									    		.each(function(){
										    		if (this.className.indexOf('ajaxLink')>-1) {
											    		//this is an ajax link.
										    		} else {
										    			if (this.target) {
											    		} else {
											    			if (this.href) {
												    			//make this link external...
											    				//$j(this).html(this.text + " Modified");
											    				$j(this).addClass('externalLink');	
										    					$j(this).unbind("click.ExternalLink").bind("click.ExternalLink",function(event) {
												    					try {
												    						var newwin = window.open(this.href);
											    						} catch(e) {
												    						console.error(e);
											    						} finally {
												    						event.preventDefault();
											    						}
										    					});
									    					}
										    			}
									    			}
									    		})
			    								/*
			    								.bind("click.ExternalLink",function(){
										    		console.info('external click handler',this);	
										    		if (this.target) {
										    			console.info("AllLinksExternal: link already has a target");
											    	} else {
												    	console.info("AllLinksExternal:adding a target to force open in new window");
										    			this.target = App3.ExternalTarget;
									    			}
										    	})
										    	*/
									    }
								 	
										$j('.ajaxForm',document.getElementById(params.target))
		    								//.each(function(){console.log("binding",$j(this));})
		    								.unbind("submit.AjaxApp3") //Namespaces enable tidy add/remove, required jQuery 1.2+
		    									.bind("submit.AjaxApp3",
												{target:params.target,Obj:this,Count:this.NewUniqueID(),basehref:params.basehref}
												//don't eat memory with inline handler...
												//,params.ajaxLinkHandler// skip creating inline function...
												,function(event) {
													try {
														//capture form info, and pass it in as parameters.
														var params = {
															basehref:event.data.basehref	
														};
														if (this.target) {
															params.target = this.target;
														} else {
															params.target = event.data.target;
														}
														for(var i=0; i<this.elements.length; i++) {
															if (this.elements[i].name) {
																params[this.elements[i].name] = this.elements[i].value;
															}
														}
														event.data.Obj.Navigate2(this.action,params);
													} catch (e) {
														console.error(e);
													} finally {
														event.preventDefault();
														return false;//always prevent submit.	
													}
												}
										);
										$j('.ajaxComp',document.getElementById(params.target))
		    								.each(function() {
			    								//this is a component, implemented as a standard navigation...
			    								var nav = $j(this).attr("uri");
			    								/* expensive but pretty/ easy */
			    								var params = {};
			    								if ($j(this).attr("params")) {
				    								try {
				    									eval("params ="+$j(this).attr("params"));	
			    									} catch (e){
				    									console.error("ajaxComp params error:",$j(this).attr("params"),e);	
			    									}
			    								}
			    								//default target of component is the tag with the ajaxComp class on it.
			    								if (!params.target){params.target = $j(this).attr("id");}
			    								//target attribute over-rides JSON params attribute :-)
			    								if ($j(this).attr("target")) {params.target = $j(this).attr(target);} 
													
			    								console.log("ajaxComponent:",this,nav,params);
			    								App3.Navigate2(nav,params);
		    								})
		    							;
									}
							//}
						//navigation successful..
						} catch (e) {
							//program/script error...
							console.error("Navigation Error",e,e.description,e.params);	
						}
						return params;//tell caller what the cleaned up location is (saved to history)
						break;
					default:
						//502 error in the go object setup.
						throw("location not as expected ("+typeof(loc[links[pos]])+")");
				}						
				pos++;
			} while(pos < links.length && cont);
			//404...
			//console.info("404:",links,loc,links[pos],pos,params,_404loopcount);
				var newparams = params;	
				cont = true;
				do {
					_404loopcount++;
					if (_404loopcount>30) {
						console.error("_404 handlers run "+_404loopcount+" times.");	
						throw("_404 handlers run "+_404loopcount+" times.");
					}
					if (loc['_404'] != undefined) {
						//run the 404 handler..
						var u = params.uri;
						if (params.uri.protocol){s=params.uri.protocol+"://";}else{s="http://"}//hack is it better to merge this document location and the passed in location, so you can be relative to the base location.
						if (pos >0) {
							var l = s+ links.slice(0,pos-1).join('/')+"/_404";
						
							//return this.doNavigation2(l,newparams);
							//create a 'valid' place to navigate...
							if (!params['_404']) {
								newparams['_404'] = url;
								newparams['_404_mod'] = params.url;
								newparams['_404_obj'] = params;
							}
							console.info("404:",newparams._fullurl," not found (target:",newparams.target,")",newparams);
							return this.doNavigation2(l,newparams);	
						} else {
							//we are looking at the host call.
							//we cannot call this location without the navigation looping forever.
							if (this.go['_404']) {
								if (!params['_404']) {
									newparams['_404'] = url;
									newparams['_404_mod'] = params.url;
								}
								return this.doNavigation2("http://local/_404",newparams);
							} else {
								//console.error("404: handler not found",loc);
								throw({
									description:"Navigation Failed:"+params._fullurl+" in addition no 404 handler was found to process the error"
									,params:params
								});
								return params;	
							}
						}
						
						
						//return this.doNavigation2(l,newparams);	
					}
					pos--;//see if parent has a 404
					if (pos > -1) {
						var l = this.go;
						for(var p = 0;p<pos;p++) {
							l = l[links[p]];
						}
						loc = l;
						console.log("404:",links[pos],loc);
					} 
					/** -- this can be removed..
					else {
						//we are looking at the host call.
						//we cannot call this location without the navigation looping forever.
						if (!params['_404']) {
							newparams['_404'] = url;
							newparams['_404_mod'] = params.url;
						}
						if (this.go['_404']) {
							return this.doNavigation2("http://local/_404",newparams);
						} else {
							console.error("404: handler not found",loc);
							return params;	
						}	
					}
					*/
					console.info("404 loop",pos,loc);
				} while (pos >-1 && cont);
				//no 404 found, unusual!
				throw({
					description:"Navigation Failed:"+params._fullurl+" in addition no 404 handler was found to process the error"
					,params:params
				});
		} catch(err) {
			console.error("error 502: doNavigation2 Script Error:",err.description,err,err.params);
		}			
		//error, what should we return?
		return params;
			
	}
	/* Called for every click so have a little time to process what has happened
	* - advantage that you have a global handler which will work for all monitored content.
	*if (window.captureEvents){
		window.captureEvents(Event.CLICK);
		window.onclick=App3.globalAjaxEventHandler;
	} else {document.onclick=App3.globalAjaxEventHandler;}
	*/ 
	,globalAjaxEventHandler:function(ein) {
		var e=(typeof event!=='undefined')? event : ein;
		var el=(typeof event!=='undefined')? event.srcElement : ein.target;
		console.info('click',$j(el).attr('className'),el);
		
		var matchFn = function() {
			if ($j(this).attr("className").indexOf('ajaxEdit3')>-1)	{
				/* we should edit this data. */
				console.info("ajaxEdit3");
				EditInPlace4.dataViewEdit(this);
			} else {
				if ($j(this).attr("className").indexOf('ajaxEdit')>-1)	{
					/* we should edit this data. */
					EditInPlace3.dataViewEdit(this);
				} else {
					//console.info('filtered',this);	
				}
			}
			if ($j(this).attr("className").indexOf('ajaxLink3')>-1)	{
				App3.Navigate2(this.href,{target:this.target});
				e.preventDefault();
			}
		};
		$j(el).filter(".ajaxEdit,.ajaxEdit3,.ajaxPage,.ajaxLink3").each(matchFn);
		$j(el).parents().filter(".ajaxEdit,.ajaxEdit3,.ajaxPage,.ajaxLink3").each(matchFn);
		/**
		if (\$j(el).attr('class')) {
			if (\$j(el).attr('className').indexOf('ajaxEdit')>-1) {
				//this is an inplace edit.	
				alert('edit');
			} else {
				\$j(el).parents.filter('.ajaxEdit').each(function(){
					alert('parent edit'+this);
				});
			}
		}
		**/
	}
	/**
	* Mainly used for Ajax after it has recieved data back, and it wants to inject it into the hierarchy
	*	- attempt to force the navigation not to affect the location (?)
	*	- perhaps a parameter can set a history location and title.
	*/
	,DisplaySkin:function(Text,params) {
		if (params == undefined){params = {};}
		App3.go.temp.Skin = Text;
		App3.Navigate2("http://temp/Skin",params);
	}
	,AjaxQueue: {
		ItemsWaiting:0
		,ItemMaxId:0
		,Items:{}
		,addItem:function(functionToCall) {
			
			var ItemID = App3.AjaxQueue.ItemMaxId++;
			App3.AjaxQueue.Items[ItemID] = functionToCall;
			console.warn("AjaxQueue addItem",ItemID);
			App3.AjaxQueue.runNextItem();
		}	
		,runNextItem:function() {
			console.warn("AjaxQueue runNextItem, Waiting=",App3.AjaxQueue.ItemsWaiting);
			if (App3.AjaxQueue.ItemsWaiting == 0) {
				for(var ItemID in App3.AjaxQueue.Items) {
				
					//call this function..
					App3.AjaxQueue.ItemsWaiting++;
					console.warn("AjaxQueue running:",ItemID);
					App3.AjaxQueue.Items[ItemID](ItemID);
					break;
				}
			}
		}
		,itemComplete:function(ItemID) {
			App3.AjaxQueue.ItemsWaiting--;
			console.warn("AjaxQueue itemComplete",ItemID," Waiting=",App3.AjaxQueue.ItemsWaiting);
			delete(App3.AjaxQueue.Items[ItemID]);
			App3.AjaxQueue.runNextItem();
			//setTimeout('delete(App3.AjaxQueue.Items["'+ItemID+'"]);',20);
			//setTimeout('delete(App3.AjaxQueue.Items["'+ItemID+'"]);App3.AjaxQueue.runNextItem();',0);
		}
	}
	,doNavigation:function(url,params) {
		return this.doNavigation2(url,params);
		//var ext = src.split("?")[0].split(".").pop();//magic by si.
		//var e = src.split
        var l = App3.NavigateDefaults.local;
		if (url.substring(0,l.length) == l) {url = "/"+url.substring(l.length);}/** cope with root links, i.e. href="/Pages/Home" **/
		
		
			
        if (url.substring(0,1) == "/") {url = window.location.protocol+"//"+window.location.host+url;}//convert root links
		/**
		**  Navigation via url strings...
		** - split via / = ["http:", "", "localhost:8080", "Components", "wiki"]
		** - ignore http://localhost:8080/
		** - attempt to find a fn/array, traverse until we find a valid function, and call the function.
		**/	
		/**
		try {
			loc = this.go;
			var links = url.split("/");
			if (links.length<3) {
				//for this url scheme this is an invalid url...
				throw('url too short');
			}
			var pos = 3;
			do {
				if (loc[links[pos]] == undefined) {
					//404...
					throw("location not found");
				} else {
					switch(typeof(loc[links[pos]])) {
						case "function":
							//search complete, we have a function to call.
							try {
								params._links = links;
								params._pos = pos;
								$j('#'+params.target)
									.addClass('ajaxPage')//mark div
									.attr('loc',url)
									.html(loc[links[pos]](params))
									.find('script').each(function(){
								    	if ( this.src ){ jQuery.getScript( this.src ); }else{
									    	try{jQuery.globalEval( this.text || this.textContent || this.innerHTML || '' )}catch(e){
										    	console.error("Script Eval Failed:",url,e,this.text);	
									    	}
								    	} 
								    });
								 //navigation links...
								if (document.getElementById(params.target)) {//ensure target exists, otherwise you run handlers on entire document.
									$j('.ajaxLink',document.getElementById(params.target))
	    								//.each(function(){console.log("binding",$j(this));})
	    								.unbind("click") //prevent multiple handlers.
	    									.bind("click",
											{target:params.target,Obj:this,Count:this.NewUniqueID()}
											//don't eat memory with inline handler...
											//,params.ajaxLinkHandler// skip creating inline function...
											,function(event) {
												//console.log("click navigation",this.href,this.params.target,event.data);
												//console.log("click navigation",this.href,this.params.target,event.data.target,event.data);
												if (this.target) {
													event.data.Obj.Navigate2(this.href,{target:this.target});
												} else {
													event.data.Obj.Navigate2(this.href,{target:event.data.target});	
												}
												event.preventDefault();//or just return false?
											}
									);
									$j('.ajaxComp',document.getElementById(params.target))
	    								.each(function() {
		    								//this is a component, implemented as a standard navigation...
		    								var nav = $j(this).attr("uri");
		    								// expensive but pretty/ easy 
		    								var params = {};
		    								if ($j(this).attr("params")) {
			    								try {
			    									eval("params ="+$j(this).attr("params"));	
		    									} catch (e){
			    									console.error("ajaxComp params error:",$j(this).attr("params"),e);	
		    									}
		    								}
		    								//default target of component is the tag with the ajaxComp class on it.
		    								if (!params.target){params.target = $j(this).attr("id");}
		    								//target attribute over-rides JSON params attribute :-)
		    								if ($j(this).attr("target")) {params.target = $j(this).attr(target);} 
												
		    								console.log("ajaxComponent:",this,nav,params);
		    								App3.Navigate2(nav,params);
	    								})
	    							;
								}
							
							//navigation successful..
							} catch (e) {
								//program/script error...
								console.error(e);	
							}
							params.url = url;
							return params;//tell caller what the cleaned up location is (saved to history)
							break;
						case "object":
							//continue search...
							//console.info("found:",links[pos],links);
							loc = loc[links[pos]];
							break;
						default:
							//404...
							throw("location not as expected ("+typeof(loc[links[pos]])+")");
					}	
				}
				
				pos++;
			} while(pos < links.length);
			//404...
			throw("location not found (no valid function found)");
		} catch(e) {
			//check for existance of a 404 page to display instead.
			console.info("404:",e.toString(),links,links[pos]);
			try {
				if (loc['_404'] != undefined) {
					var l = links.slice(0,pos).join('/')+"/_404";
				} else {
					if (pos > 2) {
						//see if parent has a _404
						var l = links.slice(0,pos-1).join('/')+"/_404";
					} else {
						//we are at the end of the search..
						console.error("Navigate2: Navigation Failed:",e,url,target,params);
					}
				}
				//fix so we don't overwrite the original url.
				var newparams = params;	
				if (!params['_404']) {
					newparams['_404'] = {'url':url};
				}
				//return this.Navigate2(l,target,newparams);
				return this.doNavigation(l,newparams);
			} catch(e) {
				console.error(e);	
				return url;
			}
		}
		**/
	}
	/**
	* Incomplete code for a 404 handler that simply dynamically loads in the script name.
	*	- Copied from Editor/Packages/_404 
	*/
	,Remote404:function(ns) {
		
		params = ns;
		console.info("404 Error:",params);
		//o.push("Packages 404 Error: Your page could not be found. ("+params['_404']+") <a href='/Pages/Home' class='ajaxLink'>Home</a>");
			/*
			* we can load in requested packages from a gateway
			* - possible to pass in params, e.g. change the default gateway.
			* - This code should really be available on the main js object.
			*/
			var gateway = "http://localhost:8080/WikiApp3/Projects3/Editor/packages/";
			//strip off root (http://editor/packages/)
			var p = params._404.split("editor/packages/");
			var p2 = p[1].split(".php");
			var package = p2[0];
			o.push("<div id='package_"+package.split("/").join("_")+"'>loading</div>");
			o.push("<script>\\n");
			o.push("console.info('running script');");
			o.push("$j.ajax({url:'"+gateway+package+".js?rnd="+Math.random()+"',success:function(response) {\\n");
			o.push("var params={_404:'"+params['_404']+"',target:'"+params['target']+"'};");
			//Copy in parameters to the target page...
			
			for(var i in params) {
			console.info("Passing on params",typeof params[i]);
			if (typeof params[i] == "string") {
			o.push("params."+i+"='"+params[i]+"';\\n");
			}
			}
			o.push("console.info('built params:',params);");
			o.push("fn = eval(response);\\n");
			o.push("App3.applyAjax('package_"+package.split("/").join("_")+"',fn(params),'"+params.basehref+"','"+params._404+"');\\n");
			o.push("}");
			o.push("});");
			o.push("</script>");
			return o.join('');
	}
	,go:{
		'temp':{}
		,'local':{
			'_404':function(params){return 'local Handler:Page not found! ('+params['_404'].url+') <a href="/Pages/Home" class="ajaxLink">Home</a><br/><a href="/Pages/Create/'+params['_404'].url+'" class="ajaxLink">Create</a>';}
			,'_500':function(params){return 'Internal Server Error -- Script Error ('+params['_500'].url+')';}
			,data:{tempSkin:''}
			,Pages:{
				'Home':function(params){return 'Homepage';}	
			}
		},'remote':{
			'cache':{}
			,'view':function(params) {
				console.warn(params);
				 n = parseUri(unescape(params.ns));
				var g = n.protocol+'://'+n.authority+n.path+'/'+n.queryKey['script'];
				var s = n.queryKey['Name'];
				var MyParams = params; 
				if (this.cache[params.ns]) {
					console.warn('returning from cache:',params.ns);
					return this.cache[params.ns](params);
				} else {
					$j.ajax({
						url:g
						,data:{Src:s+'.js'}
						,success:function(response){
							MyParams['_ViewId']=App3.NewUniqueID();
							try {
								eval('var fn = '+response);
							} catch(e) {
								console.error("NamespaceError:",e,response);
								return 'Namespace Error ('+MyParams.ns+')';
							}
							App3.go.remote.cache[MyParams.ns] = fn;
							App3.applyAjax(MyParams.target,fn(MyParams),MyParams.basehref,'remote/ns?ns='+MyParams.ns);
							},error:function(a,errmsg){
								console.error(errmsg);
							}
					});
					return 'loading:'+unescape(params.ns);
				}
				
			},'reload':function(params) {
				//delete cache and load again...
				if (this.cache[params.ns]) {
					console.warn('deleting from cache:',params.ns);
					delete this.cache[params.ns];
					return App3.go.remote.view(params);
				}	
			}
		},'_404':function(params){return 'App Handler:Page not found! ('+params['_404'].url+') <a href="/Pages/Home" class="ajaxLink">Home</a><br/><a href="/Pages/Create/'+params['_404'].url+'" class="ajaxLink">Create</a>';}
		,'_500':function(params){return 'Internal Server Error -- Script Error ('+params['_500'].url+')';}
		
	}
	
};
/**
 * History
 *
 *Requires: 
 * <script type="text/javascript" src="js/lib/json2005.js"></script>
 * <script type="text/javascript" src="js/lib/rsh.js"></script>
*/
if (window['dhtmlHistory']) {
	window.dhtmlHistory.create({
		toJSON: function(o) {
			return JSON.stringify(o);
		}
		, fromJSON: function(s) {
			return JSON.parse(s);
		}
	});
}
window.onload = function() {
	dhtmlHistory.initialize();
	dhtmlHistory.addListener(App3.NavigateHistoryEvent);//function called when browser navigates
	if (App3.go.local.Pages.AppInit) {
		App3.Navigate2("local/Pages/AppInit",
			{target:'Hidden',InitPage:dhtmlHistory.getCurrentLocation()}
		);	
	} else {
		App3.NavigateHistoryEvent(dhtmlHistory.getCurrentLocation());
	}
	//document.getElementById('teststore').value = historyStorage.get('test');
};


/*
	parseUri 1.2.1
	(c) 2007 Steven Levithan <stevenlevithan.com>
	MIT License
*/

function parseUri (str) {
	var	o   = parseUri.options,
		m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
		uri = {},
		i   = 14;

	while (i--) uri[o.key[i]] = m[i] || "";

	uri[o.q.name] = {};
	uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
		if ($1) uri[o.q.name][$1] = $2;
	});

	return uri;
};

parseUri.options = {
	strictMode: false,
	key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
	q:   {
		name:   "queryKey",
		parser: /(?:^|&)([^&=]*)=?([^&]*)/g
	},
	parser: {
		strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
		loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
	}
};

if (window.captureEvents){
	window.captureEvents(Event.CLICK);
	window.onclick=App3.globalAjaxEventHandler;
} else {document.onclick=App3.globalAjaxEventHandler;}