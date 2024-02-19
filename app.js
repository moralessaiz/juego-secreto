let numeroSecreto = 0;
//console.log(numeroSecreto);
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaximoIntentos = 8;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        if( numeroDeUsuario > numeroSecreto ) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos lo numeros
    if(listaNumerosSorteados.length == numeroMaximo ) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego de número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el nuevo número aleatorio
    //Inicializar el número Intentos.
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

asignarTextoElemento('h1', 'Juego de número secreto!');
asignarTextoElemento('p', 'Indica un número del 1 al 100');

//ACTIVIDAD DESAFIO 02.Funciones

/*let nota1 = 10;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function calcularPromedio(nota1, nota2, nota3, nota4) {
    let calculo = (nota1+nota2+nota3+nota4)/4;
    //console.log(calculo);
    return calculo;

} 

function verificarAprobacion(promedio) {
    return promedio >= 5 ? 'Aprobado' : 'Reprobado';
}

calcularPromedio(nota1, nota2, nota3, nota4);
verificarAprobacion();

function recibirNombre() {
    let nombre = prompt("Ingrese su nombre");
    console.log(`Hola ${nombre}`);
}

function recibirNumero(num) {
    num = document.getElementById('valorUsuario').value;
    return console.log(num * 2);
}

function recibirTresNum(a,b,c) {
    a = parseInt(prompt("Escribe un numero"));
    b = parseInt(prompt("Escribe un segundo número"));
    c = parseInt(prompt("Escribe un tercer número"));

    return alert((a+b+c)/3);
}

function mayorQue(a,b) {
    a = parseInt(prompt("Escribe un numero"));
    b = parseInt(prompt("Escribe un segundo número"));

    if( a > b) {
        return console.log(a);
    } else {
        return console.log(b);
    }
}

function multiplicarPorSiMismo(param) {
    let recibir = prompt("escriba un numero que desee doblar");
    let multi = parseInt(recibir * recibir);

    return console.log(multi);
} */

//ACTIVIDAD DESAFIO 03.Reiniciando juego

//  Ejercicio 1
/* function imc(altura, peso) {
    let calculo = (peso/altura)^2;
    return console.log(calculo);
}

imc(170, 62);

console.log('-------------------');

// Ejercicio 2
function factorial(param) {
    for (let i = 0; i < param.length; i++) {
        if(param[i]<param[i+1]) {
            const element = param[i]*param[i+1];
            console.log(element)
        } else {
            console.log('no hay mas numeros para realizar factorial')
        }
        
    }
}

factorial([1,2,3,4,5]);

console.log('-------------------');

// Ejercicio 3

function conversion(dolar) {
    let real = dolar * 4.80;
    return console.log(real);
}

conversion(1000);

console.log('-------------------');

// Ejercicio 4

function cuadrado (lado1, lado2) {
    let area = lado1 * lado2;
    let perimetro = lado1 + lado2 + lado1 + lado2;

    return console.log(`El área del cuadrado es ${area} cm y su perimetro es ${perimetro} cm`);
}

cuadrado(12, 12);

console.log('-------------------');

// Ejercicio 5


function circulo(pi, radio) {
    let area = pi * Math.pow(radio, 2);
    let perimetro = 2*pi * radio ;

    return console.log(`El área del circulo es ${area} cm y su perimetro es ${perimetro} cm`);
}

circulo(Math.PI, 10);

console.log('-------------------');

// Ejercicio 6

function tablaMulti(num) {
    for( i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

tablaMulti(5); */

// DESAFIOS LISTAS
let listaGenerica = [];
let listaDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

listaDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarLenguajes() {
    return console.log(listaDeProgramacion);
}

function lenguajesInversos() {
    listaDeProgramacion.reverse();
    console.log(listaDeProgramacion);
}
let suma = 0;
function promedioNumeros(arregloNumeros) {
    for (let i = 0; i < arregloNumeros.length; i++) {
        suma += arregloNumeros[i];
        //console.log(suma);
    }

    var promedio = suma / arregloNumeros.length;
    console.log(promedio);
}

function numeroGrandePequeno(arregloNumeros) {
    for ( let i = 0; i < arregloNumeros.length; i++ ) {
        let maximo = Math.max(...arregloNumeros);
        let min = Math.min(...arregloNumeros);

        console.log(maximo, min);
    }   
}

let adicion = 0;
function sumaElementos(arregloNumeros) {
    for (let i = 0; i < arregloNumeros.length; i++) {
        adicion += arregloNumeros[i];
        console.log(adicion);
    }
}



mostrarLenguajes();
lenguajesInversos();
promedioNumeros([1,2,3,4,5]);
numeroGrandePequeno([1,2,3,4,5]);
sumaElementos([1,2,3,4,5]);