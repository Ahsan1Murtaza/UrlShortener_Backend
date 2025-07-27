const {shortId} = require('../utils/shortId.util')
const {urlModel} = require('../models/url.model')


const generateShortId = async (originalUrl, req)=>{
    
    const shortenId = shortId()


    console.log("In Service Layer " + req.user.id)

    // Saving in DB
    await urlModel.create({
        originalUrl,
        shortId: shortenId,
        userId: req.user.id
    })

    return shortenId
}

const getOriginalUrl = async (shortenId)=>{
    // Search in database
    const urlEntry = await urlModel.findOne({
        shortId: shortenId
    })


    console.log("The url entry is " + urlEntry)
    if (!urlEntry){
        throw new Error("Url Not Found")
    }

    return urlEntry.originalUrl
}

module.exports = {generateShortId, getOriginalUrl}