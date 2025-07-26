const {shortId} = require('../utils/shortId.util')
const {urlModel} = require('../models/url.model')


const generateShortId = async (originalUrl)=>{
    
    const id = shortId()

    // const shortenUrl = `${process.env.BASE_URL}/${id}`

    // Saving in DB
    await urlModel.create({
        originalUrl,
        shortId: id
    })

    return id
}

const getOriginalUrl = async (id)=>{
    // Search in database
    const urlEntry = await urlModel.findOne({
        shortId: id
    })


    console.log("The url entry is " + urlEntry)
    if (!urlEntry){
        throw new Error("Url Not Found")
    }

    return urlEntry.originalUrl
}

module.exports = {generateShortId, getOriginalUrl}