const passport = require('passport')
const local = require('passport-local')
const { userModel } = require('../models/users.model') // accedemos al user model a travez del manager
const { createHash, isValidPassword } = require('../utils/hashBcrypt')

const LocalStrategy = local.Strategy

const initializePassport = () => {
    passport.use('register', new LocalStrategy({
        passReqToCallback: true, // accediendo al req
        usernameField: 'email'
    }, async (req, username, password, done) => {
        const {first_name, last_name, email} = req.body
        try {
            let  user = await userModel.findOne({email})

            if (user) return done(null, false)       

            let newUser = {
                first_name, 
                last_name,
                email,
                password: createHash(password)
            }   

            let result = await userModel.create(newUser)
            // done funciona como el next
            return done(null, result)
        } catch (error) {
            return done(error)   
        }

    }))

    passport.use('login', new LocalStrategy({
        usernameField: 'email'
    }, async (username, password, done) => {
        try {
            const user = await userModel.findOne({email: username})
            if (!user) {
                console.log('user no encontrado')
                return done(null, false)
            }
            if (!isValidPassword(password, user.password)) return done(null, false)
            return done(null, user)
        } catch (error) {
            return done(error)
        }
    }))


    passport.serializeUser((user, done) => {
        done(null, user._id)
    })
    passport.deserializeUser(async (id, done) => {
        let user = await userModel.findById({_id: id})
        done(null, user)
    })
}

module.exports = {
    initializePassport
}