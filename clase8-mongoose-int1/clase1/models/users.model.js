const mongoose = require('mongoose')

const usersCollection = 'users'

const usersSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}) 

const userModel = mongoose.model(usersCollection, usersSchema)

module.exports = {
    userModel
}

// collection -> array de algo en particular
// document -> objetos