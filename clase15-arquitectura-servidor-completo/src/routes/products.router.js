const express = require('express')
const ProductController = require('../controllers/products.controller')

const router = express.Router()
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = new ProductController()

router
    .get('/', getProducts)
    .get('/:pid', getProduct)
    .post('/', createProduct)
    .put('/:pid', updateProduct)
    .delete('/:pid', deleteProduct)

module.exports = router
