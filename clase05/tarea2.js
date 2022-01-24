const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]
let nombres = productos.map(item => item.nombre).join(",")
console.log(nombres)
let suma = productos.reduce((precio,item) => precio + item.precio, 0)
console.log(suma)
let promedio = suma / productos.length
console.log(promedio)
let menorPrecio = productos.sort((item,a) => item.precio - a.precio)[0]
console.log(menorPrecio)
let mayorPrecio = productos.sort((item,a) => item.precio - a.precio)[productos.length-1]
console.log(mayorPrecio)
let objetoNuevo= {
    nombres,
    suma,
    promedio,
    menorPrecio,
    mayorPrecio
}
console.log(objetoNuevo)