import { Router } from 'express'

const router = Router()

router
    .get('/', async (request, responses)=>{})
    .post('/', async (request, responses)=>{})
    .get('/:uid', async (request, responses)=>{})
    .put('/:uid', async (request, responses)=>{})
    .delete('/:uid', async (request, responses)=>{})

export default router