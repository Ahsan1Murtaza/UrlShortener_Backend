
const {generateShortId, getOriginalUrl} = require("../services/url.service")

const createShortId = async (req, res)=>{
    const {originalUrl} = req.body
    console.log("The original Url in controller is " + originalUrl)
    console.log("User in Controller has id " + req.user.id)

    if (!originalUrl){
        return res.status(400).json({message: "Original Url is required"})
    }

    const shortId = await generateShortId(originalUrl, req)

    const shortenUrl = `${process.env.BASE_URL}/${shortId}`


    res.status(201).json({originalUrl, shortenUrl})
}

const redirectToOriginal = async (req, res)=>{
    const {id} = req.params
    console.log("Redirecting to original with short id is " + id)
    // console.log("Before redirecting " + url)

    try {
        const originalUrl = await getOriginalUrl(id)

        console.log("The original url from db is " + originalUrl)
        if (!originalUrl){
            return res.status(404).json({message: "URL not found"})
        }


        res.redirect(originalUrl)
        
    } catch (error) {
        return res.status(404).json({message: "URL not found"})
    }

}

module.exports = {createShortId, redirectToOriginal}