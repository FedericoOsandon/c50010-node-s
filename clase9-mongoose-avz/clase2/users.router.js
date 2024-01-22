const { Router } = require('express')
const { userModel } = require('../models/users.model')

const router = Router()


// READ _____________________________________________________________________________
// Endpint para solicitar todos los users GET http://localhost:8080/users ? limit=5
router.get('/', async (req, res)=>{  
    try {
        // const users = await userModel.find({first_name: 'Celia'}).explain('executionStats')
        const {
           docs,
           hasPrevPage, 
           hasNextPage,
           prevPage, 
           nextPage,
           page 
        } = await userModel.paginate({}, {limit: 50, page: 2, lean: true})
        res.send({
            status: 'success'
            
        })
    } catch (error) {
        console.log(error)
    }

}) // uid user id


router.get('/:uid', async (req, res)=>{
    const { uid } = req.params
    const user = await userModel.findOne({_id: uid})

    // console.log(req.params)

    res.send(user)
}) 


// Create _____________________________________________________________________________
// crear un usuario
router.post('/', async (req, res)=>{
    const {first_name, last_name, email, password } = req.body
   
    const userNew = {
        first_name,
        last_name,
        email,
        password
    }

    const result = await userModel.create(userNew)

    res.status(200).send({
        status: 'success',
        usersCreate: result
    })
}) //POST  http://localhost:8080/users

// update PUT PATCH _______________________________________________________________________

router.put('/:uid', async (req, res)=>{
    const {uid} = req.params
    const userToUpdate = req.body

    const result = await userModel.findOneAndUpdate({_id: uid}, userToUpdate, {new: true})

    res.status(200).send({
        status: 'success',
        message: result
    })
}) 

// DELETE 

router.delete('/:uid', async (req, res)=>{
    const {uid} = req.params
    const result = await userModel.findByIdAndDelete({_id: uid})
    res.send(result)
})

module.exports = router
