const mongoose = require('mongoose')


const urlSchema = mongoose.Schema({
    originalUrl:{
        type: String,
        required: true
    },
    shortId:{
        type: String,
        required: true
    }
})

const urlModel = mongoose.model('url', urlSchema)

module.exports = {urlModel}