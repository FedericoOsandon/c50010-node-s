function auth(req, res, next) {
    if (req.session?.user !== 'f@gmail.com' ||  !req.session?.admin) {
        return res.status(401).send('error de autorización')
    }
    return next()
}

module.exports = {auth}