// clase06_coderhouse_juliana

const express = require("express")
const fs = require("fs")
const moment = require("moment")

const app = express()
const PORT = process.env.PORT || 5000 
let visitas = 0;
try {
    let data = fs.readFileSync("visitas");
    visitas = Number(data);
} catch (e) { console.log("No file")}

app.listen(PORT)

app.get('/', (request, response) => {
    response.send(`
        <h1 style='color:blue;'>
            Bievenidos a Express
        </h1>
    `)
})

app.get('/visitas', (request, response) => {
    visitas++;
    fs.writeFileSync("visitas", visitas.toString() )
    response.send(`Las visitas son ${visitas}`)
})

app.get('/fyh', (request, response) => {
    response.send({
        'fyh': moment().format("M/D/YYYY H:mm:ss")
    })
})