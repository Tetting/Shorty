/**
* In task43 we set a current component and then did things with it. This has been removed from 51 since we want to support
*  thread safe operation. If you want the same functionality just set a local variable and then use that as inputs to the * * functions.
* Execution objects take the task component and overwrite properties with inputs. This enables very simple component 
* implementations that just have code, print this.i.inputA if you then don't want collision possibilities name the input
* properties _propName and then use that name as the input. Also possible to have mapping components that take an input
* and re-wire it (e.g. new object contains values from input but with mapped property names) so that you can translate
* data from one place to another.
* 
* Promises:
* There is some magic which allows you to combine an array of defers into a when object and in so doing you can then
* have events for progress and error of one or all success.
* $.when.apply(null, doingStuff)
* Another amazing function is resolveWith(context[,args]) --> this sets the 'this' keyword in the call back functions for
* really easy coding. So we could use the exec object and therefore be able to access the exact execution context that occured.
* 
* @name 1 architecture for tasks
* @comment
*/

jQuery.whenArray = function( array ) {
    return jQuery.when.apply( this, array );
};
if (!window.si5) {
	window.si5 = {
		debug:false
		,noLinkChange:true//temporary setting in loader.
	};
}
//set of flags to indicate what depreciated functionality to support
si5.depr = {
	forceSlash:true/* temporary fix to take old tasks that stored their klass as sha1 instead of links.*/
}
/**
* create a new class
* @comment
* @name si5.newClass
* @param object impl an object containing the class implementation
*
* @example var classNameFn = si5.newClass3({
*	a:'good'
*	,call:function() {
*		return 'bad';
*	}
* });
* var instance = classNameFn();
* @desc this will create a class saved in the classNameFn variable that you can then get an instance of
*/
si5.newClass = function(impl) {
	var myNewClass = function() {
	  return function(args){
		if ( this instanceof arguments.callee ) {
		  if ( typeof this.init == "function" )
			this.init.apply( this, args.callee ? args : arguments );
		} else
		  return new arguments.callee( arguments );
	  };
	}
	myNewClass.prototype = protoFunc
	return myNewClass;
}
/**
* @name 6 example task structure instance
* @comment
* @example task = {
*    guid:undefined
*    ,c:{
*        'comp1':{
*            'hello':'world'
*            ,__k:'GUID_SHA1'
*            ,__c:'comp1'
*            ,__t:'GUID_task'
*        }
*    },oi: {
*       'comp1':{
*                'OutputChannel1':{
*					ord:['Comp1','Comp2','Comp3']
*					lnk:{
*                    'Comp1':{prop:'for context queries'}
*                    ,'Comp2':{prop:'for context queries'}
*                    ,'Comp3':{prop:'for context queries'}
*					}
*                },'OutputChannel2':{
*					ord:['Comp4']
*					lnk:{
*                    'Comp4':{prop:'for context queries'}
*                   }
*                }
*
*       },iLink:{
*		}
*    },uId:1
*}
*/
/**
* Create and return a new blank task
* @name si5.tNew
* @type task
*/
si5.tNew = function(guid) {
	if (typeof guid == "undefined") {
		var guid = SHA1(new Date().getTime() + 'si5_newTask');
	} else {
		si5.tasks[guid] = {
			guid:guid
			,c:{}
			,oi:{}
			,uId:1
			,deps:{}
			,dirty:true
		}
	}
	return guid;
}
/**
* promises to load a task.
* @name si5.tLoad
* @guid String the GUID of the task to load
* @type Promise 
*/
si5.tLoad = function(guid) {
	var loading = $.Deferred();
	//nodejs reads from disk...
	var url;
	switch(guid) {
		case 'localtask':
			//load the local task for the current page.
			url = '.task51/task.js';
		break;
		default:
			url = 'tasks/'+guid;
		break;
	}
	$.ajax({url:this.tGetUrl,dataType:'text',data:{action:'loadTask',guid:guid}}).done(function(response) {
		var task;
		eval('task = ' + response);
		if (task.error) {
			loading.reject({action:'loadTask',status:'error',error:task.error,errorCode:task.errorCode,params:guid});
		} else {
			si5.tasks[guid] = task;
			//we need to ensure all dependancies are also loaded...
			var proms = [];
			for(var d in task.deps) {
				if (si5.depr.forceSlash) {
					//temporary fix for k as sha1 instead of links..
					if (d.indexOf('/') == -1) {
						d = d.substr(0,2)+'/'+d.substr(2);
					}
				}
				proms.push(si5.kLoad(d));
			}
			if (si5.depr.forceSlash) {
				//temporary fix for k as sha1
				for(var c in task.c) {
					var comp = task.c[c];
					if (comp.__k.indexOf('/') == -1) {
						comp.__k = comp.__k.substr(0,2)+'/'+comp.__k.substr(2);
					}
				}
			}
			jQuery.whenArray(proms).done(function() {
				//we loaded in all dependant klasses...
				loading.resolve({action:'loadTask',status:'ok',guid:task.guid});
			}).fail(function(e) {
				//we did not manage to load
				loading.reject({action:'loadTask',subaction:'loadTaskDeps',status:'error',error:e,params:guid});
			});
		}
	}).error(function(e) {
		console.info('task loading error');
		console.info({action:'loadTask',status:'error',error:e,params:guid});
		loading.reject({action:'loadTask',status:'error',error:e,params:guid});
	});
	return loading.promise();
}

si5.tLoad2 = function(guid) {
	var loading = $.Deferred();
	//nodejs reads from disk...
	var url;
	switch(guid) {
		case 'localtask':
			//load the local task for the current page.
			url = '.task51/task.js';
		break;
		default:
			url = 'tasks/'+guid;
		break;
	}
	$.ajax({url:this.tGetUrl,dataType:'text',data:{action:'loadTask',guid:guid}}).done(function(response) {
		var task;
		eval('task = ' + response);
		si5.tasks[task.guid] = task;
		//we need to ensure all dependancies are also loaded...
		var proms = [];
		for(var d in task.deps) {
			if (si5.depr.forceSlash) {
				//temporary fix for k as sha1 instead of links..
				if (d.indexOf('/') == -1) {
					d = d.substr(0,2)+'/'+d.substr(2);
				}
			}
			proms.push(si5.kLoad2(d));
		}
		if (si5.depr.forceSlash) {
			//temporary fix for k as sha1
			for(var c in task.c) {
				var comp = task.c[c];
				if (comp.__k.indexOf('/') == -1) {
					comp.__k = comp.__k.substr(0,2)+'/'+comp.__k.substr(2);
				}
			}
		}
		jQuery.whenArray(proms).done(function() {
			//we loaded in all dependant klasses...
			loading.resolve({action:'loadTask',status:'ok',guid:task.guid});
		}).fail(function(e) {
			//we did not manage to load
			loading.reject({action:'loadTask',subaction:'loadTaskDeps',status:'error',error:e,params:guid});
		});
		
	}).error(function(e) {
		console.info('task loading error');
		console.info({action:'loadTask',status:'error',error:e,params:guid});
		loading.reject({action:'loadTask',status:'error',error:e,params:guid});
	});
	return loading.promise();
}
/**
* promises to load a task of a context node. Pass in link and this then becomes
* the guid (so it is not actually the sha1 but has an extra / in the id).
* @name si5.cstLoad
* @link String the GUID of the task to load
* @type Promise 
*/
si5.cstLoad = function(guid) {
	var loading = $.Deferred();
	var url;
	url = guid+'/?view=loadTask';
	$.ajax({url:url,dataType:'text'}).done(function(response) {
		var task;
		eval('task = ' + response);
		if (task.errorCode) {
			loading.reject({action:'loadTask',status:'error',error:task.error,errorCode:task.errorCode,params:guid});
		} else {
			si5.tasks[task.guid] = task;
			si5.tasks[task.guid].saveUrl = url;
			//we need to ensure all dependancies are also loaded...
			var proms = [];
			
			
		
			for(var d in task.deps) {
				if (si5.depr.forceSlash) {
					//temporary fix for k as sha1 instead of links..
					if (d.indexOf('/') == -1) {
						d = d.substr(0,2)+'/'+d.substr(2);
					}
				}
				proms.push(si5.kLoad(d));
			}
			if (si5.depr.forceSlash) {
				//temporary fix for k as sha1
				for(var c in task.c) {
					var comp = task.c[c];
					if (comp.__k.indexOf('/') == -1) {
						comp.__k = comp.__k.substr(0,2)+'/'+comp.__k.substr(2);
					}
				}
			}
			jQuery.whenArray(proms).done(function() {
				//we loaded in all dependant klasses...
				loading.resolve({action:'loadTask',status:'ok',guid:task.guid});
			}).fail(function(e) {
				//we did not manage to load
				loading.reject({action:'loadTask',subaction:'loadTaskDeps',status:'error',error:e,params:guid});
			});
		}
	}).error(function(e) {
		console.info('task loading error');
		console.info({action:'loadTask',status:'error',error:e,params:guid});
		loading.reject({action:'loadTask',status:'error',error:e,params:guid});
	});
	return loading.promise();
}
/**
* promises to save a task.
* @name si5.tSave
* @guid String the GUID of the task to load
* @type Promise 
*/
si5.tSave = function(guid) {
	var saving = $.Deferred();
	//nodejs writes to disk
	si5.tasks[guid].dirty = false;
	JSONstring.includeFunctions=true; 		
	JSONstring.inlineIncludeFunctions=true;
	$.post(this.tGetUrl,{
		guid:guid
		,content:JSONstring.make(si5.tasks[guid])
		,action:'saveTask'
	}).done(function(response) {
		saving.resolve({action:'saveTask',status:'ok',params:guid});
	}).fail(function(e) {
		saving.fail({action:'saveTask',status:'error',error:e,params:guid});
	});
	return saving.promise();
}
/**
* promises to save a clone of a task.
* @name si5.tSave
* @guid String the GUID of the task to load
* @guidto name for clone, if not supplied then one will be autogenerated.
* @type Promise 
*/
si5.tSaveAs = function(guid,guidto) {
	cloneGuid = this.tClone(guid,guidto);
	console.info('cloned:',cloneGuid);
	return this.tSave(cloneGuid);
}
/**
* creates a clone og task identified by guid
* @name si5.tSave
* @guid String the GUID of the task to clone
* @guidto name for clone, if not supplied then one will be autogenerated.
* @type GUID the guid of the cloned task
*/
si5.tClone = function(guid,guidto) {
	if (typeof guidto == "undefined") {
		var guidto = SHA1(new Date().getTime() + 'si5_newTask');
	}
	si5.tasks[guidto] = jQuery.extend(true,{},si5.tasks[guid]);
	//update any internal guid references...
	si5.tasks[guidto].guid = guidto;
	return guidto;
}
si5.tasks = {
}
/**
* using a promise list we can deal very well with lots of different types of results returned from functions.
* idea is you can return a promise, or an array of different actions that you have started off...
* this means that you don't want to wait for all of your children before going up, but instead things that
* get finished earlier will pass up the chain. Maybe this function is not needed since we could instead
* make every component wait for all children to resolve before passing on a result to your own caller.
* basically we will have to experiment with firing off multiple children and seeing how we want to deal with that.
* inline isPromise function 
* @name si5.promiseList
* @type Array promiseList with result added
*/
/*
* functions inlined in promiseList function.
* http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
* function isArray(o) {
*  return Object.prototype.toString.call(o) === '[object Array]';
* }
* function isPromise( obj ) {
*	return obj.then && typeof obj.then === 'function'
* }
*/
si5.promiseList = function(promiseList, result) {
	//result can be any object / string / array
	//or a promise
	//or an array of promises
	if (Object.prototype.toString.call(result) === '[object Array]') {
		if (result[0]) {
			if (result[0].then && typeof result[0].then === 'function') {
				//first element in the array is a promise..
				//therefore add it to the end of the existing array of promises.
				return promiseList.concat(result);
			}
		}
	}
	promiseList.push(result);
	return promiseList;
}
/**
*
* @name si5.contains
* @type Boolean true if obj exists in array.
*/
si5.contains = function(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

/**
* klass implementation should always return a promise or the data from its function. If you have children
* @name 2 klass implementation (task component implementation)
* @comment
* @example var klass = {
*    runProjectionSimple:function() {
*        return 'text from my function';	
*    }
*    runProjection:function() {
*        var doing = $.Deferred();
*        try {
*            console.log("klass "+this.i.__k+" Running");
*            console.dir(this);
*            doing.resolve({data:'returned to operate on'});
*        } catch(e) {
*            doing.reject(e);
*        }
*        return doing.promise();
*   },runProjectionChild:function() {
*   	var doing = [];
*		
*       for(var f in i.fns) {
*           promiseResult(doing, i.fns[f]());
*		}
*		
*		return doing;
*   },runProjectionChildAndAsync:function(doing) {
*       if (doing == undefined) {var doing = [];}
*       var meDoing = $.Deferred();
*       doing.push(meDoing.promise());
*
*       doAsyncFunc(function(dat) {
*           //my async action is completed...
*           meDoing.resolveWith(this, dat);
*       },function(e) {
*           //error in my function...
*           meDoing.rejectWith(this, e);
*       });
*		
*       for(var f in i.fns) {
*           promiseResult(doing,i.fns[f]());
*       }
*		
*       return doing;
*   }
* }
*/
si5.klass = {

}
/**
* create a klass
* @name si5.kNew
* @param String guid Klass to save.
* @type String guid of new klass.
*/
si5.kNew = function() {
	var newGUID = SHA1(new Date().getTime() + 'si5_newKlass');
	si5.klass[newGUID] = {};
	return newGUID;
}
/**
* clone an existing klass.
* @name si5.kClone
* @param String guid Klass to save.
*/
si5.kClone = function(GUID,newGUID) {
	if (typeof newGUID == 'undefined') {
		var newGUID = SHA1(new Date().getTime() + 'si5_cloneKlass');
	}
	var newK = $.extend({},si5.klass[GUID]);
	si5.klass[newGUID] = newK;
	return newGUID;
}
/**
* direct insert of a klass implementation
* @name si5.kInject
* @guid String the GUID of the klass to overwrite/add
* @k the object implementation.
* @type Promise 
*/
si5.kInject = function(guid, k) {
	si5.klass[guid] = k;
}
/**
* promises to load a klass.
* @name si5.kLoad
* @guid String the GUID of the klass to load
* @type Promise 
*/
si5.kLoad = function(guid) {
	var loading = $.Deferred();
	//nodejs reads from disk...
	if (si5.klass[guid]) {
		//already loaded..
		loading.resolve({action:'loadKlass',status:'ok',params:guid});
	} else {
		if (this.noLinkChange) {
			var link = guid;
		} else {
			var link = guid.substr(0,2)+'/'+guid.substr(2);
		}
		$.ajax({url:this.kGetUrl+link+'/k.js?rnd='+Math.random(),dataType:'text'}).done(function(response) {
			var k;
			eval('k='+response);
			si5.klass[guid] = k;
			loading.resolve({action:'loadKlass',status:'ok',params:guid});
		}).fail(function(e) {
			loading.reject({action:'loadKlass',status:'error',error:e,params:guid});
		});
	}
	return loading.promise();
}
si5.kLoad2 = function(guid) {
	var loading = $.Deferred();
	//nodejs reads from disk...
	if (si5.klass[guid]) {
		//already loaded..
		loading.resolve({action:'loadKlass',status:'ok',params:guid});
	} else {
		if (this.noLinkChange) {
			var link = guid;
		} else {
			var link = guid.substr(0,2)+'/'+guid.substr(2);
		}
		console.info('kLoad',guid,link,this.kGetUrl);
		$.ajax({url:this.kGetUrl,data:{action:'loadKlass',guid:guid},dataType:'text'}).done(function(response) {
			var k;
			eval('k='+response);
			si5.klass[guid] = k;
			loading.resolve({action:'loadKlass',status:'ok',params:guid});
		}).fail(function(e) {
			loading.reject({action:'loadKlass',status:'error',error:e,params:guid});
		});
	}
	return loading.promise();
}
/**
* save a klass
* @name si5.kSave
* @param String guid Klass to save.
*/
si5.kSave2 = function(guid){return si5.kSave(guid);}
si5.kSave = function(guid) {
	var saving = $.Deferred();
	JSONstring.includeFunctions=true; 		
	JSONstring.inlineIncludeFunctions=true;
	$.post(this.kGetUrl
		,{
			action:'saveKlass'
			,guid:guid
			,content:JSONstring.make(si5.klass[guid])
		}).done(function(response) {
		saving.resolve({action:'saveKlass',status:'ok',params:guid});
	}).fail(function(e) {
		saving.fail({action:'saveKlass',status:'error',error:e,params:guid});
	});
	return saving.promise();
}
/**
* promises to load or save a template
* @name si5.kTmpl
* @param guid String the GUID of the klass
* @param fName function / projection name
* @type Promise 
*/
si5.kTmpl = function(guid,fName,txt) {
	if (txt == undefined) {
		var loading = $.Deferred();
		//nodejs reads from disk...
		$.ajax('klass/'+guid+'/'+fName+'.tmpl').done(function(response) {
			loading.resolve(response);
		}).fail(function(e) {
			loading.fail({action:'loadKlass',status:'error',error:e,params:guid});
		});
		return loading.promise();
	} else {
		var saving = $.Deferred();
		//nodejs writes to disk
		$.ajax('klass/'+guid+'/'+fName+'.tmpl',{
			content:txt
		}).done(function(response) {
			saving.resolve({action:'saveKlass',status:'ok',params:guid});
		}).fail(function(e) {
			saving.fail({action:'saveKlass',status:'error',error:e,params:guid});
		});
		return saving.promise();
	}
}
si5.getK = function(guid) {
	return si5.klass[guid];
}

/**
* set or get the klass projection source code
* @name si5.kpSrc
* @param String guid Klass to save.
* @param String projection function/projection name
* @param String code javascript source code for the function
*/
si5.kpSrc = function(guid, projection, code) {
	if (code == undefined) {
		return si5.klass[guid][projection].toString();
	} else {
		eval("si5.klass[guid][projection] = " + code);
	}
	return this;
}
/**
* @name si5.kpList
* @param String guid Klass to save.
* @param String projection function/projection name
*/
si5.kpList = function(guid) {
	var list = [];
	for(var p in si5.klass[guid]) {
		if (typeof si5.klass[guid][p] == 'function') {
			list.push(p);
		}
	}
	return list;
}
/**
* developed and refined many times a clean template compilation language.
* One thing we have not carried over is the access of a shared blackboard. It would be possible to access
* a blackboard on the template object and thereby pass things around during compilation.
* The thing is that the compilation is not dynamically being interpreted, rather we just quickly convert to 
* a function format and that is then executed at run time instead so the compilation is quite simple.
* @name siTemplate implementation
* @comment
*/
/* function enables you to escape any special regexp charactures.. */   
RegExp.escape = function(text) {
  if (!arguments.callee.sRE) {
    var specials = [
      '/', '.', '*', '+', '?', '|',
      '(', ')', '[', ']', '{', '}', '\\'
    ];
    arguments.callee.sRE = new RegExp(
      '(\\' + specials.join('|\\') + ')', 'g'
    );
  }
  return text.replace(arguments.callee.sRE, '\\$1');
}
si5.Compile=function(tmpl, tmplDef) {
	if (tmplDef.matchFn == undefined) {
		tmplDef.matchFn = function(match, substrmatch1) { 
			/**
			* matching function is called by regexp it returns string to replace the matched string.
			* you can alter the tokens used to split up the templates:
			* (# console.log('unlimited js can be run #)
			* (#='Convience function to output data'#)
			*/
			
			//remove the earlier string escaping since token charactures will be output as pure js 
			clean = substrmatch1
						.replace(/\\"/g,'"')//remove escaping for js code.
						.replace(/\\n/g,"\n")//use real line breaks..
						;
				
			//first characture after the token identifies special operators that effect how contents inside the token are used.
			switch(substrmatch1.substring(0,1)) {    
				//useful charactures: =$*?@#&£+-/^;:,.
				case "=":
					//shorthand to print single level variable access
					//(#=row.field#) if field is undefined then outputs ''
					return String.fromCharCode(34)+");\n" + tmplDef.pushFn+clean.substring(1)+"||'');"+tmplDef.pushFn+String.fromCharCode(34);
					break;
				case "@":
					//return a lookup supressing any errors that occur.
					return String.fromCharCode(34)+");\n" + "try{"+tmplDef.pushFn+clean.substring(1)+");}catch(e){}\n "+tmplDef.pushFn+String.fromCharCode(34);
					break;
				case "^":
					//output a compilation variable, basically used so you can output Start / End Tokens
					
					// (#^TokenStart5#) js source code in the output template (#^TokenEnd5#)
					// becomes (# js source code in the output template #)
					// (#^TokenStart5#)=row['field'](#^TokenEnd5#)
					// becomes (#=row['field']#)
					return tmplDef[substrmatch1.substring(1)];
					break;
				case "+":
					//(#+ns.data|row|3#)<tr><td>(#=row.field#)</td></tr>(#-#)
					//converted to:
					// o.push(----);
					// for(var ri3=0;ri3<ns.data.length;ri3++) {
					//	var row = ns.data[ri3];
					//	o.push("<tr><td>");
					//  o.push(row.field||'');
					//  o.push("</td></tr>");
					// }
					var params = clean.split("|");
					var unique = p[2]||1;
					var out = String.fromCharCode(34)+");\n";//close last push
					out += "for(var ri"+unique+"=0;ri"+unique+"<"+params[0]+".length;ri"+unique+"++) {";
					out += "\t"+"var "+params[1]+" = "+params[0]+"[ri"+unique+"];\n"
					out += tmplDef.pushFn+String.fromCharCode(34);
					return out;
				case "-":
					return String.fromCharCode(34)+");\n" + "}" + "\n"+tmplDef.pushFn+String.fromCharCode(34);
					break;
				default:                                 
					// (#
					//    console.log("inline source code...");
					//	  console.log("multiline with no filtering of source code");
					// #)
					return  String.fromCharCode(34)+");\n" + clean + "\n"+tmplDef.pushFn+String.fromCharCode(34);
				break;
			}  
		}
	}
    
	var s_token = RegExp.escape(tmplDef.TokenStart);
	var e_token = RegExp.escape(tmplDef.TokenEnd);
	//string will be "pushed" by js so escape anything that would break that js push
	tmpl = tmpl.replace(/"/g,'\\"');//escape any quotes since we use quotes out.push("--string---")
	tmpl = tmpl.replace(/\n/g,"\\"+"n");//line breaks are escaped so they work inside a js string out.push("string\n next line");
	
	//create a regexp to globally search string and return none-greedy anything between start and end token.
	var re = new RegExp(s_token+"(.*?)"+e_token,"gi");//none-greedy (?) not supported in IE5
	//run regexp on string replacing each match that you find with result of matchFunction.
	var res = tmpl.replace(re, tmplDef.matchFn);
	//tidy up...
	/*var emptyPushFunctions = new RegExp(RegExp.escape(tmplDef.pushFn+'"");'),'igm');
	res = res.replace(emptyPushFunctions,'');
	return tmplDef.Header+res+tmplDef.Footer;*/
	
	var emptyPushFunctions = new RegExp(RegExp.escape(tmplDef.pushFn+'"");\n'),'igm');
	res = tmplDef.Header+res+tmplDef.Footer;
	return res.replace(emptyPushFunctions,'');
}
/**
* @name si5 Template Compilation Implemenatation
* @comment
* @example result:(#=row.status#) <table><tr>(#
#)</tr></table>
*/
si5.tmpl = {
	pushFn:'o.push('
 	,Header:'function(){\nvar o=[];\no.push(\"'
	,Footer:'\");\nreturn o.join("");\n}'
	,TokenStart:"(#"
 	,TokenEnd:"#)"
	,TokenStart2:"{#"
	,TokenEnd2:"{#"
}
//to compile csl:
//si5.Compile(clsTmpl,si5.clsTmpl)
//in template {#^sToken#}=helloWorld{#^eToken#}
//becomes (#=helloWorld#)
si5.cslTmpl = {
	pushFn:'o.push('
 	,Header:'o.push(\"'
	,Footer:'\");\n'
	,TokenStart:"{#"
 	,TokenEnd:"#}"
	,sToken:"(#"
	,eToken:"#)"
}

/**
* promises to load or save a page
* @name si5.kTmpl
* @param pageGroup name for page group
* @param pageName name for the page
* @param txt content of the page.
* @type Promise 
*/
si5.appPage = function(pageGroup,pageName,txt) {
	if (txt == undefined) {
		var loading = $.Deferred();
		//nodejs reads from disk...
		$.ajax('localApp/'+pageGroup+'/'+pageName+'.js').done(function(response) {
			loading.resolve({action:'appPage.fetch',status:'ok',response:response,pageGroup:pageGroup,pageName:pageName});
		}).fail(function(e) {
			loading.fail({action:'appPage.fetch',status:'error',error:e});
		});
		return loading.promise();
	} else {
		var saving = $.Deferred();
		//nodejs writes to disk
		$.ajax('localApp/'+pageGroup+'/'+pageName+'.js',{
			content:txt
		}).done(function(response) {
			saving.resolve({action:'appPage.store',status:'ok',pageGroup:pageGroup,pageName:pageName});
		}).fail(function(e) {
			saving.fail({action:'appPage.store',status:'error',error:e,pageGroup:pageGroup,pageName:pageName});
		});
		return saving.promise();
	}
}
/**
* promises to load or save a template
* @name si5.appPageTmpl
* @param guid String the GUID of the klass
* @param fName function / projection name
* @type Promise 
*/
si5.appPageTmpl = function(pageGroup,pageName,txt) {
	if (txt == undefined) {
		var loading = $.Deferred();
		//nodejs reads from disk...
		$.ajax('localApp/'+pageGroup+'/'+pageName+'.tmpl').done(function(response) {
			loading.resolve({action:'appPageTmpl.fetch',status:'ok',response:response,pageGroup:pageGroup,pageName:pageName});
		}).fail(function(e) {
			loading.fail({action:'appPageTmpl.fetch',status:'error',error:e});
		});
		return loading.promise();
	} else {
		var saving = $.Deferred();
		//nodejs writes to disk
		$.ajax('localApp/'+pageGroup+'/'+pageName+'.tmpl',{
			content:txt
		}).done(function(response) {
			saving.resolve({action:'appPageTmpl.store',status:'ok',pageGroup:pageGroup,pageName:pageName});
		}).fail(function(e) {
			saving.fail({action:'appPage.store',status:'error',error:e,pageGroup:pageGroup,pageName:pageName});
		});
		return saving.promise();
	}
}

/**
* Perform operations starting on the given task. This gives you your own object for any manipulation of tasks, very important
* since we are running async and many people can be modifying different things, so this gives your cascade of commands its own
* little environment that can modify and do things locally for you. A task should already be loaded in memory and be accessible
* when you use this function, so call load first.
* @name Cascade
* @param string taskGUID object path to the task you want to modify
*
* @example Cascade('taskGUID')...;
* @type Cascade
*/
$t51 = function(taskPath,target) {
	//v51 api call
	//si5.t51.eId();
	var wrap = jQuery.extend(true,{},si5.t51.eId());
	return wrap.init(taskPath,target);
	//return jQuery.extend(true,{},sihorton4.t43.init(taskPath,target));
}
if (!window['$t']) {
	//version "independent" api call
	$t = $t51;
}

/**
* list of shortened property names and their meanings
* @name 3 list of shortened properties
* @comment
* @example p: component property
*c: component
*k: klass (task component implementation)
*i: component input
*o: component output
*t: task
*f: function name (projection)
*/
si5.t51 = {
	/**
	* @name 4 an example of the Cascade Structure
	* @comment
	* @example Cascade = {
	*    t:'@si5.tasks[taskGUID]'
	*    ,b:{
	*       'Blackboard':'properties'
	*       ,'Use':'hold task context'
	*       ,'danger':'not thread safe'
	*    },r:'@si5.responses[poolId]'
	*}
	*/
	t:undefined
	,b:{}
	,r:undefined
	/**
	* increments the execution id so a new cascade can use the id as a unique id.
	* @name Cascade.eId
	* @type Integer
	*/
	,_eId:0
	,eId:function() {
		this._eId++;
		return this;
	},init:function(taskGUID) {
		//find if that task is available if not then give error.
		if (!si5.tasks[taskGUID])  throw new Error(1, "Task not loaded:" +  taskGUID);
		this.t = si5.tasks[taskGUID];
		return this;
	}
	/**
	* Will copy over components under fromComp and add them as children to toComp
	* @name Cascade.tMerge
	* @param String taskGUID the task to merge from
	* @param String fromComp name of the component to copy children from
	* @param String toComp name of the component to copy children to.
	*/
	,tMerge:function(taskGUID, fromComp, toComp) {
		console.info('tMerge',taskGUID, fromComp, toComp);
		var merging = $.Deferred();
		var proms = [];
		var taskFrom = si5.tasks[taskGUID];
		var namedComponents = "";
		if (taskFrom.c['edit'] && taskFrom.c['edit']['namedComponents']) {
			namedComponents = ','+taskFrom.c['edit']['namedComponents']+',';
		}
		console.info('namedComponents:',namedComponents);
		var nameMap = {};
		//get recursive list of all children
		var fullList = $t51(taskGUID).ocTreeList(fromComp);
		var rootList = $t51(taskGUID).ocList(fromComp,'go');//hardcoded here.
		console.info('tMerge: list of children to copy',fullList);
		for(var i=0;i<fullList.length;i++) {
			//is component a special named component.
			var cName = fullList[i];
			if (namedComponents.indexOf(','+cName+',')>-1) {
				//namedComponents should not be created new
				//this is a way to hook into named components on the task.
				if (!this.cIs(cName)) {
					//named component does not exist, create it..
					console.info('named component '+cName+' does not exist, creating',taskFrom.c[cName]);
					var obj = jQuery.extend({},taskFrom.c[cName]);
					var d = this.cNew(obj);
					proms.push(d);
					var myT = this;
					d.done(function(result) {
						var newComp = myT.t.c[result.cName];
						console.info('new comp',newComp);
						if (newComp.__cFrom) {
							nameMap[newComp.__cFrom] = newComp.__c;
							delete newComp.__cFrom;
						}
					});
					
				}
				nameMap[cName] = cName;
			} else {
				//this is a normal component.
				var obj = jQuery.extend({},taskFrom.c[cName]);
				obj.__cFrom = cName;
				nameMap[cName] = undefined;
				delete obj.__c;
				console.info('creating copy',obj);
				var d = this.cNew(obj);
				proms.push(d);
				var myT = this;
					d.done(function(result) {
						var newComp = myT.t.c[result.cName];
						console.info('new comp',newComp);
						if (newComp.__cFrom) {
							nameMap[newComp.__cFrom] = newComp.__c;
							delete newComp.__cFrom;
						}
					});
			}
		}
		
		var myT = this;
		var theirT = $t51(taskGUID);
		jQuery.whenArray(proms).done(function(list) {
			console.info('created all components',nameMap);
			console.info(theirT);
			for(var i=0;i<rootList.length;i++) {
				console.info('oAdd',toComp,'go',nameMap[rootList[i]],{});
				myT.oAdd(toComp,'go',nameMap[rootList[i]],{});
			}
				//we now have all components loaded into the new task, and we also have a name map from the iTask component names to the new component names...
				//we should copy over the output links...
				for(var cp in nameMap) {
					var os = theirT.oList(cp);
					console.info(cp+' oList:',os);
					for(var i=0;i<os.length;i++) {
						var list = theirT.ocList(cp,os[i]);
						console.info(cp+' output '+os[i],list);
						for(var i=0;i<list.length;i++) {
							myT.oAdd(nameMap[cp],os[i],nameMap[list[i]],{});
						}
					}
				}
				//oAdd:function(cName, oName, cName2, contextQueryInfo) {
				
				merging.resolve({action:'tMerge',status:'ok',params:{taskGUID:taskGUID,fromComp:fromComp,toComp:toComp}});
			}).fail(function(e) {
				//we did not manage to load
				merging.reject({action:'tMerge',status:'error',error:e,params:{taskGUID:taskGUID,fromComp:fromComp,toComp:toComp}});
			});
		return merging.promise();
	}
	/**
	* rename task component
	* @name Cascade.c2
	* @param String cName component name.
	* @param String cName2 new component name.
	* @type Cascade
	*/
	,c2:function(cName, cName2) {
		if (cIs(cName2)) {
			throw new Exception(100,"c2():"+cName2+" already exists, use cIs to check before deleting");
		}
		//people that point to me should be updated to point to the new component...
		var changeList = [];
		for(var compO in this.t.oi) {
			for(var outC in this.t.oi[compO]) {
				if (this.t.oi[compO][outC].lnk[cName]) {
					//rename
					changeList.push([compO,outC]);
				}
			}
		}
		for(var i=changeList.length();i>0;i--) {
			var compO = changeList[i][0];
			var outC = changeList[i][1];
			this.t.oi[compO][outC].lnk[cName2] = jQuery.Extend({},this.t.oi[compO][outC].lnk[cName]);
			delete this.t.oi[compO][outC].lnk[cName];
			//rename component in the ord list
			for(var ord=this.t.oi[compO][outC].ord.length;ord>0;ord--) {
				if (this.t.oi[compO][outC].ord[ord] == cName) {
					this.t.oi[compO][outC].ord[ord] = cName2;
					break;
				}
			}
		}
		var temp = jQuery.extend({},this.t.c[cName]);
		var oiTemp = jQuery.extend({},this.t.oi[cName]);
		
		this.cDel(cName);
		this.oDel(cName);
		
		this.t.c[cName2] = temp;
		this.t.oi[cName2] = oiTemp; 
		this.t.dirty = true;
		return this;
	}
	/**
	* Remove named component from task.
	* @name Cascade.cDel
	* @param String cName component name in task.
	* @type Cascade
	*/
	,cDel:function(cName) {
		//go through outputs and remove any outputs connected to component.
		var changeList = [];
		for(var compO in this.t.oi) {
			for(var outC in this.t.oi[compO]) {
				if (this.t.oi[compO][outC].lnk[cName]) {
					//delete
					changeList.push([compO,outC]);
				}
			}
		}
		for(var i=changeList.length-1;i>0;i--) {
			var compO = changeList[i][0];
			var outC = changeList[i][1];
			delete this.t.oi[compO][outC].lnk[cName];
			//remove component in the ord list
			for(var ord=this.t.oi[compO][outC].ord.length;ord>0;ord--) {
				if (this.t.oi[compO][outC].ord[ord] == cName) {
					//cut this component out of the order.
					this.t.oi[compO][outC].ord.splice(ord,1);
					break;
				}
			}
		}
		//also maybe there are isDirty caches or similar...
		delete this.t.c[cName];
		delete this.t.oi[cName];
		this.t.dirty = true;
		return this;
	}
	/**
	* remove named task component and all downstream components
	* @name Cascade.cDelTree
	* @param String cName component name in task.
	* @type Cascade
	*/
	,cDelTree:function(cName) {
		//we would need to traverse down then delete afterwards...
		var delList = this.ocTreeList(cName, true);
		for(var d=delList.length;d>0;d--) {
			this.cDel(delList[d]);
		}
	}
	/**
	* true if named component exists
	* @name Cascade.cIs
	* @param String cName name of component
	* @type Boolean true if component exists
	*/
	,cIs:function(cName) {
		if (this.t.c[cName] == undefined) {
			return false;
		}
		return true;
	}
	/**
	* returns array holding a list of all component names on the Task
	* @name Cascade.cList
	* @type Array list of components on the task
	*/
	,cList:function() {
		var ret = [];
		for(var nam in this.t.c) {
			ret.push(nam);
		}
		return ret;
	}
	/**
	* promises to create a new component in the task, loads required klass if it is not already cached. Pass in default object properties. If you don't provide __c then the component name will be auto generated 
	* If you don't provide __k then a generic tci object will be used.
	* @name Cascade.cNew
	* @param Object params initial component properties
	* @type Promise
	*/
	,cNew:function(params, earlyAdd) {
		if (typeof earlyAdd == 'undefined') earlyAdd = true;
		var creating = $.Deferred();
		if (params.__k == undefined) {params.__k = "generic";}
		/**
		* @name 7 example component
		* @comment
		* @example comp:{
		*    __c:'comp1'
		*    ,__k:'klass GUID'
		*    ,'prop1':'a'
		*    ,'prop2':2
		*}
		*/
		var cName;
		if (params.__c) {
			cName = params.__c;
		} else {
			//create a unique component name
			do {
				cName = "Comp"+this.t.uId++;
			} while(this.cIs(cName));
			params.__c = cName;
		}
		if (si5.klass[params.__k]) {
			//class is already loaded...
			this.t.c[cName] = params;
			this.t.oi[cName] = {};
			this.t.deps[params.__k] = {};
			this.t.dirty = true;
			creating.resolve({action:'created',cName:cName});
		} else {
			if (earlyAdd) {
				//add component before klass is loaded
				this.t.c[cName] = params;
				this.t.oi[cName] = {};
				this.t.deps[params.__k] = {};
				this.t.dirty = true;
			}
			
			var myParams = jQuery.extend({}, params);
			var tPtr = this.t;	
			si5.kLoad(params.__k).done(function(obj){
				console.info(this);
				tPtr.c[myParams.__c] = myParams;
				tPtr.oi[myParams.__c] = {};
				tPtr.deps[myParams.__k] = {};
				tPtr.dirty = true;
				obj.cName=myParams.__c;
				creating.resolve(obj);
			}).fail(function(obj){
				creating.reject(obj);
			});
		}
		return creating.promise();
	}
	/**
	* get the parent component name at x levels above us
	* @name Cascade.cPar
	* @param int level number of levels up the tree to get parent.
	* @param String cName component name in task.
	* @type String name of parent component
	*/
	,cPar:function(cName,level) {}
	
	
	
	/**
	* set a component property
	* @name Cascade.pSet
	* @param String cName component name
	* @param String pName property name to set
	* @param Mixed pVal value to set property to
	* @type Cascade
	*/
	,pSet:function(cName, pName, pVal) {
		this.t.c[cName][pName] = pVal;
		this.t.dirty = true;
		return this;
	}
	/**
	* set a component property and encode it (html entities) to prevent problems when you print it out
	* @name Cascade.pSetE
	* @param String cName component name in task.
	* @param String pName property name to set
	* @param Mixed pVal value to set property to
	* @type Cascade
	*/
	,pSetE:function(cName, pName, pVal) {
		this.t.c[cName][pName] = sihorton4.EntityEncode(pVal);
		this.t.dirty = true;
		return this;
	}
	/**
	* set a component property if it is blank, otherwise ignore
	* @name Cascade.pSetD
	* @param String cName component name in task.
	* @param String pName property name to set
	* @param Mixed pVal value to set property to
	* @type Cascade
	*/
	,pSetD:function(cName, pName, pVal) {
		if (this.t.c[cName][pName] == undefined || this.t.c[cName][pName] == '') {
			this.t.c[cName][pName] = pVal;
			this.t.dirty = true;
		}
		return this;
	}
	/**
	* set an encoded (html entities) component property if it is blank, otherwise ignore
	* @name Cascade.pSetDE
	* @param String cName component name in task.
	* @param String pName property name to set
	* @param Mixed pVal value to set property to
	* @type Cascade
	*/
	,pSetDE:function(cName, pName, pVal) {
		return this.pSetD(cName, pName,sihorton4.EntityEncode(pVal));
	}
	/**
	* delete a component property
	* @name Cascade.pDel
	* @param String cName component name in task.
	* @param String pName property name to delete
	* @type Cascade
	*/
	,pDel:function(cName, pName) {
		delete this.t.c[cName][pName];
		this.t.dirty = true;
		return this
	}
	/**
	* get a component property
	* @name Cascade.pGet
	* @param String cName component name in task.
	* @param String pName property name to get
	* @type Cascade
	*/
	,pGet:function(cName, pName) {
		if (!this.t.c[cName]) {console.error('pGet component:'+cName+' does not exist');return '';} 
		return this.t.c[cName][pName] || '';
	}
	/**
	* test if property exists
	* @name Cascade.pIs
	* @param String cName component name in task to make current.
	* @param String pName property name to set
	* @type Cascade
	*/
	,pIs:function(cName, pName) {
		if (this.t.c[cName][pName] == undefined || this.t.c[cName][pName] == '') {
			return false;
		}
		return true;
	}
	
	/**
	* get the klass guid (task component implementation)
	* @name Cascade.kGet
	* @param String cName component name in task.
	* @param String bName blackboard property to hold the output
	* @type String klass guid
	*/
	,kGet:function(cName, bName) {
		return this.t.c[cName].__k;
	}
	,kGetL:function(cName, bName) {
		console.error("kGetL is depreciated since all k are now links");
		var k = this.t.c[cName].__k
		return k.substr(0,2)+'/'+k.substr(2);
	}
	/**
	* change the klass guid (task component implementation)
	* it is possible to change klass without loading in the component to cache, but we should setup a promise 
	* so you know when the change has been made.
	* @name Cascade.k2
	* @param String cName component name in task.
	* @param String k klass (GUID of the task component implementation for this component)
	* @type Cascade
	*/
	,k2:function(cName, GUID) {
		var creating = $.Deferred();
		//see if GUID already exists
		console.info('k2',cName,GUID);
		if (si5.klass[GUID]) {
			//simply change it..
			this.t.c[cName].__k = GUID;
			this.t.dirty = true;
			this.t.deps[GUID] = {};
			creating.resolve({status:'ok',params:{cName:cName,GUID:GUID}});
		} else {
			console.warn("klass did not exist, we should load in background" + GUID);
			//load the klass...
			//once loaded and available
			var tPtr = this.t;
			var myGUID = GUID;
			si5.kLoad(GUID).done(function(d) {
				tPtr.c[cName].__k = myGUID;
				tPtr.dirty = true;
				tPtr.deps[myGUID] = {};
				creating.resolve({status:'ok',params:{cName:cName,GUID:myGUID}});
			}).fail(function(e) {
				console.error('failed to change klass',e);
				creating.reject({status:'error',error:e,params:{cName:cName,GUID:myGUID}});
			});
		}
		//return this;
		return creating.promise();
	}
	
	/**
	* return array holding a list of all tci GUID on the task
	* @name Cascade.kList
	* @type Cascade
	*/
	,kList:function() {
		var ret = [];
		for(var c in this.t.c) {
			ret.push(c.__k);
		}
		return ret;
	}
	,kList2:function() {
		var ret = {};
		for(var c in this.t.c) {
			ret[this.t.c[c].__k] = {};
		}
		//this.t.deps = ret;
		return ret;
	},cleanDeps:function() {
		console.info('before deps cleaning');
		console.dir(this.t.deps);
		var ret = {};
		for(var c in this.t.c) {
			ret[this.t.c[c].__k] = {};
		}
		this.t.deps = ret;
		console.info('cleanDeps',ret);
		return this;
	}
	
	/**
	* perform task projection (fireInput) - f for function, recieve a promise that is resolved when projection is complete. 
	* Difference with emit is only that this allows you to fire a named projection directly. We know that the component and 
	* klass is available so therefore it would be possible to call directly and get response, if it then does something clever 
	* which is async if we don't return a promise then no way to check that at all.
	* @name Cascade.fDo
	* @param String cName component name in task.
	* @param String fName name of projection to run
	* @param Mixed Inputs inputs to the projection.
	* @type Promise result from the function
	*/
	,fDo:function(cName, fName, Inputs) {
		/**
		* Execution objects are created and then become 'this' keyword for a class implementation.
		* Ideally the object contains no pointers but just text names so it can be serialized into a queue
		* will also help with debugging and creating a call stack.
		* current component from task is actually copied so later changes to a component will not affect running components.
		* this is to make thread safe
		* @name 5 example exec object
		* @comment
		* @example exec = {
		*    eId:14
		*    ,t:'[TaskGUID]'
		*    ,cName:'comp1'
		*    ,f:'edit'
		*    ,i:{
        *      'hello':'world'
        *      ,__k:'GUID_SHA1'
        *      ,__c:'comp1'
        *      ,input1:'test'
		*      ,e:'si5' -- use as window[this.e].......
		*      ,created:14143243243242
		*    }
		*}
		*/
		if (typeof this.t.c[cName] == undefined) 
			return 'Error: Component '+cName+' does not exist';
		var exec = {
			eId:this.eId()
			,t:this.t.guid
			,cName:cName
			,f:fName
			,i:jQuery.extend(true, {}, this.t.c[cName],Inputs)
			,e:'si5'
			,created:new Date().getTime()
		};
		if (si5.debug) {
			console.info('fDo '+fName);
		}
		if (!si5.klass[exec.i.__k]) {
			console.error("klass does not exist:",exec.i.__k,exec);
		}
		if (!si5.klass[exec.i.__k][fName]) {
			console.error("projection does not exist:",fName,si5.klass[exec.i.__k],exec);
		}
		
		return si5.klass[exec.i.__k][fName].apply(exec);
	}
	
	/**
	* tests if a given projection exists
	* @name Cascade.fIs
	* @param String cName component name in task.
	* @param String fName name of projection
	* @type boolean true is projection is available
	*/
	,fIs:function(cName,fName) {
		if (typeof si5.klass[this.t.c[cName].__k][fName] == 'function') {
			return true;
		}
		return false;
	}
	
	/**
	* emit a named output value, this will create response space to hold any output and then set each linked component ready to execute. 
	* You recieve a promise which will be resolved when all children are finished. This breaks the chain and maybe you would want to 
	* carry on anyway... However maybe at the end of your execution you need to return a promise yourself which is complete when your 
	* children are complete!
	* @name Cascade.oEmit
	* @param String cName component name in task.
	* @param String oName output name.
	* @param String fName the projection that you are running (can pass through name you got)
	* @param Mixed oVal output to send
	* @type Promise
	*/
	,oEmit:function(cName, oName, fName, oVal) {
		doingStuff = [];
		
		var outputs = this.t.oi[cName][oName];
		if (typeof outputs == 'undefined')
			return '';
		
		var oList = this.t.oi[cName][oName].ord; 
		if (si5.debug) {
			console.info('oEmit outputs list',oList);
		}
		var out =[];
		for(var c=0; c< oList.length;c++) {
			//run the output component passing in the output and storing its promise / result in the promiseList
			//space should be made in the response stream as well.
			//doingStuff = si5.promiseList(doingStuff, this.fDo(oList[c], fName, oVal));
			var o = this.fDo(oList[c], fName, oVal);
			out.push(o);
		}
		return out.join('');
		//return doingStuff;
	}
	/**
	* promises to return to you the output text
	* (hopefully in correct order...)
	*/
	,oEmit2:function(cName, oName, fName, oVal) {
		var doit = $.Deferred();
		var promises = [];
		
		var outputs = this.t.oi[cName][oName];
		var oList = this.t.oi[cName][oName].ord; 
		var out =[];
		var resultSlots = [];
		for(var c=0; c< oList.length;c++) {
			//run the output component passing in the output and storing its promise / result in the promiseList
			//space should be made in the response stream as well.
			//doingStuff = si5.promiseList(doingStuff, this.fDo(oList[c], fName, oVal));
			resultSlots[c] = undefined;
			var def = this.fDo(oList[c], fName, {resultSlot:c});
			if (typeof def == 'object') {
				def.done(function(result) {
					//store the result...
					resultSlots[result.resultSlot] = result.output;
					console.info(resultSlots);
				});
				promises.push(
					def
				);
			} else {
				//already got result back...
				resultSlots[c] = def;
				promises.push(def);
			}
			//console.info(oList[c],o);
			//out.push(o);
		}
		
		jQuery.whenArray(promises).then(function(results) {
			doit.resolve(resultSlots.join(''));
		});
		//return out.join('');
		//return doingStuff;
		return doit.promise();
	}
	
	/**
	* return array holding a list of all named outputs for the component
	* @name Cascade.oList
	* @param String cName component name in task.
	* @type Array
	*/
	,oList:function(cName) {
		var ret = [];
		for(var o in this.t.oi[cName]) {
			ret.push(o);
		}
		return ret;
	}
	
	/**
	* return ordered list of component names for components connected to the named output
	* @name Cascade.ocList
	* @param String cName component name in task.
	* @param String oName output name
	* @type Array
	*/
	,ocList:function(cName, oName) {
		if (this.t.oi[cName] && this.t.oi[cName][oName]) {
			return this.t.oi[cName][oName].ord;
		} else {
			return [];
		}
	}
	/**
	* return array holding a list of all components that can be navigated to 
	* by following outputs starting from cName component.
	* @name Cascade.ocTreeList
	* @param String cName component name in task.
	* @param Boolean treeList if true then include starting component in list, if array then append list to this array
	* @type Array
	*/
	,ocTreeList:function(cName, treeList) {
		if (treeList == true) {
			treeList = [cName];
		}
		if (treeList == undefined) {
			treeList = [];
		}
		for(var oName in this.t.oi[cName]) {
			var oList = this.t.oi[cName][oName].ord;
			for(var i=oList.length-1;i>-1;i--) {
				if (si5.contains(treeList,oList[i])) {
					//already deleting
				} else {
					treeList.push(oList[i]);
					//recursively get all output components that is linked to as well
					treeList = this.ocTreeList(oList[i], treeList);
				}
			}
		}
		return treeList;
	}
	
	/**
	* change the order of outputs get output index from ocList
	* @name Cascade.o2
	* @param String oName named output
	* @param String oInd named output index from 
	* @param String oInd named output index move to
	* @param String cName [Optional] component name in task.
	* @type Cascade
	*/
	,o2:function(oName,oInd,oInd2) {}
	
	/**
	* enter a new order for the outputs.
	* @name Cascade.oSort
	* @param String cName named component
	* @param String oName named output
	* @param Array newSortArray ordered list of component names ['Comp1','Comp2']
	* @type Cascade
	*/
	,oSort:function(cName, oName, newSortArray) {
		if (this.t.oi[cName][oName]) {
			//sanity we should check these components exist...
			var out = this.t.oi[cName][oName];
			var safeArray = [];
			for(var i=0;i<newSortArray.length;i++) {
				if (out.lnk[newSortArray[i]]) {
					safeArray.push(newSortArray[i]);
				} else {
					console.error('component '+newSortArray[i]+' not found.');
				}
			}
			this.t.oi[cName][oName].ord = safeArray;
		} else {
			console.error('oSort called but component/output not found',cName,oName);
		}
	}
	/**
	* remove an output link.
	* @name Cascade.oDel
	* @param String cName component name in task.
	* @param String oName [Optional] named output
	* @param String cName2 [Optional] remove output link to component name.
	* @type Cascade
	*/
	,oDel:function(cName, oName, cName2) {
		if (oName == undefined) {
			//no outputs specified so probably deleting the component
			//delete this components outputs.
			delete this.t.oi[cName];
		} else {
			if (cName2 == undefined) {
				//no particular component specified, remove entire output channel.
				delete this.t.oi[cName][oName];
			} else {
				delete this.t.oi[cName][oName].lnk[cName2];
				//remove component in the ord list
				for(var ord=this.t.oi[cName][oName].ord.length();ord>0;ord--) {
					if (this.t.oi[cName][oName].ord[ord] == cName2) {
						//cut this component out of the order.
						this.t.oi[cName][oName].ord.splice(ord,1);
						break;
					}
				}
			}
		}
		this.t.dirty = true;
		return this;
	}
	
	/**
	* add an output link.
	* @name Cascade.oAdd
	* @param String cName component name in task.
	* @param String oName named output
	* @param String cName2 component linked to
	* @param Object contextQueryInfo object used for context query
	* @type Cascade
	*/
	,oAdd:function(cName, oName, cName2, contextQueryInfo) {
		if (this.t.oi[cName][oName] == undefined) {
			this.t.oi[cName][oName] = {
				ord:[]
				,lnk:{}
			};
		}
		if (contextQueryInfo == undefined) {
			contextQueryInfo = {};
		}
		if (this.t.oi[cName][oName].lnk[cName2]) {
			//this link already exists
			//update query info but don't push to order again.
			this.t.oi[cName][oName].lnk[cName2] = contextQueryInfo;
		} else {
			this.t.oi[cName][oName].lnk[cName2] = contextQueryInfo;
			this.t.oi[cName][oName].ord.push(cName2);
		}
		this.t.dirty = true;
		return this;
	}
	/**
	* get output link contextQueryInfo.
	* @name Cascade.oGet
	* @param String cName component name in task.
	* @param String oName named output
	* @param String cName2 component linked to
	* @type Cascade
	*/
	,oGet:function(cName, oName, cName2) {
		if (this.t.oi[cName][oName] == undefined) {
			this.t.oi[cName][oName] = {
				ord:[]
				,lnk:{}
			};
		}
		return this.t.oi[cName][oName].lnk[cName2];
	}
	/**
	* output text to the response stream, in the background outputs will be re-sequenced and streamed as available to response.
	* @name Cascade.out
	* @param String str string to add to the output response
	* @param String cName [Optional] component name in task.
	* @type Cascade
	*/
	,out:function(str) {}
	
	/**
	* returns a tree structure showing all components and outputs.
	* @name Cascade.oTree
	* @param String cName component name in task.
	* @type Cascade
	*/
	,oTree:function(cName) {
		var res = this.oTree(cName);
		return res[0];
	}
	,oTree2:function(cName,all) {
		var out = {};
		if (all == undefined) {
			all = {};
		}
		var list = this.oList(cName);
		for(var p=0;p<list.length();p++) {
			var outs = this.ocList(cName,list[p]);
			for(var o=0;p<outs.length();o++) {
				//prevent recursion
				if (all[outs[o]] == undefined) {
					all[outs[o]] = '';
					var res = this.oTree2(outs[o],all);
					out[outs[o]] = res[0];
					all = res[1];
				} else {
					out[outs[o]] = '['+outs[o]+']';//reference since that has already been shown once.
				}
			}
		}
		return [out,all];
	}
}

function SHA1(msg) { function rotate_left(n, s) { var t4 = n << s | n >>> 32 - s; return t4; } function lsb_hex(val) { var str = ""; var i; var vh; var vl; for (i = 0; i <= 6; i += 2) { vh = val >>> i * 4 + 4 & 15; vl = val >>> i * 4 & 15; str += vh.toString(16) + vl.toString(16); } return str; } function cvt_hex(val) { var str = ""; var i; var v; for (i = 7; i >= 0; i--) { v = val >>> i * 4 & 15; str += v.toString(16); } return str; } function Utf8Encode(string) { string = string.replace(/\r\n/g, "\n"); var utftext = ""; for (var n = 0; n < string.length; n++) { var c = string.charCodeAt(n); if (c < 128) { utftext += String.fromCharCode(c); } else if (c > 127 && c < 2048) { utftext += String.fromCharCode(c >> 6 | 192); utftext += String.fromCharCode(c & 63 | 128); } else { utftext += String.fromCharCode(c >> 12 | 224); utftext += String.fromCharCode(c >> 6 & 63 | 128); utftext += String.fromCharCode(c & 63 | 128); } } return utftext; } var blockstart; var i, j; var W = new Array(80); var H0 = 1732584193; var H1 = 4023233417; var H2 = 2562383102; var H3 = 271733878; var H4 = 3285377520; var A, B, C, D, E; var temp; msg = Utf8Encode(msg); var msg_len = msg.length; var word_array = new Array; for (i = 0; i < msg_len - 3; i += 4) { j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 | msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3); word_array.push(j); } switch (msg_len % 4) { case 0: i = 2147483648; break; case 1: i = msg.charCodeAt(msg_len - 1) << 24 | 8388608; break; case 2: i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 32768; break; case 3: i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 128; break; default:; } word_array.push(i); while (word_array.length % 16 != 14) { word_array.push(0); } word_array.push(msg_len >>> 29); word_array.push(msg_len << 3 & 4294967295); for (blockstart = 0; blockstart < word_array.length; blockstart += 16) { for (i = 0; i < 16; i++) { W[i] = word_array[blockstart + i]; } for (i = 16; i <= 79; i++) { W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1); } A = H0; B = H1; C = H2; D = H3; E = H4; for (i = 0; i <= 19; i++) { temp = rotate_left(A, 5) + (B & C | ~B & D) + E + W[i] + 1518500249 & 4294967295; E = D; D = C; C = rotate_left(B, 30); B = A; A = temp; } for (i = 20; i <= 39; i++) { temp = rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 1859775393 & 4294967295; E = D; D = C; C = rotate_left(B, 30); B = A; A = temp; } for (i = 40; i <= 59; i++) { temp = rotate_left(A, 5) + (B & C | B & D | C & D) + E + W[i] + 2400959708 & 4294967295; E = D; D = C; C = rotate_left(B, 30); B = A; A = temp; } for (i = 60; i <= 79; i++) { temp = rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 3395469782 & 4294967295; E = D; D = C; C = rotate_left(B, 30); B = A; A = temp; } H0 = H0 + A & 4294967295; H1 = H1 + B & 4294967295; H2 = H2 + C & 4294967295; H3 = H3 + D & 4294967295; H4 = H4 + E & 4294967295; } var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4); return temp.toLowerCase(); }

