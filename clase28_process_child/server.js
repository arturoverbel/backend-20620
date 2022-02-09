const http = require('http')

const calculo = () => {
    let sum = 0;
    for(let i = 0; i < 6e9 * 6e9; i++) {
        sum += i
    }

    return sum
}

let visitas = 0

const server = http.createServer()
server.on('request', (req, res) => {
    let { url } = req

    if(url == '/calculo') {
        const sum = calculo()
        res.end(`La sum es ${sum}`)
    }
    else if(url == '/') {
        res.end(`Ok ${++visitas}`)
    }

})

server.listen(8080, err => {
    if(err) throw new Error("error server " + err)
    console.log("Running server...")
})