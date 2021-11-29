const http = require('http')
​
​
const server = http.createServer((request, response) => {
    let now = new Date ()
    let nowH = now.getHours()
    console.log(nowH)
    let firulais =""
    if (nowH>6 && nowH<=12) {
        firulais ="Buenos días!"
    } else if(nowH >=13 && nowH<=19){  
        firulais ="Buenas tardes"
    }
    else {
        firulais ="Buenas noches"
    }
    response.end(firulais)
});
​
​
const connect = server.listen(8080, () => {
    let port = connect.address().port;
​
    console.log(`Escuchando por puerto ${port}`)
})