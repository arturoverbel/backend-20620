function dividir(dividendo, divisor) {

    const promesa = new Promise((resolve, reject) => {
        if(divisor == 0) {
            reject('No se puede divir por cero (0) DENY')
        } else {
            resolve(dividendo / divisor);
        }
    })

    return promesa;
}

const resuelto = param => console.log(`El resultado es ${param}`)
const errorHandler = error => console.error(`error: ${error}`)

dividir(10, 0)
    .then(resuelto)
    .catch(errorHandler)

console.log("Este log !!!!!!!!!")