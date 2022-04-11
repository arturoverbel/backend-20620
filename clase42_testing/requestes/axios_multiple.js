const axios = require('axios')

function get1() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}

function get2() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}

Promise.all([get1(), get2()])
    .then(results => {
        console.log(results[0])
    })