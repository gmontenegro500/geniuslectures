
// for es un ciclo para cuando sabes exactamente cuantas vueltas tienes que dar
//	while es un ciclo para cuando no lo sabes


function fibonacci(){
	var x1 = 1;
	var x2 = 1;
	var aux;
	
		console.debug(x1);
		console.debug(x2);
	
	while(x2 < 100){	
		aux = x2;					
		x2 = x2 +x1;				
		x1 = aux;					

		console.debug(x2);
	}
}

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

	// Calcule cuantos numeros primos existen

$('#clicked-button-2').click(function () {
	$('#wrap-2').removeClass('contenido').addClass('contenido-top');

	var x = $('#entrada-2').val();
	var i;
	var lista = 0;
	
	
	for( i = 1; i <= x; i++){
		
		// a continuacion verificamos si i es primo
		var j;
		var cont = 0;
		
		for(j = 1; j <= i; j++){
			if(i % j == 0){
				cont = cont + 1;
			}
		}
		if(cont == 2){
			lista = lista + 1;
		}	
	} 
	$('#respuesta-2').html("Existen : " + lista +" numeros primos menores o iguales que su numero ---> " +x).show('fast');

});

	// Es la cantidad de numeros primos un numero primo?

$('#clicked-button-3').click(function () {
	$('#wrap-3').removeClass('contenido').addClass('contenido-top');

	var x = $('#entrada-3').val();
	var i;
	var lista = 0;
	
	
	for( i = 1; i <= x; i++){
		
		// a continuacion verificamos si i es primo
		var j;
		var cont = 0;
		for(j = 1; j <= i; j++){
			if(i % j == 0){
				cont = cont + 1;
			}
		}
		if(cont == 2){
			lista = lista + 1;
		}	
	}
	//final
	
	var k;
	var cuenta = 0;

	for(k=1; k <= lista; k++){
		if(lista % k == 0){
			cuenta = cuenta + 1;
		}
	}
	if(cuenta == 2){	
		$('#respuesta-3').html("Existen : " + lista +" numeros primos menores o iguales que su numero ---> " +x+ "<p>El numero: "+lista+ " ES un numero primo<p>").show('fast');
	} else{
		$('#respuesta-3').html("Existen : " + lista +" numeros primos menores o iguales que su numero ---> " +x+ "<p>  El numero: "+lista+ " NO es un numero primo</p>").show('fast');
	}

});