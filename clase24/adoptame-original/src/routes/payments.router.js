const {Router} = require('express')
// module de payments Service
const { PaymentService } = require('../services/payments')

const router = Router()

const products = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
]

router.post('/payment-intents', async (req, res) => {
    const { id } = req.query
    // treae el producto de la base de datos
    const productRequested = products.find(product => product.id === parseInt(id))
    console.log(productRequested)
    if(!productRequested) return res.status(404).send({status: "error", error: 'product not found'})

    const paymentIntentInfo = {
        amount: productRequested.price,
        currency: 'usd',
        metadata: {
            userId: 'Id.autogenerado-por-mongo',
            orderDetail: JSON.stringify({
                [productRequested.name]: 2
            }, null, '\t'),
            adress: JSON.stringify({
                street: 'CAlle de prueba',
                postalCode: '08191',
                externalNumber: '131321321'
            }, null, '\t')
        }
    }

    const service = new PaymentService()
    let result = await service.createPaymentIntent(paymentIntentInfo)


    res.send({status: 'success', payload: result})
})

module.exports = router