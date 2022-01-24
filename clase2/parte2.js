// MUTABILIDAD

const array = ["Ezequiel", "Andres", "Sergio", "Julian Alvarez"]
const numero = 32;

console.log(array);

array.push("Lautaro");

console.log(array)

const obj = {
    nombre: "Andres",
    apellido: "Montero"
}

obj.nombre = "El griego";

console.log(obj);




let variable1 = [1, 2, 3];
let variable2 = [4, 5, 6];

variable1 = variable2;

console.log(variable1)
console.log(variable2)

variable2.push(34)

console.log(variable1)
console.log(variable2)