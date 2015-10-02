/*
* A first object oriented dataLayer Implementation.
*/
/*
* updateUrl:'do/UpdateGateway.php?datasource=sSupplier&Action=Update&UpdateField=Address1&Id='
*/
window.dataLayerImplementations= {
	taskGateway:{
		/**
		* Enable editing of a task as if it was a standard data source.
		*/	
		updateGateway:'system/TaskGateway.php'
		,PK:'Id'
		,TaskName:'DataGateway'
	},msSQLGateway:{
		updateGateway:'do/updateMsSql.php'
		,updateField:function(FieldName,FieldValue,PKValue,OnComplete) {
			//console.warn('msSql updateField:',FieldName,FieldValue,PKValue,OnComplete);
			//console.info(dataLayerImplementations.simpleGateway.updateField);
			dataLayerImplementations.simpleGateway.updateField.call(this,FieldName,FieldValue,PKValue,OnComplete);
			return this;
		}
	},simpleGateway:{
		/** hardwired url locations into implementation.
		* 	updateUrl:'do/UpdateGateway.php?datasource=sSupplier&Action=Update&UpdateField=Name&Id='
		**/
		updateGateway:'do/updateGateway4.php'//'do/UpdateGateway.php'
		,Gateway:'do/dataGateway4.php'//'do/DataGateway.php'
		,PK:'Id'
    ,updateFields:function(Record,PKValue,OnComplete) {
        this.curRecordSet.isDirty = true;
			  this.allRecordSet.isDirty = true;
        var p = jQuery.extend(true, {}, Record);			  
        p['Action'] = 'UpdateFields';
				p['datasource'] = this.ServerDSN;
				p[this.PK] = PKValue;/*depreciated*/
				p['PK'] = PKValue;
			  $j.post(this.updateGateway,
				  p
				  ,function(data) {
			    	if (OnComplete) {OnComplete(data);}
		    });
		},updateField:function(FieldName,FieldValue,PKValue,OnComplete) {
			this.curRecordSet.isDirty = true;
			this.allRecordSet.isDirty = true;
			var p={
					Action:'Update'
					,datasource:this.ServerDSN
					,UpdateField:FieldName
					,UpdateValue:FieldValue
				};
				p[this.PK] = PKValue;/*depreciated*/
				p['PK'] = PKValue;
			$j.post(this.updateGateway,
				p
				,function(data) {
			    	if (OnComplete) {OnComplete(data);}
		    });
		    
		},updatePassField:function(FieldName,FieldValue,PKValue,OnComplete) {
			this.curRecordSet.isDirty = true;
			//console.info("SimpleGatewayUpdateField:",FieldName,FieldValue,this);	
			$j.post(this.updateGateway,
				{
					Action:'UpdatePass'
					,datasource:this.ServerDSN
					,Id:PKValue
					,UpdateField:FieldName
					,UpdateValue:FieldValue
				}
				,function(data) {
			    	if (OnComplete) {OnComplete(data);}
		    });
		}
		,pageSize:50
		,getAsPages:false
		,firstPage:function(params) {
			this.curRecordSet.start=0;
			this.curRecordSet.curPage=0;
			this.curRecordSet.isDirty=true;
			this.getList(params);
		},previousPage:function(params) {
			if (this.curRecordSet.start >0) {
				this.curRecordSet.start -= this.pageSize;
				if (this.curRecordSet.start < 0) {this.curRecordSet.start=0;}
				this.curRecordSet.curPage = Math.ceil(this.curRecordSet.start/this.pageSize);/*Enables you to change page size*/
				this.curRecordSet.isDirty=true;
				this.getList(params);
			} else {
				if (params.NoNewPage) {
					params.NoNewPage();
				}
			}
		},nextPage:function(params) {
			this.curRecordSet.start += this.pageSize;
			if (this.filterActive) {
				if (this.curRecordSet.filteredCount) {
					if (this.curRecordSet.start < this.curRecordSet.filteredCount) {
						this.curRecordSet.curPage = Math.ceil(this.curRecordSet.start/this.pageSize);/*Enables you to change page size*/
						this.curRecordSet.isDirty=true;
						this.getList(params);
					} else {
						this.curRecordSet.start -= this.pageSize;//at the end of the recordset.
						if (params.NoNewPage) {
							params.NoNewPage();
						}
					}
				} else {
					this.curRecordSet.curPage = Math.ceil(this.curRecordSet.start/this.pageSize);/*Enables you to change page size*/
					this.curRecordSet.isDirty=true;
					this.getList(params);
				}	
			} else {
				if (this.curRecordSet.Count) {
					if (this.curRecordSet.start < this.curRecordSet.Count) {
						this.curRecordSet.curPage = Math.ceil(this.curRecordSet.start/this.pageSize);/*Enables you to change page size*/
						this.curRecordSet.isDirty=true;
						this.getList(params);
					} else {
						this.curRecordSet.start -= this.pageSize;//at the end of the recordset.
						if (params.NoNewPage) {
							params.NoNewPage();
						}
					}
				} else {
					this.curRecordSet.curPage = Math.ceil(this.curRecordSet.start/this.pageSize);/*Enables you to change page size*/
					this.curRecordSet.isDirty=true;
					this.getList(params);
				}	
			}
		},lastPage:function(params) {
			if (this.filterActive) {
				if (this.curRecordSet.filteredCount != undefined) {
					this.curRecordSet.start = this.curRecordSet.filteredCount - this.pageSize;
					this.curRecordSet.isDirty=true;
					this.getList(params);
				} else {
					//just move to the next record.
					this.curRecordSet.start += this.pageSize;
					this.curRecordSet.curPage = Math.ceil(this.curRecordSet.start/this.pageSize);/*Enables you to change page size*/
					this.curRecordSet.isDirty=true;
					this.getList(params);
				}
			} else {
				if (this.curRecordSet.Count != undefined) {
					this.curRecordSet.start = this.curRecordSet.Count - this.pageSize;
					this.curRecordSet.isDirty=true;
					this.getList(params);
				} else {
					//need to find out how many pages we actually have...
					this.curRecordSet.start = this.curRecordSet.HighestHit||(this.curRecordSet.start+this.pageSize);
					this.curRecordSet.curPage = Math.ceil(this.curRecordSet.start/this.pageSize);/*Enables you to change page size*/
					this.curRecordSet.isDirty=true;
					this.getList(params);
				}
			}
/* Functions to page through recordset one at a time 
params={IdField:'Id',OnComplete:function(Id){ ... } }
*/			
		},trySelectRow:function(params) {//var params={Id:ns.Id,IdField:'ID'}
			//see if this row exists and set the position...
			if (this.curRecordSet.rPos == undefined) {
				this.curRecordSet.rPos = 0;
				for(var ri=0;ri<this.curRecordSet.Rows.length;ri++) {
					if (this.curRecordSet.Rows[ri][params.IdField] == params.Id) {
						this.curRecordSet.rPos = ri;
						break;
					}
				}
			} else {
				if (this.curRecordSet.Rows.count>0) {
					if (this.curRecordSet.Rows[this.curRecordSet.rPos][params.IdField] != params.Id) {
						for(var ri=0;ri<this.curRecordSet.Rows.length;ri++) {
							if (this.curRecordSet.Rows[ri][params.IdField] == params.Id) {
								this.curRecordSet.rPos = ri;
								break;
							}
						}
					}
				}
			}
		},firstRow:function(params) {
			var MyOnComplete = params.OnComplete;
			var MyIdField = params.IdField||'Id';
			var MyName = this.Name;
			
			var MyNoNewPage = params.NoNewPage;
			params.NoNewPage = null;
			params.NoNewPage = function() {
				dataViews[MyName].curRecordSet.rPos = 0;
				MyNoNewPage();
			}
			
			params.OnComplete = null;
			params.OnComplete = function() {
				dataViews[MyName].curRecordSet.rPos = 0;
				//MyOnComplete(dataViews[MyName].curRecordSet.Rows[0][MyIdField]);
				if (dataViews[MyName].curRecordSet.Rows.length>0) {
						MyOnComplete(dataViews[MyName].curRecordSet.Rows[0][MyIdField]);
				} else {
					MyNoNewPage();
				}
			}
			
			this.firstPage(params);
		},nextRow:function(params) {
			if (!this.curRecordSet.rPos) {this.curRecordSet['rPos'] = 0;}
			this.curRecordSet.rPos += 1;
			if (this.curRecordSet.rPos >= this.curRecordSet.Rows.length) {
				//get the next page of records.
				var MyOnComplete = params.OnComplete;
				var MyIdField = params.IdField;
				var MyName = this.Name;
				
				var MyNoNewPage = params.NoNewPage;
				params.NoNewPage = null;
				params.NoNewPage = function() {
					dataViews[MyName].curRecordSet.rPos = dataViews[MyName].curRecordSet.rPos - 1;
					MyNoNewPage();
				}
				
				params.OnComplete = null;
				params.OnComplete = function() {
					//console.info(dataViews[MyName]);
					dataViews[MyName].curRecordSet.rPos = 0;
					if (dataViews[MyName].curRecordSet.Rows.length>0) {
						MyOnComplete(dataViews[MyName].curRecordSet.Rows[0][MyIdField]);
					} else {
						MyNoNewPage();
					}
				}
				
				this.nextPage(params);
			} else {
				if (this.curRecordSet.Rows[this.curRecordSet.rPos]) {
					if (params.OnComplete) {
						params.OnComplete(this.curRecordSet.Rows[this.curRecordSet.rPos][params.IdField]);
					}
				}
			}
		},previousRow:function(params) {
			if (this.curRecordSet.rPos==undefined) {this.curRecordSet['rPos'] = 1;}
			this.curRecordSet.rPos = this.curRecordSet.rPos - 1;
			if (this.curRecordSet.rPos <0) {
				this.curRecordSet.rPos = 0;
				var MyOnComplete = params.OnComplete;
				var MyIdField = params.IdField;
				var MyName = this.Name;
				params.OnComplete = null;
				params.OnComplete = function() {
					dataViews[MyName].curRecordSet.rPos = dataViews[MyName].curRecordSet.Rows.length-1;
					MyOnComplete(dataViews[MyName].curRecordSet.Rows[dataViews[MyName].curRecordSet.rPos][MyIdField]);
				}
				var MyNoNewPage = params.NoNewPage;
				params.NoNewPage = null;
				params.NoNewPage = function() {
					dataViews[MyName].curRecordSet.rPos += 1;
					MyNoNewPage();
				}
				this.previousPage(params);
			} else {
				if (this.curRecordSet.Rows[this.curRecordSet.rPos]) {
					if (params.OnComplete) {
						params.OnComplete(this.curRecordSet.Rows[this.curRecordSet.rPos][params.IdField]);
					}
				}
			}
		},lastRow:function(params) {
			var MyOnComplete = params.OnComplete;
			var MyIdField = params.IdField;
				var MyName = this.Name;
				params.OnComplete = null;
				params.OnComplete = function() {
					dataViews[MyName].curRecordSet.rPos = dataViews[MyName].curRecordSet.Rows.length-1;
					MyOnComplete(dataViews[MyName].curRecordSet.Rows[dataViews[MyName].curRecordSet.rPos][MyIdField]);
				}
			this.lastPage(params);
		},getAllRows:function(params) {
			/**
			* Modified implementation of getList
			*/
			if (!params) {params = {};}
			
			/**
			*getList({start:,OnComplete:,OnError:,pageSize})
			*/
			var data= {
				datasource:this.ServerDSN
				,rnd:Math.random()
			};
			/*if (this.getAsPages) {
				if (params.pageSize){this.pageSize=params.pageSize;}
				if (params.start){this.curRecordSet.start=params.start;}
				data['_Start']=this.curRecordSet.start;
				data['_Size']=this.pageSize;
			}
			*/
			//console.info("getList:",this.Filter);
			/*
			if (typeof this.Filter == 'object') {
				//console.info("Filtering...",this.Filter);	
				//need to expand to have not equals etc.
				for(var f = 0;f<this.Filter.length;f++) {
					switch(this.Filter[f].Operation) {
						case '!=':
							data['-'+this.Filter[f].FieldName] = this.Filter[f].Value;
							break;
						default:
							data[this.Filter[f].FieldName] = this.Filter[f].Value;
							break;
					}
					this.curRecordSet.isDirty = true;
				}
			}
			*/
			//Sorting for Autocomplete should not be messed up, in future allow sorting on all list all views.
			if (this.ListAllSort) {
				data['_Sort'] = this.ListAllSort;
				data['_SortType'] = this.ListAllSortType;
			}
			//if (!this.allRecordSet.isDirty && this.allowListCache) {
			//console.info("DisplayAll",this.curRecordSet.isDirty,this.allRecordSet.isDirty,this.allowListAllCache);
			if (!this.curRecordSet.isDirty && !this.allRecordSet.isDirty && this.allowListAllCache) {
				//reuse the current record set!
		    	//params.OnComplete(this.allRecordSet.Rows);	
		    	this.allRecordSet.CompleteTemp = params.OnComplete;
				setTimeout("var d=dataViews."+this.Name+".allRecordSet;d.CompleteTemp(d.Rows);d.CompleteTemp=null;",50);
			} else {
		    
				//this.curRecordSet.Rows = [];
			
				var DataName = this.Name;
				$j.ajax({
					url:this.Gateway
					,data:data
					,success:function(dat) {
						//console.info("getList OnComplete",dat);
				    	 	try {
						    	eval("var data="+dat);
					    	} catch (e) {
						    	console.error("dataLayer.getList ("+this.ServerDSN+") Error:",e);	
					    	}
					    	var d = dataViews[DataName];
					    	d.allRecordSet.Hits = data.length;
					    	d.allRecordSet.Count = data.length;
					    	d.curRecordSet.Count = data.length;
					    	
					    	/*
					    	console.info("recordset",dataViews[DataName].pageSize,data.length,dataViews[DataName].allRecordSet.start);
					    	if ((dataViews[DataName].curRecordSet.start + data.length)>dataViews[DataName].curRecordSet.HighestHit) {
						    	dataViews[DataName].curRecordSet.HighestHit=dataViews[DataName].curRecordSet.start + data.length;
						    }
						    if (data.length < dataViews[DataName].pageSize) {
							 	//we have reached the end of the recordset...
							 	dataViews[DataName].curRecordSet.Count = dataViews[DataName].curRecordSet.start + data.length;   
						    }
						    */
						if (params.OnComplete) {
					   		//params.OnComplete(data);
					   		params.OnComplete(data,dataViews[DataName].allRecordSet,dataViews[DataName]);
						}	
							if (d.allowListAllCache) {
								//Do not store if you have sorting, since you change the order of the list...
								d.allRecordSet.Rows = $j.extend([],data);
								d.allRecordSet.isDirty = false;
							}
					    
			    	}
			    	,error:function(response,errmsg,exception) {
				    	if (params.OnError) {
					    	params.OnError(errmsg);	
				    	} else {
					    	console.error("dataLayer.getList Error:"+errmsg);
				    	}
			    	}
		    	});
	    	}
		},getQueryUrl:function(params) {
		    /**
		     * Get current lists query url
		     **/
		    var data= {
				datasource:this.ServerDSN
			};
			if (this.Filter.length >0) {
				//console.info("Filtering...",this.Filter);
				//need to expand to have not equals etc.
				for(var f = 0;f<this.Filter.length;f++) {
					switch(this.Filter[f].Operation) {
						case '£':
							data['£'+this.Filter[f].FieldName] = this.Filter[f].Value;
							break;
						case '$':
							data['$'+this.Filter[f].FieldName] = this.Filter[f].Value;
							break;
						case '*':
							data['*'+this.Filter[f].FieldName] = this.Filter[f].Value;
							break;
						case '!=':
							data['-'+this.Filter[f].FieldName] = this.Filter[f].Value;
							break;
						case '=':
							data[this.Filter[f].FieldName] = this.Filter[f].Value;
							break;
						default:
							data[this.Filter[f].FieldName] = this.Filter[f].Value;
							break;
					}
				}
			}
			if (this.Sort) {
			    data['_Sort'] = this.Sort;
			    data['_SortType'] = this.SortType;
			}
			var s = '';
			for(var d in data) {
			    s = s + '&' + d + '=' + data[d];
			}
			return s;
		},getList:function(params) {
			/**
			*getList({start:,OnComplete:,OnError:,pageSize})
			*/
			var data= {
				datasource:this.ServerDSN
			};
			//sanity
			if (this.curRecordSet.start < 0){this.curRecordSet.start = 0;}
			if (this.getAsPages) {
				if (params.pageSize){this.pageSize=params.pageSize;}
				if (params.start){this.curRecordSet.start=params.start;}
				data['_Start']=this.curRecordSet.start;
				data['_Size']=this.pageSize;
			}
			//console.info("getList:",this.Filter);
				
			if (this.Filter.length >0) {
				//console.info("Filtering...",this.Filter);	
				//need to expand to have not equals etc.
				for(var f = 0;f<this.Filter.length;f++) {
					switch(this.Filter[f].Operation) {
						case '£':
							data['£'+this.Filter[f].FieldName] = this.Filter[f].Value;
							break;
						case '$':
							data['$'+this.Filter[f].FieldName] = this.Filter[f].Value;
							break;
						case '*':
							data['*'+this.Filter[f].FieldName] = this.Filter[f].Value;
							break;
						case '!=':
							data['-'+this.Filter[f].FieldName] = this.Filter[f].Value;
							break;
						case '=':
							data[this.Filter[f].FieldName] = this.Filter[f].Value;
							break;
						default:
							data[this.Filter[f].FieldName] = this.Filter[f].Value;
							break;
					}
					this.curRecordSet.isDirty = true;
					this.filterActive = true;/* Needed for Recordset forward / backward */
					if (this.curRecordSet.filteredCount) {
					
					} else {
						//get hold of a count value as well..
						if (this.getCount) {data['_Count']=this.getCount;}
					}
					//this.curRecordSet.Count = undefined;
				}
			} else {
				this.filterActive = false;
				if (this.curRecordSet.Count == undefined && this.getCount) {data['_Count']=true;}
			}
			if (this.Sort) {data['_Sort'] = this.Sort;data['_SortType'] = this.SortType;
				//this.curRecordSet.isDirty = true;
			}//Add an Order By
			
			if (!this.curRecordSet.isDirty && this.allowListCache) {
				//reuse the current record set, wait 50 millisecs or FF3 has a link bug!
		    	this.curRecordSet.CompleteTemp = params.OnComplete;
				setTimeout("var d=dataViews."+this.Name+".curRecordSet;d.CompleteTemp(d.Rows,d);d.CompleteTemp=null;",50);
			} else {
		    
				//this.curRecordSet.Rows = [];
				data['rnd']=Math.random();
				var allowListCache = this.allowListCache;
				var DataName = this.Name;
				var MyParams = params;
				var GetCountSQL = data['_Count'];
				$j.ajax({
					url:this.Gateway
					,data:data
					,success:function(dat) {
						//console.info("getList OnComplete",dat);
				    	 	try {
						    	eval("var data="+dat);
					    	} catch (e) {
						    	console.error("dataLayer.getList ("+this.ServerDSN+") Error:",e);	
					    	}
							if (GetCountSQL) {
								//get hold of the count row...
								try {
									if (dataViews[DataName].filterActive) {
										dataViews[DataName].curRecordSet.filteredCount = data.pop().Count;
									} else {
										dataViews[DataName].curRecordSet.Count = data.pop().Count;
									}
								} catch(e) {
									console.error('CountSQL Error:',e);
								}
							}
					    	dataViews[DataName].curRecordSet.Hits = data.length;
					    	//console.info("recordset",dataViews[DataName].pageSize,data.length,dataViews[DataName].curRecordSet.start);
					    	if ((dataViews[DataName].curRecordSet.start + data.length)>dataViews[DataName].curRecordSet.HighestHit) {
						    	dataViews[DataName].curRecordSet.HighestHit=dataViews[DataName].curRecordSet.start + data.length;
						    }
						    if (data.length < dataViews[DataName].pageSize) {
							 	//we have reached the end of the recordset...
							 	if (dataViews[DataName].filterActive) {
							 		dataViews[DataName].curRecordSet.filteredCount = dataViews[DataName].curRecordSet.start + data.length;   
						 		} else {
							 		dataViews[DataName].curRecordSet.Count = dataViews[DataName].curRecordSet.start + data.length;   	
						 		}
						    }
						    dataViews[DataName].curRecordSet.isDirty = false;
						    if (allowListCache) {
								dataViews[DataName].curRecordSet.Rows = $j.extend([],data);
								dataViews[DataName].curRecordSet.isDirty = false;
							}
							if (MyParams.OnComplete) {								
						   		MyParams.OnComplete(data,dataViews[DataName].curRecordSet,dataViews[DataName]);
							}	
			    	}
			    	,error:function(response,errmsg,exception) {
				    	if (MyParams.OnError) {
					    	MyParams.OnError(errmsg);	
				    	} else {
					    	console.error("dataLayer.getList Error:"+errmsg);
				    	}
			    	}
		    	});
	    	}
		},curRecordSet:{
			start:0
			,Hits:0	
			,isDirty:true/* can you use this cache */
			,Rows:[]
		},allRecordSet:{
			start:0
			,Hits:0	
			,isDirty:true/* can you use this cache */
			,Rows:[]
		},RecordAction:function(params) {
			//next implementation can replace newRecord with this syntax instead.
			params.NewRecord = params.Record;
			return this.newRecord(params);
		},newRecord:function(params){
			this.curRecordSet.isDirty = true;
			this.allRecordSet.isDirty = true;
			if (this.allRecordSet.Count){this.allRecordSet.Count++;}
			if (this.curRecordSet.Count){this.curRecordSet.Count++;}
			
			/*
			*params.data - object with field=value pairs
			*/
			params.NewRecord.datasource=this.ServerDSN;
			if (!params.NewRecord.Action) {//can supply Action:'UpdateNew' instead.
				params.NewRecord.Action='New';
			}
			var DataName = this.Name;
			$j.ajax({
				url:this.updateGateway
				,data:params.NewRecord
				,type:'POST'
				,success:function(dat) {
					if (params.OnComplete) {
				    	params.OnComplete(dat);
				    }
				    if (dataViews[DataName].OnNewListAllReCache && dataViews[DataName].allowListAllCache) {
					    dataViews[DataName].getAllRows();   
				    }
		    	}
		    	,error:function(response,errmsg,exception) {
			    	if (params.OnError) {
				    	params.OnError(errmsg);	
			    	} else {
				    	console.error("dataLayer.getList Error:"+errmsg);
			    	}
		    	}
	    	});
		},getRecord:function(params) {
			var ds = this.ServerSingleDSN||this.ServerDSN;
			$j.ajax({
				url:this.Gateway
				,data:{datasource:ds,Id:params.Id,rnd:Math.random()}
				,success:function(dat) {
					if (params.OnComplete) {
				    	eval("data="+dat);
						if (data[0]) {
							params.OnComplete(data[0]);
						} else {
							//record not found...
							params.OnComplete({});
						}
				    }
		    	}
	    	});
		},deleteRecord:function(params){
			if (params['_force']||confirm("Vill du verkligen ta bort objektet?")) { 
				this.curRecordSet.isDirty = true;
				this.allRecordSet.isDirty = true;
				if (!this.OnDeleteChangeStatus) {
					var DataName = this.Name;
					$j.ajax({
						url:this.updateGateway
            ,type:'POST'
						,data:{
								datasource:this.ServerSingleDSN||this.ServerDSN
								,rnd:Math.random()
							,Action:'Delete'
							,Id:params.Id
						},success:function(dat) {
							//console.info("deleteRecord OnComplete",dat);
					    	if (params.OnComplete) {
						    	params.OnComplete(dat);
						    }
						    if (dataViews[DataName].OnNewListAllReCache && dataViews[DataName].allowListAllCache) {
							    dataViews[DataName].getAllRows();   
						    }
				    	}
			    	});
		    	} else {
			    	var s = this.OnDeleteChangeStatus.split('=');
			    	var MyComplete = params.OnComplete
			    	this.updateField(s[0],s[1],params.Id,function(response){
				    	if (MyComplete) {
					    	MyComplete(response);
				    	}
			    	});
		    	}
	    		
	    		//see if there is a cascade delete to call as well...
	    		console.warn("Cascade Delete:",this.CascadeDelete);
		    	if (this.CascadeDelete) {
		    		console.warn("Cascade Delete:",this.CascadeDelete);
		    		$j.ajax({
						url:this.updateGateway
						,data:{
							datasource:this.CascadeDelete
							,rnd:Math.random()
							,Action:'CascadeDelete'
							,Id:params.Id
						},success:function(dat) {
							//console.info("deleteRecord OnComplete",dat);
					    	if (params.OnComplete) {
						    	params.OnComplete(dat);
						    }
				    	}
			    	});
		    	}	
    		}
    	}
    	,Filter:[]
    	,filterActive:false
    	,resetPos:function() {
	    	//called when you sort/filter the recordset, you need to start again from the beginning..
	    	this.curRecordSet.isDirty = true;	
	    	this.curRecordSet.start = 0;
    	},setFilter:function(FieldName,Operation,Value) {
	    	this.resetPos();
	    	this.curRecordSet.filteredCount = undefined;
			this.Filter = [{FieldName:FieldName,Operation:Operation,Value:Value}];
    	},addFilter:function(FieldName,Operation,Value) {
	    	if (Value) {
			    this.resetPos();
				this.curRecordSet.filteredCount = undefined;
				this.Filter.push({FieldName:FieldName,Operation:Operation,Value:Value});
			}
		},clearFilter:function() {
			this.resetPos();
			this.curRecordSet.filteredCount = undefined;
			this.curRecordSet.isDirty=true;
			this.Filter = [];
		},getFilter:function(FieldName,Type) {
			for(var f = 0;f<this.Filter.length;f++) {
				if (this.Filter[f].FieldName == FieldName) {
					if (Type) {
						if (this.Filter[f].Operation == Type) {
							return this.Filter[f].Value;
						}
					} else {
						return this.Filter[f].Value;		
					}
				}
			}
		},Sort:''
		,SortType:'ASC'
		,setSort:function(FieldList) {
			this.resetPos();
			if (this.Sort == FieldList) {
				if (this.SortType == 'ASC') {this.SortType = 'DESC';} else {this.SortType = 'ASC';}
			} else {
				this.SortType = 'ASC';	
			}
			this.Sort = FieldList;	
		},clearSort:function() {
			this.resetPos();
			this.Sort = '';
		},dataChanged:function() {
			//we are being told that the underlying data in db has changed...
			this.curRecordSet.isDirty = true;
			this.allRecordSet.isDirty = true;
		},test:function() {
			console.info("Test:",this);	
		}
	}
	/**
	* Init the object.
	*/
	,init:function(params) {
		if (params) {
			
		} else {
			//loop through all dataViews and extend them with the dataLayerImplementations...
			for(var v in window.dataViews) {
				dataViews[v] = $j.extend({'Name':v},dataLayerImplementations[dataViews[v].implementation],dataViews[v]);
				/**
				if (dataViews[v].lookup == true) {
					//send off a caching?	
				}
				**/
			}	
		}
	}
}

dataConvert = {
	toSEK:function(price){
		if (price) {
			var c = parseFloat(price);
			if(isNaN(c)) { c = 0.00; }
			var minus = '';
			if(c < 0) { minus = '-'; }
			c = Math.abs(c);
			c = parseInt((c + .005) * 100);
			c = c / 100;
			s = new String(c);
			if(s.indexOf('.') < 0) { s += '.00'; }
			if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
			s = s.split('.').join(',');
			s = minus + s;
			return s;
		} else {
			return '';	
		}
		
	}
}
window.dataLayerImplementations.init();
