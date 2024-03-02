const jwt = require('jsonwebtoken')
const { configObject } = require('../config/connectDB')

const { jwt_secret_Key } = configObject

const generateToken = (user) => jwt.sign(user, jwt_secret_Key, {expiresIn: '24h'})

const authTokenMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization']
    // console.log(req.headers)

    if(!authHeader) return res.status(401).send({status: 'error', message: 'no token'})
    // {'atuhorization': 'BEARER aslkdfkasj.fas/faslkdfhasjkhfdkasjhfihasdfhka'}
// ['BEARER', 'faksjhdfasfasfhashjfa/ahsfakshfdiashfaa;a;fhakh']
    const token = authHeader.split(' ')[1]

    jwt.verify(token, private_key, (error, decodeUser) => {
        if (error) return res.status(401).send({status: 'error', message: 'no athorizated'}) 

        req.user = decodeUser
        next()
    })


}
    

module.exports = { 
    generateToken, 
    authTokenMiddleware
}