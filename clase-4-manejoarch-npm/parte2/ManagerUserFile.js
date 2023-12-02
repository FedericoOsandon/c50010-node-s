const fs = require('node:fs')
const crypto = require('node:crypto')

class UserManagerFile {
    constructor(){
        this.path = './mockDB/Users.json'
    }

    async readFileUsers(){
        try {
            const usersData = await fs.promises.readFile(this.path, 'utf-8')
            const usersJs = await JSON.parse(usersData) 
            return usersJs

        } catch (error) {
            return []
        }
    }

    async createUser(newUser){
        try {
            let usersList = await this.readFileUsers()
            console.log(newUser)
            console.log(usersList)
            newUser.salt = crypto.randomBytes(128).toString('base64')
            newUser.newPass = crypto.createHmac('sha256', newUser.salt).update(newUser.password).digest('hex')
            console.log(newUser)

            usersList.push(newUser)
            await fs.promises.writeFile(this.path, JSON.stringify(usersList, null, 2))
        } catch (error) {
            console.log(error)
        }
    }
    async validateUser(nombre, password){
        try {
            const users = await this.readFileUsers()
            const user = users.find(prod => prod.nombre === nombre )
            // if (!user) {
                
            // }
            const hashPass = crypto.createHmac('sha256', user.salt).update(password).digest('hex')
            if (hashPass === user.newPass) {
                return console.log('Password valid')
            }
            console.log('Password invalid')

        } catch (error) {
            console.log(error)
        }
    }
}

const users = new UserManagerFile()
// console.log(users.createUser({
//     nombre: 'fede',
//     apellido: 'Osandón',
//     username: 'fede user',
//     password: '123456'
// }))

console.log(users.validateUser('fede', '123456'))