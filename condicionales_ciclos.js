var bool = false;

if(bool) { //Si la condición se cumple
    console.log("Variable verdadera - true");
} else { //si no se cumple
    console.log ("Variable falsa - false");
}

//a === b; a !== b; (diferente) a < b; a <= b; a>=b

var n = 10;
if(n >= 15) {
    // si se cumple la condicional
    conmsole.log("Número mayor o igual a 15");
} else {
    //si no se cumple con la condicional
    console.log ("Número menor a 15");
}

if(n >= 15) {
    console.log("El num es mayor o igual a 15");
} else if(n <5) {
    console.log("El num es menor o igual a 5");
} else {
    console.log("El num es entre 5 y 15");
}

var m = 20;
if(m >= 15) { //20 >= 15
    console.log("M es mayor o igual a 15");
} else {
    console.log("M es menor a 15");
}

var estalloviendo = false;
if(!estalloviendo) {//significa No -> esta lloviendo sea false
    console.log("No está lloviendo, salgamos");
}

var temperatura = 15;
if(temperatura >= 18 && !estalloviendo) {//ambas condicionales deben de cumplirse
console.log("!Excelente día para caminar en el parque!");
} else {
    console.log("Salgamos después");
}

if(temperatura >=18 || !estalloviendo) { //una u otra debe de cumplirse
    console.log("Salgamos de todas formas");
}

//CICLOS - BUCLE

/*
i = 0
0 < 3
Hola 0
------
i = 1
1 < 3
Hola 1
-------
i = 2
2 < 3
Hola 2
------
i = 3
3 < 3
*/

for(var i = 0; i< 3; i++) {
    console.log("Hola "+i);
} 

/*
inicio = 0
final = 5
0 < 5
Adios 05
inicio = 1
final = 4
----
1 < 4
Adios 14
inicio = 2
final = 3
----
2 < 3
Adios 23
inicio = 3
final = 2
----
3 < 2
*/

var inicio = 0;
var final= 5;

while(inicio < final) {
    console.log("Adios "+inicio + final);
    inicio++;
    final--;
}

function hola() {
    console.log("Hola Mundo");
}

function holaPersona(nombre){//nombre= "Elena de troya"
    console.log("Hola "+nombre);//Hola Elena de troya
}

hola();
hola();
hola();

holaPersona("Elena de troya");
holaPersona("Juana de Arco");

if(15 % 5 == 0) {
    console.log("Multiple de 5");
}

/*RETO 1*/
for(var i=1; i<=100; i++){
    console.log(i);

if(i > 95) {
    console.log("Ya casi llegamos a 100");
}
}

/*RETO 2*/ 
for(var i = 100; i>= 1; i--) {
    console.log(i);

    if(i % 2 === 0) {
        console.log("Ese era par");
    }
}

