require('dotenv') = config()
const path = require('path')
const express = require('express')
const app = express()

app.listen(process.env.PORT, () => {console.log('http://127.0.0.1:' + process.env.PORT)})

