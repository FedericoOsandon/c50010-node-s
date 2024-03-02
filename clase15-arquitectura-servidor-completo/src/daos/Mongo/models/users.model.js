const mongoose = require('mongoose')

const usersCollection = 'users'

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        index: true
    },
    last_name: String,
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    cartID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carts'
    },
    role: {
        type: String,
        enum: ['USER', 'USER_PREMIUM', 'ADMIN'],
        default: 'USER'
    }
}) 

const userModel = mongoose.model(usersCollection, usersSchema)

module.exports = {
    userModel
}

// collection -> array de algo en particular
// document -> objetos