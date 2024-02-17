const mongoose = require("mongoose")
const dotenv = require('dotenv')
const { program } = require("../utils/commander")

const { mode } = program.opts()
console.log(mode)
dotenv.config({
    path: mode === 'development' ? './.env.development' : './.env.production'
})

exports.configObject = {
    port: process.env.PORT || 8080,
    mongo_url: process.env.MONGO_URL,
    jwt_secret_Key: process.env.JWT_SECRET_KEY
}


exports.connectBD = async () => {
    try {        
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Base de datos conectada')           
    } catch (error) {
        console.log(error)
    }
}