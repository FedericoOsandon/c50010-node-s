class ProductManager {
    constructor(){
        this.products = []
    }
    async getProducts(){
        return this.products
    }
    addProduct(product){ // title - description - price - thumbnail - code - stock 
        if( !product.title || 
            !product.description  || 
            !product.price || 
            !product.thumbnail || 
            !product.code || 
            !product.stock)
        {
            return 'Faltan llenar campos del productos'
        }

        const result =  this.products.find( prod => prod.code === product.code )

        if (result) {
            return 'Existe el producto con ese código cambiar'
        }

        if (this.products.length === 0) {
            product.id = 1
            this.products.push( product )             
        }else{
            product.id = this.products.length + 1
            this.products.push( product )
        }      

        return 'producto agregado'

    }

    getProductById(pid){
        const result =  this.products.find(prod => prod.id === pid)
        if (!result) {
            return 'no existe el product'
        }
        return result
    }
    updateProduct(){}
    deleteProduct(){}
}
module.exports = ProductManager
// const products = new ProductManager()
// console.log(products.addProduct({ title: 'producto uno' , description: 'esto es un producto', price: 1000, thumbnail: 'imagen', stock: 150, code: 'abc132'}))
// console.log(products.addProduct({ title: 'producto dos' , description: 'esto es un producto', price: 1000, thumbnail: 'imagen', stock: 150, code: 'abc124'}))
// // console.log(products.getProducts())
// console.log(products.getProductById(3))