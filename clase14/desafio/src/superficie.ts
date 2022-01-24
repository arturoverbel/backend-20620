
export default class Superficie {

    static calcularCuadrado(lado:number): number {
        return lado*lado;
    }

    static calcularRectangulo(base:number, altura:number) :number {
        return base*altura;
    }

    static calcularCirculo(radio:number) {
        return Math.PI * radio**2
    }

}