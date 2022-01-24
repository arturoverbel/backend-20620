const express = require('express')
const fs = require('fs')
const { addAbortSignal } = require('stream')

const app = express()

// CREANDO MOTOR DE PLANTILLA
app.engine('.cte', function(filePath, options, callback) {
    fs.readFile(filePath, function(err, content) {
        if(err) return callback(new Error(err))

        const rendered = content.toString()
                            .replace('^^titulo$$', options.titulo + '')
                            .replace('^^paginas$$', options.paginas + '')
                            .replace('^^autor$$', options.autor + '')
                            .replace('^^libro$$', options.libro + '')
        return callback(null, rendered)
    })
})
app.set('views', './views')
app.set('view engine', 'cte')
// *******************************************************

app.get("/cte1", (req, res) => {
    const obj = {
        titulo: "Harry Potter",
        paginas: 234,
        autor: "J.K. Rowling",
        libro: "El caliz de Fuego"
    }
    res.render('plantilla1', obj)
})

app.listen(3000)
