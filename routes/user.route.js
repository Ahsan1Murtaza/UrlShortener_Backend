const express = require('express')

const {loginUser, registerUser, logoutUser} = require('../controllers/user.controller')
const authenticationMiddleware = require('../middlewares/auth.middleware')

const router = express.Router()

router.get('/login', (req, res)=>{res.send("Login Paged")})
router.post('/login', loginUser)

router.get('/register', (req, res)=>{res.send("Register Paged")})
router.post('/register', registerUser)

router.post('/logout', authenticationMiddleware, logoutUser)
module.exports = router