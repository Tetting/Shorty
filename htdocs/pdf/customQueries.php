<?
$queryList = array('Givare','Betal','Fadderbarn','GivareFadderbarn');
function getQuery($a,$id) {
	$subSql = '';
	switch($a[0]['Query']) {
		case 'Givare':
			$sql = "select * from Giver where Id = '$id' ";
			$reportName = str_replace(' ','_',@$a[0]['Name']) . '_' . $id;
		break;
		case 'GivareFadderbarn':
			$sql = "select * from Fadderbarn where GiverId = '$id' ";
			$reportName = str_replace(' ','_',@$a[0]['Name']) . '_' . $id;
		break;
		case 'Betel':
			$sql = "select * from Betel where Id = '$id' ";
			$reportName = str_replace(' ','_',@$a[0]['Name']) . '_' . $id;
		break;
		case 'Fadderbarn':
		default:
			//$sql = "select * from Fadderbarn where Id = '$id'";
			$sql = "Select Fadderbarn.*,Giver.* from Fadderbarn,Giver Where Giver.Id = Fadderbarn.GiverId AND Fadderbarn.Id = '$id'";
			$reportName = str_replace(' ','_',@$a[0]['Name']) . '_' . $id;
		break;
	}
	return array($sql,$reportName,$subSql);
}