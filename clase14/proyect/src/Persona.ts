export default class Persona {

    private firstName:string
    private lastName:string

    constructor(fname: string, lname:string) {
        this.firstName = fname
        this.lastName = lname
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

}