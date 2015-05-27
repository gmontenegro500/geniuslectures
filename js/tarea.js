// ======== Calcular un numero primo =========

function es_primo(x){

	var cont = 0;
	
	for(var i = 1; i <= x; i++){
		if(x % i == 0){
			cont = cont + 1;
		}
	}
	if(cont == 2){
		return(true);
	}else{
		return(false);
	}
}

// ============== Primer bloque ===========================
// ============== Lista de numeros primos =================

$('#clicked-button').click(function () {
	$('#wrap').removeClass('contenido').addClass('contenido-top');

	var x = $('#entrada').val();
	var lista = "";	
	
	for(var i = 1; i <= x; i++){
		
		if(es_primo(i)){
			lista = lista + i + ", ";
		}
	} 
	$('#respuesta').html(lista).show(1000);

});

// ============== Segundo bloque ===========================
//=============== Calcule cuantos numeros primos existen ===============

$('#clicked-button-2').click(function () {
	$('#wrap-2').removeClass('contenido').addClass('contenido-top');

	var x = $('#entrada-2').val();
	var lista = 0;
	
	
	for( var i = 1; i <= x; i++){
		
		if(es_primo(i)){
			lista = lista + 1;
		}
	
	} 
	$('#respuesta-2').html("Existen : " + lista +" numeros primos menores o iguales que su numero ---> " +x).show('fast');

});

// ========== Es la cantidad de numeros primos un numero primo? =================

$('#clicked-button-3').click(function () {
	$('#wrap-3').removeClass('contenido').addClass('contenido-top');

	var x = $('#entrada-3').val();
	var lista = 0;
	
	
	for( var i = 1; i <= x; i++){
		
		if(es_primo(i)){
			lista = lista + 1;
		}
	}
		if(es_primo(lista)){
			$('#respuesta-3').html("Existen : " + lista +" numeros primos menores o iguales que su numero ---> " +x+ "<p>El numero: "+lista+ " ES un numero primo<p>").show('fast');
		}else{
			$('#respuesta-3').html("Existen : " + lista +" numeros primos menores o iguales que su numero ---> " +x+ "<p>  El numero: "+lista+ " NO es un numero primo</p>").show('fast');
		}

});

// ========== seciencia fibonacci =================

$('#clicked-button-4').click(function(){
	$('#wrap-4').removeClass('contenido').addClass('contenido-top');

	var x = $('#entrada-4').val();
	var x1 = 1;
	var x2 = 1;
	var aux;
	
	$('#respuesta-4').html("Fibonacci: 1, 1, ").show(1000);
		
	while(x2 <= x){	
		aux = x2;
		x2 = x2 +x1;
		x1 = aux;

		$('#respuesta-4').append(x2+", ");	
	}	
});

// =============== Arreglo ordenado de menor a mayor ===========

$('#clicked-button-5').click(function(){
	$('#wrap-5').removeClass('contenido').addClass('contenido-top');
	
	// leer las 4 entradas por pantalla y las almacena en un arrego de 4 posiciones
	
	var arreglo = [];
	var aux;
	
	for ( var i = 0; i< 4; i++){   // GERMAN ESTE FOR ES PARA LEER LOS DATOS DE LA PANTALLA
		arreglo[i] = parseInt($('#entrada-5' + (i + 1)).val());
	}
	
	for ( var i = 0; i< 4; i++){ 
		for ( var j = i +1; j< 4; j++){
			if(arreglo[i] < arreglo[j]){
				// no hacemos nada
			}else{
				aux = arreglo[i];
				arreglo[i] = arreglo[j];
				arreglo[j] = aux;
			}
		}		
	}
	
	console.debug(arreglo);
	
	$('#respuesta-5').html("El arreglo ordenado es " + arreglo).show(1000);
		
});

// =============== Arreglo ordenado de mayor a menor ===========

$('#clicked-button-6').click(function(){
	$('#wrap-6').removeClass('contenido').addClass('contenido-top');
	
	// leer las 4 entradas por pantalla y las almacena en un arrego de 4 posiciones
	
	var arreglo = [];
	var aux;
	
	for ( var i = 0; i< 4; i++){   // GERMAN ESTE FOR ES PARA LEER LOS DATOS DE LA PANTALLA
		arreglo[i] = parseInt($('#entrada-6' + (i + 1)).val());
	}
	
	for ( var i = 0; i< 4; i++){ 
		for ( var j = i +1; j< 4; j++){
			if(arreglo[i] > arreglo[j]){
				// no hacemos nada
			}else{
				aux = arreglo[i];
				arreglo[i] = arreglo[j];
				arreglo[j] = aux;
			}
		}		
	}
	
	console.debug(arreglo);
	
	$('#respuesta-6').html("El arreglo ordenado es " + arreglo).show(1000);
		
});





