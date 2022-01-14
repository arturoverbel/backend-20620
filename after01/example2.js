function getUser() {

    return new Promise(function(resolve, reject) {
        let user
        setTimeout(() =>{
            user = {name: "Fernanda", lastName: "Palacios"}
            resolve(user)
        }, 3000)
    })
}

function getCatalogo() {
    
    return new Promise(function(resolve, reject) {
        let catalogo;
        setTimeout(() => {
            catalogo = {id: 1, name: "Espadas lasers"}
            resolve(catalogo)
        }, 6000)
    })
}



getUser().then((user) => {
    console.log('User', user)
}).catch(error => console.log('Error', error))

getCatalogo().then((catalogo) => {
    console.log('Catalogo', catalogo)
}).catch(error => console.log('Error', error))

console.log('Hola ejecutate primero')