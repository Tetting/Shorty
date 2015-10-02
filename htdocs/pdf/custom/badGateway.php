<?
//a quick and dirty hack.
$path = dirname(__FILE__) . '/../../files/pdfReports/';
if (file_exists(dirname(__FILE__)."/../custom_local.php")) {
	include(dirname(__FILE__)."/../custom_local.php");
}
$datFile = $path . "${_REQUEST['ReportId']}.dat";
if (file_exists($datFile)) {
	$a = unserialize(file_get_contents($datFile));
} else {
	$a = array(
	array('type'=>'jsonInfo','nextId'=>1,'reportName'=>'CustomPDF','ReportId'=>$_REQUEST['ReportId'])
	);
}
$fields=array(
	"fontSize"
	,"xStart"
	,"xEnd"
	,"fieldName"
	,"y"
	,"align"
);
$cmdParams = array(
	'rotate'=> array('degrees'=>0)
	,'color'=> array('color'=>'#000000')
	,'font'=> array('typeface'=>'arial')
	,'extratext'=> array('extratext'=>'','fontSize'=>12,'xStart'=>90,'xEnd'=>120,'y'=>90,'align'=>'left')
	,'subReport'=> array('subReportId'=>0,'y'=>90,'ySize'=>14)
);
$nextId = $a[0]['nextId'];
switch($_REQUEST['action']) {
	case 'view':
	break;
	case 'edit':
		$out = array();
		for($i=1;$i<count($a);$i++) {
			if ($a[$i]['id'] == $_REQUEST['id']) {
				$out = $a[$i];
			}
		}
		$a = $out;
	break;
	case 'del':
		for($i=1;$i<count($a);$i++) {
			if ($a[$i]['id'] == $_REQUEST['id']) {
				//unset($a[$i]);
				array_splice($a,$i,1);
				break;
			}
		}
		file_put_contents($datFile,serialize($a));
	break;
	case 'clone':
		for($i=1;$i<count($a);$i++) {
			if ($a[$i]['id'] == $_REQUEST['id']) {
				//unset($a[$i]);
				//array_splice($a,$i,1);
				$nA = array();
				foreach($a[$i] as $key=>$val) {
					$nA[$key] = $val;
				}
				$nA['id'] = $a[0]['nextId'];
				$a[] = $nA;
				$a[0]['nextId']++;
				break;
			}
		}
		file_put_contents($datFile,serialize($a));
	break;
	case 'up':
		for($i=1;$i<count($a);$i++) {
			if ($a[$i]['id'] == $_REQUEST['id']) {
				if ($i > 1) {
					//unset($a[$i]);
					$newOrder = array();
					array_push($newOrder,$a[$i]);
					array_push($newOrder,$a[$i-1]);
					//$replace = array_merge($a[$i],$a[$i-1],array_slice($a,$i+1));
					array_splice($a,$i-1,2,$newOrder);
				}
			}
		}
		file_put_contents($datFile,serialize($a));
	break;
	case 'delReport':
		if (file_exists($datFile)) {
			unlink($datFile);
		}
		$pdfFile = $path . "${_REQUEST['ReportId']}.pdf"; 
		if (file_exists($pdf)) {
			unlink($pdfFile);
		}
	break;
	case 'cloneReport':
		copy($path."${_REQUEST['clonedReportId']}.pdf",$path."${_REQUEST['ReportId']}.pdf");
		copy($path."${_REQUEST['clonedReportId']}.dat",$path."${_REQUEST['ReportId']}.dat");
		
	break;
	case 'add':
		if (isset($_REQUEST['type']) && $_REQUEST['type']=='cmd') {
			$nA = $cmdParams[$_REQUEST['cmdName']];
			$nA['type'] = 'cmd';
			$nA['cmdName'] = $_REQUEST['cmdName'];
			if (isset($cmdParams[$_REQUEST['cmdName']])) {
				foreach($cmdParams[$_REQUEST['cmdName']] as $field=>$value) {
					$nA[$field] = @$_REQUEST[$field];
				}
			}
		} else {
			$nA = array('type'=>'text');
			foreach($fields as $field) {
				$nA[$field] = @$_REQUEST[$field];
			}
		}
		$nA['id'] = $a[0]['nextId'];
		$a[] = $nA;
		$a[0]['nextId']++;
		file_put_contents($datFile,serialize($a));
	break;
	case 'update':
		if (isset($_REQUEST['type']) && $_REQUEST['type']=='cmd') {
			$nA = $cmdParams[$_REQUEST['cmdName']];
			$nA['type'] = 'cmd';
			$nA['cmdName'] = $_REQUEST['cmdName'];
			foreach($cmdParams[$_REQUEST['cmdName']] as $field=>$value) {
				$nA[$field] = $_REQUEST[$field];
			}
		} else {
			$nA = array('type'=>'text');
			foreach($fields as $field) {
				$nA[$field] = $_REQUEST[$field];
			}
		}
		$nA['id'] = $_REQUEST['id'];
		for($i=1;$i<count($a);$i++) {
			if ($a[$i]['id'] == $_REQUEST['id']) {
				//unset($a[$i]);
				array_splice($a,$i,1,array($nA));
			}
		}
		file_put_contents($datFile,serialize($a));
	break;

}
print json_encode($a);