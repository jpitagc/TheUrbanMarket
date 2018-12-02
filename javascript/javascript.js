

var indice= 0;
var circulo = "circulo";
var imagenes= new Array(
      ["../images/megabanner.jpg"],["../images/megabanner1.jpg"],["../images/megabanner2.jpg"]
	);

onload = function (){
	changeimage();
	setInterval(changeimage,8000);
}


function changeimage (){
	     if (indice >=3) { indice= 0;}
	     var cir= circulo + indice;

	     var cirant= circulo + (indice -1);
	     if (cirant == "circulo-1"){ cirant = "circulo2"}
	     

         document.getElementById("anuncios").src= imagenes [indice];

         document.getElementById(cir).style.backgroundColor = "grey";
         document.getElementById(cirant).style.backgroundColor = "white";
         indice++;
         

}


function actualizardia(x){

	var prueba;
    var dia = x.innerHTML;
    var acro = "TH";
    if (dia == "1" || dia == "21" || dia == "31") { acro = "ST"}
    else if( dia == "2" || dia == "22") { acro = "ND"}
    else if (dia == "3" || dia == "23") { acro = "RD"}
	document.getElementById("diadelmes").innerHTML = "DECEMBER " + dia + acro;
    document.getElementById("active").removeAttribute("id");
    if(x.children[0] === undefined){
    	x.setAttribute("id","active");
    	return;
    }
    else{
    	var element = x.children;
    	
    	
    }
}