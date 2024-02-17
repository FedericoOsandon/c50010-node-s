export const authorization = (roleArray) => {
    return async (req, res, next) => {
        if (roleArray[0] === 'PUBLIC') return next()

        if (!req.user) return res.status(401).json({status: 'error', error: 'Unhautoried'})


        // if (req.user.role !== role) return res.status(403).json({status: 'error', error: 'Not permissions'})
        if ( !roleArray.includes(req.user.role) ) return res.status(403).json({status: 'error', error: 'Not permissions'})
        
        next()
    }
}