<?
/**
* a simple class to cover command name differences between different backends.
*	- loose tiny performance but gain database independence
* @Author: Simon Horton
*/
class base_DB {
	var $LastSQL;
	var $Queries = Array();
	var $Debug = FALSE;
	
	function QueryCount($sql){return $this->RowCount($this->Query($sql));}
	function InsertUpdate($params) {
		/* If a record with the same value as SyncFields exists then it is updated, otherwise a new record is inserted.
			$db->InsertUpdate(array('table'=>'Synced'
					,'pk'=>'Id'
					,'SpecialTypes'=>array('quantity'=>'Raw|Password|html')
					,'SyncFields'=>array('SystemId','Datasource')
					,'fields'=>array('SystemId'=>$IN['SystemId'],'Datasource'=>$IN['datasource'],'SyncId'=>$IN['SyncId'])
			));
			
		*/
		$query = "Select ${params['pk']} from ${params['table']} WHERE ";
		$and = '';
		foreach($params['SyncFields'] as $field) {
			$query .= "$and$field='".$this->Escape($params['fields'][$field])."'";
			$and = ' AND ';
		}
		$result = $this->Query($query);
		if ($this->RowCount($result)==0) {
			//Insert
			return $this->Insert($params);
		} else {
			//Update
			$row = $this->GetRow($result,'NUM');
			$params['pkVal'] = $row[0];
			return $this->Update($params);
		}
	}
	function Update($params) {
		if (!isset($params['SpecialTypes'])){$params['SpecialTypes']=array();}
		/* $params=array('table'=>$table
				,'fields'=>array('quantity'=>6,'Name'=>'NewName')
				,'pk'=>'Id'
				,'pkVal'=>6
				,'SpecialTypes'=>array('quantity'=>'Raw|Password|html')
			)
		*/
		$sql = "Update ${params['table']} SET ";
		$c=false;
		foreach($params['fields'] as $field=>$value) {
			if ($c) {$sql .= ',';}else{$c=true;}
			$t = 'html';
			if (isset($params['SpecialTypes'][$field])) {$t = $params['SpecialTypes'][$field];}
			switch($t) {
				case 'NUM':
					if (!is_numeric($value)) {
						$value = 0;//give it a default anyway.
					}
					$sql .= "$field=$value ";
				break;
				case 'Raw':
					$sql .= "$field ='".$this->Escape($value)."' ";
				break;
				case 'Password':
					$sql .= "$field ='".md5($IN[$value])."' ";
				break;
				case 'html':
				default:
					$sql .= "$field ='".htmlentities($value,ENT_COMPAT,'UTF-8')."' ";
				break;
			}
		}
		$sql .= " WHERE ".$params['pk'].'="'.$params['pkVal'].'"';
		if (isset($params['UpdateCriteria'])) {
			$sql .= $params['UpdateCriteria'];
		}
		return $this->Query($sql);
	}
	function Insert($params) {
		if (!isset($params['SpecialTypes'])){$params['SpecialTypes']=array();}
		/* $params=array('table'=>$table
				,'fields'=>array('quantity'=>6,'Name'=>'NewName')
				,'pk'=>'Id'
				,'pkVal'=>6 
				,'SpecialTypes'=>array('quantity'=>'Raw|Password|html')
			)
			if pkVal is set then the pk will be set, this is unusual, normally leave it blank.
		*/
		$sql = "INSERT INTO ${params['table']} (";
		$c = '';
		$vals = ") VALUES (";
		foreach($params['fields'] as $field=>$value) {
			$t = 'html';
			if (isset($params['SpecialTypes'][$field])) {$t = $params['SpecialTypes'][$field];}
			switch($t) {
				case 'NUM':
					$sql .= "$c$field";
					if (!is_numeric($value)) {
						$value = 0;//give it a default anyway.
					} 
					$vals .="${c}${value} ";
				break;
				case 'Passthru':
					$sql .= "$c$field";
					$vals .="$c'".$value."' ";
				break;
				case 'Password':
					$sql .= "$c$field";
					$vals .="$c'".md5($IN[$value])."' ";
				break;
				case 'html':
				default:
					$sql .= "$c$field";
					$vals .= "$c'".$this->Escape(htmlentities($value,ENT_COMPAT,'UTF-8'))."' ";
				break;
				case 'Raw':
					$sql .= "$c$field";
					$vals .="$c'".$this->Escape($value)."' ";
				break;
				
			}
			$c = ',';
		}
		if (isset($params['pk'])) {
			if (!isset($params['fields'][$params['pk']])) {
				$sql .= "$c".$params['pk'];
				if (isset($params['pkVal'])) {
					$vals .= "$c'".$params['pkVal']."'";
				} else {
					$vals .= "${c}Null";
				}
			}
		}
		$query = "${sql}${vals})";
		//print "<br/>\n$query<br/>\n";
		return $this->Query($query);
	}
	function escapeHTML($value) {
		return $this->Escape(htmlentities($value));
	}
	function escapeForXML($value) {
		//escape for XML rather than DB injection.
		//normal to then include UTF-8
		
		//remove all entities (including if you have encoded multiple times).
		$new = $value;$maxtimes=0;
		do {
			$old = $new;
			$new = html_entity_decode($old,ENT_QUOTES);
			$maxtimes++;
		} while($new<>$old && $maxtimes < 200);//keep on decoding until decode does not change anything.
		//encode the xml entities, &'"<>
		return str_replace(array('&','"',"'",'<','>'),array('&amp;','&quot;','&apos;','&lt;','&gt;'),$new);
	}
	function escapeForUTF8XML($value){return utf8_encode($this->escapeForXML($value));}
	
}
class sqlite_DB extends base_DB {
	var $db;
	var $RowTypes = array('ASSOC'=>SQLITE_ASSOC,'BOTH'=>SQLITE_BOTH,'NUM'=>SQLITE_NUM);
	function sqlite_DB($Conn) {$this->db = sqlite_open($Conn['dbFile']);}
	function Escape($data) {return sqlite_escape_string($data);}
	function LastId() {return sqlite_last_insert_rowid($this->db);}
	function Query($sql) {if($this->Debug){fb($sql);};$this->LastSQL = $sql;$this->Queries[]=$sql;return sqlite_query($this->db,$sql);}
	function RowCount($result){return sqlite_num_rows($result);}
	function LastError(){return sqlite_last_error($this->db);}
	function GetRow($result,$type='ASSOC'){return sqlite_fetch_array($result,str_replace(array_keys($this->RowTypes),array_values($this->RowTypes),$type));}
	function RowsChanged(){return sqlite_changes($this->db);}
}
class mysql_DB extends base_DB {
	var $db;
	var $RowTypes = array('ASSOC'=>MYSQL_ASSOC,'BOTH'=>MYSQL_BOTH,'NUM'=>MYSQL_NUM);
	function mysql_DB($Conn) {
		if (isset($Conn['persist']) && ($Conn['persist']==false)) {
			$this->db = mysql_connect($Conn['server'],$Conn['user'],$Conn['pass']);
		} else {
			$this->db = mysql_pconnect($Conn['server'],$Conn['user'],$Conn['pass']);
		}
		mysql_select_db($Conn['db'],$this->db);
	}
	function Escape($data) {return mysql_escape_string($data);}
	function LastId() {return mysql_insert_id($this->db);}
	function Query($sql) {if($this->Debug){fb($sql);};$this->LastSQL = $sql;$this->Queries[]=$sql;return mysql_query($sql,$this->db);}
	function RowCount($result){return mysql_num_rows($result);}
	function LastError(){return mysql_error($this->db);}
	function GetRow($result,$type='ASSOC'){return mysql_fetch_array($result,str_replace(array_keys($this->RowTypes),array_values($this->RowTypes),$type));}
	function RowsChanged(){return mysql_affected_rows($this->db);}
}

function easyDB($srcName) {
	global $DBProvider,$connections;
	$class = "${DBProvider}_DB";
	if (!isset($connections[$DBProvider][$srcName])) {
		trigger_error("Provider Not Found:".$DBProvider.'.'.$srcName,E_USER_ERROR);
		exit();
	}
	return new $class($connections[$DBProvider][$srcName]);
}
?>