var chiffre=21;

var result=Math.floor(Math.random()*20)

while (chiffre!=result)
{
	chiffre=(prompt("Entrez le nombre : "));
	if (chiffre>result)
	{
		alert("Le chiffre est plus petit que "+chiffre);
	}
	else if(chiffre<result)
	{
		alert("Le chiffre est plus grand que "+chiffre);
	}
	
}

alert("Bravo, le chiffre était bien "+result);