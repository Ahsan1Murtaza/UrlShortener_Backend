const {findAllUrlsFromDb} = require('../services/index.service')

const getAllUrlsFromDb = async (req, res)=>{

    const allUrls = await findAllUrlsFromDb(req)

    if (!allUrls.success){
        return res.render('home', {urls: []})
    }

    return res.render('home', {urls: allUrls.urls})
}

module.exports = {getAllUrlsFromDb}