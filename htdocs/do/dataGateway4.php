<?
/**
* Gateway to application databases/sources.
*/
include("../blackboard.php");
include("JSON_Namespace.php");
include("fb_si.php");
error_reporting(!E_NOTICE);//stop sql strings from generating errors
$IN = array_merge($_GET,$_POST);
if (!isset($DBPrefix)){$DBPrefix='';}
$dataSources = array(''=>null
,'Givers'=> array(
	'Name'=> 'Givers'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Giver Where 1'

        ,'CountSQL'=> 'Select Count(*) from Giver Where 1'

    ),'aGiver'=> array(
	'Name'=> 'aGiver'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Giver Where Id='.@$IN['Id'].''
    ),'Fadderbarns'=> array(
	'Name'=> 'Fadderbarns'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Fadderbarn Where 1'

        ,'CountSQL'=> 'Select Count(*) from Fadderbarn Where 1'

    ),'aFadderbarn'=> array(
	'Name'=> 'aFadderbarn'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select Fadderbarn.*,SocialWorker.Name as SocialWorker,SocialWorker.Id as SocialWorkerId from Fadderbarn LEFT JOIN SocialWorkArea On SocialWorkArea.Area1 = Fadderbarn.Area1 LEFT JOIN SocialWorker On SocialWorker.Id = SocialWorkArea.SocialWorkerId Where Fadderbarn.Id='.@$IN['Id'].''
    ),'Users'=> array(
	'Name'=> 'Users'
	,'Type'=> "$DBProvider"

	,'Query'=> "Select User.*,Database.Name as 'dbname','****' as Password from User LEFT JOIN Database on User.Db = Database.Id"

        ,'CountSQL'=> 'Select Count(*) from User Where 1 '

    ),'aUser'=> array(
	'Name'=> 'aUser'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select User.*,"****" as Password from User Where User.Id='.@$IN['Id'].' '
    ),'Cassettes'=> array(
	'Name'=> 'Cassettes'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Cassette Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Cassette Where 1 '

    ),'aCassette'=> array(
	'Name'=> 'aCassette'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Cassette Where Id='.@$IN['Id'].''
    ),'Churchs'=> array(
	'Name'=> 'Churchs'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Church Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Church Where 1 '

    ),'aChurch'=> array(
	'Name'=> 'aChurch'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Church Where Id='.@$IN['Id'].''
    ),'Companys'=> array(
	'Name'=> 'Companys'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Company Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Company Where 1 '

    ),'aCompany'=> array(
	'Name'=> 'aCompany'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Company Where Id='.@$IN['Id'].''
    ),'Betels'=> array(
	'Name'=> 'Betels'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Betel Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Betel Where 1 '

    ),'aBetel'=> array(
	'Name'=> 'aBetel'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Betel Where Id='.@$IN['Id'].''
    ),'GivProjs'=> array(
	'Name'=> 'GivProjs'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from GivProj Where 1 '

        ,'CountSQL'=> 'Select Count(*) from GivProj Where 1 '

    ),'aGivProj'=> array(
	'Name'=> 'aGivProj'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from GivProj Where Id='.@$IN['Id'].''
    ),'Projects'=> array(
	'Name'=> 'Projects'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Project Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Project Where 1 '

    ),'aProject'=> array(
	'Name'=> 'aProject'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Project Where Id='.@$IN['Id'].''
    ),'SidaProjs'=> array(
	'Name'=> 'SidaProjs'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from SidaProj Where 1 '

        ,'CountSQL'=> 'Select Count(*) from SidaProj Where 1 '

    ),'aSidaProj'=> array(
	'Name'=> 'aSidaProj'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from SidaProj Where Id='.@$IN['Id'].''
    ),'Payments'=> array(
	'Name'=> 'Payments'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Payment Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Payment Where 1 '

    ),'aPayment'=> array(
	'Name'=> 'aPayment'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Payment Where Id='.@$IN['Id'].''
    ),'Payment_LastIns'=> array(
	'Name'=> 'Payment_LastIns'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Payment Where InKr>0'

        ,'CountSQL'=> 'Select Count(*) from Payment Where 1 '

    ),'aPayment_LastIn'=> array(
	'Name'=> 'aPayment_LastIn'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Payment Where Id='.@$IN['Id'].''
    ),'Payment_LastOuts'=> array(
	'Name'=> 'Payment_LastOuts'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Payment Where OutKr>0'

        ,'CountSQL'=> 'Select Count(*) from Payment Where 1 '

    ),'aPayment_LastOut'=> array(
	'Name'=> 'aPayment_LastOut'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Payment Where Id='.@$IN['Id'].''
    ),'Payment_Sums'=> array(
	'Name'=> 'Payment_Sums'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select ProjectId,strftime("%Y-%m",Date) as Date,Sum(InKr) as InKr,Sum(OutKr) as OutKr from Payment Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Payment Where 1 '
,'GroupBy'=> 'ProjectId,strftime("%Y-%m",Date)'
    ),'aPayment_Sum'=> array(
	'Name'=> 'aPayment_Sum'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Payment Where Id='.@$IN['Id'].''
    ),'GiverProjects'=> array(
	'Name'=> 'GiverProjects'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select GivProj.Id as Id,GivProj.ProjectId as ProjectId,GivProj.StartDt as StartDt,GivProj.KrMon as KrMon,GivProj.OneTimePromise as OneTimePromise,GivProj.LastPayment as LastPayment,Pay.sum as Sum from GivProj Left Join(select GiverId as PayGiverId,ProjectId,SUM(InKrTotal)as sum from Payment Group by GiverId,ProjectId) Pay On PayGiverId = GivProj.GiverId AND Pay.ProjectId = GivProj.ProjectId WHERE 1'

        ,'CountSQL'=> 'Select Count(*) from GivProj Left Join(select GiverId as PayGiverId,ProjectId,SUM(InKrTotal)as sum from Payment Group by GiverId,ProjectId) Pay On PayGiverId = GivProj.GiverId AND Pay.ProjectId = GivProj.ProjectId WHERE 1'

    ),'aGiverProject'=> array(
	'Name'=> 'aGiverProject'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from GivProj Where Id='.@$IN['Id'].' '
    ),'OCRImports'=> array(
	'Name'=> 'OCRImports'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from OCRImport Where 1 '

        ,'CountSQL'=> 'Select Count(*) from OCRImport Where 1 '

    ),'aOCRImport'=> array(
	'Name'=> 'aOCRImport'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from OCRImport Where Id='.@$IN['Id'].''
    ),'GiverFadderbarns'=> array(
	'Name'=> 'GiverFadderbarns'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Fadderbarn Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Fadderbarn Where 1 '

    ),'aGiverFadderbarn'=> array(
	'Name'=> 'aGiverFadderbarn'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Fadderbarn Where Id='.@$IN['Id'].''
    ),'GiverPayments'=> array(
	'Name'=> 'GiverPayments'
	,'Type'=> "$DBProvider"

	,'Query'=> ''."Select * from Payment Where Payment.PaymentType !='AdminCharge' AND PaymentSource NOT LIKE '%Admin'".''

        ,'CountSQL'=> ''."Select Count(*) from Payment Where Payment.PaymentType !='AdminCharge' AND PaymentSource NOT LIKE '%Admin'".''

    ),'aGiverPayment'=> array(
	'Name'=> 'aGiverPayment'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Payment Where Id='.@$IN['Id'].''
    ),'Contacts'=> array(
	'Name'=> 'Contacts'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Contact Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Contact Where 1 '

    ),'aContact'=> array(
	'Name'=> 'aContact'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Contact Where Id='.@$IN['Id'].''
    ),'SocialWorkers'=> array(
	'Name'=> 'SocialWorkers'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from SocialWorker Where 1 '

        ,'CountSQL'=> 'Select Count(*) from SocialWorker Where 1 '

    ),'aSocialWorker'=> array(
	'Name'=> 'aSocialWorker'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from SocialWorker Where Id='.@$IN['Id'].''
    ),'Databases'=> array(
	'Name'=> 'Databases'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Database Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Database Where 1 '

    ),'aDatabase'=> array(
	'Name'=> 'aDatabase'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Database Where Id='.@$IN['Id'].''
    ),'CustomReports'=> array(
	'Name'=> 'CustomReports'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from CustomReport Where 1 '

        ,'CountSQL'=> 'Select Count(*) from CustomReport Where 1 '

    ),'aCustomReport'=> array(
	'Name'=> 'aCustomReport'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from CustomReport Where Id='.@$IN['Id'].''
    ),'Caravans'=> array(
	'Name'=> 'Caravans'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Caravan Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Caravan Where 1 '

    ),'aCaravan'=> array(
	'Name'=> 'aCaravan'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Caravan Where Id='.@$IN['Id'].''
    ),'Evangelists'=> array(
	'Name'=> 'Evangelists'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Evangelist Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Evangelist Where 1 '

    ),'aEvangelist'=> array(
	'Name'=> 'aEvangelist'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Evangelist Where Id='.@$IN['Id'].''
    ),'GiverEvangelists'=> array(
	'Name'=> 'GiverEvangelists'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Evangelist Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Evangelist Where 1 '

    ),'aGiverEvangelist'=> array(
	'Name'=> 'aGiverEvangelist'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Evangelist Where Id='.@$IN['Id'].''
    ),'SocialWorkerFadderbarns'=> array(
	'Name'=> 'SocialWorkerFadderbarns'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Fadderbarn Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Fadderbarn Where 1 '

    ),'aSocialWorkerFadderbarn'=> array(
	'Name'=> 'aSocialWorkerFadderbarn'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Fadderbarn Where Id='.@$IN['Id'].''
    ),'GiverCaravans'=> array(
	'Name'=> 'GiverCaravans'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Caravan Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Caravan Where 1 '

    ),'aGiverCaravan'=> array(
	'Name'=> 'aGiverCaravan'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Caravan Where Id='.@$IN['Id'].''
    ),'GiverSelects'=> array(
	'Name'=> 'GiverSelects'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Giver Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Giver Where 1 '

    ),'aGiverSelect'=> array(
	'Name'=> 'aGiverSelect'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Giver Where Id='.@$IN['Id'].''
    ),'SocialWorkerSelects'=> array(
	'Name'=> 'SocialWorkerSelects'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from SocialWorker Where 1 '

        ,'CountSQL'=> 'Select Count(*) from SocialWorker Where 1 '

    ),'aSocialWorkerSelect'=> array(
	'Name'=> 'aSocialWorkerSelect'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from SocialWorker Where Id='.@$IN['Id'].''
    ),'PaymentInLists'=> array(
	'Name'=> 'PaymentInLists'
	,'Type'=> "$DBProvider"

	,'Query'=> "Select Payment.*,Project.Project as 'ProjectName',Giver.Name as 'GiverName' from Payment LEFT JOIN Project On Payment.ProjectId = Project.Id LEFT JOIN Giver On Payment.GiverId = Giver.Id WHERE 1"

        ,'CountSQL'=> 'Select Count(*) from Payment Where 1 '

    ),'aPaymentInList'=> array(
	'Name'=> 'aPaymentInList'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Payment Where Id='.@$IN['Id'].''
    ),'PaymentOuts'=> array(
	'Name'=> 'PaymentOuts'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Payment Where (OutKr is not null AND OutKr >0)'

        ,'CountSQL'=> 'Select Count(*) from Payment Where (OutKr is not null AND OutKr >0)   '

    ),'aPaymentOut'=> array(
	'Name'=> 'aPaymentOut'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Payment Where Id='.@$IN['Id'].''
    ),'Actions'=> array(
	'Name'=> 'Actions'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from action Where 1 '

        ,'CountSQL'=> 'Select Count(*) from action Where 1 '

    ),'aAction'=> array(
	'Name'=> 'aAction'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from action Where id='.@$IN['Id'].''
    ),'FadderbarnActions'=> array(
	'Name'=> 'FadderbarnActions'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from action Where entityName="Fadderbarn" '

        ,'CountSQL'=> 'Select Count(*) from action Where entityName="Fadderbarn"  '

    ),'aFadderbarnAction'=> array(
	'Name'=> 'aFadderbarnAction'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from action Where id='.@$IN['Id'].''
    ),'ProjectGivers'=> array(
	'Name'=> 'ProjectGivers'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from GivProj Where KrMon > 0 '

        ,'CountSQL'=> 'Select Count(*) from GivProj Where KrMon > 0 '

    ),'aProjectGiver'=> array(
	'Name'=> 'aProjectGiver'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from GivProj Where Id='.@$IN['Id'].''
    ),'FadderbarnGivers'=> array(
	'Name'=> 'FadderbarnGivers'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Giver Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Giver Where 1 '

    ),'aFadderbarnGiver'=> array(
	'Name'=> 'aFadderbarnGiver'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Giver Where Id='.@$IN['Id'].''
    ),'SocialWorkAreas'=> array(
	'Name'=> 'SocialWorkAreas'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from SocialWorkArea Where 1 '

        ,'CountSQL'=> 'Select Count(*) from SocialWorkArea Where 1 '

    ),'aSocialWorkArea'=> array(
	'Name'=> 'aSocialWorkArea'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from SocialWorkArea Where Id='.@$IN['Id'].''
    ),'SocialWorkerAreas'=> array(
	'Name'=> 'SocialWorkerAreas'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from SocialWorkerArea Where 1 '

        ,'CountSQL'=> 'Select Count(*) from SocialWorkerArea Where 1 '

    ),'aSocialWorkerArea'=> array(
	'Name'=> 'aSocialWorkerArea'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from SocialWorkerArea Where Id='.@$IN['Id'].''
    ),'EvangelistActions'=> array(
	'Name'=> 'EvangelistActions'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from action Where entityName="Evangelist" '

        ,'CountSQL'=> 'Select Count(*) from action Where entityName="Evangelist"  '

    ),'aEvangelistAction'=> array(
	'Name'=> 'aEvangelistAction'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from action Where id='.@$IN['Id'].''
    ),'EvangelistGivers'=> array(
	'Name'=> 'EvangelistGivers'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from Giver Where 1 '

        ,'CountSQL'=> 'Select Count(*) from Giver Where 1 '

    ),'aEvangelistGiver'=> array(
	'Name'=> 'aEvangelistGiver'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from Giver Where Id='.@$IN['Id'].''
    ),'Areas'=> array(
	'Name'=> 'Areas'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from SocialWorkArea Where 1 '

        ,'CountSQL'=> 'Select Count(*) from SocialWorkArea Where 1 '

    ),'aArea'=> array(
	'Name'=> 'aArea'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from SocialWorkArea Where Area1="'.@$IN['Id'].'"'
    ),'GivProjPromisess'=> array(
	'Name'=> 'GivProjPromisess'
	,'Type'=> "$DBProvider"

	,'Query'=> 'Select * from GivProj Where OneTimePromise !="" AND OneTimePromise > 0'

        ,'CountSQL'=> 'Select Count(*) from GivProj Where OneTimePromise !="" AND OneTimePromise > 0'

    ),'aGivProjPromises'=> array(
	'Name'=> 'aGivProjPromises'
	,'Type'=> "$DBProvider"
	,'Query'=> 'Select * from GivProj Where Id='.@$IN['Id'].''
    ));

$pagesize = 50;
$start = 0;
if (isset($IN['start'])) {$start=$IN['start'];}
$CountSQL = false;
if (isset($IN['_Count'])) {$CountSQL = true;unset($IN['_Count']);}
if (isset($dataSources[$IN['datasource']])) {
	$dsname = $IN['datasource'];
	$datasource = $dataSources[$dsname];
	switch($datasource['Type']) {
		case 'file_cache':
			//hardwired for now...
			$response = file_get_contents($datasource['filename']);
			print $response;
			break;
		case 'simple_mysql':
		case 'mysql':
			mysqlConnect('');
			//$json = JSONinit();//function from JSON_namespace
                        $query = '';
                        foreach($IN as $key=>$value) {
			    switch($key) {
				case "rnd":/*this should be _rnd*/
				case "datasource":/*this should be _datasource*/
                                case "_Sort":
                                case "_SortType":
                                case "Id":
			        case "_Start":
                                case "_Size":
                                case "_Count"://dealt with above
			         break;
			    default:
                            //check if allowed to filter on this list...
                            $value = htmlentities($value,ENT_COMPAT,'UTF-8');//Swedish encoding
                            $key = str_replace("|",".",$key);
                            switch(substr($key,0,1)) {
                                       case '*':
                                            if ($value !='') {
                                                $query .= " AND (".substr($key,1)." like '%$value%' OR ".substr($key,1)."='$value')";
                                            }
                                            break;
                                        case '$':
                                            if ($value !='') {
                                                $query .= " AND ".substr($key,1)."='$value'";
                                            }
                                            break;
                                       case '-':
                                            $query .= " AND ".substr($key,1)."!='$value'";
                                            break;
                                        case '£':
                                            $tags = explode(',',$value);
					    $query .= " AND ( 1 ";
					    foreach($tags as $tag) {
						if ($tag) {
						    $query .= " AND (".substr($key,1)."||',' like '%$tag,%')";
					        }
					    }
					    $query .= ")";
                                            break;    
                                        case '_':
                                            //ignore this filter.
                                            break;
                                        default:
					    $query .= " AND $key='$value'";
                                            break;
                                        }
		            
			}
		    }
                        if (isset($IN['_Sort'])) {
                            //add in a sort order..
                            $IN['_Sort'] = str_replace("|",".",$IN['_Sort']);
                            $sort = "Order By ".mysql_real_escape_string($IN['_Sort']);//hardcoded list of allowed fieldnames?
                            if ($IN['_SortType'] == 'DESC'){$sort.= " DESC";}else{$sort.= " ASC";}
                        } else { $sort = '';}
                        if (isset($IN['_Size'])) {
                            $size = " LIMIT ${IN['_Start']},${IN['_Size']}";
                        } else { $size = '';}
                        $groupby = "";
                        if (isset($datasource['GroupBy'])) {
                            $groupby = "Group By ".$datasource['GroupBy'];
                        }
                        $countQuery = @$datasource['CountSQL']. "$query $sort";
		        $query = $datasource['Query']."$query $groupby $sort $size";
                        $result = mysql_query($query) or trigger_error("MySQL Datasource($dsname) Query Error:".mysql_error());
			
                        fb($query,FIREPHP::INFO);
			if (mysql_num_rows($result) == 0) {
				//no rows code...
				print "[";
                                if ($CountSQL) {
                                    print "{Count:0}";
                                }
                                print "]";
                                fb("no records found.",FIREPHP::INFO);
			} else {
				print "[";
				$r = FALSE;
				while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
					if ($r) {print ",";}
					$r = TRUE;
					print json_encode(encodeSwedish($row));
				}
				if ($CountSQL) {
                                   if ($r) {print ",";}
					if (isset($datasource['CountSQL'])) {
						//now do a count as well.
						//flush();
						//$countQuery = $datasource['CountSQL']. "$query $sort";
						 fb("Count SQL=".$countQuery,FIREPHP::INFO);
						 $result = mysql_query($countQuery);
						 $row = mysql_fetch_array($result, MYSQL_BOTH);
						 fb("CountQuery:".$row[0],FIREPHP::INFO);
						print "{Count:${row[0]}}";
					} else {
						print "{Count:undefined,Message:'datasource CountSQL property not defined.'}";
					} 
                                }
                                print "]";
				print "
//".mysql_num_rows($result);
                                fb("results:".mysql_num_rows($result),FIREPHP::INFO);
			}
			break;
                case 'sqlite':
                case 'simple_sqlite':
                case 'DBProvider_Sqlite':
                    $db = sqliteConnect('');
                    //$json = JSONinit();//function from JSON_namespace
                    $result = sqlite_query($db,"PRAGMA short_column_names = 1;");
                    /*." LIMIT $start,$pagesize"*/
		    $query = '';
                    foreach($IN as $key=>$value) {
			    switch($key) {
				case "rnd":
				case "datasource":
                                case "_Sort":
                                case "_SortType":
                                case "Id":
                                case "_Start":
                                case "_Size":
                                case "_Count":
			        break;
			    default:
                            //check if allowed to filter on this list...
                            $value = htmlentities($value,ENT_COMPAT,'UTF-8');//Swedish encoding
                            $key = str_replace("|",".",$key);
                            $key = utf8_decode($key);
                            switch(substr($key,0,1)) {
                                        case '*':
                                           if ($value !='') {
                                                $query .= " AND (".substr($key,1)." like '%".trim($value)."%' OR ".substr($key,1)."='".trim($value)."')";
                                            }
                                             break;
                                        case '$':
                                           if ($value !='') {
                                             $query .= " AND ".substr($key,1)."='".trim($value)."'";
                                           }
                                             break;
                                        case '-':
                                            $query .= " AND ".substr($key,1)."!='".trim($value)."'";
                                            break;
                                        case '£':
                                            $tags = explode(',',$value);
					    $query .= " AND ( 1 ";
					    foreach($tags as $tag) {
					        if ($tag) {
                                                    $tag = trim($tag);
						    $query .= " AND (".substr($key,1)."||',' like '%$tag,%')";
						}
					    }
					$query .= ")";                                            
                                        break; 
                                        case '_':
                                            //ignore this filter.
                                            break;
                                        default:
					    $query .= " AND $key='$value'";
                                            break;
                                        }
		            
			}
		    }
                    if (isset($IN['_Sort'])) {
                            //add in a sort order..
                            $IN['_Sort'] = str_replace("|",".",$IN['_Sort']);
                            $sort = "Order By ".sqlite_escape_string($IN['_Sort']);//hardcoded list of allowed fieldnames?
                        if (@$IN['_SortType'] == 'DESC'){$sort.= " DESC";}else{$sort.= " ASC";}
                    } else { $sort = '';}
                    if (isset($IN['_Size'])) {
                        $size = " LIMIT ${IN['_Start']},${IN['_Size']}";
                    } else { $size = '';}
                    $groupby = "";
                    if (isset($datasource['GroupBy'])) {
                        $groupby = "Group By ".$datasource['GroupBy'];
                    }
                    $countQuery = @$datasource['CountSQL']. "$query $sort";
		    $query = $datasource['Query']."$query $groupby $sort $size";
                    
                    fb($query,FirePHP::INFO);
		    $result = sqlite_query($db,$query) or trigger_error("Sqlite Datasource($dsname) Query Error:".sqlite_last_error($db));
			if (sqlite_num_rows($result) == 0) {
				//no rows code...
				print "[";
                                if ($CountSQL) {
                                    print "{Count:0}";
                                }
                                print "]";
                                 fb("no records found",FIREPHP::INFO);
			} else {
				print "[";
				$r = FALSE;
				while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
					if ($r) {print ",";}
					$r = TRUE;
					print json_encode(encodeSwedish($row));
				}
				fb("results:".sqlite_num_rows($result),FIREPHP::INFO);
                               if ($CountSQL) {
                                   if ($r) {print ",";}
					if (isset($datasource['CountSQL'])) {
						//now do a count as well.
						//flush();
						//$countQuery = $datasource['CountSQL']. "$query $sort";
						 fb("Count SQL=".$countQuery,FIREPHP::INFO);
						 $result = sqlite_query($db,$countQuery);
						 $row = sqlite_fetch_array($result, SQLITE_BOTH);
						 fb("CountQuery:".$row[0],FIREPHP::INFO);
						print "{Count:${row[0]}}";
					} else {
						print "{Count:undefined,Message:'datasource CountSQL property not defined.'}";
					} 
                                }
                                print "]";	
			}
			break;
                case 'sqlite3':
                    $db = sqliteConnect3('');
                    //$json = JSONinit();//function from JSON_namespace
                    //$result = sqlite_query($db,"PRAGMA short_column_names = 1;");
                    /*." LIMIT $start,$pagesize"*/
		    $query = '';
                    foreach($IN as $key=>$value) {
			    switch($key) {
				case "rnd":
				case "datasource":
                                case "_Sort":
                                case "_SortType":
                                case "Id":
                                case "_Start":
                                case "_Size":
                                case "_Count":
			        break;
			    default:
                            //check if allowed to filter on this list...
                            $value = htmlentities($value,ENT_COMPAT,'UTF-8');//Swedish encoding
                            $key = str_replace("|",".",$key);
                            $key = utf8_decode($key);
                            switch(substr($key,0,1)) {
                                        case '*':
                                           if ($value !='') {
                                                $query .= " AND (".substr($key,1)." like '%".trim($value)."%' OR ".substr($key,1)."='".trim($value)."')";
                                            }
                                             break;
                                        case '$':
                                           if ($value !='') {
                                             $query .= " AND ".substr($key,1)."='".trim($value)."'";
                                           }
                                             break;
                                        case '-':
                                            $query .= " AND ".substr($key,1)."!='".trim($value)."'";
                                            break;
                                        case '£':
                                            $tags = explode(',',$value);
					    $query .= " AND ( 1 ";
					    foreach($tags as $tag) {
					        if ($tag) {
                                                    $tag = trim($tag);
						    $query .= " AND (".substr($key,1)."||',' like '%$tag,%')";
						}
					    }
					$query .= ")";                                            
                                        break; 
                                        case '_':
                                            //ignore this filter.
                                            break;
                                        default:
					    $query .= " AND $key='$value'";
                                            break;
                                        }
		            
			}
		    }
                    if (isset($IN['_Sort'])) {
                            //add in a sort order..
                            $IN['_Sort'] = str_replace("|",".",$IN['_Sort']);
                            $sort = "Order By ".sqlite_escape_string($IN['_Sort']);//hardcoded list of allowed fieldnames?
                        if (@$IN['_SortType'] == 'DESC'){$sort.= " DESC";}else{$sort.= " ASC";}
                    } else { $sort = '';}
                    if (isset($IN['_Size'])) {
                        $size = " LIMIT ${IN['_Start']},${IN['_Size']}";
                    } else { $size = '';}
                    $groupby = "";
                    if (isset($datasource['GroupBy'])) {
                        $groupby = "Group By ".$datasource['GroupBy'];
                    }
                    $countQuery = @$datasource['CountSQL']. "$query $sort";
		    $query = $datasource['Query']."$query $groupby $sort $size";
                    
                    fb($query,FirePHP::INFO);
		    $result = $db->query($query);
				print "[";
				$r = FALSE;
				foreach($result as $row) {
					if ($r) {print ",";}
					$r = TRUE;
					print json_encode(encodeSwedish($row));
				}
				//fb("results:".$result->rowCount,FIREPHP::INFO);
                               if ($CountSQL) {
                                   if ($r) {print ",";}
					if (isset($datasource['CountSQL'])) {
						//now do a count as well.
						//flush();
						 fb("Count SQL=".$countQuery,FIREPHP::INFO);
						 $result = $db->query($countQuery);
						 $row = $result->fetch();
						 fb("CountQuery:".$row[0],FIREPHP::INFO);
						print "{Count:${row[0]}}";
					} else {
						print "{Count:undefined,Message:'datasource CountSQL property not defined.'}";
					} 
                                }
                                print "]";	
			
                break;
		case 'simple_mysql_query':
			mysqlConnect();
			//$json = JSONinit();//function from JSON_namespace
			$query = $datasource['query'];
			foreach($_GET as $key=>$value) {
				switch($key) {
					case "rnd":
					case "datasource":
					break;
					default:
                                        $key = str_replace("|",".",$key);
                                        switch(substr($key,0,1)) {
                                        case '-':
                                            $value = htmlentities($value,ENT_COMPAT,'UTF-8');//Swedish encoding
                                            $query .= " AND ".substr($key,1)."!='$value'";
                                            break;
                                        default:
					    $value = htmlentities($value,ENT_COMPAT,'UTF-8');//Swedish encoding
                                            $query .= " AND $key='$value'";
                                            break;
                                        }
				}
			}
			$result = mysql_query($query) or trigger_error("MySQL Datasource($dsname) Query Error:".mysql_error());
			print "//".@$datasource['query']."
";
			if (mysql_num_rows($result) == 0) {
				//no rows code...
				print "[]";
			} else {
				print "[";
				$r = FALSE;
				while ($row = mysql_fetch_array($result, MYSQL_BOTH)) {
					if ($r) {print ",";}
					$r = TRUE;
					print json_encode(encodeSwedish($row));
				}
				print "]";
				print "
//".mysql_num_rows($result);
			}
			break;
		
	}
} else {
	print "alert('Gateway Error:Unknown Datasource (".$_GET['datasource'].")');";
}
