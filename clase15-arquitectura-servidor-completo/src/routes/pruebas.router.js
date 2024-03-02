const {Router} = require('express')
const { fork } = require('child_process')

const router = Router()

const operacionCompleja = () => {
    let result = 0

    for (let i = 0; i < 7e9; i++) {
        result += i        
    }

    return result
}

router.get('/block', (req, res) => {
    const result = operacionCompleja()

    res.send({result})

})


router.get('/noblock', (req, res) => {
    const child = fork('./src/routes/operacionCompleja.js')

    child.send('Icicializa el cálculo por favor')

    child.on('message', result => {
        res.send({result})        
    })


})



















// expresiones regulares regex
// %C3%A1 -> á
// %C3%A9
// %C3%AD
// %C3%B3
// %C3%BC
// router.param('parametro', async (req, res, next, parametro)=>{
//     console.log(parametro)
//     next()
// })

// router.get('/:parametro([a-zA-Z%C3%A1%C3%A9]+)', (req, res) => {
//     res.send(req.params.parametro)
// })
// router.get('/:pid([a-zA-Z0-9]+))', (req, res) => {
//     res.send(req.params.parametro)
// })

module.exports = router