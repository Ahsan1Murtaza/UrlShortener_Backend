const express = require('express')

const {createShortId, redirectToOriginal} = require("../controllers/url.controller")
const authenticationMiddleware = require('../middlewares/auth.middleware')
const rateLimitMiddleware = require('../middlewares/rateLimit.middleware')

const router = express.Router()

router.get('/:id', redirectToOriginal)
router.post('/shorten', authenticationMiddleware, rateLimitMiddleware, createShortId)


module.exports = router