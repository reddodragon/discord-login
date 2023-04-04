const { Router } = require("express")
const { isNotAutorize } = require("../utils/auth")
const router = Router()

router.get('/', isNotAutorize, (req, res) => {
    res.render('home')
})

module.exports = router