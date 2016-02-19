var compteur=0;

var p=document.getElementById("text");

document.getElementById("bouton").addEventListener("click", function(event)
{
	compteur++;
	p.innerHTML = "Vous avez cliqué sur le bouton "+compteur+" fois";
});
