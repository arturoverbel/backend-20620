


/**
 * hace lo mismo que esto:: 
 *
const ejecutar = function(variableFuncion) {
    let respuestaFunction = variableFuncion()

    return respuestaFunction;
}
*/


const ejecutar = unaFunction => unaFunction()

const saludar = () => console.log("Hola Gabriel Cavallo");

ejecutar(saludar);

ejecutar(function() {
    console.log("Me llamo Gaston")
})

ejecutar(() => console.log("Buena por los tutores :) "))


// Optimizar funcion ejecutar con argumentos
console.log("--------------------------------------------")

const ejecutar2 = (unaFunction, params) => unaFunction(params)
const hiStuden = nombre => console.log(`Hola ${nombre} !! ^-^`);

ejecutar2(hiStuden, "Sergio")
ejecutar2(hiStuden, "Ezequiel")
ejecutar2(hiStuden, "Cliver")
ejecutar2(hiStuden, "Luciano")