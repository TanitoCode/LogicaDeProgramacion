//Variables
let numeroSecreto = 8;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor: ");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición 
    alert(`Acertaste, el número es: ${numeroUsuario}`);
    console.log('Resultado de la comparacion ', numeroUsuario == numeroSecreto );
}else {
    //No acertamos
    alert('Lo siento, no acertaste el número');
}


/* Ejercitacion primera parte
alert('¡Bienvenida y bienvenido a nuestro sitio web!"');

let nombre = "Luna";
let edad = 25;
let numeroDeVentas= 50;
let saldoDisponible= 1000;
alert('¡Error! Completa todos los campos');
let mensajeDeError = '¡Error! Completa todos los campos';
alert(mensajeDeError);

nombre = prompt('Ingresa tu nombre de usuario: ');
edad = prompt('Ingresa tu edad: ');

if (edad >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!")
}

 */


/* Ejercitacion segunda parte 
Desafíos:

1-Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
2-Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
3-Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
4-Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
5-Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/

// Ejercicio 1
dia = prompt('Que dia de la semana es: ');

if( dia == 'sabado' || dia == 'domingo'){
    alert("Buen finde")
};

// Ejercicio 2
numero = prompt("Ingresa otro numero: ")

if(numero > 0){
    alert("El numero es positivo")
}if (numero < 0) {
    alert("El numero es negativo")
} else {
    alert('El numero es 0')
}

// Ejercicio 3
puntuacion = prompt("Ingresa la puntuacion del juego");

if( puntuacion >= 100){
    alert("Felicidades has ganado")

}else{
    alert("Intentalo nuevamente para ganar")
}

// Ejercicio 4
let saldoUsuario = 2500;
alert(`Su saldo es: ${saldoUsuario}`)

// Ejercicio 5
nombre = prompt("Ingresa tu nombre");
alert(`Bienvenido ${nombre}`)