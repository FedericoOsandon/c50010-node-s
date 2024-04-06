const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String
    },
    role: {
        type: String,
        enum: ['user', 'user_premium', 'admin'],
        default: 'user'
    },
    atCreated: {
        type: Date,
        default: Date()
    }
})

const userModel = model('users', userSchema)

module.exports = {
    userModel
}