
var home = window.location.hostname;

var indice= 0;
var circulo = "circulo";
var imagenes= new Array(
      ["../images/ultraboostog.jpg"],["../images/megabanner1.jpg"],["../images/megabanner2.jpg"]
	);

function goHome(){
	window.location.assign(home);
}

onload = function (){
	
	today();
	changeimage();
	setInterval(changeimage,8000);
}



function today(){
	var date= new Date();
	var dia= date.getDate();
	document.getElementById("fechadehoy").children[5+dia].children[0].setAttribute("id","active");
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

    var dia = x.children[0].innerHTML;
    var acro = "TH";
    if (dia == "1" || dia == "21" || dia == "31") { acro = "ST"}
    else if( dia == "2" || dia == "22") { acro = "ND"}
    else if (dia == "3" || dia == "23") { acro = "RD"}
	document.getElementById("diadelmes").innerHTML = "DECEMBER " + dia + acro;
    document.getElementById("active").removeAttribute("id");
    
    x.children[0].setAttribute("id","active");
    
    if (dia === "25"){
    	document.getElementById("no_announcements").style.display = "none";
    	document.getElementById("dia25_announcements").style.display = "block";
    }
    else{
    	document.getElementById("no_announcements").style.display = "block";
    	document.getElementById("dia25_announcements").style.display = "none";
    }
    	
    
}



  /*SLIDER*/

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
/*output.innerHTML = slider.value;*/ // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
/*slider.oninput = function() {
    output.innerHTML = this.value;
}*/



 /*SEARCH*/

function search(element){
	if( event.keyCode == 13){
		document.getElementById("cuerpo").style.display = "none";
		document.getElementById("search_done").style.display = "block";



		 
		for (var i = 0; i <= 14; i++) {
			document.getElementById("search_done").children[i].style.display = "block";
    	if(document.getElementById("search_done").children[i].children[2].innerHTML.indexOf(element.value)<0){
    		document.getElementById("search_done").children[i].style.display = "none";
    	  }
        }
	}
    
   
	
}


/*FILTERS*/

var filter = false;

function appearFilters(){

   if(filters === false){
	document.getElementById("filters").style.display = "block";
	filters = true;
   }
   else {
   		document.getElementById("filters").style.display = "none";
   		filters = false;
   }
   

}

function selectSize(x){
   var white = 'rgb(255, 255, 255)';
   if(window.getComputedStyle(x, "background-color").backgroundColor == white){
   	x.style.backgroundColor = "grey";
   }
   else{
   	 x.style.backgroundColor = "white";
   }
}