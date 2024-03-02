const { Router } = require('express')
const jwt = require('jsonwebtoken')

class RouterClass {
    constructor(){
        this.router = Router()
    }

    getRouter = () => {
        return this.router
    }

    init(){}

    applyCallback(callbacks){
        return callbacks.map(callback => async (...params)=>{
            try {
                await callback.apply(this, params)
            } catch (error) {
                console.log(error)
                params[1].status(500)
            }

        })
    }
    // / res.send
    generateCustomResponses = (req, res, next) => {
        res.sendSuccess = payload => res.send({status: 'success', payload})
        res.sendServerError = error => res.send({status: 'error', error})
        res.sendUserError = error => res.send({status: 'error', error})
    }

    // cookie - headers
    // [ 'PUBLIC' ] [ 'USER' ] [ 'USER_PREIUM' ] [ 'USER_PREIUM', 'ADMIN' ]
    handlePolicies = policies => (req, res, next) => {
        if (policies[0] === 'PUBLIC') next()
        // token = 'BEARER asdflasf./askdfalsfdoajsfdjasofdjoasjf'
        const authHeaders = req.headers.authorization
        const token = authHeaders.split(' ')[1]
        let user = jwt.verify(token, 'palabrasecretaparatoken')
        if(!policies.includes(user.role.toUpperCase())) res.status(403).send({status: 'error', error: 'not permissions'})
        req.user = user
        next()
    }

    get(path, policies,...callbacks){
        this.router.get(path, this.handlePolicies ,this.generateCustomResponses ,this.applyCallback(callbacks))
    }   
    
}

module.exports = RouterClass

// function saludar(...params){} - params = array
// salduar('a', 'b', 'c')