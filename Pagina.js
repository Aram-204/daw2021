function limpiarFormulario(){
	document.getElementById("miform").reset();
}

var DefinirMenor = function(n1,n2,n3){
	var N1 = parseFloat(document.getElementById("N1").value);

	var N2 = parseFloat(document.getElementById("N2").value);

	var N3 = parseFloat(document.getElementById("N3").value);

	var resultado = Math.min (N1, N2, N3);

	return "El número menor es el "+resultado;
}



function limpiarForm(){
	document.getElementById("Miform").reset();
}

var Convercion = function(n1){
	var CM = parseFloat(document.getElementById("CM").value);

	var Pul = (CM * 0.39);

	return CM+" centímetros equivalen a "+ Pul+ " Pulgadas";
}

function Climp(){
	document.getElementById("miForm").reset();
}

var Cambio = function(n1){
	var Mts = parseFloat(document.getElementById("Mts").value);

	var Yar = Mts * 1.094;

	return Mts+" Metros equivalen a "+ Yar+" Yardas";
}