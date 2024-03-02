const { productService } = require("../repositories")


class ProductController {
    constructor(){
        this.service = productService
    }

    getProducts    = async (req, res) => {
        try {
            const products = await this.service.getProducts()
            res.send({
                status: 'success',
                payload: products
            })
        } catch (error) {
            res.send(error)
        }
    }
    getProduct  = async (req, res) => {
        try {
            const { pid } = req.params
            const products = await this.service.getProduct(pid)
            res.send({
                status: 'success',
                payload: product
            })
        } catch (error) {
            res.send(error)
        }
    }
    createProduct  = async (req, res) => {
        try {
            const { body } = req
            const result = await this.service.createProduct(body)
            res.send({
                status: 'success',
                payload: result
            })
        } catch (error) {
            res.send(error)
        }
    }
    updateProduct  = async (req, res) => {
        try {
            const { pid } = req.params
            const { body } = req

            const result = await this.service.updateProduct(pid, body)
            res.send({
                status: 'success',
                payload: result
            })
        } catch (error) {
            res.send(error)
        }
    }
    deleteProduct  = async (req, res) => {
        try {
            const { pid } = req.params
           

            const result = await this.service.deleteProduct(pid)
            res.send({
                status: 'success',
                payload: result
            })
        } catch (error) {
            res.send(error)
        }
    }   
    
}

module.exports = ProductController