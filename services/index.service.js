const {urlModel} = require('../models/url.model')

const findAllUrlsFromDb = async(req)=>{

    const allUrls = await urlModel.find({
        userId: req.user.id
    })

    if (!allUrls){
        return {success: false, message: "No Urls For The User Found"}
    }

    // Make a short Id into full shortenUrl
    const formattedUrls = allUrls.map(obj => {
        return {
            originalUrl: obj.originalUrl,
            shortenUrl: `${process.env.BASE_URL}/${obj.shortId}`
        }
    })

    return {success: true, message: "All Urls are being Provided", urls: formattedUrls}
    
}

module.exports = {findAllUrlsFromDb}