const express = require('express')
const app = express()
app.get('/hello',(req, res) => {
    res.send('<h1>hello get</h1>')
})

app.post('/',(req, res) => {
    res.send('<h1>hello port</h1>')
})

app.listen(3000)