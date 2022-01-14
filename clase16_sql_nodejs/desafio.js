const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'secret',
        database: 'ecommerce'
    }
})

async function test() {
    try {
        console.log("--> Creamos tabla")
        await knex.schema.createTable('articulos', table => {
            table.increments()
            table.string('name', 15)
            table.string('codigo', 10)
            table.float('precio')
            table.integer('stock')
            table.timestamps()
        })

        console.log(" --> Insertamos artículos")
        await knex("articulos").insert([
            {name: "moden", codigo: "100", precio: 120.5, stock: 10 },
            {name: "teclado", codigo: "101", precio: 80.5, stock: 12 },
            {name: "pantalla", codigo: "102", precio: 72.5, stock: 15 },
            {name: "mouse", codigo: "103", precio: 100.0, stock: 20 },
            {name: "camara", codigo: "104", precio: 81.1, stock: 17 }
        ])

        console.log("--> Mostramos artículos")
        let rows = await knex.from("articulos").select("*")
        for(r of rows)
            console.log(`${r.codigo}. ${r.name} ${r.precio}`)

        console.log("--> Borramos el 3 (gracias Gaston)")
        await knex("articulos").where('id', 3).del()

        console.log("--> Update stock para el id 2")
        await knex("articulos").where('id', 2).update({stock: 0})

        console.log("\n--> Mostramos artículos again")
        rows = await knex.from("articulos").select("*")
        for(r of rows)
            console.log(`${r.codigo}. ${r.name} ${r.precio}`)

    } catch(err) {
        console.log(err)
    } finally {
        knex.destroy();
    }
}

test();