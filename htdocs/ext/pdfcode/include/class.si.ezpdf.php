<?
include('class.ezpdf.php');
class SiCezpdf extends Cezpdf {
   	function SiCezpdf($paper='A4',$orientation='landscape') {
	   	$this->Cezpdf($paper,$orientation);
	   	$this->ez['separateFirstPageHeaderFooter']=0; //for the header/footer code...
		$this->selectFont(dirname(__FILE__).'/fonts/Helvetica.afm');	   	
	}
	//additional functions...
	
	/**
	* More advanced/JS style header/footer, you can have a callback function for each page...
	*/
	function siHeadersAndFooters($options) {
		$pages = count($this->ezPages); 
		for($pageno = 1; $pageno <= $pages; $pageno++) { 
			$this->reopenObject($this->ezPages[$pageno]); 
			if (isset($options['AllPages'])) {
				$options['AllPages']($this,$pageno,$pages);	
			}
			//$this->addText(($this->ez['pageWidth'] / 2), 12, 9, 'Sida '.$pageno.' av '.$pages); 
			$this->closeObject(); 
		} 
		
	}
	
	/*** EZ Header Footer ***/
	function doHeaderFooter($text,$fsize=8,$alignment=NULL,$xPos=NULL,$yPos=NULL,$whichpages='all') {  
		/* Places Header/Footer on each Page  
		Call this function after all text for the document has been outputed,  
		i.e. just before ezStream() 
		 
		Paramters: $text, $fontsize, $alignment,$xPos, $yPos, $whichpages  
		Supported alignments: left, right, center/centre  
		 
		If $xPos is provided, it overrides alignment  
		 
		$whichpages: can be used to create footer/header for firs page, all pages, odd or oven pages  
		Supported values :  
		all (default) : Print on all pages 
		odd : Print only on odd pages 
		even : Print only on even pages 
		first : Print only on first page 
		 
		Note: It uses the current font to put text on each page  
		 
		*/ 
		 
		//count pages  
		$pages = count($this->ezPages);  
		 
		if ( !isset($xPos) && isset($alignment) ) { 
			switch ($alignment) { 
				case 'left': 
					$xPos = $this->ez['leftMargin'] ;  
					break; 
				case 'right': 
					$xPos = $this->ez['pageWidth'] - $this->ezPrvtGetTextWidth($fsize, $text) - $this->ez['rightMargin'] ;  
				break; 
				case 'centre' || 'center': 
					$xPos = ($this->ez['pageWidth'] / 2) - ($this->ezPrvtGetTextWidth($fsize, $text)/2);  
					break; 
				default: 
					$xPos = $this->ez['leftMargin'] ;  
			} 
		} 
		 
		// If Y postion is not passed, use bottom margin - 15 
		if (! isset($yPos) ) {  
			$yPos = $this->ez['bottomMargin']-15 ;  
		} 
		 
		//iterate through pages  
		for($pageno = 1; $pageno <= $pages; $pageno++) {  
			$printit = false;  
			if ($whichpages =='all') {  
				$printit = true;  
			} else {  
				if ( ($pageno == 1) && ($whichpages =='first') ) { 
					// First page, print it  
					$printit = true;  
				}  
			 
				if ( ($pageno % 2) && ($whichpages =='odd') ) { 
					if( $this->ez['separateFirstPageHeaderFooter'] ) { 
						if ($pageno > 1) { 
							// Not on first page, print it 
							$printit = true;  
						} 
					} else {  
						// odd page, print it  
						$printit = true;  
					} 
				}  
		 
				if ( !($pageno % 2) && ($whichpages =='even') ) { 
					// even page, print it  
					$printit = true;  
				}  
			}  
		 
			if ($printit) {  
				//open the page again  
				$this->reopenObject($this->ezPages[$pageno]);  
				$this->addText($xPos, $yPos, $fsize, $text );  
				//close the page  
				$this->closeObject();  
			} 
		}  
	}  
		 
	function doFirstPageFooter($text,$fsize=8,$alignment=NULL,$xPos=NULL,$yPos=NULL) {  
		/* ez['separateFirstPageHeaderFooter'] must be set to true to use  
		separate header/footer on first page  
		Also, call doFirstPageHeader()/doFirstPageFooter() or set ez['separateFirstPageHeaderFooter'] to true 
		before calling doOddPageHeader()/doOddPageFooter() 
		If Y postion is not passed, use bottom margin - 15 
		*/ 
		$this->ez['separateFirstPageHeaderFooter'] = true;  
		if (! isset($yPos)) {  
			$yPos = $this->ez['bottomMargin']-15 ;  
		} 
		$this->doHeaderFooter($text,$fsize,$alignment,$xPos,$yPos,'first') ;  
	} 
		 
		 
	function doOddPageFooter($text,$fsize=8,$alignment=NULL,$xPos=NULL,$yPos=NULL) {  
		// If Y postion is not passed, use bottom margin - 15 
		if (! isset($yPos)) {  
			$yPos = $this->ez['bottomMargin']-15 ;  
		} 
		$this->doHeaderFooter($text,$fsize,$alignment,$xPos,$yPos,'odd') ;  
	} 
		 
	function doEvenPageFooter($text,$fsize=8,$alignment=NULL,$xPos=NULL,$yPos=NULL) {  
		// If Y postion is not passed, use bottom margin - 15 
		if (! isset($yPos)) {  
			$yPos = $this->ez['bottomMargin']-15 ;  
		} 
		$this->doHeaderFooter($text,$fsize,$alignment,$xPos,$yPos,'even') ;  
	} 
		 
	function doFooter($text,$fsize=8,$alignment=NULL,$xPos=NULL,$yPos=NULL) {  
		// If Y postion is not passed, use bottom margin - 15 
		if (! isset($yPos)) {  
			$yPos = $this->ez['bottomMargin']-15 ;  
		} 
		$this->doHeaderFooter($text,$fsize,$alignment,$xPos,$yPos) ;  
	} 
		 
		 
	function doFirstPageHeader($text,$fsize=8,$alignment=NULL,$xPos=NULL,$yPos=NULL) {  
		/* ez['separateFirstPageHeaderFooter'] must be set to true to use  
		separate header/footer on first page  
		Also, call doFirstPageHeader()/doFirstPageFooter() or set ez['separateFirstPageHeaderFooter'] to true 
		before calling doOddPageHeader()/doOddPageFooter() 
		*/ 
		$this->ez['separateFirstPageHeaderFooter'] = true;  
		if (! isset($yPos)) {  
			$yPos = $this->ez['pageHeight'] - $this->ez['topMargin'] + 15 ;  
		} 
		$this->doHeader($text,$fsize,$alignment,$xPos,$yPos,'first') ; 
	} 
		 
		 
	function doOddPageHeader($text,$fsize=8,$alignment=NULL,$xPos=NULL,$yPos=NULL) {  
		if (! isset($yPos)) {  
			$yPos = $this->ez['pageHeight'] - $this->ez['topMargin'] + 15 ;  
		} 
		$this->doHeader($text,$fsize,$alignment,$xPos,$yPos,'odd') ; 
	} 
		 
	function doEvenPageHeader($text,$fsize=8,$alignment=NULL,$xPos=NULL,$yPos=NULL) {  
		if (! isset($yPos)) {  
			$yPos = $this->ez['pageHeight'] - $this->ez['topMargin'] + 15 ;  
		} 
		$this->doHeader($text,$fsize,$alignment,$xPos,$yPos,'even') ; 
	} 
		 
		 
	function doHeader($text,$fsize=8,$alignment=NULL,$xPos=NULL,$yPos=NULL,$whichpages='all') {  
		// If Y postion is not passed, place header in the top margin area 
		if (! isset($yPos)) {  
		$yPos = $this->ez['pageHeight'] - $this->ez['topMargin'] + 15 ;  
		} 
		$this->doHeaderFooter($text,$fsize,$alignment,$xPos,$yPos,$whichpages) ; 
	} 
		
		
	/**
	Now you can use these functions. Call these functions after the document has been created, i.e. just before ezStream(); Typical use:  

	// Use next two command, if you want separate header for first page  
	$pdf->ez['separateFirstPageHeaderFooter'] = true;  
	$pdf->doFirstPageFooter("<i>Footer for first page</i>" ,8,'right');  
	 
	// Define footer for odd pages: Parameters passed: footer text, font size, alignment left  
	$pdf->doOddPageFooter("Odd Page Footer: right" ,8,'right');  
	// Define footer for even pages: 'Even Page Footer' will appear in italics 
	$pdf->doEvenPageFooter("<i>Even Page Footer</i>:<b>left</b>" ,8,'left');  
	 
	 Header for first page.  
	Note: Use $pdf->ez['separateFirstPageHeaderFooter'] = true;  
	and do not call doFirstPageHeader() if you do not want header on first page 
	 
	$pdf->doFirstPageHeader("<i>Header for first page</i>" ,8,'right');  
	$pdf->doOddPageHeader("Odd Page header: right " ,7,'right');  
	// Displays header at x postion 100  
	$pdf->doEvenPageHeader("<b>Even Page header</b>: left" ,8,NULL,100);  
	$pdf->drawHeaderFooterRuler(25,0.5);  
	 
	$pdf->ezStream(); 
	 **/
}
?>