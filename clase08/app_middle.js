const express = require('express')
const { Router } = express

const app = express();
const router = express.Router();

// MIDDLEWARES
app.use(function(req, res, next) {
    console.log("Time: ", Date.now())
    next()
})

function validateTokenMid(req, res, next) {
    req.dato1 = "datos_controller";
    console.log(req.headers)
    if(req.headers.token == 'secret'){ 
        next()
    } else {
        throw "Error TOKEN"
    }    
}

function addDataMid(req, res, next) {
    console.log("LA DATAAAA")
    next()
}

router.use(function (req, res, next) {
    console.log("Solo se ejecuta en el router")
    next()
})



// RUTAS

router.get('/data', (req, res) => {
    res.send("LA DATAA");
})

app.get('/api', (req, res) => {
    console.log(req.dato1);
    throw "asdasd"
    res.send("Response DONE")
})

app.get('/edades', validateTokenMid, addDataMid, (req, res) => {
    console.log(req.dato1)
    res.json([19, 23])
})

app.get('/nombres', validateTokenMid, (req, res) => {
    console.log(req.dato1)
    res.json(['Mauro', 'Josefina'])
})

app.use('/router', router)


app.listen(3000)

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(400).send("Estamos trabajando en darle solución ")
})