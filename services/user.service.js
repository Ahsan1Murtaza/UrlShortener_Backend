const {userModel} = require('../models/user.model')

const registerUserInDb = async (email, password)=>{

    const newUser = await userModel.create({
        email,
        password
    })

    return {success: true, message: "User Registered", user: {id: newUser._id, email: newUser.email, plan: newUser.plan, urlCount: newUser.urlCount}}
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

    return {success: true, message: "User Logged In", user: {id: loggedInUser._id, email: loggedInUser.email, plan: loggedInUser.plan, urlCount: loggedInUser.urlCount}}
}

module.exports = {loginUserIfInDb, registerUserInDb}