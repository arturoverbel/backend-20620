const Calculadora = require('./calculadora')

test('Should calc 4 times 5', () => {
    expect(Calculadora.multiplicar(4, 5)).toBe(20)
})