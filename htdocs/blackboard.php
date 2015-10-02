<?
    $DBProvider="sqlite";
	if (!isset($blackboard)) { $blackboard = array();}
    $blackboard["Theme"] = "Cube2";
    $blackboard["app.title"] = "Trosgnistan";
    $blackboard["AppId"] = "TrosgnistanProd";
	
	//old UA-11790818-1
	$blackboard["AnalyticsId"] = "UA-37726288-2";
	
    $blackboard["Export.Dir"] = "/mnt/sda1/app/data-export/";
    $blackboard["Theme.Dirs"] = "img/Themes/";
    if (isset($_GET['Theme'])){$blackboard["Theme"] = $_GET['Theme'];}
    $blackboard["Theme.Dir"] = $blackboard['Theme.Dirs'].$blackboard['Theme']."/";
    
    $blackboard["JSPhoneHome"] = "";//blank to read from local directory.
    $blackboard["PhoneHome"] = "";//blank to read from local directory.
