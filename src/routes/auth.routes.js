const { Router } = require("express")
const { isNotAutorize, isAutorized } = require("../utils/auth")
const router = Router()


const passport = require('passport')

router.get('/', isNotAutorize, passport.authenticate('discord'))

router.get('/redirect', passport.authenticate('discord', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
}))

router.get('/logout', isAutorized,  (req, res) => {
    req.logOut()
    res.redirect('/')

})

module.exports = router