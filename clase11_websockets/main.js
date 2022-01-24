const express = require("express")
const { Server: HttpServer } = require("http");
const { SocketAddress } = require("net");
const { Server: IOServer } = require('socket.io')

const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
});

httpServer.listen(process.env.PORT || 3000, () => {
    console.log("SERVER ON");
})

io.on('connection', (socket) => {
    // Se ejecuta una sola vez, cuando se conecta
    // el cliente
    let now = new Date().toLocaleTimeString();
    console.log("--------------------------")
    console.log(`[${now}] Se abrió una nueva conexión !!`)
    
    // Cada vez que llega un mensaje al evento 'diego'
    socket.on("diego", data => {
        console.log(data);
        io.sockets.emit("diego", data)
    })

})