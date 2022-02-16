const express = require('express')

const app = express()
const PORT = parseInt(process.argv[2]) || 8080

app.get('/data', (req, res) => {
    console.log(`port: ${PORT}, ${Date.now()}`)
    res.send(`Server express
        <span style='color:violet;'>(Nginx)</span> on ${PORT}
        <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}
    `)
})

app.listen(PORT, err => {
    if(err) console.log(err)

    console.log(`Server express ${PORT} - PID ${process.pid}`)
})