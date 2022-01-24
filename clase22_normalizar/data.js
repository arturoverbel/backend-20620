const util = require("util")

const blogposts = [
    {
        id: 1,
        title: "El sol está muy caliente",
        description: "Hablamos de las temperaturas",
        content: "Bla bal balasdnasdn abdjasd",
        author: {
            id: 1,
            name: "Facundo Scienza",
            city: "Buenos Aires"
        },
        comments: [
            {
                id: 1,
                author: {
                    id: 10,
                    name: "Ezequiel",
                    city: "Bogota"
                },
                content: "Guaauu"
            },
            {
                id: 2,
                author: {
                    id: 11,
                    name: "Rolando",
                    city: "Medellin"
                },
                content: "jajajaja"
            }
        ]
    },
    {
        id: 2,
        title: "La luna",
        description: "LUNA",
        content: "UuuuuuuuuuUUUUU",
        author: {
            id: 1,
            name: "Facundo Scienza",
            city: "Buenos Aires"
        },
        comments: [
            {
                id: 3,
                author: {
                    id: 10,
                    name: "Ezequiel",
                    city: "Bogota"
                },
                content: "Vaya vaya"
            }
        ]
    },
    {
        id: 3,
        title: "Marte",
        description: "Marte",
        content: "Marte",
        author: {
            id: 2,
            name: "Alejandra Stronati",
            city: "Cordoba"
        },
        comments: [
            {
                id: 3,
                author: "Cliver",
                content: "Guaauu"
            }
        ]
    },
    {
        id: 4,
        title: "Redragon",
        description: "Que es Redragon",
        content: "Es super !!",
        author: {
            id: 3,
            name: "Cliver Colongne",
            city: "Londres"
        },
        comments: [
            {
                id: 4,
                author: {
                    id: 2,
                    name: "Alejandra Stronati",
                    city: "Cordoba"
                },
                content: "No es tan genial como razer"
            }
        ]
    },
    {
        id: 5,
        title: "Jupiter",
        description: "Que tan grande es Jupiter",
        content: "Es muy grande",
        author: {
            id: 2,
            name: "Alejandra Stronati",
            city: "Cordoba"
        },
        comments: []
    }
]

const print = o => console.log(util.inspect(o, false, 12, true))

module.exports = {
    print,
    blogposts
}