const { Schema, model } = require('mongoose')

const cartSchema = new Schema({
    products: {
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                ref: 'products'
            }
        }]
    }
})

// [{product: 'alkhsfdkhsafdk'},{product: 'jalsjfdlasdjf'}]

cartSchema.pre('findOne', function () {
    this.populate('products.product')
})

const cartModel = model('carts', cartSchema)



module.exports = {
    cartModel
}
