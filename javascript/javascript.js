document.getElementById("carrito").onclick = calculaTotal; //Cuando entras en la pagina del carrito calculas el total de los objetos que quieres comprar
document.getElementById("comprar").onclick = pedirDireccion; //Al dar al boton de comprar te muestra los campos para rellenar la direccion
document.getElementById("pagar").onclick = pedirPago; //Cuando das al boton de pagar te muestra los campos para rellenar el metodo de pago
document.getElementById("confirmarCompra").onclick = compraRealizada; //Cuando ya has completado el proceso de compra procedes a confirmar el pedido


//--------FUNCIONES--------//
function calculaTotal{

	//Añade el encabezado de la tabla
	document.getElementById("tablaTotal").innerHTML = '<tr><td class="pro"><b>Producto</b></td><td class="uni"><b>Unidades</b></td><td class="preUni"><b>Precio Unidad</b></td><td class="preTotal"><b>Precio Total</b></td></tr>';


	//Inicializacion de las variables para esta funcion:
	var envio = 20;
	var carroTotal = 0;
	var numProductos = 0;


	//Muestra el carrito de la compra
	for (i in productos){

		var tablaTotal = document.getElementById("tablaTotal").innerHTML;
		var preTotal = 0;


		//Cuenta el numero de productos para saber cuanto costara el transporte
		/**if (uniUser[i].value != 0){
		numProductos++;
		}


		if (uniUser[i].value != 0){

		//Modifica el css para hacer hueco a los formularios*/
		document.getElementById("todo").className = "todoSi";
		document.getElementById("menu").className = "menuSi";
		document.getElementById("divZonaCompra").className = "divZonaCompraSi";
		document.getElementById("divTotal").className = "divsSi";
		/**/ document.getElementById("divDatos").className = "divsNo";
		/**/ document.getElementById("divPago").className = "divsNo"; 

		//Habilita el boton de pedir la dirección
		document.getElementById("botonDatos").disabled = false;

		//Rellena el carro de la compra
		preTotal = precios[i] /** uniUser[i].value*/;
		carroTotal = carroTotal + preTotal;
		document.getElementById("tablaTotal").innerHTML = tablaTotal + '<tr class="proCarrito"><td>' +productos[i]+
			'</td><td>' +uniUser[i].value+ '</td><td>' +precios[i]+ '</td><td id="preTotal' +i+'" name="preTotal">' +preTotal+ '</td></tr>';
	}



/*	//Se calcula el transporte a pagar segun la cantidad de productos comprados:
	var precioTransporteAPagar;
	if (numProductos <= 2){
	precioTransporteAPagar = precioTransporte[0];
	}
	else if (numProductos <= 3){
	precioTransporteAPagar = precioTransporte[1];
	}
	else if (numProductos <= 4){
	precioTransporteAPagar = precioTransporte[2];
	}
	else if (numProductos >= 5){
	precioTransporteAPagar = precioTransporte[3];
	}*/

	//Se sacan las cuentas del transporte, del iva y el total:
	var IVA = carroTotal * 0,2;
		//Limitar a 2 los decimales a mostrar del IVA:
		IVA = IVA * 100;
		IVA = Math.floor(totalIVA);
		IVA = IVA/100;
	var totalAPagar = carroTotal + IVA + envio;
		//Limitar a 2 los decimales a mostrar del TOTAL A PAGAR:
		totalAPagar=totalAPagar*100;
		totalAPagar=Math.floor(totalAPagar);
		totalAPagar=totalAPagar/100; 

	/*var totalTransporte = precioTransporteAPagar;
	if(totalTransporte == "gratis"){
	var totalIVA = (carroTotal * IVA);
	var totalAPagar = carroTotal + totalIVA;
	}
	else{
	var totalIVA = ((carroTotal + totalTransporte) * IVA);
	var totalAPagar = carroTotal + totalTransporte + totalIVA;
	}*/

	//Se añade a la tabla el TOTAL que suma el carrito:
	tablaTotal = document.getElementById("tablaTotal").innerHTML;
	document.getElementById("tablaTotal").innerHTML = tablaTotal +
	'<tr><td> </td> <td></td><td class="preUni"><b>Transporte: </b></td><td class="preTotal"><b>' + envio + '</b></td></tr>' +
	'<tr><td> </td> <td></td><td class="preUni"><b>IVA ('+(IVA*100)+'%): </b></td><td class="preTotal"><b>' + IVA + '</b></td></tr>' +
	'<tr><td> </td> <td></td><td class="preUni"><b>Total: </b></td><td class="preTotal" id="totalAPagar"><b>' + totalAPagar + ' €</b></td></tr>';
	}


function pedirDireccion(elEvento) {
	document.getElementById("divDatos").className = "divsSi";
	/**/document.getElementById("divTotal").className = "divsNo";
	/**/document.getElementById("divPago").className = "divsNo"; 
 	document.getElementById("pagar").disabled = false;
 }



function pedirPago(elEvento) {
	/**/document.getElementById("divTotal").className = "divsNo";
	/**/document.getElementById("divDatos").className = "divsNo";
	document.getElementById("divPago").className = "divsSi";
	document.getElementById("confirmarCompra").disabled = false;
 }

 //Confirmar compra
 function compraRealizada(elEvento) {
 alert("Gracias por su compra, en 24 horas recivira su pedido\nAhora sera redirigido a la pagina de inicio.");
 window.location.reload()
 }