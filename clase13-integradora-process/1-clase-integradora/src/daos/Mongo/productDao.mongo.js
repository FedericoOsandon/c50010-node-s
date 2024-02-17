const { productModel } = require("./models/products.model")

class ProductDaoMongo { // manager
    constructor(){
        this.model = productModel
    }

    async get(){
        return await this.model.find()
    }
    async getBy(filter){
        return await this.model.findById(filter)
    }
    async create(newProduct){
        return await this.model.create(newProduct)
    }
    async update(pid, productToUpdate){
        return this.model.findByIdAndUpdate({_id: pid, productToUpdate})
    }
    async delete(pid){

    }
}

module.exports = ProductDaoMongo
