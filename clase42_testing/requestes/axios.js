const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
        name: 'r2'
    },
    headers: {
        header1: 'value',
    }  
})
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    .then(() => { console.log('END')})


const data = {
    aaa: 'Buy beers'
}
axios.post('https://jsonplaceholder.typicode.com/posts', 
data, 
{
    params: {
        name: 'r2'
    },
    headers: {
        'Content-Type': 'application/json'
    }  
})
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    .then(() => { console.log('END')})