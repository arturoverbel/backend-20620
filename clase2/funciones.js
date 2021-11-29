
function saludar(nombre) {
    console.log("Hola " + nombre + " !!!");
}

saludar("Carlos");


// Funciones Anonimas
let foo = function() {
    console.log("Holaaa a todos");
}

let aa = function(varFunction) {
    varFunction();
}

aa(foo);