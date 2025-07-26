const crypto = require('crypto')

const shortId = ()=>{
    return crypto.randomBytes(4).toString('hex') // gives 8 hex characters
}


module.exports = {shortId}