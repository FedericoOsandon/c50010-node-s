const mongoose = require("mongoose")

exports.connectBD = async () => {
    try {
        await mongoose.connect('mongodb+srv://user:password@coderexample.hjzrdtr.mongodb.net/c50010?retryWrites=true&w=majority')
        // await mongoose.connect('mongodb://127.0.0.1:27017/c50010')
        console.log('Base de datos conectada')        
    } catch (error) {
        console.log(error)
    }
}