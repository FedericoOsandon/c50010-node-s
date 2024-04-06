const {Router} = require('express')

const router = Router()

router.use('/', (req, res) => {
    res.render('index', {
        username: 'Federico'
    })
})

module.exports = router