const express = require('express')
const router = express.Router()

const textActions = require('../actions/api/list')


router.get('/task', textActions.getAllTask)

router.post('/task', textActions.addTask)


router.delete('/task/:id', textActions.deleteTask)

router.delete('/task', textActions.deleteAllTask)

module.exports = router