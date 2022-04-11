const Todos = require('./todos')
const assert = require('assert').strict
 
describe('Test de intregacion de tareas', function () {

    it('The controller must return empty', () => {
        const todos = new Todos()
        assert.strictEqual(todos.list().length, 0)
    })


    it('Must be add another todo', () => {
        const todos = new Todos()
        todos.add('run code')
        assert.strictEqual(todos.list().length, 1)
        assert.deepStrictEqual(todos.list(), [ { title: 'run code', complete: false}])

        todos.add('cook lasagna')
        assert.strictEqual(todos.list().length, 2)
        assert.deepStrictEqual(todos.list(), [ 
            { title: 'run code', complete: false},
            { title: 'cook lasagna', complete: false}
        ])
    })

    it('Must to hace a todo completed', () => {
        const todos = new Todos()

        todos.add('run code')
        todos.add('cook lasagna')

        todos.complete('run code')
        assert.deepStrictEqual(todos.list(), [ 
            { title: 'run code', complete: true},
            { title: 'cook lasagna', complete: false}
        ])
    })

})

describe('Check errors to complete todo', () => {

    it('must be error when no todo', () => {
        const todos = new Todos()

        const errorEsperado = new Error('there are not todo')
        assert.throws( () => {
            todos.complete('one task more')
        }, errorEsperado)
    })

    it('must be error when todo not exist', () => {
        const todos = new Todos()
        todos.add('run code')

        const errorEsperado = new Error('todo not found')
        assert.throws( () => {
            todos.complete('one task more')
        }, errorEsperado)
    })

})