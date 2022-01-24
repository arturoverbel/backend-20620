function crearMultiplicador(multiplicador){
    return (numero)=>{
        console.log(numero*multiplicador);
    }
}
let duplicar = crearMultiplicador(2)
duplicar(3)
duplicar(5)
duplicar(9)
duplicar(2)
console.log("triplicado");
let triplicar = crearMultiplicador(3)
triplicar(2)
triplicar(4)
triplicar(6)
triplicar(3)
triplicar(9)