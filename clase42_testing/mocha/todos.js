const fs = require('fs')

class Todos {

    constructor() {
        this.todos = []
    }

    list() { return this.todos }

    add(title) {
        this.todos.push({
            title, complete: false
        })
    }

    complete(title) {
        if(this.todos.length === 0) {
            throw new Error('there are not todo')
        }

        let found = false
        this.todos.forEach(todo => {
            if(todo.title === title) {
                todo.complete = true
                found = true
                return
            }
        })

        if(!found) {
            throw new Error('todo not found') 
        }

        return true
    }

    saveToFileCallback(callback) {
        let fileContents = ''
        this.todos.forEach(todo => {
            fileContents += `${todo.title}, ${todo.complete}`
        })

        fs.writeFile('todos.txt', fileContents, callback)
    }

    saveToFilePromise() {
        let fileContents = ''
        this.todos.forEach(todo => {
            fileContents += `${todo.title}, ${todo.complete}`
        })

        return fs.promises.writeFile('todos.txt', fileContents)
    }

}

module.exports = Todos