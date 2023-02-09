const express = require('express')
const app = express()
const config = require('./config')


const apiRouter = require('./routes/api')

require('../backend/database/mongoose')

app.use('/api', apiRouter)

app.listen(config, function() {
    console.log('Serwer słucha ...')
})