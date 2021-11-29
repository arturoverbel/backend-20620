const express = require("express")

const app = express()
app.listen(process.env.PORT || 3000)

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/saludo', (request, response) => {
    response.send(`
        <h2>Hola Ionatan !!!</h2>
        <script> alert("asdasd");</script>
    `)
})

app.get('/api/usuarios', (req, res) => {
    res.send([
        {id: 1, nombre: 'Ionatan'},
        {id: 2, nombre: 'Rolando'}
    ])
})

const ciudades = [
    {id: 1,  nombre: 'Bogota', pais: 'colombia'},
    {id: 2,  nombre: 'Buenos Aires', pais: 'argentina'},
    {id: 3,  nombre: 'Medellin', pais: 'colombia'},
    {id: 4,  nombre: 'Cordoba', pais: 'argentina'},
]

app.get('/api/ciudad', (req, res) => {
    console.log("GET Peticion recibida")

    if(Object.entries(req.query).length > 0 ) {
        console.log("asdasd");
        let ciudadesFiltradas = ciudades.filter( c =>
            c.pais == req.query.pais
        )

        res.json(ciudadesFiltradas)
    } else {
        res.json(ciudades)
    }
})

app.get('/api/ciudad/:id', (req, res) => {
    console.log("GET Peticion recibida")

    let id = req.params.id;
    let ciudad = ciudades.find(c => c.id == id)

    res.json(ciudad)
})

app.post('/api/ciudad', (req, res) => {
    console.log("POST request");

    const mensaje = req.body;
    console.log(mensaje);

    let max = 0;
    for(const c of ciudades) {
        if(c.id > max) max = c.id
    }
    max++;

    const newCity = {
        id: max,
        nombre: mensaje.nombre,
        pais: mensaje.pais
    };
    ciudades.push(newCity)

    return res.send(newCity);
})

app.put('/api/ciudad/:id', (req, res) => {
    console.log("PUT request");

    const mensaje = req.body;
    
    res.send({
        result: 'ok',
        id: req.params.id,
        nuevo: req.body
    });
})

app.delete('/api/ciudad/:id', (req, res) => {
    console.log("DELETE request");

    // DELETE FROM DB

    res.send({
        result: 'ok',
        id: req.params.id
    });
})