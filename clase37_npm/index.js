const app = require('express')()

app.get('/', (q, r) => r.send('Hii from Yarn'))

app.listen(8080)