const express = require('express')
const router = express.Router()

const textActions = require('../actions/api/test')


router.get('/', textActions.homepage)

module.exports = router