const { cartModel } = require("./models/cart.model.js")

class CartDaoMongo{    
    constructor(){
        this.Cart = cartModel
    }

    async get(){
        try {
            return await this.Cart.find()
            
        } catch (error) {
            return  new Error(error)
        }
    }
    
    async getBy(cid){
        try {            
            const res = await this.Cart.findOne({_id: cid}).lean()
            // console.log('cart mongo: ',JSON.stringify(res.products, null, 2))
            return res
        } catch (error) {
            return new Error(error)
        }
    }

    async create(userEmail){
        try {                
            return await this.Cart.create({ userEmail, products: [] })
        } catch (err) {
           return new Error('Error creating cart'+err);
        }
    }

    async update(cid, product){        
        try {
            const updatedCart = await this.Cart.findOneAndUpdate(
                { _id: cid, 'products.product': product.id },
                { $inc: { 'products.$.quantity': product.quantity } },
                { new: true }
            )
          
            if (updatedCart) {
                // El producto ya estaba en el carrito, se actualizó su cantidad
                return updatedCart
            }
          
            // El producto no estaba en el carrito, se agrega con quantity en 1
            const newProductInCart = await this.Cart.findOneAndUpdate(
                { _id: cid },
                { $push: { products: { product: product.id, quantity: product.quantity } } },
                { new: true, upsert: true }
            )
          
            return newProductInCart
        } catch (error) {
            return new Error('Error adding product to cart'+error)
        }

    }

    // Delete api/carts/:cid/products/:pid
    async deleteItem(cid, pid){
        try {
            return await this.Cart.findOneAndUpdate(
                { _id: cid },
                { $pull: { products: { product: pid } } },
                { new: true }
            )
        } catch (error) {
            return new Error('Error deleting product from cart'+error)
        }
    }

    // vaciar carrito
    async delete(cid){
        try {
            // console.log(cid)
            return await this.Cart.findOneAndUpdate(
                { _id: cid },
                { $set: { products: [] } },
                { new: true }
            )
        } catch (error) {
            return new Error('Error deleting cart'+ error)
        }
    }

}

module.exports = CartDaoMongo

