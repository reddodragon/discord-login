
const { Router } = require("express")
const{ isAutorized } = require('../utils/auth')

const router = Router()



router.get('/', isAutorized, (req, res) => {
    console.log(req.user)
    res.render('dashboard')
})



module.exports = router