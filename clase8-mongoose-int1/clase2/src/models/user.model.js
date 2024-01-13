import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    isActive: {
        type: Boolean,
        default: true
    }
})

export default model('users', userSchema)