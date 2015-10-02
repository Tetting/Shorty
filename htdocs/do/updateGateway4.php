<?/*
* updateGateway4
*/
include("../blackboard.php");
include("JSON_Namespace.php");
include("fb_si.php");
$newId = -1;
if (!isset($DBPrefix)){$DBPrefix='';}
//have to do some pre-processing to prevent notices...
$IN = array_merge($_GET,$_POST);
if (!isset($IN['Action'])) {$IN['Action']='';}

function utf8Upper($text) {
    return str_replace(
        array(chr(195).chr(182),chr(195).chr(164),chr(195).chr(165))
        ,array(chr(195).chr(150),chr(195).chr(132),chr(195).chr(133))
        ,mb_strtoupper($text)
    );
}
$dataSources = array(''=>null
,'Givers'=> array(
	'Name'=> 'Givers'
	,'Type'=> "$DBProvider"
	,'Table'=> "Giver"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Tags,Db'
	,'EditFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Tags,Db'
        ,'FieldTypes'=>'ZipTown=UPPER|Land=UPPER|'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aGiver'=> array(/*needed for deletes only.*/
	'Name'=> 'aGiver'
	,'Type'=> "$DBProvider"
	,'Table'=> "Giver"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Tags,Db'
	,'EditFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Tags,Db'
        ,'FieldTypes'=>'ZipTown=UPPER|Land=UPPER|'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Fadderbarns'=> array(
	'Name'=> 'Fadderbarns'
	,'Type'=> "$DBProvider"
	,'Table'=> "Fadderbarn"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Nbr,Name,FathersName,MothersName,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Photo1,Photo2,OwnNotes,Helper,RepThis,RepOld,RepLast,RepAllm,Status,Guardian,RegDate,SWId,ProjectId,Db,Tags'
	,'EditFields'=> 'Nbr,Name,FathersName,MothersName,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Photo1,Photo2,OwnNotes,Helper,RepThis,RepOld,RepLast,RepAllm,Status,Guardian,RegDate,SWId,ProjectId,Db,Tags'
        ,'FieldTypes'=>'DOB=DateFix|TGdt=DateFix|HelpD=DateFix|'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aFadderbarn'=> array(/*needed for deletes only.*/
	'Name'=> 'aFadderbarn'
	,'Type'=> "$DBProvider"
	,'Table'=> "Fadderbarn"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Nbr,Name,FathersName,MothersName,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Photo1,Photo2,OwnNotes,Helper,RepThis,RepOld,RepLast,RepAllm,Status,Guardian,RegDate,SWId,ProjectId,Db,Tags'
	,'EditFields'=> 'Nbr,Name,FathersName,MothersName,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Photo1,Photo2,OwnNotes,Helper,RepThis,RepOld,RepLast,RepAllm,Status,Guardian,RegDate,SWId,ProjectId,Db,Tags'
        ,'FieldTypes'=>'DOB=DateFix|TGdt=DateFix|HelpD=DateFix|'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Users'=> array(
	'Name'=> 'Users'
	,'Type'=> "$DBProvider"
	,'Table'=> "User"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Username,Password,FirstName,LastName,Permissions,Status,Notes,LastLogin,Db'
	,'EditFields'=> 'Username,Password,FirstName,LastName,Permissions,Status,Notes,LastLogin,Db'
        ,'FieldTypes'=>'Password=Password|'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aUser'=> array(/*needed for deletes only.*/
	'Name'=> 'aUser'
	,'Type'=> "$DBProvider"
	,'Table'=> "User"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Username,Password,FirstName,LastName,Permissions,Status,Notes,LastLogin,Db'
	,'EditFields'=> 'Username,Password,FirstName,LastName,Permissions,Status,Notes,LastLogin,Db'
        ,'FieldTypes'=>'Password=Password|'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Cassettes'=> array(
	'Name'=> 'Cassettes'
	,'Type'=> "$DBProvider"
	,'Table'=> "Cassette"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Nr,Speaker,Subject,Extra,Status,Date'
	,'EditFields'=> 'Nr,Speaker,Subject,Extra,Status,Date'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aCassette'=> array(/*needed for deletes only.*/
	'Name'=> 'aCassette'
	,'Type'=> "$DBProvider"
	,'Table'=> "Cassette"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Nr,Speaker,Subject,Extra,Status,Date'
	,'EditFields'=> 'Nr,Speaker,Subject,Extra,Status,Date'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Churchs'=> array(
	'Name'=> 'Churchs'
	,'Type'=> "$DBProvider"
	,'Table'=> "Church"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'ChurchName,Address,Zip,ZipTown,Tel,Contact,Notes,coAddress,Email,Url,Status,Tags,Db'
	,'EditFields'=> 'ChurchName,Address,Zip,ZipTown,Tel,Contact,Notes,coAddress,Email,Url,Status,Tags,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aChurch'=> array(/*needed for deletes only.*/
	'Name'=> 'aChurch'
	,'Type'=> "$DBProvider"
	,'Table'=> "Church"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'ChurchName,Address,Zip,ZipTown,Tel,Contact,Notes,coAddress,Email,Url,Status,Tags,Db'
	,'EditFields'=> 'ChurchName,Address,Zip,ZipTown,Tel,Contact,Notes,coAddress,Email,Url,Status,Tags,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Companys'=> array(
	'Name'=> 'Companys'
	,'Type'=> "$DBProvider"
	,'Table'=> "Company"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'CompanyName,Address,Zip,ZipTown,Tel,BankGiro,PostGiro,Code,Notes,Status'
	,'EditFields'=> 'CompanyName,Address,Zip,ZipTown,Tel,BankGiro,PostGiro,Code,Notes,Status'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aCompany'=> array(/*needed for deletes only.*/
	'Name'=> 'aCompany'
	,'Type'=> "$DBProvider"
	,'Table'=> "Company"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'CompanyName,Address,Zip,ZipTown,Tel,BankGiro,PostGiro,Code,Notes,Status'
	,'EditFields'=> 'CompanyName,Address,Zip,ZipTown,Tel,BankGiro,PostGiro,Code,Notes,Status'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Betels'=> array(
	'Name'=> 'Betels'
	,'Type'=> "$DBProvider"
	,'Table'=> "Betel"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,LastName,Address,coAddress,Zip,ZipTown,CountryCode,ProjectCode,DOB,BapDT,Tel,Status,mobile,email,Tags,Notes,Db'
	,'EditFields'=> 'Name,LastName,Address,coAddress,Zip,ZipTown,CountryCode,ProjectCode,DOB,BapDT,Tel,Status,mobile,email,Tags,Notes,Db'
        ,'FieldTypes'=>'DOB=DateFix|BapDT=DateFix|'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aBetel'=> array(/*needed for deletes only.*/
	'Name'=> 'aBetel'
	,'Type'=> "$DBProvider"
	,'Table'=> "Betel"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,LastName,Address,coAddress,Zip,ZipTown,CountryCode,ProjectCode,DOB,BapDT,Tel,Status,mobile,email,Tags,Notes,Db'
	,'EditFields'=> 'Name,LastName,Address,coAddress,Zip,ZipTown,CountryCode,ProjectCode,DOB,BapDT,Tel,Status,mobile,email,Tags,Notes,Db'
        ,'FieldTypes'=>'DOB=DateFix|BapDT=DateFix|'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'GivProjs'=> array(
	'Name'=> 'GivProjs'
	,'Type'=> "$DBProvider"
	,'Table'=> "GivProj"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,LastYearSi,Status'
	,'EditFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,LastYearSi,Status'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aGivProj'=> array(/*needed for deletes only.*/
	'Name'=> 'aGivProj'
	,'Type'=> "$DBProvider"
	,'Table'=> "GivProj"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,LastYearSi,Status'
	,'EditFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,LastYearSi,Status'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Projects'=> array(
	'Name'=> 'Projects'
	,'Type'=> "$DBProvider"
	,'Table'=> "Project"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Status,Project,Notes,FinanceCode,AdminPercent,Tags,Db'
	,'EditFields'=> 'Status,Project,Notes,FinanceCode,AdminPercent,Tags,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aProject'=> array(/*needed for deletes only.*/
	'Name'=> 'aProject'
	,'Type'=> "$DBProvider"
	,'Table'=> "Project"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Status,Project,Notes,FinanceCode,AdminPercent,Tags,Db'
	,'EditFields'=> 'Status,Project,Notes,FinanceCode,AdminPercent,Tags,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'SidaProjs'=> array(
	'Name'=> 'SidaProjs'
	,'Type'=> "$DBProvider"
	,'Table'=> "SidaProj"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Project,Status,Notes'
	,'EditFields'=> 'Project,Status,Notes'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aSidaProj'=> array(/*needed for deletes only.*/
	'Name'=> 'aSidaProj'
	,'Type'=> "$DBProvider"
	,'Table'=> "SidaProj"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Project,Status,Notes'
	,'EditFields'=> 'Project,Status,Notes'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Payments'=> array(
	'Name'=> 'Payments'
	,'Type'=> "$DBProvider"
	,'Table'=> "Payment"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
	,'EditFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
        ,'FieldTypes'=>'Date=DateFix|'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aPayment'=> array(/*needed for deletes only.*/
	'Name'=> 'aPayment'
	,'Type'=> "$DBProvider"
	,'Table'=> "Payment"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
	,'EditFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
        ,'FieldTypes'=>'Date=DateFix|'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Payment_LastIns'=> array(
	'Name'=> 'Payment_LastIns'
	,'Type'=> "$DBProvider"
	,'Table'=> "Payment"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Date,GiverId,ProjectId,InKr,OutKr,AddedBy'
	,'EditFields'=> 'Date,GiverId,ProjectId,InKr,OutKr,AddedBy'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aPayment_LastIn'=> array(/*needed for deletes only.*/
	'Name'=> 'aPayment_LastIn'
	,'Type'=> "$DBProvider"
	,'Table'=> "Payment"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Date,GiverId,ProjectId,InKr,OutKr,AddedBy'
	,'EditFields'=> 'Date,GiverId,ProjectId,InKr,OutKr,AddedBy'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Payment_LastOuts'=> array(
	'Name'=> 'Payment_LastOuts'
	,'Type'=> "$DBProvider"
	,'Table'=> "Payment"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Date,GiverId,ProjectId,InKr,OutKr,AddedBy'
	,'EditFields'=> 'Date,GiverId,ProjectId,InKr,OutKr,AddedBy'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aPayment_LastOut'=> array(/*needed for deletes only.*/
	'Name'=> 'aPayment_LastOut'
	,'Type'=> "$DBProvider"
	,'Table'=> "Payment"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Date,GiverId,ProjectId,InKr,OutKr,AddedBy'
	,'EditFields'=> 'Date,GiverId,ProjectId,InKr,OutKr,AddedBy'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Payment_Sums'=> array(
	'Name'=> 'Payment_Sums'
	,'Type'=> "$DBProvider"
	,'Table'=> "Payment"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Date,GiverId,ProjectId,InKr,OutKr,AddedBy'
	,'EditFields'=> 'Date,GiverId,ProjectId,InKr,OutKr,AddedBy'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aPayment_Sum'=> array(/*needed for deletes only.*/
	'Name'=> 'aPayment_Sum'
	,'Type'=> "$DBProvider"
	,'Table'=> "Payment"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Date,GiverId,ProjectId,InKr,OutKr,AddedBy'
	,'EditFields'=> 'Date,GiverId,ProjectId,InKr,OutKr,AddedBy'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'GiverProjects'=> array(
	'Name'=> 'GiverProjects'
	,'Type'=> "$DBProvider"
	,'Table'=> "GivProj"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,LastYearSi,Status'
	,'EditFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,LastYearSi,Status'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aGiverProject'=> array(/*needed for deletes only.*/
	'Name'=> 'aGiverProject'
	,'Type'=> "$DBProvider"
	,'Table'=> "GivProj"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,LastYearSi,Status'
	,'EditFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,LastYearSi,Status'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'OCRImports'=> array(
	'Name'=> 'OCRImports'
	,'Type'=> "$DBProvider"
	,'Table'=> "OCRImport"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Date,AccountNr,AccountName,FName,Src,Status,Total,Db,Rows'
	,'EditFields'=> 'Date,AccountNr,AccountName,FName,Src,Status,Total,Db,Rows'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aOCRImport'=> array(/*needed for deletes only.*/
	'Name'=> 'aOCRImport'
	,'Type'=> "$DBProvider"
	,'Table'=> "OCRImport"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Date,AccountNr,AccountName,FName,Src,Status,Total,Db,Rows'
	,'EditFields'=> 'Date,AccountNr,AccountName,FName,Src,Status,Total,Db,Rows'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'GiverFadderbarns'=> array(
	'Name'=> 'GiverFadderbarns'
	,'Type'=> "$DBProvider"
	,'Table'=> "Fadderbarn"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,FathersName,MothersName,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Photo1,Photo2,OwnNotes,Helper,RepThis,RepOld,RepLast,RepAllm,Status'
	,'EditFields'=> 'Name,FathersName,MothersName,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Photo1,Photo2,OwnNotes,Helper,RepThis,RepOld,RepLast,RepAllm,Status'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aGiverFadderbarn'=> array(/*needed for deletes only.*/
	'Name'=> 'aGiverFadderbarn'
	,'Type'=> "$DBProvider"
	,'Table'=> "Fadderbarn"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,FathersName,MothersName,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Photo1,Photo2,OwnNotes,Helper,RepThis,RepOld,RepLast,RepAllm,Status'
	,'EditFields'=> 'Name,FathersName,MothersName,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Photo1,Photo2,OwnNotes,Helper,RepThis,RepOld,RepLast,RepAllm,Status'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'GiverPayments'=> array(
	'Name'=> 'GiverPayments'
	,'Type'=> "$DBProvider"
	,'Table'=> "Payment"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
	,'EditFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aGiverPayment'=> array(/*needed for deletes only.*/
	'Name'=> 'aGiverPayment'
	,'Type'=> "$DBProvider"
	,'Table'=> "Payment"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
	,'EditFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Contacts'=> array(
	'Name'=> 'Contacts'
	,'Type'=> "$DBProvider"
	,'Table'=> "Contact"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,ContactName,Email,Co,Address,Zip,ZipTown,Tel,BankGiro,PostGiro,Code,Notes,Status'
	,'EditFields'=> 'Name,ContactName,Email,Co,Address,Zip,ZipTown,Tel,BankGiro,PostGiro,Code,Notes,Status'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aContact'=> array(/*needed for deletes only.*/
	'Name'=> 'aContact'
	,'Type'=> "$DBProvider"
	,'Table'=> "Contact"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,ContactName,Email,Co,Address,Zip,ZipTown,Tel,BankGiro,PostGiro,Code,Notes,Status'
	,'EditFields'=> 'Name,ContactName,Email,Co,Address,Zip,ZipTown,Tel,BankGiro,PostGiro,Code,Notes,Status'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'SocialWorkers'=> array(
	'Name'=> 'SocialWorkers'
	,'Type'=> "$DBProvider"
	,'Table'=> "SocialWorker"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,LastName,Address,ZipCode,ZipTown,Land,Tel,Mob,Email,StartD,Status,Notes,CoAddress,Tags,Db'
	,'EditFields'=> 'Name,LastName,Address,ZipCode,ZipTown,Land,Tel,Mob,Email,StartD,Status,Notes,CoAddress,Tags,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aSocialWorker'=> array(/*needed for deletes only.*/
	'Name'=> 'aSocialWorker'
	,'Type'=> "$DBProvider"
	,'Table'=> "SocialWorker"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,LastName,Address,ZipCode,ZipTown,Land,Tel,Mob,Email,StartD,Status,Notes,CoAddress,Tags,Db'
	,'EditFields'=> 'Name,LastName,Address,ZipCode,ZipTown,Land,Tel,Mob,Email,StartD,Status,Notes,CoAddress,Tags,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Databases'=> array(
	'Name'=> 'Databases'
	,'Type'=> "$DBProvider"
	,'Table'=> "Database"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name'
	,'EditFields'=> 'Name'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aDatabase'=> array(/*needed for deletes only.*/
	'Name'=> 'aDatabase'
	,'Type'=> "$DBProvider"
	,'Table'=> "Database"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name'
	,'EditFields'=> 'Name'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'CustomReports'=> array(
	'Name'=> 'CustomReports'
	,'Type'=> "$DBProvider"
	,'Table'=> "CustomReport"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,Type,Data,Query,Status,Display'
	,'EditFields'=> 'Name,Type,Data,Query,Status,Display'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aCustomReport'=> array(/*needed for deletes only.*/
	'Name'=> 'aCustomReport'
	,'Type'=> "$DBProvider"
	,'Table'=> "CustomReport"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,Type,Data,Query,Status,Display'
	,'EditFields'=> 'Name,Type,Data,Query,Status,Display'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Caravans'=> array(
	'Name'=> 'Caravans'
	,'Type'=> "$DBProvider"
	,'Table'=> "Caravan"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Nr,Regnr,Notes,Make,OwnerName,OwnerAddress,OwnerPostCode,OwnerPostTown,Tel,Price,Equipment,Location,HiredBy,GivNr,ConfirmDate,Year,TotalPrice,Status,Db'
	,'EditFields'=> 'Nr,Regnr,Notes,Make,OwnerName,OwnerAddress,OwnerPostCode,OwnerPostTown,Tel,Price,Equipment,Location,HiredBy,GivNr,ConfirmDate,Year,TotalPrice,Status,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aCaravan'=> array(/*needed for deletes only.*/
	'Name'=> 'aCaravan'
	,'Type'=> "$DBProvider"
	,'Table'=> "Caravan"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Nr,Regnr,Notes,Make,OwnerName,OwnerAddress,OwnerPostCode,OwnerPostTown,Tel,Price,Equipment,Location,HiredBy,GivNr,ConfirmDate,Year,TotalPrice,Status,Db'
	,'EditFields'=> 'Nr,Regnr,Notes,Make,OwnerName,OwnerAddress,OwnerPostCode,OwnerPostTown,Tel,Price,Equipment,Location,HiredBy,GivNr,ConfirmDate,Year,TotalPrice,Status,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Evangelists'=> array(
	'Name'=> 'Evangelists'
	,'Type'=> "$DBProvider"
	,'Table'=> "Evangelist"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,RegDate,CountryCode,Notes,Status,Db,ProjectId,Tags'
	,'EditFields'=> 'Name,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,RegDate,CountryCode,Notes,Status,Db,ProjectId,Tags'
        ,'FieldTypes'=>'HelpD=DateFix|DOB=DateFix|RegDate=DateFix|TGdt=DateFix|'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aEvangelist'=> array(/*needed for deletes only.*/
	'Name'=> 'aEvangelist'
	,'Type'=> "$DBProvider"
	,'Table'=> "Evangelist"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,RegDate,CountryCode,Notes,Status,Db,ProjectId,Tags'
	,'EditFields'=> 'Name,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,RegDate,CountryCode,Notes,Status,Db,ProjectId,Tags'
        ,'FieldTypes'=>'HelpD=DateFix|DOB=DateFix|RegDate=DateFix|TGdt=DateFix|'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'GiverEvangelists'=> array(
	'Name'=> 'GiverEvangelists'
	,'Type'=> "$DBProvider"
	,'Table'=> "Evangelist"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Status,Db,ProjectId'
	,'EditFields'=> 'Name,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Status,Db,ProjectId'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aGiverEvangelist'=> array(/*needed for deletes only.*/
	'Name'=> 'aGiverEvangelist'
	,'Type'=> "$DBProvider"
	,'Table'=> "Evangelist"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Status,Db,ProjectId'
	,'EditFields'=> 'Name,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Status,Db,ProjectId'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'SocialWorkerFadderbarns'=> array(
	'Name'=> 'SocialWorkerFadderbarns'
	,'Type'=> "$DBProvider"
	,'Table'=> "Fadderbarn"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,FathersName,MothersName,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Photo1,Photo2,OwnNotes,Helper,RepThis,RepOld,RepLast,RepAllm,Status,Guardian,RegDate,SWId,ProjectId,Db'
	,'EditFields'=> 'Name,FathersName,MothersName,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Photo1,Photo2,OwnNotes,Helper,RepThis,RepOld,RepLast,RepAllm,Status,Guardian,RegDate,SWId,ProjectId,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aSocialWorkerFadderbarn'=> array(/*needed for deletes only.*/
	'Name'=> 'aSocialWorkerFadderbarn'
	,'Type'=> "$DBProvider"
	,'Table'=> "Fadderbarn"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Name,FathersName,MothersName,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Photo1,Photo2,OwnNotes,Helper,RepThis,RepOld,RepLast,RepAllm,Status,Guardian,RegDate,SWId,ProjectId,Db'
	,'EditFields'=> 'Name,FathersName,MothersName,DOB,GiverId,HelpD,Mkr,Area1,Area,TGdt,CountryCode,Notes,Photo1,Photo2,OwnNotes,Helper,RepThis,RepOld,RepLast,RepAllm,Status,Guardian,RegDate,SWId,ProjectId,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'GiverCaravans'=> array(
	'Name'=> 'GiverCaravans'
	,'Type'=> "$DBProvider"
	,'Table'=> "Caravan"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Nr,Regnr,Notes,Make,OwnerName,OwnerAddress,OwnerPostCode,OwnerPostTown,Tel,Price,Equipment,Location,HiredBy,GivNr,ConfirmDate,Year,TotalPrice,Status,Db'
	,'EditFields'=> 'Nr,Regnr,Notes,Make,OwnerName,OwnerAddress,OwnerPostCode,OwnerPostTown,Tel,Price,Equipment,Location,HiredBy,GivNr,ConfirmDate,Year,TotalPrice,Status,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aGiverCaravan'=> array(/*needed for deletes only.*/
	'Name'=> 'aGiverCaravan'
	,'Type'=> "$DBProvider"
	,'Table'=> "Caravan"
	,'PK'=> 'Id'
	,'Sync'=> 'Id'
	,'NewFields'=> 'Nr,Regnr,Notes,Make,OwnerName,OwnerAddress,OwnerPostCode,OwnerPostTown,Tel,Price,Equipment,Location,HiredBy,GivNr,ConfirmDate,Year,TotalPrice,Status,Db'
	,'EditFields'=> 'Nr,Regnr,Notes,Make,OwnerName,OwnerAddress,OwnerPostCode,OwnerPostTown,Tel,Price,Equipment,Location,HiredBy,GivNr,ConfirmDate,Year,TotalPrice,Status,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'GiverSelects'=> array(
	'Name'=> 'GiverSelects'
	,'Type'=> "$DBProvider"
	,'Table'=> "Giver"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Db'
	,'EditFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aGiverSelect'=> array(/*needed for deletes only.*/
	'Name'=> 'aGiverSelect'
	,'Type'=> "$DBProvider"
	,'Table'=> "Giver"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Db'
	,'EditFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'SocialWorkerSelects'=> array(
	'Name'=> 'SocialWorkerSelects'
	,'Type'=> "$DBProvider"
	,'Table'=> "SocialWorker"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'Name,LastName,Address,ZipCode,ZipTown,Land,Tel,Mob,Email,StartD,Status,Notes,CoAddress,Db'
	,'EditFields'=> 'Name,LastName,Address,ZipCode,ZipTown,Land,Tel,Mob,Email,StartD,Status,Notes,CoAddress,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aSocialWorkerSelect'=> array(/*needed for deletes only.*/
	'Name'=> 'aSocialWorkerSelect'
	,'Type'=> "$DBProvider"
	,'Table'=> "SocialWorker"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'Name,LastName,Address,ZipCode,ZipTown,Land,Tel,Mob,Email,StartD,Status,Notes,CoAddress,Db'
	,'EditFields'=> 'Name,LastName,Address,ZipCode,ZipTown,Land,Tel,Mob,Email,StartD,Status,Notes,CoAddress,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'PaymentInLists'=> array(
	'Name'=> 'PaymentInLists'
	,'Type'=> "$DBProvider"
	,'Table'=> "Payment"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
	,'EditFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aPaymentInList'=> array(/*needed for deletes only.*/
	'Name'=> 'aPaymentInList'
	,'Type'=> "$DBProvider"
	,'Table'=> "Payment"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
	,'EditFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'PaymentOuts'=> array(
	'Name'=> 'PaymentOuts'
	,'Type'=> "$DBProvider"
	,'Table'=> "Payment"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
	,'EditFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aPaymentOut'=> array(/*needed for deletes only.*/
	'Name'=> 'aPaymentOut'
	,'Type'=> "$DBProvider"
	,'Table'=> "Payment"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
	,'EditFields'=> 'Date,GiverId,PaymentType,PaymentTypeId,ProjectId,InKr,OutKr,AddedBy,AddedByUserId,PaymentSource,PaymentSourceId,AdminCharge,AdminPercent,Db,InKrTotal'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Actions'=> array(
	'Name'=> 'Actions'
	,'Type'=> "$DBProvider"
	,'Table'=> "action"
	,'PK'=> 'id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'actionName,entityName,entityId,date,notes'
	,'EditFields'=> 'actionName,entityName,entityId,date,notes'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aAction'=> array(/*needed for deletes only.*/
	'Name'=> 'aAction'
	,'Type'=> "$DBProvider"
	,'Table'=> "action"
	,'PK'=> 'id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'actionName,entityName,entityId,date,notes'
	,'EditFields'=> 'actionName,entityName,entityId,date,notes'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'FadderbarnActions'=> array(
	'Name'=> 'FadderbarnActions'
	,'Type'=> "$DBProvider"
	,'Table'=> "action"
	,'PK'=> 'id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'actionName,entityName,entityId,date,notes'
	,'EditFields'=> 'actionName,entityName,entityId,date,notes'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aFadderbarnAction'=> array(/*needed for deletes only.*/
	'Name'=> 'aFadderbarnAction'
	,'Type'=> "$DBProvider"
	,'Table'=> "action"
	,'PK'=> 'id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'actionName,entityName,entityId,date,notes'
	,'EditFields'=> 'actionName,entityName,entityId,date,notes'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'ProjectGivers'=> array(
	'Name'=> 'ProjectGivers'
	,'Type'=> "$DBProvider"
	,'Table'=> "GivProj"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,LastYearSi,Status,Db'
	,'EditFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,LastYearSi,Status,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aProjectGiver'=> array(/*needed for deletes only.*/
	'Name'=> 'aProjectGiver'
	,'Type'=> "$DBProvider"
	,'Table'=> "GivProj"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,LastYearSi,Status,Db'
	,'EditFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,LastYearSi,Status,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'FadderbarnGivers'=> array(
	'Name'=> 'FadderbarnGivers'
	,'Type'=> "$DBProvider"
	,'Table'=> "Giver"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Tags,Db'
	,'EditFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Tags,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aFadderbarnGiver'=> array(/*needed for deletes only.*/
	'Name'=> 'aFadderbarnGiver'
	,'Type'=> "$DBProvider"
	,'Table'=> "Giver"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Tags,Db'
	,'EditFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Tags,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'SocialWorkAreas'=> array(
	'Name'=> 'SocialWorkAreas'
	,'Type'=> "$DBProvider"
	,'Table'=> "SocialWorkArea"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'CountryCode,Area,Area1,SocialWorkerId'
	,'EditFields'=> 'CountryCode,Area,Area1,SocialWorkerId'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aSocialWorkArea'=> array(/*needed for deletes only.*/
	'Name'=> 'aSocialWorkArea'
	,'Type'=> "$DBProvider"
	,'Table'=> "SocialWorkArea"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'CountryCode,Area,Area1,SocialWorkerId'
	,'EditFields'=> 'CountryCode,Area,Area1,SocialWorkerId'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'SocialWorkerAreas'=> array(
	'Name'=> 'SocialWorkerAreas'
	,'Type'=> "$DBProvider"
	,'Table'=> "SocialWorkArea"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'CountryCode,Area,Area1,SocialWorkerId'
	,'EditFields'=> 'CountryCode,Area,Area1,SocialWorkerId'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aSocialWorkerArea'=> array(/*needed for deletes only.*/
	'Name'=> 'aSocialWorkerArea'
	,'Type'=> "$DBProvider"
	,'Table'=> "SocialWorkArea"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'CountryCode,Area,Area1,SocialWorkerId'
	,'EditFields'=> 'CountryCode,Area,Area1,SocialWorkerId'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'EvangelistActions'=> array(
	'Name'=> 'EvangelistActions'
	,'Type'=> "$DBProvider"
	,'Table'=> "action"
	,'PK'=> 'id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'actionName,entityName,entityId,date,notes'
	,'EditFields'=> 'actionName,entityName,entityId,date,notes'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aEvangelistAction'=> array(/*needed for deletes only.*/
	'Name'=> 'aEvangelistAction'
	,'Type'=> "$DBProvider"
	,'Table'=> "action"
	,'PK'=> 'id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'actionName,entityName,entityId,date,notes'
	,'EditFields'=> 'actionName,entityName,entityId,date,notes'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'EvangelistGivers'=> array(
	'Name'=> 'EvangelistGivers'
	,'Type'=> "$DBProvider"
	,'Table'=> "Giver"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Tags,Db'
	,'EditFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Tags,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aEvangelistGiver'=> array(/*needed for deletes only.*/
	'Name'=> 'aEvangelistGiver'
	,'Type'=> "$DBProvider"
	,'Table'=> "Giver"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Tags,Db'
	,'EditFields'=> 'Name,Address,ZipCode,ZipTown,Nr,Land,Tel,Mob,Email,Paper,Member,StartD,ProjCode,Status,Notes,CoAddress,LastName,PersonNbr,Letter,Tags,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'Areas'=> array(
	'Name'=> 'Areas'
	,'Type'=> "$DBProvider"
	,'Table'=> "SocialWorkArea"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'CountryCode,Area,Area1,SocialWorkerId'
	,'EditFields'=> 'CountryCode,Area,Area1,SocialWorkerId'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aArea'=> array(/*needed for deletes only.*/
	'Name'=> 'aArea'
	,'Type'=> "$DBProvider"
	,'Table'=> "SocialWorkArea"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'CountryCode,Area,Area1,SocialWorkerId'
	,'EditFields'=> 'CountryCode,Area,Area1,SocialWorkerId'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'GivProjPromisess'=> array(
	'Name'=> 'GivProjPromisess'
	,'Type'=> "$DBProvider"
	,'Table'=> "GivProj"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,OneTimePromisePaid,LastYearSi,Status,Db'
	,'EditFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,OneTimePromisePaid,LastYearSi,Status,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ),'aGivProjPromises'=> array(/*needed for deletes only.*/
	'Name'=> 'aGivProjPromises'
	,'Type'=> "$DBProvider"
	,'Table'=> "GivProj"
	,'PK'=> 'Id'
	,'Sync'=> 'undefined'
	,'NewFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,OneTimePromisePaid,LastYearSi,Status,Db'
	,'EditFields'=> 'GiverId,StartDt,KrMon,ProjectId,LastPayment,LastPaymentTot,PaidTot,OneTimePromise,OneTimePromisePaid,LastYearSi,Status,Db'
        ,'FieldTypes'=>'undefined'
	,'Cascade'=> ''
	,'CascadeSQL'=> ''
    ));
if (isset($dataSources[$IN['datasource']])) {
    $dsname = $IN['datasource'];
    $datasource = $dataSources[$dsname];
    if ($IN['Action'] == "UpdateNew") {
        $db = dbConnect('');
        //find out if this is an update or a new....
        $sql = "select count(${datasource['Sync']}) from ${datasource['Table']} where ${datasource['Sync']}='".dbEscape($IN[$datasource['Sync']])."'";
        print $sql;
        $result = dbQuery($db,$sql);
        if ($datasource['Type'] == 'sqlite') {
            $row = sqlite_fetch_array($result, SQLITE_NUM);
            if ($row[0] ==0) {
                $IN['Action'] = 'New';
            } else {
                $IN['Action'] = 'UpdateFields';
            }
        }
    }
    switch($datasource['Type']) {
        case 'sqlite':
           switch($IN['Action']) {
                case "New":
                    $db = sqliteConnect('');
                    $r = explode(",",$datasource['NewFields']);
                    $query = "INSERT INTO ".$datasource['Table']." (".
                         $datasource['PK'].",".
                         $datasource['NewFields'].
                    ") VALUES (Null";
                  $s = explode("|",$datasource['FieldTypes']);
                    if($s){foreach($s as $v) {if ($v) {
                        $vs = explode('=',$v);
                        if(isset($vs[1])){$t[$vs[0]]=$vs[1];}
                    }}}
                    foreach($r as $ri) {
                        if (isset($t[$ri])) {
                            $s = $t[$ri];
                        } else {
                            $s =  '';
                        }
                        $d = @$IN[$ri];
                        switch($s) {
                            case 'Raw':
                                $query .= ",'".sqlite_escape_string($d)."'";
                            break;
                            case 'Password':
			        $query .= ",'".md5($d)."'";
                            break;
                            case 'UPPER': 	
                                $query .= ",'".htmlentities(utf8Upper($d),ENT_QUOTES,'UTF-8')."'";
                            break;
                            case 'DateFix':
                                if (trim($d) != '') {
                                    if (!strpos($d,'-')) {
                                        //date formatting missing...
                                        $d2 = substr($d,0,4).'-';
			                $m = substr($d,4,2);
			    	        if ($m) {$d2.= $m.'-';}else{$d2.='00-';}
				        $m = substr($d,6,2);
				        if ($m) {$d2.= $m;}else{$d2.='00';}
                                        $d = $d2;
                                     }
                                    $query .= ",'".htmlentities($d,ENT_QUOTES,'UTF-8')."' ";
                                 } else {
                                    $query .= ",'' ";
                                }
                                 
                            break;
                            default: 	
                                $query .= ",'".htmlentities($d,ENT_QUOTES,'UTF-8')."'";
                            break;
		        } 
                        
                    }
                    $query .= ")";
                    fb($query,FIREPHP::INFO);
                    $result = sqlite_query($db,$query) or trigger_error("Sqlite Datasource($dsname) Query Error:".sqlite_last_error($db));
                    $newId = sqlite_last_insert_rowid($db);
                    print '{"Status":"Created","NewId":"'.$newId.'"}';
                break;
                case "Update":
                    $db = sqliteConnect('');
                    fb('warning filter those fields you are allowed to update.',FIREPHP::INFO);
                    if (isset($IN[$datasource['PK']])) {
                        $id = $IN[$datasource['PK']];
                    } else {
                        $id = $IN['Id'];//or $IN['PK']
                    }
                    $r = explode(",",$datasource['NewFields']);
                    $s = explode("|",$datasource['FieldTypes']);
                    if($s){foreach($s as $v) {if ($v) {
                        $vs = explode('=',$v);
                        if(isset($vs[1])){$t[$vs[0]]=$vs[1];}
                    }}}
                    $query = "UPDATE ".$datasource['Table']." SET ".$IN['UpdateField']."=";
                    $s =  @$t[$IN['UpdateField']];
                    $d = $IN['UpdateValue'];
                    switch($s) {
                    case 'Raw':
                            $query .= "'".sqlite_escape_string($d)."'";
                        break;
                        case 'Password':
                            $query .= "'".md5($d)."'";
                        break;
                        case 'UPPER': 	
                            $query .="'".sqlite_escape_string(htmlentities(utf8Upper($d),ENT_QUOTES,'UTF-8'))."'";
                        break;
                        case 'DateFix':
                            if (trim($d) != '') {
                                if (!strpos($d,'-')) {
                                    //date formatting missing...
                                    $d2 = substr($d,0,4).'-';
				    $m = substr($d,4,2);
				    if ($m) {$d2.= $m.'-';}else{$d2.='00-';}
				    $m = substr($d,6,2);
				    if ($m) {$d2.= $m;}else{$d2.='00';}
                                    $d = $d2;
                                 }
                               $query .= "'".htmlentities($d,ENT_QUOTES,'UTF-8')."' ";
                                 } else {
                                    $query .= "'' ";
                                }
                        break;
                        default: 	
                            $query .="'".sqlite_escape_string(htmlentities($d,ENT_QUOTES,'UTF-8'))."'";
                        break;
		    } 
                    $query .=" WHERE ".$datasource['PK'].'='.$id;
                    $result = sqlite_query($db,$query) or trigger_error("{Status:'Error',Message:'Sqlite Datasource($dsname) Query Error:".sqlite_last_error($db)." in $query'}");
                    print '{"Status":"Saved","Id":"'.$id.'"}';
                    fb($query,FIREPHP::INFO);
                break;
                case "UpdateFields":
                    if (!isset($db)) {
                        $db = dbConnect('');
                    }
                    $s = explode("|",$datasource['FieldTypes']);
                    if($s){foreach($s as $v) {if ($v) {
                        $vs = explode('=',$v);
                        if(isset($vs[1])){$t[$vs[0]]=$vs[1];}
                    }}}
                    $query = "UPDATE ".$datasource['Table']." SET ";
                    $r = explode(",",$datasource['NewFields']);
                    $c=false;
                    foreach($r as $ri) {
                        if (isset($IN[$ri])) {
                            if ($c){$query .= ",";}
                                $s = @$t[$ri];
                                $d = @$IN[$ri];
                                switch($s) {
                                    case 'Raw':
                                        $query .= "$ri ='".sqlite_escape_string($d)."' ";
                                    break;
                                    case 'Password':
                                        $query .= "$ri ='".md5($d)."' ";
                                    break;
                                    case 'UPPER':
                                        $query .= "$ri ='".htmlentities(utf8Upper($d),ENT_QUOTES,'UTF-8')."' "; 
                                    break;
                                    case 'DateFix':
                                       if (trim($d) != '') {
                                            if (!strpos($d,'-')) {
                                                //date formatting missing...
                                                $d2 = substr($d,0,4).'-';
					        $m = substr($d,4,2);
					        if ($m) {$d2.= $m.'-';}else{$d2.='00-';}
					        $m = substr($d,6,2);
					        if ($m) {$d2.= $m;}else{$d2.='00';}
                                                $d = $d2;
                                            }
                                           $query .= "$ri ='".htmlentities($d,ENT_QUOTES,'UTF-8')."' ";
                                 } else {
                                    $query .= "$ri ='' ";
                                }
                                    break;
                                    default:
                                        $query .= "$ri ='".htmlentities($d,ENT_QUOTES,'UTF-8')."' "; 
                                    break;
                                }
                                $c = true;		
                            }
                        }
                        $query .= " WHERE ".$datasource['Sync'].'="'.$IN[$datasource['Sync']].'"';
                        $result = sqlite_query($db,$query) or trigger_error("Sqlite Datasource($dsname) Query Error:".sqlite_last_error($db));
                        print '{"Status":"Saved","Id":"'.$IN[$datasource['Sync']].'"}';
                        fb($query,FIREPHP::INFO);
                break;
                case "UpdatePass":
                    $db = sqliteConnect('');
                    $query = "UPDATE ".$datasource['Table']." SET ".$IN['UpdateField']."='".md5(htmlentities($IN['UpdateValue'],ENT_COMPAT,'UTF-8'))."' WHERE ".$datasource['PK'].'='.$IN[$datasource['PK']];
                    $result = sqlite_query($db,$query) or trigger_error("Sqlite Datasource($dsname) Query Error:".sqlite_last_error($db));
                    print '{"Status":"Saved","Id":"'.$IN[$datasource['PK']].'"}';
                    fb($query,FIREPHP::INFO);
                break;
                case "Delete":
                    $db = sqliteConnect('');
                    fb('warning, deleting is unsafe, check allowed to do this');
                    if (isset($IN['Id'])) {
                        $query = "DELETE FROM ".$datasource['Table']." WHERE ".$datasource['PK'].'='.$IN['Id'];
                        //$query .= ' LIMIT 0,1';//for safety
                        $result = sqlite_query($db,$query) or trigger_error("Sqlite Datasource($dsname) Query Error:".sqlite_last_error($db));
                        print '{"Status":"Deleted","Id":"'.$IN['Id'].'"}';
                        fb($query,FIREPHP::INFO);
                    } else {
                        trigger_error('PK not found.');
                    }
                    break;
                    case "CascadeDelete":
                        $db = sqliteConnect('');
                        $query = $datasource['CascadeSQL'];
                        $result = sqlite_query($db,$query) or trigger_error("Sqlite Datasource($dsname) Query Error:".sqlite_last_error($db));
                        print '{"Status":"Deleted"}';
                        fb($query,FIREPHP::INFO);
                    break;
            }
        break;
        case 'mysql':
            switch($IN['Action']) {
                case "New":
                    $db = mysqlConnect('');
                    $query = "INSERT INTO ".$datasource['Table']." (".
                        $datasource['PK'].",".
                        $datasource['NewFields'].
                    ") VALUES (Null";
                    $r = explode(",",$datasource['NewFields']);
                    $s = explode("|",$datasource['FieldTypes']);
                    if($s){foreach($s as $v) {if ($v) {
                        $vs = explode('=',$v);
                        if(isset($vs[1])){$t[$vs[0]]=$vs[1];}
                    }}} 
                   foreach($r as $ri) {
                        if (isset($t[$ri])) {
                            $s = $t[$ri];
                        } else {
                            $s =  '';
                        }
                        switch($s) {
                            case 'Raw':
                                $query .= ",'".mysql_real_escape_string($IN[$ri])."'";
                            break;
                            case 'Password':
			        $query .= ",'".md5($IN[$ri])."'";
                            break;
                            default: 	
                                $query .= ",'".htmlentities(@$IN[$ri],ENT_QUOTES,'UTF-8')."'";
                            break;
		        } 
                    }
                    $query .= ")";

                    $result = mysql_query($query,$db) or trigger_error("Mysql Datasource($dsname) Query Error:".mysql_error($db));
                    $newId = mysql_insert_id($db);
                    print '{"Status":"Created","NewId":"'.$newId.'"}';
                    fb($query,FIREPHP::INFO);
                break;
                case "Update":
                    $db = mysqlConnect('');
                    if (isset($IN[$datasource['PK']])) {
                        $id = $IN[$datasource['PK']];
                    } else {
                        $id = $IN['Id'];//or $IN['PK']

                    }
                    $query = "UPDATE ".$datasource['Table']." SET ".$IN['UpdateField']."='".mysql_escape_string(htmlentities($IN['UpdateValue'],ENT_COMPAT,'UTF-8'))."' WHERE ".$datasource['PK'].'="'.$id.'"';
                    $result = mysql_query($query,$db) or trigger_error("MySQL Datasource($dsname) Query Error:".mysql_error($db)." (query was:$query)");
                    print '{"Status":"Updated","Id":"'.$id.'"}';
                    fb($query,FIREPHP::INFO);
                break;
                case "UpdatePass":
                    $db = mysqlConnect('');
                    $query = "UPDATE ".$datasource['Table']." SET ".$IN['UpdateField']."='".md5(htmlentities($IN['UpdateValue'],ENT_QUOTES,'UTF-8'))."' WHERE ".$datasource['PK'].'='.$IN[$datasource['PK']];
                    $result = mysql_query($query,$db) or trigger_error("MySQL Datasource($dsname) Query Error:".mysql_error($db));
                    print '{"Status":"Updated","Id":"'.$IN[$datasource['PK']].'"}';
                    fb($query,FIREPHP::INFO);
                break;
                case "Delete":
                    $db = mysqlConnect('');
                    if (isset($IN['Id'])) {
                        $query = "DELETE FROM ".$datasource['Table']." WHERE ".$datasource['PK'].'='.$IN['Id'];
                        $result = mysql_query($query,$db) or trigger_error("MySQL Datasource($dsname) Query Error:".mysql_error($db));
                        print '{"Status":"Deleted","Id":"'.$IN['Id'].'"}';
                        fb($query,FIREPHP::INFO);
                    } else {
                        trigger_error('PK not found.');
                    }
                break;
                case "CascadeDelete":
                    $db = mysqlConnect('');
                    $query = $datasource['CascadeSQL'];
                    $result = mysql_query($query,$db) or trigger_error("MySQL Datasource($dsname) Query Error:".mysql_error($db));
                    print '{"Status":"Deleted"}';
                    fb($query,FIREPHP::INFO);
                break;
            }
        break;
    }
} else {
        print "alert('Gateway Error:Unknown Datasource (".$IN['datasource'].")');";
}
