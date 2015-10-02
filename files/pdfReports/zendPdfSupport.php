<?

//pdf support functions
function pdfClean($text) {
	return html_entity_decode($text,ENT_QUOTES);
}
function widthForStringUsingFontSize($string, $font, $fontSize) {
     $drawingString = iconv('UTF-8', 'UTF-16BE//IGNORE', $string);
     $characters = array();
     for ($i = 0; $i < strlen($drawingString); $i++) {
         $characters[] = (ord($drawingString[$i++]) << 8 ) | ord($drawingString[$i]);
     }
     $glyphs = $font->glyphNumbersForCharacters($characters);
     $widths = $font->widthsForGlyphs($glyphs);
     $stringWidth = (array_sum($widths) / $font->getUnitsPerEm()) * $fontSize;
     return $stringWidth;
 }
function alignedText($t,$text, $pdfPage, $offsety = 0) {
    $fontVertSpace = 2;
	$text = utf8_encode($text);
	$y = (float)$t['y'] - $offsety;
	foreach (explode(PHP_EOL, $text) as $i => $line) {
		$y = $y - ($pdfPage->getFontSize() + $fontVertSpace);
		switch($t['align']) {
			case 'center':
				$x = (float)$t['xStart'];
				$x2 = (float)$t['xEnd'];
				$maxWidth = $x2 - $x;
				$twidth = widthForStringUsingFontSize($line, $pdfPage->getFont(), $pdfPage->getFontSize());
				if ($maxWidth > $twidth) {
					//we have some extra padding we can therefore add...
					$spareSpace = ($maxWidth - $twidth) / 2;
					$x += $spareSpace;
				}
			break;
			case 'right':	
				$twidth = widthForStringUsingFontSize($line, $pdfPage->getFont(), $pdfPage->getFontSize());
				$x = (float)$t['xEnd'] - $twidth;
			break;
			case 'wrap':
				$x = (float)$t['xStart'];
				$x2 = (float)$t['xEnd'];
				$maxWidth = $x2 - $x;
				$words = explode(' ',$line);
				$word_count = count($words) ;
				$word = 0 ;
				$wrappedLine = '';
				$curWidth = 0;
				while($word < $word_count)
				{
					$wordWidth = widthForStringUsingFontSize($words[$word], $pdfPage->getFont(), $pdfPage->getFontSize());
					if ($wordWidth + $curWidth < $maxWidth) {
						//not wider than the limit yet...
						$wrappedLine .= $words[$word] .' ';
						$curWidth += $wordWidth;
					} else {
						//printing this word would go over the max width...
						$pdfPage->drawText($wrappedLine,$x,$y, 'UTF-8');
						$y = $y - $pdfPage->getFontSize() - $fontVertSpace;
						$curWidth = $wordWidth;
						$wrappedLine = $words[$word] . ' ';
					}
					$word++;
				}
				$line = $wrappedLine;
			break;
			case 'left':
			default:
				$x = (float)$t['xStart'];
			break;
		}
		$pdfPage->drawText($line,$x,$y, 'UTF-8');
	}
	return $offsety;
}

function dbTexts($fieldList, $row, $sep) {
	if ($sep == "EOL") $sep = PHP_EOL;
	$fields = explode(',',$fieldList);
	$out = "";
	foreach($fields as $field) {
		if ($row[$field]) {
			$out .= $row[$field].$sep;
		}
	}
	return pdfClean($out);
}