const { Schema, model } = require('mongoose')

const collection = 'products'

const ProductsSchema = new Schema({
    title: String,
    description: String, 
    price: Number,
    stock: Number
})

const proudctModel = model(collection, ProductsSchema)

module.exports = {
    proudctModel
}