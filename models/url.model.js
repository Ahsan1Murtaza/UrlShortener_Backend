const mongoose = require('mongoose')


const urlSchema = mongoose.Schema({
    originalUrl:{
        type: String,
        required: true
    },
    shortId:{
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, "User is required"]
    }
})

const urlModel = mongoose.model('url', urlSchema)

module.exports = {urlModel}