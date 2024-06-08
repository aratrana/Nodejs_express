const express = require('express')
const   app = express()

const validateUser = (req, res, next) => {
    res.locals.validated = true
    next()
}
app.use('/admin',validateUser)

app.get('/',(req, res, next)=>{
    res.send('<h1>hellooo</h1>')
})

app.get('/admin',(req, res, next)=>{
    res.send('<h1>hellooo admin</h1>')
})

app.listen(3000)