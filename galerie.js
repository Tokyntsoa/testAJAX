function connectAjax(){
	var cxhr=null;
	if(window.XMLHttpRequest){
		cxhr=new XMLHttpRequest();
	} 
	else if(window.ActiveXObject){
		cxhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	else{
		cxhr=false;
		alert("Le navigateur ne supporte pas AJAX");
	}
	return cxhr;
}

function  choixfruits(){
	var xhr=connectAjax();
	var optfruit=document.getElementById('fruit');
	var nomfruit=optfruit.options[optfruit.selectedIndex].value;
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			var retour = xhr.responseText;
			affiche(retour,nomfruit);
		}
	}
	xhr.open("GET","galerie.php?image="+nomfruit,true);
	xhr.send(null);
}

function affiche(texte,imgs){
	document.getElementById("titre").innerHTML=texte;
	document.getElementById("apercu").src="images/"+imgs+".jpg";
}

window.onchange=choixfruits;