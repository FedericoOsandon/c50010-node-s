const RouterClass = require("./router.js");

class UserRouter extends RouterClass {
    init(){
        this.get('/', ['PUBLIC'], async (req, res)=>{
            try {


                res.sendSuccess('get users')
                
            } catch (error) {
                res.sendServerError(error.message)
            }
        })
    }
}

module.exports = UserRouter