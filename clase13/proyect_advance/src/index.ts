/**
 Compilar 
  ./node_modules/.bin/tsc ./index.ts
 
Inicializar

 
 */

import * as operaciones from './libs/operaciones'

const mensaje:string = "Gracias Gaston !!!";
console.log(mensaje);

let num1:number = 10, num2:number = 5;


console.log(`La suma de ${num1} y ${num2} es ${operaciones.sumar(num1,num2)}`);