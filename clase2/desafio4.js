class Contador {
    constructor (nombre){
        this.nombre = nombre
        this.contador = 0
    }
    static contadorGlobal = 0

    obtenerResponsable(){
        return this.nombre
    }
    obtenerCuentaIndividual(){
        return this.contador
    }
    obtenerCuentaGlobal(){
        return Contador.contadorGlobal
    }
    conteo(numero){
        this.contador += numero
        Contador.contadorGlobal += numero
    }
}

module.exports = Contador