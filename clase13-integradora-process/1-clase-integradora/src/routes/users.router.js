import { Router } from 'express'
import { userModel } from '../models/user.model.js'
import { passportCall } from '../middleware/pasportCall.js'
import { authorization } from '../middleware/authentication.js'
export const usersRouter = Router()

usersRouter
    .get('/', passportCall('jwt'), authorization( ['USER_PREMIUM', 'ADMIN'] ) ,async (request, responses)=>{
        try {
            const users = await userModel.find({isActive: true})
            responses.json({
                status: 'success',
                result: users
            })
        } catch (error) {
            console.log(error)
        }
    })
    .post('/', async (request, responses)=>{
        try {
            const { body } = request
            const result = await userModel.create(body)

            responses.send({
                status: 'success',
                result
            })
        } catch (error) {
            console.log(error)
        }
    })
    .get('/:uid', async (request, responses)=>{
        try {
            const { uid } = request.params
            const user = await userModel.findOne({_id: uid})
            responses.json({
                status: 'success',
                result: user
            })
        } catch (error) {
            console.log(error)
        }
    })
    .put('/:uid', async (request, responses)=>{
        try {
            responses.send('update user')
        } catch (error) {
            console.log(error)
        }
    })
    .delete('/:uid', async (request, responses)=>{
        try {
            const {uid} = request.params
            const result = await userModel.findByIdAndUpdate({_id:uid}, {isActive: false})
            responses.send('delete user')
        } catch (error) {
            console.log(error)
        }
    })

    // messages - post get