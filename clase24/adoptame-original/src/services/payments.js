const Stripe = require('stripe')

class PaymentService {
    constructor(){
        this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    }

    createPaymentIntent = async (data) => {
        return await this.stripe.paymentIntents.create(data)       
    }
}

module.exports = {
    PaymentService
}