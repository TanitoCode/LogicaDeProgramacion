//Variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 10 por favor: "));

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


/*
1-Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("Bienvenido a la consola");

2-Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = "Cristian";
console.log('Hola '+ nombre);
3-Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
alert(`Hola ${nombre}`);

4-Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
lenguajePreferido = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log('Mi lenguaje preferido es: '+ lenguajePreferido);

5-Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 5;
let valor2 = 7;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

6-Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
resultado = valor2 - valor1;
console.log(`La diferencia entre ${valor2} y ${valor1} es igual a ${resultado}.`);

7-Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
edad = prompt("Ingrese su edad");
if (edad >= 18){
    console.log("Usted es mayor de edad");
} else{
    console.log("Usted es menor de edad");
}

8-Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = prompt("Ingrese un numero");

if(numero > 0){
    console.log("Numero positivo")
} else if (numero < 0) {
    console.log("Numero negativo")
} else {
    console.log("Numero es cero")
}

9-Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let contador = 0;
while (contador < 10){
    
    contador++;
    console.log(contador);
}


10-Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
nota = 5;

if(nota >= 7){
    console.log("Aprobado")
}else{
    console.log("Desaprobado")
}

11-Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio)

12-Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numeroAleatorio = Math.floor(Math.random()*10)+1;
console.log(numeroAleatorio)

13-Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

let numeroAleatorio = Math.floor(Math.random()*1000)+1;
console.log(numeroAleatorio)
*/




