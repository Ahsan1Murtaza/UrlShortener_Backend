const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
   
    email :{
        type: String,
        trim: true,
        required: true
    },
    password :{
        type: String,
        trim: true,
        required: true
    },
    plan :{
        type: String,
        enum: ["free", "premium"],
        default: "free"
    },
    urlCount: {
        type: Number,
        default: 0
    }
})

const userModel = mongoose.model('user', userSchema)

module.exports = {userModel}