const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const productModel = model('products', productSchema)

module.exports = {
    productModel
}