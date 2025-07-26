const express = require('express')

const {createShortId, redirectToOriginal} = require("../controllers/url.controller")

const router = express.Router()

router.get('/:id', redirectToOriginal)
router.post('/shorten', createShortId)



module.exports = router