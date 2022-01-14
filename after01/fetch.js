import fetch from 'node-fetch';

const response = fetch('https://api.github.com/users/giasdasdthub');

console.log("Hola hola")

response.then((data) => {
    
    let respuesta = data.json();

    respuesta.then((data2) => {
        console.log(data2)
    })

}).catch((error) => {
    console.log("ERROR")
    console.log(error)
})

console.log(response);

console.log("FIN")