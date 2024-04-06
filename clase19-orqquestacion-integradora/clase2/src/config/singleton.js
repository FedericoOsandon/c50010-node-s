const { connect } = require('mongoose') 

class MongoSingleton {
    static #instance 
    constructor(mongo_url){
        connect(mongo_url)
    }

    static getInstance = (mongo_url) => {
        if (this.#instance) {
            console.log('Base de datos ya conectada')
            return this.#instance
        }

        this.#instance = new MongoSingleton(mongo_url)
        console.log('Base de datos conectada')
        return this.#instance
    }

}

module.exports = {
    MongoSingleton
}