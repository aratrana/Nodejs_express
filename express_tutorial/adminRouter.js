const express = require('express')
let router = express.Router()

router.get('/',(req, res, next) => {
    res.json({
        msg: 'The admin router'
    })
})

module.exports = router