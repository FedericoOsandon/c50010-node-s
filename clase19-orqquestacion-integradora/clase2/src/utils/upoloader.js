const multer = require('multer')
const {dirname} = require('node:path')
 
// para que todo se guarde en disco de nuestro local
// console.log(`${dirname(__dirname)}/public/uploads`)
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, `${dirname(__dirname)}/public/uploads`)
    }, // function(){} - ()=>{} scope this
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`) // timestam
    }
})

const uploader = multer({
    storage,
    onError: function (error, next) {
        console.log(error)
        next()
    }
})

module.exports = {
    uploader
}