const { Schema, model } = require('mongoose')

const collection = 'products'

const ProductsSchema = new Schema({
    title: String,
    description: String, 
    price: Number,
    stock: Number,
    category: String, 
    thumbnail: String,
    isActive: {
        type: Boolean,
        default: true
    }

})

const productModel = model(collection, ProductsSchema)

module.exports = {
    productModel
}