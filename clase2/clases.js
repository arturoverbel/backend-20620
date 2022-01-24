
class Cliente {
    constructor(nombre, apellido, edad) {
        Cliente.contador++;

        this.id = Cliente.contador
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

    }

    static contador = 0

    calcularYear() {
        console.log(`El año de nacimiendo es: ${2021 - this.edad}`)
    }

    obtenerContador() {
        return Cliente.contador
    }

}


let cliente1 = new Cliente("David", "Vogel", 20)
let cliente2 = new Cliente("Ezequiel", "Barrera", 22)
let cliente3 = new Cliente("Nadin", "Recatume", 27)
let cliente4 = {
    nombre: "Arturo", apellido: "Verbel", edad: 15
}