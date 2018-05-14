function NavigationBar(name){ //Barra Navegacion
	//CAMBIA CLASE ACTIVA
	//Borra todas las clases
	document.getElementById("Inicio").classList.remove("active");
	document.getElementById("Prueba1").classList.remove("active");
	document.getElementById("Prueba2").classList.remove("active");
	document.getElementById("Prueba3").classList.remove("active");
	//Añade la clase
	document.getElementById(name).classList.add("active");
	
	
	//CAMBIA AL DIV ACTIVO
	//Ocultamos todos los div
	document.getElementById("DivInicio").style.display = "none";
	document.getElementById("DivPrueba1").style.display = "none";
	document.getElementById("DivPrueba2").style.display = "none";
	document.getElementById("DivPrueba3").style.display = "none";
	//Visualizamos el Div
	var ID = document.getElementById("Div"+name);
	ID.style.display = "block"

	
	
}