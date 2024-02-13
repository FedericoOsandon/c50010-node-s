const passport = require('passport')
const passportJWT = require('passport-jwt')
const { userModel } = require('../models/users.model') // accedemos al user model a travez del manager
// const { createHash, isValidPassword } = require('../utils/hashBcrypt')

const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

const initializePassport = () => {

    const cookieExtractor = req => {
        let token = null
        if(req && req.cookies){
            token = req.cookies['cookieToken']
            console.log(token)
        }
        return token
    }

    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: 'palabrasecretaparatoken' 
    }, async (jwt_payload, done)=>{
        try {
            return done(null, jwt_payload)
        } catch (error) {
            return done(error)
        }
    }))
}

module.exports = {
    initializePassport
}