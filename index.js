const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.port || 3000

app.use(bodyParser.json())

const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')


app.get('/', (req, res) => {
    res.send('Server telah jalan cuuuk !!!')
})
app.use(userRoutes)
app.use(productRoutes)

app.listen(port, () => console.log(`server running on port ${port}!!`))