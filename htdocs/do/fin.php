<?php
/**
 * A class for handling the finance business logic.
 */
define('NOMATCHPROJECT',51);//-1
define('OVERFLOWPROJECT',51);//-2
define('GIVERNOTFOUNDPROJECT',51);//-3
define('GIVERNOTFOUNDGIVER',-90000);
define('ADMINPROJECT',57);
class Finance {
	protected $db = null;
	protected $ImportId = null;
	protected $ImportDate = null;
	public $defaultAdminPC = 15;
	/**
	 * set easyDb instance.
	 */
	function setDb($db) {
		$this->db = $db;
	}
	/**
	 * Read the OCR and import data, over-write if previously loaded.
	 * @param string $filename
	 */
	function addOCRImport($dat) {
		//if this has been imported before then dump it and import again...
		$result = $this->db->Query("select Id from OCRImport where FName='".$this->db->Escape($dat['Fname'])."'");
		if ($this->db->RowCount($result)>0) {
			while($row = $this->db->GetRow($result)) {
				$result2 = $this->db->Query("DELETE FROM OCRImport Where Id='".$row['Id']."'");
				$result2 = $this->db->Query("DELETE FROM OCRImportRows Where ImportId='".$row['Id']."'");
				$result2 = $this->db->Query("DELETE FROM Payment Where PaymentSource='OCRImport:".$row['Id']."' OR AddedBy='OCRImport:".$row['Id']."' ");
			}
		}
		$this->db->Insert(array(
			'fields' => $dat,
			'table'=>'OCRImport',
		));
		$this->ImportId = $this->db->LastId();
		$this->ImportDate = $dat['Date'];
		//print $this->db->LastSQL;

	}
	function addOCRRow($row) {
		if (!isset($row['ImportId'])) {$row['ImportId'] = $this->ImportId;}
		$this->db->Insert(array(
			'fields' => $row,
			'table'=>'OCRImportRows',
		));
		//print $this->db->LastSQL;
	}
	function getOCRImport($Id) {
		$result = $this->db->Query("select * from OCRImport Where Id = ".$this->db->Escape($Id));
		if ($this->db->RowCount($result)==0) {
			throw new Exception("OCRImport Id not found:".$Id);
		} else {
			$row = $this->db->GetRow($result);
			$this->ImportId = $Id;
			$this->ImportDate = $row['Date'];
		}
		return $row;
	}
	/**
	 * Process the given import id and apply buisness rules.
	 * @param string $Id 
	 */
	function processOCRImport($Id = null,$progressCallback = null) {
	/**
	* Have to update GivProj.LastPayment!!
	*/
		if (empty($Id)) {
			$Id = $this->ImportId;
		} else {
			$this->getOCRImport($Id);
		}
		$this->ImportId = $Id;
		$errors = 0;
		try {
			//get list of all projects so we know what percentage admin to take off..
			$projectsCache = array();
			$result = $this->db->Query("select * from Project");
			while($row = $this->db->GetRow($result)) {
				if ($row['AdminPercent']=='') {
					$row['AdminPercent'] = $this->defaultAdminPC;
				}
				$projectsCache[$row['Id']] = $row;
				
			}
			$result = $this->db->Query("select * from OCRImportRows Where ImportId = ".$this->db->Escape($Id));
			$ri=0;
			while($row = $this->db->GetRow($result)) {
				$ri++;
				//if ($ri>2) break;
				
				$progress['OCRRow'] = $row;
				$progress['Payments'] = array();
				$progress['PaymentInfo'] = array();
				//Payment has to go somewhere, so various catchall projects are created.
				$Payment = (int)str_replace(array('.',','),array('',''),$row['Belopp']);
				$Payment = $Payment / 100;
				
				//when assigning to a project we override this default admin pc.
				$adminPC = $this->defaultAdminPC;
				$barnAdminPC = $this->defaultAdminPC;
				$pay = array(
					'Date'    => $this->ImportDate,
					'GiverId' => $row['GiverId'],
					'OutKr' => 0,
					'AdminPercent'=>$adminPC,
					'AddedBy' => 'OCRImport:'.$this->ImportId,
					'AddedByUserId' => -1,
					'PaymentSource' => "OCRImport",
					'PaymentSourceId' => $row['Id'],
					);
				//find a giver...
				$result2 = $this->db->Query("select * from Giver Where Id='".$row['GiverId']."'");
				if ($this->db->RowCount($result2)==0) {
					$errors++;
					$this->db->Update(array(
						'table'=>'OCRImportRows',
						'fields'=>array('Status'=>'Error','StatusMessage'=>'Giver Not Found:'.$row['GiverId']),
						'pkVal'=>$row['Id'],
						'pk'=>'Id'
					));
					//no charge yet since need to fix manually
					$pay['InKrTotal'] = $Payment;
					$pay['InKr'] = $Payment;
					$Payment = 0;
					$pay['AdminCharge'] = 0;
					$pay['AdminPercent'] = 0;
					$pay['PaymentType'] = 'Error';
					$pay['ProjectId'] = GIVERNOTFOUNDPROJECT;//Giver Not Found
					$pay['GiverId'] = GIVERNOTFOUNDGIVER;
					//Assign the payment.
						$this->db->Insert(array(
							'table'=>'Payment',
							'fields'=>$pay
						));
					$progress['PaymentInfo'][] = array('Status'=>"GiverNotFound");
					$progress['Payments'][] = $pay;
					$progress['Giver'] = array('Name'=>'Okänd Givare '.GIVERNOTFOUNDGIVER);
					$progress['Status'] = "GiverNotFound";
				} else {
					$progress['Giver'] = $this->db->GetRow($result2);
					
					//find the projects to give to...
					//TODO:Here we have the status of givers being important...
					$result2 = $this->db->Query("select * from GivProj Where GivProj.GiverId='".$row['GiverId']."' AND GivProj.KrMon>0 AND (GivProj.Status is null OR GivProj.Status NOT IN('Deleted','inaktiv','Inaktiv')) Order By StartDt");
					$Projects = array();
					while($row2 = $this->db->GetRow($result2)) {
						$row2['Paid'] = false;
						$Projects[] = $row2;
					}
					/*
					$result2 = $this->db->Query("select * from Fadderbarn Where GiverId='".$row['GiverId']."' AND Mkr >0 AND (Status is null OR Status NOT IN('Deleted'))");
					$Child = array();
					while($row2 = $this->db->GetRow($result2)) {
						$row2['Paid'] = false;
						$Child[] = $row2;
					}
					*/
					//spec mixup here, only need to give gifts out to projects, each fadderbarn
					//giver also has a connection to the correct project!
					$Child = array();
					if ((count($Child)+count($Projects))<1) {
						//Assign to some general giving project
						$this->db->Update(array(
							'table'=>'OCRImportRows',
							'fields'=>array(
								'Status'=>'Warning'
								,'StatusMessage'=>'No Project or Child active for the giver, sent money to Project:'.NOMATCHPROJECT
							),
							'pkVal'=>$row['Id'],
							'pk'=>'Id'
						));
						
						
						$pay['InKrTotal'] = $Payment;
						$pay['InKr'] = $Payment;
						//$pay['InKr'] = $InKr;
						//$admin = ($Payment / 100) * $adminPC;
						//$InKr = ($Payment / 100) * (100-$adminPC);
						$Payment = 0;
						
						//$pay['AdminCharge'] = $admin;
						//$pay['AdminPercent'] = $adminPC;
						$pay['AdminCharge'] = 0;
						$pay['AdminPercent'] = 0;
						
						$pay['PaymentType'] = 'Project';
						$pay['ProjectId'] = NOMATCHPROJECT;
						//Assign the payment.
						$this->db->Insert(array(
							'table'=>'Payment',
							'fields'=>$pay
						));
						/*
						$adminPay = $pay;
						$adminPay['ProjectId'] = ADMINPROJECT;
						$adminPay['InKr'] = $adminPay['AdminCharge'];
						$adminPay['InKrTotal'] = $adminPay['AdminCharge'];
						$adminPay['AdminCharge'] = 0;
						$adminPay['AdminPercent'] = 0;
						$adminPay['PaymentType'] = 'AdminCharge';
						$adminPay['PaymentTypeId'] = $this->db->LastId();
						$this->db->Insert(array(
							'table'=>'Payment',
							'fields'=>$adminPay
						));
						*/
						//$pay['Id'] = $this->db->LastId();
						$progress['PaymentInfo'][] = array('Status'=>"GiftInfoNotFound",'Name'=>'okänd');
						$progress['Payments'][] = $pay;
						$errors++;

					} else {
						//we have a list of children and projects to give to....
						//will give to children, then to projects by order added to database.
						//$Payment
						$tooLittleBarn = false;
						foreach($Child as $index=>$AChild) {
							if ($Payment <1){break;}
							if ($AChild['Mkr'] <= $Payment) {
								//make the payment
								$Payment = $Payment - $AChild['Mkr'];
								$pay['PaymentType'] = 'Fadderbarn';
								$pay['PaymentTypeId'] = $AChild['Id'];
								//assign money to childs project
								if (!isset($projectsCache[$AChild['ProjectId']])) {
									$pay['ProjectId'] = NOMATCHPROJECT;
									$pay['InKrTotal'] = $AChild['Mkr'];
									$pay['InKr'] = $AChild['Mkr'];
									$pay['AdminCharge'] = 0;
									$pay['AdminPercent'] = 0;
									$progress['PaymentInfo'][] = array('Status'=>"ChildProjectNotFound",'Name'=>$AChild['Name']);
								} else {
									$adminPC = $projectsCache[$AChild['ProjectId']]['AdminPercent'];
				
									$pay['ProjectId'] = $AChild['ProjectId'];
									$pay['InKrTotal'] = $AChild['Mkr'];
									$pay['InKr'] =($AChild['Mkr'] / 100) * (100-$adminPC);
									$pay['AdminCharge'] = ($AChild['Mkr'] / 100) * $adminPC;
									$pay['AdminPercent'] = $adminPC;
									$progress['PaymentInfo'][] = array('Status'=>"Paid",'Name'=>$AChild['Name']);
								}
								//Assign the payment.
								$this->db->Insert(array(
									'table'=>'Payment',
									'fields'=>$pay
								));
								if ($pay['AdminCharge']) {
									$adminPay = $pay;
									$adminPay['ProjectId'] = ADMINPROJECT;
									$adminPay['InKr'] = $adminPay['AdminCharge'];
									$adminPay['InKrTotal'] = $adminPay['AdminCharge'];
									$adminPay['AdminCharge'] = 0;
									$adminPay['AdminPercent'] = 0;
									$adminPay['PaymentType'] = 'AdminCharge';
									$adminPay['PaymentTypeId'] = $this->db->LastId();
									$this->db->Insert(array(
										'table'=>'Payment',
										'fields'=>$adminPay
									));
								}
								//$pay['Id'] = $this->db->LastId();
								$Child[$index]['Paid'] = true;
								$progress['Payments'][] = $pay;
							} else {
								$tooLittleBarn = true;
							}
						}
						$tooLittleProj = false;
						foreach($Projects as $index=>$Project) {
							if ($Payment <1){break;}
							if ($Project['KrMon']>0) {
								if ($Project['KrMon'] <= $Payment) {
									//make the payment
									$Payment = $Payment - $Project['KrMon'];
									$pay['PaymentType'] = 'Project';
									$pay['ProjectId'] = $Project['ProjectId'];
									if (!isset( $projectsCache[$Project['ProjectId']])) {
										$pay['ProjectId'] = NOMATCHPROJECT;
										$pay['InKrTotal'] = $Project['KrMon'];
										$pay['InKr'] = $Project['KrMon'];
										$pay['AdminCharge'] = 0;
										$pay['AdminPercent'] = 0;
										$progress['PaymentInfo'][] = array('Status'=>"ProjectNotFound",'Name'=>$projectsCache[NOMATCHPROJECT]['Project']);
										
									} else {
										$adminPC = $projectsCache[$Project['ProjectId']]['AdminPercent'];
										$pay['InKrTotal'] = $Project['KrMon'];
										$pay['InKr'] = ($Project['KrMon'] / 100) * (100-$adminPC);
										$pay['AdminCharge'] = ($Project['KrMon'] / 100) * $adminPC;
										$pay['AdminPercent'] = $adminPC;
										$progress['PaymentInfo'][] = array('Status'=>"Paid",'Name'=>$projectsCache[$Project['ProjectId']]['Project']);	
									}
									//Assign the payment.
									$this->db->Insert(array(
										'table'=>'Payment',
										'fields'=>$pay
									));
									if ($pay['AdminCharge']) {
										$adminPay = $pay;
										$adminPay['ProjectId'] = ADMINPROJECT;
										$adminPay['InKr'] = $adminPay['AdminCharge'];
										$adminPay['InKrTotal'] = $adminPay['AdminCharge'];
										$adminPay['AdminCharge'] = 0;
										$adminPay['AdminPercent'] = 0;
										$adminPay['PaymentType'] = 'AdminCharge';
										$adminPay['PaymentTypeId'] = $this->db->LastId();
										$this->db->Insert(array(
											'table'=>'Payment',
											'fields'=>$adminPay
										));
									}
									//$pay['Id'] = $this->db->LastId();
									$progress['Payments'][] = $pay;
									//update stats...
									if (strtotime($Project['LastPayment']) < strtotime($pay['Date'])) {
										$this->db->Update(array(
											'table' => 'GivProj'
											,'fields' => array(
												'LastPayment' => $pay['Date']
												,'LastPaymentTot' => $Project['KrMon']
											)
											,'pk' => 'Id'
											,'pkVal' => $Project['Id']
										));
									}
									$Projects[$index]['Paid'] = true;
									
								} else {
									$tooLittleProj = true;
								}
							}
						}
						//there is extra money over, loop again and pay remaining amount
						if ($Payment>0) {
							foreach($Child as $index=>$AChild) {
								if ($Payment <1){break;}
								if ($AChild['Paid'] == false) {
									//make the payment
									if ($AChild['Mkr']>=$Payment) {
										$pay['PaymentType'] = 'Fadderbarn';
										if (!isset( $projectsCache[$AChild['ProjectId']])) {
											$pay['ProjectId'] = NOMATCHPROJECT;
											$pay['InKrTotal'] = $Project['KrMon'];
											$pay['InKr'] = $Project['KrMon'];
											$pay['AdminCharge'] = 0;
											$pay['AdminPercent'] = 0;
											$progress['PaymentInfo'][] = array('Status'=>"ChildProjectNotFound",'Name'=>$AChild['Name']);
										} else {
											$adminPC = $projectsCache[$AChild['ProjectId']]['AdminPercent'];
											$pay['ProjectId'] = $AChild['Id'];
											$pay['InKrTotal'] = $Project['KrMon'];
											$pay['InKr'] = ($Project['KrMon'] / 100) * (100-$adminPC);
											$pay['AdminCharge'] = ($Project['KrMon'] / 100) * $adminPC;
											$pay['AdminPercent'] = $adminPC;
											$progress['PaymentInfo'][] = array('Status'=>"UnderPaid",'Name'=>$AChild['Name']);
										}
									
										$Payment = 0;
										$this->db->Insert(array(
											'table'=>'Payment',
											'fields'=>$pay
										));
										if ($pay['AdminCharge']) {
											$adminPay = $pay;
											$adminPay['ProjectId'] = ADMINPROJECT;
											$adminPay['InKr'] = $adminPay['AdminCharge'];
											$adminPay['InKrTotal'] = $adminPay['AdminCharge'];
											$adminPay['AdminCharge'] = 0;
											$adminPay['AdminPercent'] = 0;
											$adminPay['PaymentType'] = 'AdminCharge';
											$adminPay['PaymentTypeId'] = $this->db->LastId();
											$this->db->Insert(array(
												'table'=>'Payment',
												'fields'=>$adminPay
											));
										}
										//$pay['Id'] = $this->db->LastId();
										$Child[$index]['Paid'] = true;
										$progress['Payments'][] = $pay;
									} else {
										//this should probably never happen.
									}
								}
							}
							foreach($Projects as $index=>$Project) {
								if ($Payment <1){break;}
								if ($Project['Paid'] == false) {
									//make the payment
									if ($Project['KrMon']>0) {
										if ($Project['KrMon']>=$Payment) {
											$adminPC = $projectsCache[$Project['ProjectId']]['AdminPercent'];
											$pay['InKrTotal'] = $Payment;
											$pay['InKr'] =($Payment / 100) * (100-$adminPC);
											$pay['AdminCharge'] = ($Payment / 100) * $adminPC;
											$pay['AdminPercent'] = $adminPC;
											$pay['PaymentType'] = 'Project';
											$pay['ProjectId'] = $Project['ProjectId'];
											$progress['PaymentInfo'][] = array('Status'=>"UnderPaid",'Name'=>$projectsCache[$Project['ProjectId']]['Project']);
											$Payment = 0;
											$this->db->Insert(array(
												'table'=>'Payment',
												'fields'=>$pay
											));
											$adminPay = $pay;
											$adminPay['ProjectId'] = ADMINPROJECT;
											$adminPay['InKr'] = $adminPay['AdminCharge'];
											$adminPay['InKrTotal'] = $adminPay['AdminCharge'];
											$adminPay['AdminCharge'] = 0;
											$adminPay['AdminPercent'] = 0;
											$adminPay['PaymentType'] = 'AdminCharge';
											$adminPay['PaymentTypeId'] = $this->db->LastId();
											$this->db->Insert(array(
												'table'=>'Payment',
												'fields'=>$adminPay
											));
											//$pay['Id'] = $this->db->LastId();
											//update stats...
											if (strtotime($Project['LastPayment']) < strtotime($pay['Date'])) {
												$this->db->Update(array(
													'table' => 'GivProj'
													,'fields' => array(
														'LastPayment' => $pay['InKrTotal']
														,'LastPaymentTot' => $Project['KrMon']
													)
													,'pk' => 'Id'
													,'pkVal' => $Project['Id']
												));
											}
											$Projects[$index]['Paid'] = true;
											$progress['Payments'][] = $pay;
										} else {
											//this should probably never happen.
										}
									}
								}
							}

						}
						if ($Payment>0) {
							//if there is extra money then go into overflow account.
							//$pay['InKr'] = ($Payment / 100) * (100-$adminPC);
							//$pay['AdminCharge'] = ($Payment / 100) * $adminPC;
							$pay['InKrTotal'] = $Payment;
							$pay['InKr'] = $Payment;
							$pay['AdminCharge'] = 0;
							$pay['AdminPercent'] = 0;
							$pay['PaymentType'] = 'Project';
							$pay['ProjectId'] = OVERFLOWPROJECT;
							//Assign the payment.
							$this->db->Insert(array(
								'table'=>'Payment',
								'fields'=>$pay
							));
							$adminPay = $pay;
							$adminPay['ProjectId'] = ADMINPROJECT;
							$adminPay['InKr'] = $adminPay['AdminCharge'];
							$adminPay['InKrTotal'] = $adminPay['AdminCharge'];
							$adminPay['AdminCharge'] = 0;
							$adminPay['AdminPercent'] = 0;
							$adminPay['PaymentType'] = 'AdminCharge';
							$adminPay['PaymentTypeId'] = $this->db->LastId();				
							$this->db->Insert(array(
								'table'=>'Payment',
								'fields'=>$adminPay
							));
							//$pay['Id'] = $this->db->LastId();
							$progress['PaymentInfo'][] = array('Status'=>"PaidOverflow",'Name'=>$projectsCache[OVERFLOWPROJECT]['Project']);
							$progress['Payments'][] = $pay;
						}
						//record the payment
						$status = "OK";
						foreach($progress['PaymentInfo'] as $info) {
							$status = $info['Status'];
							switch($status) {
								case 'Paid':
									if ($status == "OK") {$status = "Paid";}
								break;
								case 'PaidOverflow':
									if (($status == "OK") or ($status == "Paid")) {
										$status = "PaidOverflow";
									} else {
										$status = "Error";
									}
								break;
								case 'UnderPaid':
									if (($status == "OK") or ($status == "Paid")) {
										$status = "UnderPaid";
									} else {
										$status = "Error";
									}
								break;
								default:
									$status = "Error";
								break;
							}
						}
						$this->db->Update(array(
							'table'=>'OCRImportRows',
							'fields'=>array('Status'=>$status,'StatusMessage'=>'ImportOK'),
							'pkVal'=>$row['Id'],
							'pk'=>'Id'
						));
						
					}
					$status = "OK";
					foreach($progress['PaymentInfo'] as $info) {
					$paystate = $info['Status'];
						switch($paystate) {
							case 'Paid':
								if ($status == "OK") {$status = "Paid";}
							break;
							case 'PaidOverflow':
									if (($status == "OK") or ($status == "Paid")) {
										$status = "PaidOverflow";
									} else {
										$status = "Error";
									}
							break;
							case 'UnderPaid':
									if (($status == "OK") or ($status == "Paid")) {
										$status = "UnderPaid";
									} else {
										$status = "Error";
									}
								break;
							default:
								$status = "Error";
							break;
						}
					}
					$progress['Status'] = $status;	
					
				}
				if ($progressCallback) {
					call_user_func($progressCallback,$progress);
				}
			}
			//Import Complete
			//$this->db->Query("select Sum(InKr");
			$query = "Select Sum(InKrTotal) as Sum FROM Payment Where PaymentSource='OCRImport:".$this->ImportId."' OR AddedBy='OCRImport:".$this->ImportId."' And PaymentType!='AdminCharge'";
			//print $query;
			$result2 = $this->db->Query($query);
			$row2 = $this->db->GetRow($result2);
			$tot = $row2['Sum'];
			//print $tot;
			//print "ImportId=".$this->ImportId;
			if ($errors > 0) {
				$this->db->Update(array(
					'table'=>'OCRImport',
					'fields'=>array('Status'=>'Errors','Total'=>$tot),
					'pkVal'=>$this->ImportId,
					'pk'=>'Id'
					
				));
			} else {
				$this->db->Update(array(
					'table'=>'OCRImport',
					'fields'=>array('Status'=>'Imported','Total'=>$tot),
					'pkVal'=>$this->ImportId,
					'pk'=>'Id'
				));
			}
			//print $this->db->LastSQL;
		} catch(Exception $e) {
			$this->db->Update(array(
				'table'=>'OCRImport',
				'fields'=>array('Status'=>'ExceptionError'),
				'pkVal'=>$this->ImportId,
				'pk'=>'Id'

			));
			print "ERROR:".$e->getMessage();
		}
	}
}
/**
 * OCRImport:- contains a list of each import you have attempted
 *	and a status, so mark if it has been deleted.
 *  also a json encoded Src field holding everything apart from the payments.
 * OCRImportRows:-
 *	Each row recieved, also a status saying if it has been imported, not matched etc.
 * Payment:-
 *  stores each finance entry.. has a source and source id,
 *		Source can be OCRImport and then Id (making it easy to mark as deleted later on
 *		Source can be Manual and then Id of user that made the change.
 *		The project type can be fadderbarn,project,sida project and then the id.
 * GivProj:-
 *		A gift promise by a giver, together with summary info (last payment etc)
 * Buisness Logic:-
 *	Payments coming in must be connected to a giver.
 *  The giver then hopefully has one active payment
 *   An administration cost should be taken off, and money put into project account.
 * --> When we create a payment we find the administration charge that should be made...
 * --> We have a general charge % (perhaps stored in session, or cached)
 * --> A project can then override this %
 * --> 10kr InKr then gets admin removed and added to AdminCharge column..
 * --> 10kr => InKr:8kr,AdminCharge:2kr,AdminPercent:20%
 *
 * We might even have to have a history of the admin percent charges (?)
 * But this way it would be possible to fix things if they go messy, or if they want to change the admin percent.
 */
?>
