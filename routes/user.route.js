const express = require('express')

const {loginUser, registerUser} = require('../controllers/user.controller')

const router = express.Router()

router.get('/login', (req, res)=>{res.send("Login Paged")})
router.post('/login', loginUser)

router.get('/register', (req, res)=>{res.send("Register Paged")})
router.post('/register', registerUser)

module.exports = router