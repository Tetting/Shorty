//global shortcut handler.
jQuery(document).keydown(function(e) {
	if (e.altKey==true && e.ctrlKey==true) {
		//alt gr..
	} else {
		if (e.altKey==true||e.ctrlKey==true) {
			switch(e.which) {
				case 49://Alt+1
					$('#fastLookup').select().focus();return false;
				break;
				case 50://Alt+2
					App3.Navigate2("local/Pages/Home");return false;
				break;
				case 51://Alt+3
					App3.Navigate2("local/Pages/GiverSearch");return false;
				break;
				case 52://Alt+4
					App3.Navigate2("local/Pages/FadderbarnSearch");return false;
				break;
				case 53://Alt+5
					App3.Navigate2("local/Pages/CustomReports");return false;
				break;
				case 37://Ctrl+left
					if (e.ctrlKey) {
						jQuery('.RecordsetFirstIcon:first').parent().click();return false;
					}
				break;
				case 38://Ctrl+up
					if (e.ctrlKey) {
						jQuery('.RecordsetPreviousIcon:first').parent().click();return false;
					}
				break;
				case 39://Ctrl+right
					if (e.ctrlKey) {
						jQuery('.RecordsetLastIcon:first').parent().click();return false;
					}
				break;
				case 40://Ctrl+down
					if (e.ctrlKey) {
						jQuery('.RecordsetNextIcon:first').parent().click();return false;
					}
				break;
				case 69://Ctrl+e
					jQuery('.EditBut').click();return false;
				break;
				case 83://Ctrl+s
					jQuery('.SaveBut').click();return false;
				break;
			}
		}
	}
});