// Declaracion 1
function sumar(a) {
    let resultado = a + 3;

    return resultado;
}

// Declaracion 2
const sumar2 = function(a) {
    let resultado = a + 3;

    return resultado;
}

// Declaracion 3
const sumar3 = (a) => {
    let resultado = a + 3;

    return resultado;
}

// Declaracion 4
const sumar4 = a => {
    let resultado = a + 3;

    return resultado;
}

// Declaracion 5
const sumar5 = a => a + 3;


let resultado  = sumar (3);
let resultado2 = sumar2(3);
let resultado3 = sumar3(3);
let resultado4 = sumar4(3);
let resultado5 = sumar5(3);

console.log(`El resultado es ${resultado}`);
console.log(`El resultado2 es ${resultado2}`);
console.log(`El resultado3 es ${resultado3}`);
console.log(`El resultado4 es ${resultado4}`);
console.log(`El resultado5 es ${resultado5}`);


const promediar = (a, b) => (a + b) / 2;
let promedio = promediar(10, 20);
console.log(`El promedio es ${promedio}`);


const getPersona = () => ({nombre: 'R2', edad: 26});
let persona = getPersona();

console.log(persona)