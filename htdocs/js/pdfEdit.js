$(function() {
	$(document).on("contextmenu",".taskComp",function(e) {
        var myTask =$t51($(this).parent().attr('data-task')); 
		var c = $(this).attr('data-comp');
		if (myTask.fIs(c,'contextMenuEdit')) {
			var o = myTask.fDo(c,'contextMenuEdit');
			$('#contextContents').html(o);
			$('#contextTitle').html($(this).attr('data-comp'));
			var customTitle = $(this).find(".title").eq(0).clone().wrap('<div>').parent().html();
			if (customTitle) { $('#contextTitle').html(customTitle);}
			$('#contextEdit')
				.css('left',e.pageX-8)
				.css('top',e.pageY-15)
				.attr('data-comp',$(this).attr('data-comp'))
				.attr('data-task',$(this).closest('[data-task]').attr('data-comp'))
				.show();
		} else {
		
		}
		return false;
    });
	
	$(document).click(function() {
        $('#contextEdit').hide();
    });
    $('#contextEdit').click(function(e) {
        e.stopPropagation();
    });
	
	$('#contextTitle').bind('contextmenu',function(e) {
        e.stopPropagation();
        $('#contextEdit').hide();
        return false;
    });
	
    $('#contextContents').bind('contextmenu',function(e) {
        e.stopPropagation();
        $('#contextEdit').show();
        return false;
    });
	$( "#contextEdit" ).resizable();
    $( "#contextEdit" ).draggable({
        handle: "#contextTitle"
    });
	$(document).on('click','.csEditLink',function() {
		console.info(this);
		var k = si5.getK($t51($(this).attr('data-task'))
			.kGet($(this).attr('data-comp')))
		;
		var csRootUrl = 'http://localhost:8086/t51/dev/cs50/nodes/nav.php?node=';
		window.open(csRootUrl+k._link+'/?view=csNav2','csSpaceWin');
		console.info(k);
	});
	$("#contextEdit").on('click','.csEditLink',function() {
		console.info(this);
		var k = si5.getK($t51($(this).attr('data-task'))
			.kGet($(this).attr('data-comp')))
		;
		var csRootUrl = 'http://localhost:8086/t51/dev/cs50/nodes/nav.php?node=';
		window.open(csRootUrl+k._link+'/?view=csNav2','csSpaceWin');
		console.info(k);
	});
	
	$(document).on('click','.taskNav',function(e) {
		e.preventDefault();
		console.info(this,this.getAttribute("href"));
		nav = this.getAttribute("href").split('/');
		//var o = $t51(nav[0]).fDo(nav[1], 'edit', {});
		var task = nav[0];
		var cName = nav[1];
		var oName = nav[2] || 'go';
		
		var target = $(this).closest('.taskOC');
		
		var historyLoc = target.attr('data-task')+'/'+target.attr('data-cpar')+'/'+target.attr('data-oname');
		var history = $(target).data('history') || [];
		history.push(historyLoc);
		$(target).data('history',history);
		
		var o =changeInlineTaskCompChildren(task,cName,oName);
		target.attr('data-cpar',nav[1]);//change component
		target.html(o);
	});
	
	window.dropToDelete = {
		tolerance: 'pointer',
		activeClass: "ui-state-hover",
		hoverClass: "ui-state-active",

        drop:function(event,ui) {
			if ($(ui.draggable).hasClass('taskComp')) {
				//we dragged a component from a task to be dropped.
				var myt = $(ui.draggable).closest('.taskOC').attr('data-task');
				var myc = $(ui.draggable).attr('data-comp');
				$t51(myt)
					.cDel(myc);
				$(ui.draggable).remove();	
			} else {
				//$(ui.draggable).remove();
				//$($(ui.draggable).attr('parentSortable')).data('action','delete');
			}
		}
    };
	
	window.csDroppable = {
	placeholder:'dropPlaceholder'
	,receive:function(event, ui) {
		console.info('receive',event,ui);
		console.info(this);
		item = $(event.target).find('.csItemDrag');
		var parentComp = $(event.target).attr('data-cpar');
		console.info(item);
		var myTask = $(this).attr('data-task');
		
		if (item.hasClass('csItemDrag')) {
			//we just got a new child...
			console.info('recieved new context space item!');
			item
				.removeClass('csItemDrag')
				.addClass('ui-state-default')
				.removeClass('ui-draggable')
				.addClass('taskComp')
			;
			//add as new task component...
			$t51(myTask,'out1')
				.cNew({
					__k:item.attr('data-csid')
				})
				.done(function(d) {
					console.info('created component',d);
					//add o->i mapping.
					$t51(myTask,'out1')
						.oAdd(parentComp, 'go', d.cName, {})
					;
					/*item.attr('data-comp',d.cName).removeAttr('data-csid');
					if ($t51(myTask).fIs(d.cName,'inlineList')) {
						item.html($t51(myTask).fDo(d.cName,'inlineList',{}));
					}*/
					if ($t51(myTask).fIs(d.cName,'inlineList')) {
						var out = '<div class="taskComp" data-comp="'+d.cName+'">';
						out += '<span class="dragHandle">&nbsp;</span>';
						out += '<span class="compContent">';
						out += $t51(myTask).fDo(d.cName,'inlineList',{});
						out += '</span>';
						out += '</div>';
						item = item.replaceWith(out);
					} else {
						var out = '<div class="taskComp" data-comp="'+d.cName+'">';
						out += '<span class="dragHandle">&nbsp;</span>';
						out += '<span class="compContent">';
						out +=d.cName;
						out += '</span>';
						out += '</div>';
						item = item.replaceWith(out);
					}
					//displayTaskComponents();
				})
				.fail(function(e){
					console.info('error creating component',e);
				});
		}
	},update:function(event, ui) {
		console.info('update',event,ui);
		//user has re-arranged things. we should tell task the new order...
		var myTask = $(this).attr('data-task');
		var newOrder = [];
		$(event.target).find('.taskComp').each(function() {
			console.info($(this).attr('data-comp'));
			newOrder.push($(this).attr('data-comp'));
			
		});
		console.info(newOrder);
		console.info('task=',myTask);
		
		$t51(myTask,'out1')
			.oSort($(event.target).attr('data-cpar'),$(event.target).attr('data-oname'),newOrder);
	}/*,stop:function(event, ui) {
		console.info('stop',event,ui);
	}*/
};

	
	$(document).on("mousemove",".csItemDrag,.csItemDragger",function() {
		if (!$(this).data("init")) {
			$(this).data("init", true).draggable({
				/*helper:function(event) {
					//var e = $(this).clone();
					//e.css('display','inline');
					//var e = $('<span data-csid="'+$(this).attr('data-csid')+'" class="csItemDrag ui-sortable-helper">'+'test'+'</span>');
					var e = $('#dragger').clone();
					
					console.info(e);
					return e;
				}*/
				helper:'clone'
				,connectToSortable:'.csDroppable'
				/*,appendTo:'AppPages'*/
			});
		}
	});
	window.inlineTaskCompChildren = function(exec,attrs) {
		var o = [];
		var oName = 'go';
		o.push('<div id="compChildren'+exec.e+'" class="csDroppable taskOC" data-task="'+exec.t+'" data-cpar="'+exec.cName+'" data-oname="'+oName+'"');
		if (attrs) {
			for(var a in attrs) {
				o.push(' '+a+'="'+attrs[a]+'"');
			}
		}
		o.push(">");
		//loop through children and display each one..
		var ocList = $t51(exec.t).ocList(exec.cName,oName);
		for(var oci=0;oci<ocList.length;oci++) {
			o.push('<div class="taskComp" data-comp="'+ocList[oci]+'">');
			o.push('<span class="dragHandle">&nbsp;</span>');
			o.push('<span class="compContent">');
			if ($t51(exec.t).fIs(ocList[oci],'inlineList')) {
				o.push($t51(exec.t).fDo(ocList[oci],'inlineList',{}));
			} else {
				o.push(ocList[oci]);
			}
			o.push('</span>');
			o.push('</div>');
		}
		o.push('</div>');
		o.push('<scr'+'ipt>$("#compChildren'+exec.e+'").sortable(csDroppable);</scr'+'ipt>');
		
		return o.join('');
	}
	window.changeInlineTaskCompChildren = function(task,cName,oName) {
		//do a navigation
		var o = [];
		var ocList = $t51(task).ocList(cName,oName);
		console.info(ocList);
		console.info(task,cName,oName);
		for(var oci=0;oci<ocList.length;oci++) {
			o.push('<div class="taskComp" data-comp="'+ocList[oci]+'">');
			o.push('<span class="dragHandle">&nbsp;</span>');
			o.push('<span class="compContent">');
			if ($t51(task).fIs(ocList[oci],'inlineList')) {
				o.push($t51(task).fDo(ocList[oci],'inlineList',{}));
			} else {
				o.push(ocList[oci]);
			}
			o.push('</span>');
			o.push('</div>');
		}
		
		return o.join('');
	}
	window.csBrowse = function(listName, target) {
		$.get('do/task.php',{action:'csBrowse',list:listName},function(response) {
			$(target).html(response);
		});
	}

});
//very hard coded here!
function editSrc2(options) {
	$('#textEditView').show();
	$('#previewView').hide();
	switch(options.type) {
		case 'task':
			aceEditor.getSession().setValue(
				$t51(options.task)
					.pGet(options.comp,options.prop)
			);
			aceEditor.saveDef = options;
		break;
	}
}
function saveSrc(editor) {
	switch(aceEditor.saveDef.type) {
		case 'task':
			var s = aceEditor.saveDef;
			$t51(s.task)
				.pSet(s.comp,s.prop,aceEditor.getSession().getValue())
				;
		break;
	}
}