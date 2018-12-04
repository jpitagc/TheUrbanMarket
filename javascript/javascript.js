
var today = new Date();
var expiry = new Date(today.getTime() + 365 * 24 * 3600 * 1000); // un año
var activeUser = null;

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
        //AQUI PONER EL LINK A PG DE USUARIO O HOMEPAGE LOGEADA
      }else {
        alert("Contraseña incorrecta");
      }
    } else {
      alert("Usuario incorrecto");
    }
  }

  function showIt(element){
    element.style.display="block";
  }

  function hideIt(element){
    element.style.display="none";
  }

  function addShoe(id){
    setCookie()
  }
