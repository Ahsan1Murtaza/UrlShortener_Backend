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
    }
})

const userModel = mongoose.model('user', userSchema)

module.exports = {userModel}