const express = require('express')
let router = express.Router()

router.get('/',(req, res, next) => {
    res.json({
        msg: 'The router'
    })
})

module.exports = router