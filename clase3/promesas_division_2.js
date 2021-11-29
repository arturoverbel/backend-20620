
function dividir(dividendo, divisor) {

    return new Promise((resolve, reject) => {
        if(divisor == 0) {
            reject('No se puede divir por cero (0) DENY')
        } else {
            resolve(dividendo / divisor);
        }
    })
}

const resuelto = param => { 
    console.log(`El resultado es ${param}`)
    return param
}

const errorHandler = error => console.error(`error: ${error}`)

dividir(10, 5)
    .then(resuelto)
    .then(param => {
        param = param * 2;
        console.log("El param es: " + param)
    })
    .then(param => {
        console.log("Al fin se terminó la división !! ")
    })
    
    .catch(errorHandler)

console.log("Este log !!!!!!!!!")