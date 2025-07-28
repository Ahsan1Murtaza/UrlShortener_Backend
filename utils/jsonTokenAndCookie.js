const jwt = require('jsonwebtoken')


const generateTokenAndSetCookie = (user, res)=>{

    // UNDEFINED
    console.log(user.plan)
    console.log(user.urlCount)

    const token = jwt.sign({
        id: user.id,
        email: user.email,
        plan: user.plan,
        urlCount: user.urlCount
    },
        process.env.JWT_SECRET,
        {expiresIn: '7d'}
    )

    res.cookie('token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7
    })
}

module.exports = generateTokenAndSetCookie