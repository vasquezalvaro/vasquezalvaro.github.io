var ndig = 4;
starget = new Array(4);  // target(#secreto)
tentrada = new Array(4);
resultados = new Array(15);
var nextt = 0;   // para calculo del target(#secreto)
var nextr = 0;  // para el manejo del resultado(0....14)
var nexti = 0;   // para el manejo de la entrada
var nie = 0;
var finito = false;
var yaprimerdig = false;
var np = 0;		//  puntos
var nf = 0;		//  famas
var limint = 10;
idres = new Array(15);
idpyf = new Array(15);
idres = ['r1', 'r2', 'r3', 'r4', 'r5'];
idpyf = ['pf1', 'pf2', 'pf3', 'pf4', 'pf5'];
var stt=0;
var coloract=0;
var arrcolors = ['#dddddd', '#3b98c3', '#d21c5e', '#ffcc00'];
// alert( " browser .. CodeName ... " + navigator.appCodeName);

// if (window.innerWidth && window.innerWidth <= 480) {
$(document).ready(function(){ 
    if ( !$.browser.msie ) {
       
 		$('#levels').append('<div class="button" id="d3" onclick="setlevel(3)">  FACIL: 3 digitos (8 intentos)</div>');
 		$('#levels').append('<div class="button" id="d4" onclick="setlevel(4)"> NORMAL: 4 digitos (10 intentos)</div>');
 		$('#levels').append('<div class="button" id="d5" onclick="setlevel(5)">DIFICIL: 5 digitos (15 intentos)</div>');
        var k=0;
        for (var i = 0; i < 15; i++) { 
		  for (var j = 0; j < 5; j++) {
		     var s=' <span id="sp'+ k +  '"  onclick=chcolor(' + k + ')></span> '; 
			 $('#r' + i).append(s);
			 if (i < 999 ) {
		         //console.log( k + s + i);
		     }
		     k++;	
		     
		  }  
	    }  	
 	
 		borrarentrada();
 		nuevostarget();
    	borrarresultados(); 
    	colorspyf(3);   
        colorspyf(2);   
        colorspyf(1);    
        colorspyf(0);   
    	
   	} else { 
   		var nuevourl = "indexIE.html";
    	$(location).attr('href',nuevourl);	
		//alert( " Internet Explorer ????? ... " + $.browser.version );
	}  

});
    		
function genereaavvpp(ir) {
//console.log(resultados[ir].length + " --- " + ir + " " + resultados[ir].slice(2));
	for (var i = 0; i < resultados[ir].length - 2; i++) {
	    var vali = resultados[ir].slice(2).split("")[i];
		//console.log( i  + " ...... " + "#sp" + (ir*5 + i) + " valor:... " +  vali);
		$("#sp" + (ir*5 + i)).text(vali);
	}
}

function setlevel(nd) {
    if (ndig == nd * 1) {
    	// alert("NO cambio");
    } else {
    	ndig = nd * 1;
    	borrarentrada();
 		nuevostarget();
   		borrarresultados();
   		colorspyf(0);
    }
    jQT.goBack();
} 

function golevels() {

    jQT.goTo("#levels", "flip");
} 

function goback() {
//alert("back");
    jQT.goBack();
} 
  
    function clickdigit(n) { 
        if (finito == false) {
			guardarentrada(n);
			$('#ent').text(tentrada[0] + tentrada[1] + tentrada[2] + tentrada[3] + tentrada[4]);
	 		$('#ent').css('color',"rgba(255, 204, 102, 255)");
	 		if (yaprimerdig == false) {
	 		     yaprimerdig = true;
	 		     stt = Date.now();	     
	 		}
		}
    }
    
    function nuevostarget() {
    	finito = false;
    			switch (ndig) {
        			case 3:
        				limint = 8;
        			break;
        			case 4:
        				limint = 10;
        			break;
        			case 5:
        				limint = 15;
        			break;  
        		
        			default:
        				limint = 10;		
        		} 	
    	for (var i = 0; i < 5; i++) {
    		starget[i] = "";	
    	}
    	 $('#m4').text("( " + ndig + " dig. " + limint + " int. )");	
        starget[0] = Math.round(Math.random() * 9) + "";
        nextt = 1;
        while (starget[1] == ""  || starget[2] == "" || starget[3] == "" || starget[4] == "") {
        	var x = Math.round(Math.random() * 9) + "";
        	var r = true;
        	for (var i = 0; i < 5; i++) {
        		if (x == starget[i]) {
        			r = false;
        		}
        	}
        	if (r) {
        		starget[nextt] = x;
        		nextt++;
        	}       			       
        } 
        for (var i = 1; i < 5; i++) {
    		if (i > ndig - 1) {
        		starget[i] = "";
        	}   
        } 

    }
	function borrarentrada() {
		for (var i = 0; i < 5; i++) {
			tentrada[i] = ""; 
		}	
		nexti = 0;
	 	$('#ent').text("");
	}
	
	function backsp() {

	if (nexti > 0 ) {
		nexti--;
		tentrada[nexti]="";
		$('#ent').text(tentrada[0] + tentrada[1] + tentrada[2] + tentrada[3] + tentrada[4]);
		$('#ent').css('color',"rgba(255, 204, 102, 255)");
		//alert(nexti + " / " + tentrada[0]  + " / " + tentrada[1]  + " / " + tentrada[2]  + " / " + tentrada[3]  + " / " + tentrada[4] + " / " );
	}
	
	if (nexti == 0 ) {
	    borrarentrada();
	}
	
	}
	

	function esvalido(n) {
	var r = true;
		for (var i = 0; i < ndig - 1; i++) {
			if (tentrada[i] == (n + "")) {
				r = false;
			}
		}
	return r;
	}
	
	function guardarentrada(tid) {
	var sres = "";
		if (nexti < ndig  && esvalido(tid)) {
			tentrada[nexti] = tid + "";
			nexti++;
		}
	}

	function buttonclear() {
		if (finito == false) {
			borrarentrada()
		}
	}

	function buttonnuevoj() {
		if (nextr  > 0  &&  nextr < limint) {
			//print("           nj: " .. nie .. " int "  ..  nextr - 1)
		}
		borrarentrada()
		borrarresultados()
		nuevostarget()
		finito = false
		yaprimerdig = false;            $('#numeros').show();
		colorspyf(0);

	}

function buttonenter() {
var sent = tentrada[0] + tentrada[1] + tentrada[2] + tentrada[3] + tentrada[4];
	// validar y mostrar resultados   
	if (sent.length == ndig  && finito == false) {
		ultimoresultado();
		mostrarresultados();
	}	
}
function ultimoresultado  () {
	np = 0;		//  puntos
	nf = 0;			//  famas
//  entrada es tentrada[0] .. tentrada[1] .. tentrada[2] .. tentrada[3]
//  comparar contra target y calcular  puntos  y  famas
	for (var i = 0; i < ndig; i++) { 
		for (var j = 0; j < ndig; j++) { 
			if (tentrada[i] == starget[j] && i == j) {  
				nf++;
			} else {
				if (tentrada[i] == starget[j]) {    
					np++;
				}
			}	
		}  
	}  	
}

function mostrarresultados() {
var sres = "";
	if (nf == ndig)   {
		nie++;
		sres = (np + "") + (nf + "") + tentrada[0] + tentrada[1] + tentrada[2] + tentrada[3] + tentrada[4];
		resultados[nextr] = sres;
		mostrarultres();
		$('#m1').text("Felicitaciones !!");			
		$('#m2').text(tiempos());
		$('#numeros').hide();
		finito = true;		
		nie = 0;
	} else {
		sres = (np + "") + (nf + "") + tentrada[0] + tentrada[1] + tentrada[2] + tentrada[3] + tentrada[4];
		resultados[nextr] = sres;
		mostrarultres();		
		borrarentrada();
		nie++;
		nextr++;
	}	
	if (nextr == limint)   {
		sres = "# Secreto: " + starget[0] + starget[1] + starget[2] + starget[3] + starget[4];
		$('#m1').text("Limite excedido");
		$('#m2').text(sres);
		$('#m3').text(tiempos());
        $('#numeros').hide();		
		finito = true;
		nextr++;				
	}
}

function borrarresultados() {
	if (nextr > 0  || finito == true) {
		//g1:removeSelf()
	}
	$('#m1').text("");
	$('#m2').text("");
	$('#m3').text("");
	nextr = 0;
	for (var i = 0; i < 15; i++) {
		resultados[i]="";		
        // ***************************************  $('#r' + i).text("");
        $('#pf' + i).text("");
        // &#9632;&nbsp;  '\&' + kind + '\;'   ' + '
        $('#i' + i).html('\&' + '#9632\;' + '\&' + 'nbsp\;' );
        $('#i' + i).html('*' + '\&' + 'nbsp\;' );
        
	}
	for (var i = 0; i < 75; i++) {
           $('#sp' + i).text("");
           $("#sp" + i).css("color", "#ddd");	
    }
	for (var i = limint; i <= 15; i++) {
           $('#i' + i).text("");	
    }
}
function getpyf(s1, s2) {
	var nn = s1 * 1;
	ss = new Array(4);
	var ss2 = "";
	for (var j = 0; j < 5; j++) {
			ss[j] = "";
	}
	if (s2 == "p") {
		for (var j = 0; j < nn; j++) {
			ss[j] = ". ";
		}
	} else {
		for (var j = 0; j < nn; j++) {
			ss[j] = "f ";
		}
	}
ss2 = ss[0] + ss[1] + ss[2] + ss[3]+ ss[4];
return ss2;
}

function mostrarultres() {

	//for (var i = 0; i < 15; i++) {
		if (resultados[nextr].length > 0)  {		
			var np1 = getpyf(resultados[nextr].slice(0, 1), "p");  //# de puntos
			var nf1 = getpyf(resultados[nextr].slice(1, 2), "f");  //# de famas
			
        	//$('#r' + nextr).html(retx(resultados[nextr].slice(2)));  //#s del resultado
        	genereaavvpp(nextr);
        	$('#pf' + nextr).text(np1 + " " + nf1);

// si resultado 1 es "105678" (1 punto  0 famas)
//resultados[1].slice(2).split("")[1]  retorna "6"
//resultados[1].slice(2).split("")[3]  retorna "8"
		}
	//}  // for
}


function retx(arr) {
//  ojo ver linea 305  **********************************************

var s="";	
	for (var i = 0; i < arr.length; i++) {
        s=s + arr[i] + '\&' + 'nbsp\;' + '\&' + 'nbsp\;';
	}

	return s.substring(0, s.length - 12);
}

function tiempos() {

	var ett = Date.now();
	var millis = ett - stt;
	var secs1= Math.floor
	(millis/1000);
	var minutos = Math.floor(secs1/60);
    var segundos = secs1 % 60;

return minutos + " min. y " + segundos + " seg.";
}

function button1() {
// probando con colors.html
// pero no funciona porque hay que cambiar
// cada uno de los span hijos y no solo el padre
$('.cero').text("5");
$('.cero').css("color", "blue");
}

function colorspyf(c) { 
if (c == 0)  {
  $("#imgcols").attr('src',"themes/jqt/img/colorspyfsel-0.png");	
}
if (c == 1)  {
  $("#imgcols").attr('src',"themes/jqt/img/colorspyfsel-1.png");	
}
if (c == 2)  {
  $("#imgcols").attr('src',"themes/jqt/img/colorspyfsel-2.png");	
}
if (c == 3)  {
  $("#imgcols").attr('src',"themes/jqt/img/colorspyfsel-3.png");	
}
coloract=c;
}

function chcolor(k) {

   $("#sp" + k).css("color", arrcolors[coloract]);
}
