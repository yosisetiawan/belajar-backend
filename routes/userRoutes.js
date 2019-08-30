const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.port || 3000

const iniAuth = require('../middleware').authentication

app.use(bodyParser.json())

const userController = require('../controllers/userController')

app.group("/api/v1/", (router) => {
    router.get('/users', userController.index)
    router.get('/users/:id', userController.show)
    router.post('/user', userController.store)
    router.patch('/user/:id', userController.update)
    router.delete('/user/:id', userController.destroy)
    router.get('/token',userController.thisjwt)
    router.post('/login',userController.login)
})

module.exports = app