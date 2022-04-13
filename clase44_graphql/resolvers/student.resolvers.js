import crypto from 'crypto'

class Student {
    constructor(id, {name, age}) {
        this.id = id
        this.name = name
        this.age = age
    }
}

const studentsDB = {}

function getStudents({field, value}) {
    const students = Object.values(studentsDB)

    if(field && value) {
        return students.filter(s => s[field] == value)
    }

    return students
}

function getStudent({id}) {
    if(!studentsDB[id]) {
        throw new Error('Student not found')
    }

    return studentsDB[id]
}

function createStudent({data}) {
    const id = crypto.randomBytes(10).toString('hex')
    const newStudent = new Student(id, data)
    studentsDB[id] = newStudent

    return newStudent
}

function updateStudent({id, data}) {
    if(!studentsDB[id]) {
        throw new Error('Student not found')
    }

    const studentUpdated = new Student(id, data)
    studentsDB[id] = studentUpdated

    return studentUpdated
}

function deleteStudent({id}) {
    if(!studentsDB[id]) {
        throw new Error('Student not found')
    }

    const studentDeleted = studentsDB[id]
    delete studentsDB[id]

    return studentDeleted
}

export {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
}