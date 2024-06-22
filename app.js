//Variables
let numeroSecreto = 5;
let numeroUsuario;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor: ");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición 
        alert(`Acertaste, el número es: ${numeroUsuario} lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        console.log('Resultado de la comparacion ', numeroUsuario == numeroSecreto);
    } else {
        //No acertamos
        if (numeroUsuario > numeroSecreto) {
            alert("El numero secreto es menor");
        } else {
            alert("El numero secreto es mayor");
        }

        //Incrementamos el contador cuando no acierta
        intentos++;
       //palabraVeces = 'veces';
       if (intentos > 3) {
        alert(`LLegaste al numero maximo de ${maximosIntentos} intentos`);
        break
       }
    }
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
*/

// let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
// let soma = 0;
// let contador = qtdNumeros;

// while(contador > 0){
//     let numero = parseInt(prompt('Digite el numero:'));
//     soma += numero;
//     contador--;
// }

// let promedio = soma / qtdNumeros;

// alert(promedio);


/* Ejercitacion segunda parte 
Desafios

1-Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
2-Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
3-Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
4-Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.


// Ejercicio 1
contador = 1;

while(contador <= 10){
alert(`Numero ${contador}`)
contador++;
};

// Ejercicio 2
cont = 10;

while(cont >= 0){
    alert(`Numero ${cont}`)
    cont--;
};

// Ejercicio 3
cuentaProgresiva = prompt("Ingrese un numero")
contador2 = 0;

while(contador2 <= cuentaProgresiva){
    alert(`Numero ${contador2}`);
    contador2++;
}

// Ejercicio 4
cuentaRegresiva = prompt("ingrese un numero para la cuenta regresiva")

while(cuentaRegresiva >= 0){
    alert(`Numero ${cuentaRegresiva}`)
    cuentaRegresiva--;
}
*/