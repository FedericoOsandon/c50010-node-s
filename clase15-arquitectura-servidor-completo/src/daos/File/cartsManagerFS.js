const fs = require('node:fs/promises')

class CartsManagerFS {
    constructor(){
        this.path = './src/jsonDb/Carts.json' 
    }

    async readFile(){
        try {
            const dataCarts = await fs.readFile(this.path, 'utf-8') 
            return JSON.parse(dataCarts)
        } catch (error) {
            return []
        }
    }
// [{},{}] -> {id: 3}
    async createCart(){
        try {
            const carts = await this.readFile()
            let newCart = {
                id: carts.length + 1,
                products : []
            }
            carts.push(newCart)
            await fs.writeFile(this.path, JSON.stringify(carts, null, 2), 'utf-8')
            return newCart
        } catch (error) {
            return `Error al crear un carts ${error}`
        }
    }
    async getCartById(cid){
        try {
            const carts = await this.readFile()
            const cart = carts.find(cart => cart.id=== cid)

            if (!cart) {
                return 'No se encuentra el product'
            }
            return cart
        } catch (error) {
            console.log(error)
        }
    }
    async addProductToCart(cid, pid){
        try {
            const carts = await this.readFile()
            const cartIdx = carts.findIndex(cart => cart.id=== cid)

            if(cartIdx === -1){
                return 'no existe el carrito'
            }
            // parado en         
            const productIdx = carts[cartIdx].products.findIndex(produc => produc.product === pid)
            if(productIdx === -1){            
                carts[cartIdx].products.push({
                    product: pid,
                    quantity: 1
                })
            }else{            
                carts[cartIdx].products[productIdx].quantity += 1
            }

            await fs.writeFile(this.path, JSON.stringify(carts, null, 2), 'utf-8')
            return carts[cartIdx]
        } catch (error) {
           return error
        }
        
    }
}

module.exports = CartsManagerFS


























