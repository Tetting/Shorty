<?
$dataSources = array(''=>null
	/*,'Givers'=> array(
		'Title'=> 'Givare'
		,'Query'=> 'Select * from Giver Where Id > 0'
		,'MaxSize'=> 2000
		,'Columns' => array(
			'Id'=> '#'
			,'Name' => 'Namn'
			,'Address' => 'Adress'
		)
		,'Orientation'=>'landscape'
    )*/
    
	,'Barnland'=> array(
		'Title'=> 'Child List'
		,'Query'=> 'select * from 
			Fadderbarn, Giver 
			where 
				Fadderbarn.GiverId = Giver.Id
				and Giver.Id > 0
				Order by Fadderbarn.Area DESC'
		,'MaxSize'=> 2000
		,'Columns' => array(
			'Fadderbarn.Id'=> 'Childno'
			,'Fadderbarn.Name' => 'Name of Child'
			,'Giver.Id' => 'Sponsor'
			,'Giver.Name' => 'Sponsor Name'
			,'Fadderbarn.Mkr' => 'Sek/month'
		)
		,'Orientation'=>'landscape'
     ),'ChildArea'=> array(
		'Title'=> 'Barn Område'
		,'Query'=> 'select * from 
			Fadderbarn
			Order by Fadderbarn.Area DESC '
		,'MaxSize'=> 2000
		,'Columns' => array(
			'Id'=> 'Nr'
			,'Area' => 'Område'
			,'Area1' => 'Område1'
			,'Name' => 'Namn'
			,'Mkr' => 'Kr/mån'
		)
		,'Orientation'=>'landscape'
    /*),'ChildSponsor'=> array(
		'Title'=> 'Child Sponsor'
		,'Query'=> 'select * from 
			Fadderbarn, Giver 
			where 
				Fadderbarn.GiverId = Giver.Id
				and Giver.Id > 0
			'
		,'MaxSize'=> 2000
		,'Columns' => array(
			'Giver.Id'=> 'Givare'
			,'Giver.Name' => 'Namn'
			,'Giver.Address' => 'Adress'
			,'Giver.ZipTown' => 'Ort'
			,'Fadderbarn.Id' => 'Barn#'
			,'Fadderbarn.Mkr' => 'Sek/month'
		)
		,'Orientation'=>'landscape'
		*/
	),'Betel'=> array(
		'Title'=> 'Betel'
		,'Query'=> "select * from 
			Betel
			Where Name <> ''
			Order by Name
			"
		,'MaxSize'=> 2000
		,'Columns' => array(
			'Name' => 'Namn'
			,'Address' => 'Adress'
			,'Zip' => 'Post'
			,'ZipTown' => 'Ort'
			,'Tel' => 'tel'
			,'ProjectCode' => 'Projekt'
		)
		,'Orientation'=>'landscape'
	),'ProjectGifts'=> array(
		'Title'=> 'Projekt Gåvor'
		,'Query'=> "select 
				Giver.Name
				,Project.Project
				,GivProj.KrMon
				,GivProj.LastPayment
				,GivProj.LastPaymentTot
			from
				GivProj,Giver,Project
			Where
				GivProj.KrMon > 0
				AND Giver.Id = GivProj.GiverId
				AND GivProj.ProjectId = Project.Id
			Order by ProjectId
			"
		,'MaxSize'=> 2000
		,'Columns' => array(
			'Giver.Name' => 'Namn'
			,'Project.Project' => 'Projekt'
			,'GivProj.KrMon' => 'Kr Mån'
			,'GivProj.LastPayment' => 'Sist Inbet DT'
			,'GivProj.LastPaymentTot' => 'Sist Inbet'
		)
		,'Orientation'=>'landscape'
	),'Payments'=> array(
		'Title'=> 'Betalningar'
		,'Query'=> "select *
			from
				Payment
			Order by Date Desc
			"
		,'MaxSize'=> 2000
		,'Columns' => array(
			'Date' => 'Datum'
			,'GiverId' => 'Givare'
			,'PaymentType' => 'Typ'
			,'ProjectId' => '#'
			,'PaymentSource' => 'Source'
			,'InKr' => 'Inbet'
			,'OutKr' => 'Utbet'
		)
		,'Orientation'=>'portrait'
	),'ProjectPayments'=> array(
		'Title'=> 'Projekt Betalningar'
		,'Query'=> "select 
				Payment.*
				,Project.Project
			from
				Payment, Project
			Where PaymentType = 'Project'
			and Payment.ProjectId = Project.Id
			Order by Date Desc
			"
		,'MaxSize'=> 2000
		,'Columns' => array(
			'Payment.Date' => 'Datum'
			,'Payment.GiverId' => 'Givare'
			,'Payment.ProjectId' => 'Projekt#'
			,'Project.Project' => 'Projektnamn'
			,'Payment.PaymentSource' => 'Source'
			,'Payment.InKr' => 'Inbet'
			,'Payment.OutKr' => 'Utbet'
		)
		,'Orientation'=>'portrait'
	),'ChildPayments'=> array(
		'Title'=> 'Fadderbarn Betalningar'
		,'Query'=> "select 
				Payment.*
				,Fadderbarn.Name
			from
				Payment, Fadderbarn
			Where PaymentType = 'FadderBarn'
			and Payment.ProjectId = Fadderbarn.Id
			Order by Date Desc
			"
		,'MaxSize'=> 2000
		,'Columns' => array(
			'Payment.Date' => 'Datum'
			,'Payment.GiverId' => 'Givare'
			,'Payment.ProjectId' => 'Barn#'
			,'Fadderbarn.Name' => 'Namn'
			,'Payment.PaymentSource' => 'Source'
			,'Payment.InKr' => 'Inbet'
			,'Payment.OutKr' => 'Utbet'
		)
		,'Orientation'=>'portrait'
	),'Companies'=> array(
		'Title'=> 'Företag'
		,'Query'=> 'Select 
			CompanyName
			,Address
			,ZipTown
			,Zip
			,Tel
			,Code
			,Status 
		from Company order by CompanyName'
		,'MaxSize'=> 2000
		,'Columns' => array(
			'CompanyName' => 'Namn'
			,'Address' => 'Adress'
			,'ZipTown' => 'Ort'
			,'Zip' => 'Postnummer'
			,'Tel' => 'Tel'
			,'Code' => 'Kod'
			,'Status' => 'Status'
		)
		,'Orientation'=>'landscape'
    ),'Churches'=> array(
		'Title'=> 'Församling'
		,'Query'=> 'Select 
			ChurchName
			,Contact
			,Address
			,ZipTown
			,Zip
			,Tel
			,Status 
		from Church order by ChurchName'
		,'MaxSize'=> 2000
		,'Columns' => array(
			'ChurchName' => 'Namn'
			,'Address' => 'Adress'
			,'ZipTown' => 'Ort'
			,'Zip' => 'Postnummer'
			,'Tel' => 'Tel'
		)
		,'Orientation'=>'landscape'
    ),'Cassette'=> array(
		'Title'=> 'Cassette'
		,'Query'=> 'Select 
			*
		from Cassette'
		,'MaxSize'=> 2000
		,'Columns' => array(
			'Nr' => 'Nr'
			,'Speaker' => 'Speaker'
			,'Subject' => 'Ämne'
		)
		,'Orientation'=>'landscape'
    )
);
?>