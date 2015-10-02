//perform a keepalive...
	keepAliveSeconds = 120;
	function keepAlive() {
		$j.get('do/keepalive.php',{rnd:Math.random()},function(response) {
			//document.getElementById('keepAliveStatus').innerHTML = document.getElementById('keepAliveStatus').innerHTML  + ".";
			//call us again...
			setTimeout('keepAlive()',(keepAliveSeconds * 1000));
			try {
				var res;
				eval("res = "+response);
				console.info('keep alive info',res);
				if (App3.AppUpdate) {
					if (App3.AppUpdate != res.AppUpdate) {
						//new upload detected...
						if (document.getElementById('AppUpdated')) {
							jQuery('#AppUpdated').fadeIn();
						}
					}
				}
				if (res.dUp) {
					//console.dir(res.dUp);
					for(var i in res.dUp) {
						if (dataViews[i]!=undefined) {
							if (dataViews[i].dUp == undefined) {
								dataViews[i].dUp = res.dUp[i];
								dataViews[i].dataChanged();
								console.info("data on server found for:",i);
							} else {
								if (dataViews[i].dUp < res.dUp[i]) {
									dataViews[i].dUp = res.dUp[i];
									dataViews[i].dataChanged();	
									console.info("data on server updated for:",i);
								}
							}
						}						
					}	
					var i = '';
					for(var d in dataViews) {
						if (dataViews[d].srcTable) {
							var i = dataViews[d].srcTable;
							if(res.dUp[i]) {
								if (!dataViews[d].dUp) {
									dataViews[d].dUp = res.dUp[i];
									dataViews[d].dataChanged();	
									console.info("data on server set for:",d,i);
								} else {
									if (dataViews[d].dUp < res.dUp[i]) {
										dataViews[d].dUp = res.dUp[i];
										dataViews[d].dataChanged();	
										console.info("Updated Data:",d,i,res.dUp[i]);
									}
								}
							}
						}
					}
				}
				App3.AppUpdate = res.AppUpdate
			}catch(e) {
				//keep alive is broken.	
				console.info("keep alive is broken",e);
			}
		});
	}
	setTimeout('keepAlive()',(keepAliveSeconds * 1000));