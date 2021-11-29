
function gritarNombre(nombre) {

    const restoDeFrase = " !!!! ";

    return function() {
        console.log("Holaaa " + nombre + restoDeFrase);
    }

}

const gritarMicael = gritarNombre("Micael");
const gritarDavid = gritarNombre("David");

gritarMicael();
gritarDavid();

