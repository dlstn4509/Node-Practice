const path = require('path')
const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util-module')
const { pool } = require('../../modules/mysql-module')

const formRouter = require('./form-router')
const saveRouter = require('./save-router')
const listRouter = require('./list-router')

router.use('/form', formRouter)
router.use('/save', saveRouter)
router.use('/list', listRouter)

module.exports = router