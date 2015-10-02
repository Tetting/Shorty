<?
$path = dirname(__FILE__) . '/../files/pdfReports/';
if (file_exists(dirname(__FILE__)."/../pdf/custom_local.php")) {
	include(dirname(__FILE__)."/../pdf/custom_local.php");
}

switch($_REQUEST['action']) {
	case 'csBrowse':
		$f = "../k/list_".$_REQUEST['list'].".php";
		if (file_exists($f)) {
			print file_get_contents($f);
		} else {
			print $f;
		}
		exit();
	break;
	case 'saveTask':
		$taskFile = $path . "${_REQUEST['guid']}.task";
		file_put_contents($taskFile,$_REQUEST['content']);
		exit("ok");
	case 'loadTask':
		$taskFile = $path . "${_REQUEST['guid']}.task";
		if (file_exists($taskFile)) {
			print file_get_contents($taskFile);
			exit();
		} else {
			header('HTTP/1.0 404 Not Found');
			print "";
			exit();
		}
	break;
	case 'saveReport':
		$taskFile = $path . "${_REQUEST['report']}.php";
		file_put_contents($taskFile,$_REQUEST['contents']);
		exit("ok");
	break;
	case 'viewReport':
	case 'runReport':
		$taskFile = $path . "${_REQUEST['_report']}.php";
		include($taskFile);
		exit();
	break;
	case 'pdfWizard':
		$taskName = $_REQUEST['id'];
	?>
		<table class="EditTable">
		<tr><th colspan="2">Välj Rapport Typ:-</th></tr>
		<tr><td>
		<button onclick="
			si5.kGetUrl = 'k/';
			si5.tGetUrl = 'do/task.php';
			si5.depr.forceSlash = false;
			si5.noLinkChange = true;
			si5.tNew('<?=$taskName?>');
				$t51('<?=$taskName?>')
					.cNew({
					Name:'<?=$taskName?>'
					,__k:'ezpdf'
					,__c:'report'
				}).done(function() {
					si5.tSave('<?=$taskName?>').done(function(){
					});
					//display inline
					var o = $t51('<?=$taskName?>').fDo('report', 'edit', {reportId:'<?=$taskName?>'});
					if (typeof o =='object') {
						o.done(function(response) {
							$('#ReportDisplay').html(response);
						});
					} else {
						$('#ReportDisplay').html(o);
					}
				})
	;
">ezPdf</button></td><td>Select if report will consist of a list of values from the database in table format.</td></tr>
<tr><td><button onclick="
			si5.kGetUrl = 'k/';
			si5.tGetUrl = 'do/task.php';
			si5.depr.forceSlash = false;
			si5.noLinkChange = true;
			si5.tNew('<?=$taskName?>');
			$t51('<?=$taskName?>')
				.cNew({
				Name:'<?=$taskName?>'
				,__k:'zendPdf'
				,__c:'report'
			}).done(function() {
				si5.tSave('<?=$taskName?>').done(function(){
					window.location.href='ezPdf.php?report='+document.getElementById('newReportName').value;
				});
				//display inline
				var o = $t51('<?=$taskName?>').fDo('report', 'edit', {reportId:'<?=$taskName?>'});
				if (typeof o =='object') {
					o.done(function(response) {
						$('#ReportDisplay').html(response);
					});
				} else {
					$('#ReportDisplay').html(o);
				}
			})
	;
">zendPdf</button></td><td>Select if your report will place data from the database into a letter or other pdf that you have created.</td></tr>
</table>

	<? 
	exit();
	break;
}
