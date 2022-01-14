let username = sessionStorage.getItem("username")
if (!username) {
    username = prompt("Ingrese nombre de usuario:")
}
$("#username").html(username)

const socket = io.connect()

socket.on('messages', data => {
    console.log(data)
    render(data);
})

socket.on('stats', data => {
    $("#stats").html(data.numUsers)
})

function render(data) {
    data.forEach(info => {
        $("#messages").prepend(`
            <div>
            [${info.time}] <strong>${info.author}</strong>
                <em>${info.text}</em>
            </div>
        `)
    })
}

$('#myForm').submit(e => {
    e.preventDefault();

    const mensaje = {
        author: username,
        text: $("#texto").val()
    }

    socket.emit('new-message', mensaje)
});

