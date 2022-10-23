const express = require('express')
// calling express
const router = express.Router()
// calling Router => this is what helps us do the magic that we do with Routers
const authController = require('../controllers/auth') 
// this sets up auth for us
const homeController = require('../controllers/home')
// this sets up our home controller
const { ensureAuth, ensureGuest } = require('../middleware/auth')
// this calls the ensureAuth from the auth.js middleware

router.get('/', homeController.getIndex)
// this sends from home page to homeController and calls getIndex
router.get('/login', authController.getLogin)
// this goes to the Controller auth and calls getLogin when you go to /login
router.post('/login', authController.postLogin)
// this goes to the Controller auth and calls postLogin when you go to /login
router.get('/logout', authController.logout)
// this is when you press logout
router.get('/signup', authController.getSignup)
// this is when he wants SignUp get request
router.post('/signup', authController.postSignup)
// this is when he wants signup with post request

module.exports = router