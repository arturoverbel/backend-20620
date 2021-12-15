const express = require("express")
const { Server: HttpServer } = require("http")
const { Server: IOServer } = require("socket.io")

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
var numUsers = 0;

app.use(express.static('./public'))

const messages = []


httpServer.listen(3000, function() {
    console.log("Server running...")
})

io.on("connection", (socket) => {
    numUsers++;
    io.emit("stats", { numUsers })
    console.log("Users: ", numUsers)
    socket.emit('messages', messages)

    socket.on('new-message', data => {
        data.time = new Date().toLocaleTimeString();
        messages.push(data);
        io.sockets.emit('messages', [data])
    })

    socket.on('disconnect', () => {
        numUsers--;
        io.emit("stats", { numUsers })

        console.log("Users: ", numUsers)
    })
})

