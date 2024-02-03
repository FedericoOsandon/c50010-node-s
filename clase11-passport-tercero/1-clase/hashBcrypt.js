const bcrypt = require('bcrypt')

const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

const isValidPassword = (password, passwordUser) => {
    console.log(password, passwordUser)
    return bcrypt.compareSync(password, passwordUser)
}

module.exports = {
    createHash,
    isValidPassword
}