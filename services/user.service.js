const {userModel} = require('../models/user.model')

const registerUserInDb = async (email, password)=>{

    await userModel.create({
        email,
        password
    })

    return {success: true, message: "User Registered"}
}

const loginUserIfInDb = async (email, password)=>{
    
    const loggedInUser = await userModel.findOne({
        email
    })

    if (!loggedInUser){
        return {success: false, message: "Email or Password is incorrect"}
    }
    
    if (loggedInUser.password != password){
        return {success: false, message: "Email or Password is incorrect"}
   
    }

    return {success: true, message: "User Logged In"}
}

module.exports = {loginUserIfInDb, registerUserInDb}