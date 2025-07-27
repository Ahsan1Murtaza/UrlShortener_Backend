
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next)=>{

    const token = req.cookies.token

    if (!token){
        return res.status(401).json({message: "Authentication is Required"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log("Decoded user in token is " + decoded.id)
        req.user = decoded
        console.log("Req.user decoded is " + req.user)
        return next()
        
    } catch (error) {
        return res.status(401).json({message: "Un Authorized"})
    }
}

module.exports = verifyToken