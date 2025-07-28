const {registerUserInDb, loginUserIfInDb} = require('../services/user.service')
const generateTokenAndSetCookie = require('../utils/jsonTokenAndCookie')

const loginUser = async(req, res)=>{
    const {email, password} = req.body

    const loggedInUser = await loginUserIfInDb(email, password)

    if (!loggedInUser.success){
        return res.status(400).json({message: loggedInUser.message})
    }
    
    // Token
    generateTokenAndSetCookie(loggedInUser.user, res)
    
    
    // return res.status(200).json({message: loggedInUser.message})
    return res.redirect('/home')
    
}

const registerUser = async(req, res)=>{
    const {email, password} = req.body
    // console.log('Email', email)
    // console.log('password', password)
    
    const registeredUser = await registerUserInDb(email, password)
    
    if (!registeredUser.success){
        return res.status(400).json({message: registerUser.message})
    }
    
    generateTokenAndSetCookie(registeredUser.user, res)

    // return res.status(200).json({message: registeredUser.message})
    return res.redirect('/home')

}

const logoutUser = async(req, res)=>{
    

    res.clearCookie('token',"")

    // return res.status(200).json({message: "Logged Out Successfully"})
    return res.redirect('/user/login')
}

module.exports = {loginUser, registerUser, logoutUser}