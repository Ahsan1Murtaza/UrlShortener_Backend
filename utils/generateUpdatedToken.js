
const jwt = require('jsonwebtoken')
const {userModel} = require('../models/user.model')
const generateTokenAndSetCookie = require('./jsonTokenAndCookie')

const generateUpdatedToken = async(userId, res)=>{

    const user = await userModel.findById(userId)

    generateTokenAndSetCookie(user, res)
    
}
module.exports = generateUpdatedToken