
export default class Perimetro {

    static calcularCuadrado(lado:number): number {
        return lado*4;
    }

    static calcularRectangulo(base:number, altura:number) :number {
        return base*2 + altura*2;
    }

    static calcularCirculo(radio:number) {
        return Math.PI * 2 * radio
    }

}