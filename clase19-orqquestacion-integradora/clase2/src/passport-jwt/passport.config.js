const passport = require('passport')
const passport_jwt = require('passport-jwt')

const JWTStrategy = passport_jwt.Strategy
const ExtractJWT  = passport_jwt.ExtractJwt

const initializePassport = () => {
    const cookieExtractor = req => {
        let token = null
        if (req && req.cookies) {
            token = req.cookies['token']
        }
        return token
    }

    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: 'palabrasecretaparafirmareltoken'
    }, async ( jwt_payload, done )=>{
        try {
            console.log('jwt_payload passport config: ', jwt_payload )
            return done(null, jwt_payload)            
        } catch (error) {
            return done(error)
        }
    }))
} 

module.exports = {
    initializePassport
}