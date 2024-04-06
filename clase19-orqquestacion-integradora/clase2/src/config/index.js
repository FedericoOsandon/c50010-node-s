const { connect } = require('mongoose')
const { MongoSingleton } = require('./singleton')
const dotenv = require('dotenv')
const { program } = require('../utils/commander')

const { mode } = program.opts()



dotenv.config({
    path: mode === 'development' ? './.env.development' : './.env.production'
}) // .env

const configObject = {
    port: process.env.PORT || 8080,
    mongo_url: process.env.MONGO_URL,
    gmail_password: process.env.GMAIL_PASSWORD,
    gmail_user: process.env.GMAIL_USER,
    modo: mode

}

const connectDb = async () => {
    // await connect('mongodb://127.0.0.1:27017/c50010')
    // console.log('Base de datos conectada')
    await MongoSingleton.getInstance(process.env.MONGO_URL)
}

module.exports = {
    connectDb,
    configObject
}