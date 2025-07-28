
const plans = require('../config/plan.config')

const checkUrlLimit = (req, res, next)=>{

    const plan = req.user.plan
    
    const urlCount = req.user.urlCount

    if (urlCount >= plans[plan].shortenLimit){
        return res.status(403).json({message: "Your Limit has Reached"})
    }

    return next()
}

module.exports = checkUrlLimit