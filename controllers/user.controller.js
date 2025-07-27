const {registerUserInDb, loginUserIfInDb} = require('../services/user.service')

const loginUser = async(req, res)=>{
    const {email, password} = req.body

    const loggedInUser = await loginUserIfInDb(email, password)

    if (!loggedInUser.success){
        return res.status(400).json({message: loggedInUser.message})
    }
    
    return res.status(200).json({message: loggedInUser.message})
    
}

const registerUser = async(req, res)=>{
    const {email, password} = req.body
    console.log('Email', email)
    console.log('password', password)
    
    const registeredUser = await registerUserInDb(email, password)
    
    if (!registeredUser.success){
        return res.status(400).json({message: registerUser.message})
    }
    
    res.status(200).json({message: registeredUser.message})

}

module.exports = {loginUser, registerUser}