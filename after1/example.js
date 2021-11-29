function traerUsuario() {

    return new Promise((resolve, reject) => {
        console.log("-------------------------------------")
        console.log("Vamos a traer los datos del usuario")
        console.log("Trayendo información del usuario")
        
        const user = {nombre: "David", apellido: "Vogel"}
        let f = 4 / 56;
        let r = 209128 / 123123;
        console.log("Tenemos la info del usuario")
        if(user == null) reject("Error")
        resolve(user);
    })
}

const r = traerUsuario()
    .then((r) => console.log(r))
    .catch((error) => console.log(error))

console.log(r)
console.log("----------------Resultados-----------")
