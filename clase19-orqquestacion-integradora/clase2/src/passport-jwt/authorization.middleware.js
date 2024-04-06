// authorization( ['USER', 'USER_PREMUIM'] )

exports.authorization = roleArray => {
    return async (req, res, next)=>{
        try {
            if (!req.user) return res.status(401).send({status: 'error', message: 'Unauthorized'})
            // if (req.user.role.toUpperCase() === role)  return res.status(403).send({status: 'error', message: 'Not permissions'})
            // if(roleArray[0] === 'PUBLIC') return next() 
            if(!roleArray.includes(req.user.role.toUpperCase())) return res.status(403).send({status: 'error', message: 'Not permissions'})
            next()
        } catch (error) {
            next(error)
        }
    }
}