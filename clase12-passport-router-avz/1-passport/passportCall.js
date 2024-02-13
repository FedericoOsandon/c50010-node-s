const passport = require('passport')

exports.passportCall = strategy => {
    return async (req, res, next) => {  // done(null, jwt_payload, info -> passport) - done(null, false, {message: 'che no esta el usuario'})
        passport.authenticate(strategy, function (err, user, info) {
            console.log(user)
            if(err) return next(err)
            if(!user) return res.status(401).send({status: 'error', error: info.message ? info.message : info.toString() })
            req.user = user
            next()
        })(req, res, next)
    }
}

