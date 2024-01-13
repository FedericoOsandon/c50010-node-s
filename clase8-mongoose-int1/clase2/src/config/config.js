import { connect } from 'mongoose'

export const connectDB = async ( ) => {
    try {
        await connect('mongodb://127.0.0.1:27017/c50010')
        console.log('base de datos connected')
    } catch (error) {
        console.log(error)
    }
}