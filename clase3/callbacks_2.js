

function escribirYLogear(texto, callback) {

    // Proceso de escritura
    console.log("Escribiendo texto ...");
    console.log(texto);

    callback("Se ha escrito el texto.");
}



escribirYLogear("Registrando 71 estudiantes en la asistencia", function(mensaje) {
    const fecha = new Date().toTimeString();
    console.log(`${fecha} registrando en la DB -- ${mensaje}`);

})
