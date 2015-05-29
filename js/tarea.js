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
	
	for ( var i = 0; i< 4; i++){ // recorrer el arreglo completo i = 0
		for ( var j = i +1; j< 4; j++){ // recorre el arreglo desde la posicion i+1 (i=0, j=1) // (i=0,j=2)//(i=0, j=3)//(i=1, j=2)
			if(arreglo[i] < arreglo[j]){ // comparar si el arreglo[i] > arreglo [j] (i=0, j=1) // (i=0, j=2)
				// no hacemos nada
			}else{ // en caso de que no sea mayor
				aux = arreglo[i]; // asignamos el valor de arreglo[i] a aux (i=0, j=1)// (i=0, j=2)
				arreglo[i] = arreglo[j]; // arreglo[i] va a tomar el valor de arreglo[j]// (i=0, j=2)
				arreglo[j] = aux; // arreglo[j] toma el valor del arreglo aux (i=0, j=1)//
			}// termina el else 
		}// termina el segundo for interno (i=0, j=0)		
	}
	
	console.debug(arreglo);
	
	$('#respuesta-6').html("El arreglo ordenado es " + arreglo).show(1000);
		
});

// =============== Numero Factorial ===========

$('#clicked-button-7').click(function(){
	$('#wrap-7').removeClass('contenido').addClass('contenido-top');

   var x = parseInt($('#entrada-7').val());
   var total = 1; 
   var aux;
   aux = x;

   // x=5

   for(var i=0; i< x; i++){
   
   		total = total * aux; 
   		aux = aux - 1;

   		//console.debug(total);
   		console.debug('el total: '+total);
   		console.debug('Entramos al for por: '+i);
   		console.debug('este es el valor de aux: '+aux+'\n\n');

   		
   }
   $('#respuesta-7').html('El numero factorial es: '+total).show(1000);
});

// =============== suma de numeros ===========

function numero (x){

	var x1 = x%10;
	x = Math.floor(x/10);
	var x2 = x%10;
	x = Math.floor(x/10);
	var x3 = x%10;
	x = Math.floor(x/10);

	console.debug(x1*1000+x2*100+x3*10+x);
	
}

function comp(x, y){

	if(x>y){
		console.debug('El numero :'+x+ ' es mayor que el numero: '+y);
	}
	if(y>x){
		console.debug('El numero :'+y+ ' es mayor que el numero: '+x);
	}
	if(y==x){
		console.debug('El numero :'+x+ ' es igual que el numero: '+y);
	}
}

// esta funcion solo funciona para numeros de 5 digitos
function capicua(x){
	var aux = 0;
	var inpnum = x;
	var dec = 10000;
	var total = 0;

	for(var i=0; i<5; i++){
		
		aux = (x%10) * dec;
		total = total + aux;
		x = Math.floor(x/10);
		dec = Math.floor(dec/10);
	}
	
	if (inpnum == total) {
		return('SI es capicua!! Su numero es: '+inpnum+' y el inverso del numero es: '+total);
	}else{
		return('NO es capicua!! Su numero es: '+inpnum+' y el inverso del numero es: '+total);
	}

//function capicua(x){
	// var x1 = x%10;
	// x = Math.floor(x/10);
	// var x2 = x%10;
	// x = Math.floor(x/10);
	// var x3 = x%10;
	// x = Math.floor(x/10);
	// var x4 = x%10;
	// x = Math.floor(x/10);

	// var cap = x1*10000+x2*1000+x3*100+x4*10+x;
	// console.debug(cap);
	//}

}

function reciduo(x){
	var total = x%10;
	console.debug(total);
}

function parim(x){

	if(x%2==0){
		return('Este numero es par');
	}else{
		return('Este numero es impar');
	}
}

function cantidad(x){

	var count = 1 ;

	while(x>9){
		count = count +1;
		x = Math.floor(x/10);
	}
	return count;
}
