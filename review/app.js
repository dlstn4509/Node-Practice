require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()


require('./modules/sever-init')(app, process.env.PORT)

