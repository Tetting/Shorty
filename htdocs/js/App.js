App = {
	Today:function() {
		var now = new Date();
		var m = now.getMonth()+1;
		if (m<10){m='0'+m;}
		var d = now.getDate();
		if (d<10){d='0'+d;}
		return now.getFullYear()+"-"+m+"-"+d;
	},displayDoc:function(DocName) {
		//display a new doc...
		document.getElementById('DocsPage2').value = DocName;
		document.getElementById('DocsTitle2').innerHTML = 'Docs: '+document.getElementById('DocsPage2').value;
		$j.get('docs.php',{
			Name:document.getElementById('DocsPage2').value
		},function(response) {
			document.getElementById('DocsMain2').innerHTML=response;
		}
		);
	},editDoc:function() {
		App3.Navigate2('/Pages/DocEdit3',{target:'DocsMain2'});
	},CustomText:function(text) {
		return text.replace(/(\r\n|\n|\r)/gm,"--EOL--");
	},Paid:function(but,Id) {
		$.post('do/promisePaid.php',{Id:Id},function(response) {
			//we should update the display...
			if ($(but).hasClass('Promise1')) {
				$(but)
					.closest('tr')
					.find('.Promise1')
					.removeClass('Promise1')
					.addClass('Promise0')
				;
				
			} else {
				$(but)
					.closest('tr')
					.find('.Promise0')
					.removeClass('Promise0')
					.addClass('Promise1')
				;
			}
		});
	},addPaymentFast:function(newPayment,admin,adminPayment) {
	
		dataViews.Payments.newRecord({ NewRecord:newPayment ,OnComplete:function(response){ 
			var dat;
			eval('dat='+response);
			if (dat.Status == 'Created') {
				if (admin > 0) {
					adminPayment.PaymentTypeId = dat.NewId
					dataViews.Payments.newRecord({NewRecord:adminPayment,OnComplete:function(response) {
						//App3.Navigate2('local/Pages/PaymentNew',{target:'AppPages',forceRead:true}); 
						window.newPaymentDate();						
					}}); 
				} else {
					//App3.Navigate2('local/Pages/PaymentNew',{target:'AppPages',forceRead:true});  
					window.newPaymentDate();
				}				
			} 
		}});
	}
}	