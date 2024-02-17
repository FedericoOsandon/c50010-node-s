import jwt from 'jsonwebtoken'

export const PRIVATE_KEY = 'estaEsl@cl@vEpara3lToken'


/// { id, role, role }
export const generateToken = user => jwt.sign(user, this.PRIVATE_KEY, {
    expiresIn: '1d'
})

