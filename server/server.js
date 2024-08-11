require('dotenv').config()
const express = require('express')

const app = express()

const connectDB = require('./utils/db')

PORT = 9000

connectDB().then(app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
}))