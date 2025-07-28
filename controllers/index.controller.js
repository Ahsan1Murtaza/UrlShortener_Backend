const {findAllUrlsFromDb} = require('../services/index.service')

const getAllUrlsFromDb = async (req, res)=>{

    const allUrls = await findAllUrlsFromDb(req.user.id)

    if (!allUrls.success){
        return res.render('home', {urls: [], email: req.user.email})
    }

    return res.render('home', {urls: allUrls.urls, email: req.user.email})
}

module.exports = {getAllUrlsFromDb}