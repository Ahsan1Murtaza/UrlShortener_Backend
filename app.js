// Third party imports
const express = require('express')
const dotenv = require('dotenv')

// Project imports
const urlRouter = require('./routes/url.route')
const connectToDB = require('./config/db.config')


dotenv.config()
connectToDB()

const app = express()

app.use(express.json())
app.use('/', urlRouter)

app.listen(process.env.PORT, ()=> console.log(`Server Started On Port ${process.env.PORT}`))