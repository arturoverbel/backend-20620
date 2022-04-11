import got from 'got'

(async () => {
    try {
        const response = await got('https://jsonplaceholder.typicode.com/posts')
        console.log(response.body)
    }catch(e) {
        console.log(error.response.body)
    }
})();

(async () => {
    try {
        const { body } = await got.post('https://jsonplaceholder.typicode.com/posts', {
            json: {
                hii: 'hii'
            },
            responseType: 'json'
        })
        console.log(body)
    }catch(e) {
        console.log(error.response.body)
    }
})();