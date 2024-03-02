const fs = require('fs')

const path = './src/mockDB/Productos.json'

class ProductManagerFile{
    constructor(){
        this.path = path
    }

    readFile = async () => {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8')
            console.log(data)
            return JSON.parse(data)            
        } catch (error) {
            return []
        }
        
    }

    getProducts = async () => {
        try {
            return await this.readFile()
        } catch (error) {
            return 'No se hay productos'
        }
    }

    
    getProductById = async (id) => {
        try {
            const products = await this.readFile()
            return products.find(product => product.id === id)                     
        } catch (error) {
            return  new Error(error)
        }
    }
    
    
    createProduct = async (newItem) => {
        try {   
            
            let products = await this.readFile()
            // si esta no lo voy a crear 
            const productDb = products.find(product => product.code === newItem.code)
            console.log(productDb)
            if (productDb) {
                return `Se encuenta el producto`
            }

    
            // console.log(products.length)
            if (products.length === 0 ) {
                newItem.id = 1
                products.push(newItem) 
            } else {
                products =  [...products, {...newItem, id: products[products.length - 1].id + 1 } ]
            }

            await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2), 'utf-8')

            return 'Producto agregado'
        } catch (error) {
            return new Error(error)
        }
    }
    
}


module.exports = { ProductManagerFile }