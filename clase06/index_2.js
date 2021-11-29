const http = require('http')
const moment = require('moment')

const server = http.createServer((request, response) => {

    const now = new moment()

    console.log("Someone request page. " + now.format('h:mm:ss a'));

    response.end("<h1>Colombia clasifico a Qatar</h1>")
});


const connect = server.listen(8080, () => {
    let port = connect.address().port;

    console.log(`Escuchando por puerto ${port}`)
})

// http://127.0.0.1:3000/
// http://192.168.0.11:3000/