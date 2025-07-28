const {findAllUrlsFromDb} = require('../services/index.service')
const plans = require('../config/plan.config')

const getAllUrlsFromDb = async (req, res)=>{

    const allUrls = await findAllUrlsFromDb(req.user.id)

    if (!allUrls.success){
        return res.render('home', {urls: [], email: req.user.email})
    }

    return res.render('home', {urls: allUrls.urls, email: req.user.email, urlCount: req.user.urlCount, totalLimits: plans[req.user.plan].shortenLimit})
}

module.exports = {getAllUrlsFromDb}