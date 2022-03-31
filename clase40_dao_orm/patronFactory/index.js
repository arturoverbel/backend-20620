class Employee {

    constructor(name) {
        this.name = name
    }

    speak() {
        return `Hii, My name is ${this.name} and my type is ${this.type}`
    }
}

class FullTimeEmployee extends Employee {
    constructor(name) {
        super(name)
        this.type = 'full-time'
    }
}

class PartTimeEmployee extends Employee {
    constructor(name) {
        super(name)
        this.type = 'part-time'
    }
}

class ContractorEmployee extends Employee {
    constructor(name) {
        super(name)
        this.type = 'contractor'
    }
}


class MyEmployeeFactory {
    createEmployee(data) {
        if(data.type == 'full') return new FullTimeEmployee(data.name)
        if(data.type == 'part') return new PartTimeEmployee(data.name)
        if(data.type == 'contractor') return new ContractorEmployee(data.name)
    } 
}



const factory = new MyEmployeeFactory()
const types = [
    {type: 'full', name: 'Jose'},
    {type: 'full', name: 'Max' },
    {type: 'full', name: 'Nicolas' },
    {type: 'part', name: 'R2' },
    {type: 'part', name: 'Gaston' },
    {type: 'contractor', name: 'Cliver'}
]


const employees = []
for (let i = 0; i < types.length; i++) {
    employees.push(factory.createEmployee(types[i]))
}

console.log(employees)
employees.forEach(e => console.log(e.speak()))