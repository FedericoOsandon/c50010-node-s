exports.authorization = role => {
    return async (req, res, next) => {
        if (!req.user)  return res.status(401).json({status: 'error', error: 'Unauthorired'})
        if (req.user.role !== role)  return res.status(401).json({status: 'error', error: 'Not permissions'})
        next()
    }
}