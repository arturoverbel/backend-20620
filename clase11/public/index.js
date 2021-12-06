const socket = io();


// Escuchando el evento 'diego'
socket.on("diego", data => {
    console.log(data);
    $("#chat").append(data + "<br>")
})

$("#msn").change(emitir);
$("#btn").click(emitir);


// Emite mensaje al servidor
function emitir() {
    let now = new Date().toLocaleTimeString();
    let msn = `[${now}] ` + $("#msn")[0].value;

    socket.emit("diego", msn);

    $("#msn")[0].value = "";
}


