<?
$path = dirname(__FILE__) . '/../files/pdfReports/';
if (file_exists(dirname(__FILE__)."/../pdf/custom_local.php")) {
	include(dirname(__FILE__)."/../pdf/custom_local.php");
}
$allLinksFile = $path."allLinks.php";
if (!file_exists($allLinksFile)) {
	file_put_contents($allLinksFile,serialize(
		array(
			'reports'=>array()
			,'pages'=>array()
		)
		
	));
}
$allLinks = unserialize(file_get_contents($allLinksFile));
$pageList = $_REQUEST['pages'];
$id = $_REQUEST['id'];
$name = $_REQUEST['name'];
$pages = explode(",",$pageList);
if (isset($allLinks['reports'][$id])) {
	//remove each of these old links...
	$oldPageList = $allLinks['reports'][$id];
	//$oldLinks = $allLinks[$id];
}
$allLinks['reports'][$id] = $pages;
foreach($pages as $p) {
	if ($p) {
		print "updating page: $p\n";
		$pageout = "";
		if (!isset($allLinks['pages'][$p])) {
			print "new link created\n";
			$allLinks['pages'][$p][$id] = $name;
			$pageout .= "<a class='ajaxLink' href='Pages/runReport/$id'>$name</a><br/>\n";

		} else {
			$linked = false;
			foreach($allLinks['pages'][$p] as $l=>$lname) {
				if ($l == $id) {
					$linked = true;
				}
				$pageout .= "<a class='ajaxLink' href='Pages/runReport/$l'>$lname</a><br/>\n";
			}
			if ($linked == false) {
				$allLinks['pages'][$p][$id] = $name;
				$pageout .= "<a class='ajaxLink' href='Pages/runReport/$id'>$name</a><br/>\n";
			}
		}
		//save out the file...
		file_put_contents($path."pageLinks_$p.htm",$pageout);
		print "wrote pageLinks_$p.htm\n";
	}
}
if ($oldPageList) {
	foreach($oldPageList as $pos=>$p) {
		print "$pos=$p\n";
		if (!isset($pages[$p])) {
			//we have removed a page..
			print "removed: $p\n";
			unset($allLinks['pages'][$p][$id]);
			$pageout = '';
			if ($allLinks['pages'][$p]) {
				foreach($allLinks['pages'][$p] as $l=>$lname) {
					$pageout .= "<a class='ajaxLink' href='Pages/runReport/$l'>$lname</a><br/>\n";
				}
			}
			if ($pageout) {
				//save out the file...
				file_put_contents($path."pageLinks_$p.htm",$pageout);
				print "wrote pageLinks_$p.htm\n";
			} else {
				print "deleted $p\n";
				if (file_exists($path."pageLinks_$p.htm")) {
					unlink($path."pageLinks_$p.htm");
				}
			}
		}
	}
}	
file_put_contents($allLinksFile,serialize($allLinks));