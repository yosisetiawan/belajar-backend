const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.port || 3000
const iniAuth = require('./../middleware').authentication

app.use(bodyParser.json())

const productController = require('../controllers/productController')

app.group("/api/v1/", (router) => {
    router.get('/products', productController.index)
    router.get('/products/:id', productController.show)
    router.post('/product',iniAuth, productController.store)
    router.patch('/product/:id', productController.update)
    router.delete('/produc/:id', productController.destroy)
})

module.exports = app