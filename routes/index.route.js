const express = require('express')
const { route } = require('./url.route')
const authenticationMiddleware = require('../middlewares/auth.middleware')

const router = express.Router()

router.get('/home',authenticationMiddleware, (req,res)=>{
    res.send("Welcome To Home")
})

module.exports = router