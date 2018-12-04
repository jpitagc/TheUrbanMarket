
var home = window.location.hostname;

var indice= 0;
var circulo = "circulo";
var imagenes= new Array(
      ["../images/ultraboostog.jpg"],["../images/megabanner1.jpg"],["../images/megabanner2.jpg"]
	);

function goHome(){
	window.location.href= "homepage.html";
}

function shoppingCart(){
	window.location.href = "shoppingcart.html";
}

function blog(){
	window.location.href = "blog.html";
}
function userpage(){
	window.location.href = "userpage.html";
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
    	if(document.getElementById("search_done").children[i].children[2].innerHTML.indexOf(element.value)<0 && 
    		document.getElementById("search_done").children[i].children[0].innerHTML.indexOf(element.value)<0){
    		document.getElementById("search_done").children[i].style.display = "none";
    	  }
        }
	}
    
   
	
}


/*FILTERS*/

var filter = false;


function appearFilters(){
 if(document.getElementById("cuerpo").style.display === "none"){
 	if(filters == false){
	document.getElementById("filters").style.display = "block";
	filters = true;
   }
   else {
   		document.getElementById("filters").style.display = "none";
   		filters = false;
   }

 }
  else alert("Need to search first to apply filters");
   

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


function applyButton (){
	if(document.getElementById("Blue").checked == false)applyColorFilters("Blue");
	if (document.getElementById("Grey").checked == false) applyColorFilters("Grey");
	if (document.getElementById("Red").checked == false) applyColorFilters("Red");
	if (document.getElementById("Yellow").checked == false) applyColorFilters("Yellow");
	if (document.getElementById("White").checked == false) applyColorFilters("White");
	if (document.getElementById("Black").checked == false) applyColorFilters("Black");
    
 /*   if(document.getElementById("Adidas").checked == false)applyColorFilters("Adidas");
	if (document.getElementById("Nike").checked == false) applyBrandFilters("Nike");
	if (document.getElementById("Reebook").checked == false) applyBrandFilters("Reebook");
	if (document.getElementById("Jordan").checked == false) applyBrandFilters("Jordan");
	if (document.getElementById("Bansky").checked == false) applyBrandFilters("Bansky");
	if (document.getElementById("Vans").checked == false) applyBrandFilters("Vans");
	if (document.getElementById("Puma").checked == false) applyBrandFilters("Puma");
    if (document.getElementById("Fila").checked == false) applyBrandFilters("Fila");
    if (document.getElementById("Kappa").checked == false) applyBrandFilters("Kappa");*/
  
     appearFilters();

}


function applyColorFilters(color){
     var x = document.getElementsByClassName(color);

     for (var i = x.length - 1; i >= 0; i--) {
     	x[i].parentElement.style.display = "none";
     }
}

/*function applyBrandFilters(brand){

	for (var i = 0; i <= document.getElementById("search_done").childElementCount-1 ; i++) {
	     alert(i);		
    	if( document.getElementById("search_done").children[i].children[0].innerHTML.indexOf(brand)<0){
    		document.getElementById("search_done").children[i].style.display = "none";
    	  }
        }
}*/


function applyBrandFilters(brand){

}


var todayA = new Date();
var expiry = new Date(todayA.getTime() + 365 * 24 * 3600 * 1000); // un año
var activeUser = "";
var carrito = new Array(50);
var carritoCount = 0;

 function setCookie(name, value)
 {

   document.cookie=name + "=" + value + "; path=/; expires=" + expiry.toUTCString();
 }

 function putCookie(form)
  {

   var nombre=form[0].nombre.value;
   var apellidos=form[0].apellidos.value;
   var fechanac=form[0].fechanac.value;
   var genero=escape(form[0].genero.value);
   var correo= escape(form[0].correo.value);
   var contrasena= escape(form[0].contrasena.value);

   var data = [nombre, apellidos, fechanac, genero, correo, contrasena];
   var jsonData = JSON.stringify(data);
   setCookie(form[0].username.value, jsonData);
   return true;
  }

  function getCookie(key){
    var name = key + "=";
    var ca = document.cookie.split(';');
    for (var i=0; i<ca.length; i++){
      var c = ca[i];
      while (c.charAt(0)==' ') {
        c = c.substring(1);
      }
      if(c.indexOf(name)==0) {
        var content = JSON.parse(c.substring(name.length, c.length));
        return content;
      }

    }
    return "";
  }


  function checkCookie(key) {

    var content = getCookie(key);

    if (content!="") {
        return content;
    } else{
        return "";
    }
  }

  function login(){

    var content = checkCookie(document.forms["login"]["usuarioLog"].value);
    if (content!=""){
      if (document.forms["login"]["contrasenaLog"].value==content[5]){
        alert("Logeo");
        activeUser=document.forms["login"];
        window.location.href = "homepage.html";
      }else {
        alert("Contraseña incorrecta");
      }
    } else {
      alert("Usuario incorrecto");
    }
  }

  function logOut(){
    activeUser="";
    carrito=[];
  }

  function userButton(){
    if (activeUser==""){
         window.location.href = "register.html";
    } else {
      window.location.href = "userpage.html";
    }
  }



  function showIt(element){
    element.style.display="block";
  }

  function hideIt(element){
    element.style.display="none";
  }

  function addShoe(id){
    carrito[carritoCount] = id;
    carritoCount++;

    return carrito;
  }

  function removeShoe(id){
    for (var i=0; i<40; i++){
      if (carrito[i]==id){
        for(var j=i; j<40;j++){
          carrito[j]=carrito[j+1]
        }
      }
    }
    carritoCount--;

    return carrito;
  }


























