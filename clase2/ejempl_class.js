class A {
    constructor(v) {
        this.v = 2
        A.contador++;
    }

    static contador = 0;
}


let a = new A(2)
console.log(A.contador)
let b = new A(3)

console.log(A.contador)