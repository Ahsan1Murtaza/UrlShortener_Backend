const express = require('express')
const { route } = require('./url.route')
const authenticationMiddleware = require('../middlewares/auth.middleware')
const {getAllUrlsFromDb} = require('../controllers/index.controller')
const jwt = require('jsonwebtoken')


const router = express.Router()

router.get('/', (req, res)=>{
    const token = req.cookies.token

    if (!token){
        return res.redirect('/user/login')
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET)
        return res.redirect('/home')
    } catch (error) {
        return res.redirect('/user/login')
    }
})

router.get('/home',authenticationMiddleware, getAllUrlsFromDb)

router.get('/purchase', authenticationMiddleware, (req, res)=>{
    res.render('purchase')
})

module.exports = router