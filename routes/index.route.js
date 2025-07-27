const express = require('express')
const { route } = require('./url.route')
const authenticationMiddleware = require('../middlewares/auth.middleware')
const {getAllUrlsFromDb} = require('../controllers/index.controller')


const router = express.Router()

router.get('/home',authenticationMiddleware, getAllUrlsFromDb)

module.exports = router