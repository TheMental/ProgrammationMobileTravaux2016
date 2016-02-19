var ps=document.querySelectorAll("p");


for(var i in ps) 
{ 
	ps[i].parentNode.removeChild(ps[i]);
}
