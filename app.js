require('dot.env').config()
require('express-async-errors')

const express = require('express')
const app = express()

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.static('./public'))
app.use(express.json())

const port = process.env.PORT || 5000

const start  = async () => {
    try{
        app.listen(port, console.log(`Server listening on port ${port}...`))
    }
    catch(error)
    {
        console.log(error)
    }
}

start()