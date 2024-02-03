const passport = require('passport')
const local = require('passport-local')
const GithubStrategy = require('passport-github2')
const { userModel } = require('../models/users.model') // accedemos al user model a travez del manager
const { createHash, isValidPassword } = require('../utils/hashBcrypt')

const LocalStrategy = local.Strategy

const initializePassport = () => {   


    passport.serializeUser((user, done) => {
        done(null, user._id)
    })
    passport.deserializeUser(async (id, done) => {
        let user = await userModel.findById({_id: id})
        done(null, user)
    })

    passport.use('github', new GithubStrategy({
        clientID:'Iv1.3bd690d92b94be67',
        clientSecret: 'd96d62e29f69680e04c44b2c6c5c3bad8c575f56',
        callbackURL: 'http://localhost:8080/api/sessions/githubcallback'
    }, async (accessToken, refreshToken, profile, done)=>{
        console.log('profile: ', profile)
        try {
                let user = await userModel.findOne({email: profile._json.email})
                if (!user) {
                    let newUser = {
                        first_name: profile._json.name,
                        last_name: profile._json.name,
                        email: profile._json.email,
                        password: ''
                    }

                    let result = await userModel.create(newUser)
                    return done(null, result)
                }

                return done(null, user)
        } catch (error) {
            done(error)
        }
    }))
}

module.exports = {
    initializePassport
}