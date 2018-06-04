<?php
	$requete=$_REQUEST['image'];
	
	switch($requete){
		case "fraise" : $txt="Fraise bien mure";break;
		case "kiwi" : $txt="Trace des kiwis";break;
		case "banane" : $txt="Deux bananes bien jaune";break;
		case "tomate" : $txt="Un tomate rouge";break;
		case "tomates" : $txt="Des tomates";break;
	}
	echo $txt;
?>
