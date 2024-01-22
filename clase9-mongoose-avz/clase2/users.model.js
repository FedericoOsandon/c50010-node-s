const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const usersCollection = 'users'

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        index: true
    },
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


usersSchema.plugin(mongoosePaginate)
const userModel = mongoose.model(usersCollection, usersSchema)

module.exports = {
    userModel
}

// collection -> array de algo en particular
// document -> objetos