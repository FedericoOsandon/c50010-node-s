
class ProductRepository {
    constructor(productDao){
        this.dao = productDao
    }

    getProducts    = async () => await this.dao.get()
    getProduct     = async (filter) => await this.dao.get(filter)
    createProduct  = async (newProduct) => await this.dao.create(newProduct)
    updateProduct  = async (pid, productToUpdate) => await this.dao.create(pid, productToUpdate)
    deleteProduct  = async (pid) => await this.dao.create(pid)
}

module.exports = ProductRepository