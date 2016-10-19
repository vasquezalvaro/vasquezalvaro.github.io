
function descargas(n) {  
		var x = document.getElementById(n);
 		if(x.checked) {
 	
 		document.getElementById("PDF-" + n).text = 'Descargar PDF';
 		document.getElementById("MP3-" + n).text = 'Descargar MP3';
 		document.getElementById("PDF-" + n).style.visibility = 'visible';
 		document.getElementById("MP3-" + n).style.visibility = 'visible';
 	
 		} else {
 		document.getElementById("PDF-" + n).text = '';
 		document.getElementById("MP3-" + n).text = '';
    	document.getElementById("PDF-" + n).style.visibility = 'hidden';
    	document.getElementById("MP3-" + n).style.visibility = 'hidden';
 		}
} // end descargas function

function descargasCB(n) {  
		var x = document.getElementById(n);
 		if(x.checked) {
 	
 		//document.getElementById("PDF-" + n).text = 'Descargar PDF';
 		document.getElementById("MP3-" + n).text = 'Descargar MP3';
 		//document.getElementById("PDF-" + n).style.visibility = 'visible';
 		document.getElementById("MP3-" + n).style.visibility = 'visible';
 	
 		} else {
 		//document.getElementById("PDF-" + n).text = '';
 		document.getElementById("MP3-" + n).text = '';
    	//document.getElementById("PDF-" + n).style.visibility = 'hidden';
    	document.getElementById("MP3-" + n).style.visibility = 'hidden';
 		}
} // end descargasCB function
