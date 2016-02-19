var table=parseFloat(prompt("Entrez le chiffre dont vous voulez obtenir la table de multiplication : "));

for(i=0;i<13;i++)
{
	var result=table*i;
	console.log(i+"*"+table+"="+result);
}