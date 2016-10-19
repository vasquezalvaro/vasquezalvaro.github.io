<?php
function Conectarbillar() {
//echo "</br></br>....1. CONECTANDO a la BD ... en Conectarbillar() de conectarseaBD.php ... ";
// DEBE SER CON PDO  NO PUEDE SER //$dbhandle = sqlite_open('newsqlite');  // **************
	// if ($db = new PDO('sqlite:php/testsqlite.db')) {    // ubicacion con respecto al dir de la pagina que invoca
		if ($db = new PDO('sqlite:basededatos/aleman.sqlite')) {    // ubicacion con respecto al dir de la pagina que invoca
		// *************************************** AAVVPP
		//echo "</br></br>....2. CONECTANDO a la BD ... en Conectarbillar() de conectarseaBD.php ... ";
		return $db;			
	} else {
		//echo "</br></br>****  NO  a la BD ... en Conectarbillar() de conectarseaBD.php ... ***** ";
	    die($sqliteerror);
	}
} //end function 
?>