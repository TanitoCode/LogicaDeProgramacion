//Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor: ");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición 
    alert(`Acertaste, el número es: ${numeroUsuario}`);
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