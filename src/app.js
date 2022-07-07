const express = require ('express')
const morgan = require ('morgan')
const cors = require ('cors')
const app = express()

//environtment variable 
app.set('port', process.env.PORT || 4000)
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/customers',require('./routes/customers.routes'))

module.exports = app;