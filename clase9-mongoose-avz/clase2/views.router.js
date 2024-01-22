const {Router} = require('express')
const { userModel } = require('../models/users.model')

const router = Router()

router.get('/', (req, res) => {
    res.render('index')
})
router.get('/users', async (req, res) => {
    const {limit = 10, pageQuery = 1} = req.query
    const {
        docs,
        hasPrevPage, 
        hasNextPage,
        prevPage, 
        nextPage,
        page 
    } = await userModel.paginate({}, {limit, page: pageQuery, sort: {first_name: -1}, lean: true})
    console.log(page)
    res.render('users', {
        users: docs,
        hasPrevPage, 
        hasNextPage,
        prevPage, 
        nextPage,
        page 
    })
})

module.exports = router