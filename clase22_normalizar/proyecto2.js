const { normalize, denormalize, schema } = require("normalizr")
const { print } = require("./data")
const holding = require("./holding")


const empleado = new schema.Entity('empleado')
const empresa = new schema.Entity('empresa', { 
    gerente: empleado,
    encargado: empleado,
    empleados: [empleado]
})
const holdingSchema = new schema.Entity('holding', {
    empresas: [empresa]
})


const dataNormalized = normalize(holding, holdingSchema)
print(dataNormalized)



