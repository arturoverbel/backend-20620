function dividir(dividendo, divisor, callback) {

    if(divisor == 0) {
        callback("Error, divisor no puede ser 0")
    } else {
        let r = dividendo / divisor
        console.log(`El resultado es: ${r}`)
        callback(null)
    }

}

const callback = (error) => {
    if (error) {
        console.log(error);
    }
}

dividir(4, 2, callback)

console.log("Holaaa holaaa")