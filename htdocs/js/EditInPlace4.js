/**
* Edit the Easy Way.
*	- Integrated dataView editing.
*/
jQuery.fn.outerHTML = function() {
    return $j('<div>').append( this.eq(0).clone() ).html();
};
jQuery.fn.outerTag = function() {
    return $j('<div>').append( this.eq(0).clone(false) ).html();
};
var EditInPlace4 = {
	lastEdit:{
	}
	,blank:'[ ... ]'
	,dataViewEdit:function(el) {
		//console.info("Running EditInPlace4");
		this.saveEdit();
		//find the editing configuration information.
		var d = $j(el).attr('dataView').split('.');
		this.lastEdit = {
			editHTML:$j(el).outerHTML()
			
			,dataPK:$j(el).attr('dataPK')	
			,initialValue:$j(el).innerHTML
			,updateNav:''
			,dataView:d[0]
			,dataField:d[1]
		}
		if (el.getAttribute("updatenav")) {
			this.lastEdit.updateNav = el.getAttribute("updatenav");	
		}
		var button1  = '<img title="spara" src="img/tick.png" onclick="EditInPlace4.saveEdit(this)"/><img title="spara" src="img/cancel.png" onclick="EditInPlace4.cancelEdit(this)"/></span>';
		var editHTML = '<span id="__InPlaceEditDiv"><input id="__InPlaceEdit" class="textgrow" type="text" value="'+$j(el).html()+'" onKeyPress="if(event.which){if(event.which==13){EditInPlace4.saveEdit(this);}}"/>'+button1;
		//replace html...
        $j(el).after(editHTML).each(function(){
	    	//store the current contents...
	    	//$j(this).html('___Replace___');
	    	EditInPlace4.lastEdit.updateHTML = $j(this).html('___Replace___').outerHTML();
	    }).remove();
        //highlight text...
        document.getElementById('__InPlaceEdit').select();
	}
	,cancelEdit:function(element) {
	    if (element == undefined) {
	        $j("#__InPlaceEditDiv").after(this.lastEdit.editHTML).remove();
	    } else {
		    $j(element).parent().after(this.lastEdit.editHTML).remove();
	        this.lastEdit = undefined;
	    }
    	
	}
	,saveEdit:function(element) {
	    //console.log("saveEdit",this.lastEdit,element);
	    if (document.getElementById('__InPlaceEdit') == undefined) {
			return;//unable to save, likely that edit has been cancelled, or we are saving an old edit area.		    
	    }
	    var MyEdit = EditInPlace4.lastEdit.updateHTML;
	    var newvalue = document.getElementById('__InPlaceEdit').value;
	    if (newvalue != EditInPlace4.blank) {
		    updatevalue = newvalue;
		    try {
			    var d = dataViews[EditInPlace4.lastEdit.dataView];
			    if (d.Fields[EditInPlace4.lastEdit.dataField]) {
				 	//alter value based on type...
				 	switch(d.Fields[EditInPlace4.lastEdit.dataField].Type) {
					 	case 'SEK':
					 		updatevalue = updatevalue.split(',').join('.');
					 	break;
				 	}   
			    }
	    	} catch(e) {
		    	//does not do any harm!	
		    	//console.error(e);
	    	}
			//tell the dataView to update this field...
			dataViews[EditInPlace4.lastEdit.dataView].updateField(EditInPlace4.lastEdit.dataField,updatevalue,EditInPlace4.lastEdit.dataPK
		    //$j.post(EditInPlace3.lastEdit.updateUrl,{UpdateValue:newvalue}
		    ,function(data) {
			    //console.info("EditInPlace4 Complete:",data);
			    try {
				    //console.info("EditInPlace4 Edit:",data);
	        	} catch(e) {console.error(e);}
		    });
		    $j("#__InPlaceEditDiv").after( EditInPlace4.lastEdit.updateHTML.replace(/___Replace___/,newvalue)).remove();
	    } else {
		    $j("#__InPlaceEditDiv").after( EditInPlace4.lastEdit.updateHTML.replace(/___Replace___/,newvalue)).remove();
		}
	    
    }
    ,quickSave:function(dataView,PK,newValue,OnComplete) {
		var d = dataView.split('.');
		console.info("quickSave",d[0],d[1],newValue,PK,dataViews[d[0]]);
		var OnComplete = OnComplete;
		dataViews[d[0]].updateField(d[1],newValue,PK
		    ,function(data) {
			    console.info("EditInPlace4 Complete:",data);
			    if (OnComplete) {OnComplete(data);}
		    }
		);
	}
	,quickPassSave:function(dataView,PK,newValue) {
		var d = dataView.split('.');
		dataViews[d[0]].updatePassField(d[1],newValue,PK
		    ,function(data) {
			    console.info("EditInPlace4 Complete:",data);
		    }
		);
	}
}