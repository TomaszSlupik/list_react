const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    first_name: String,
    last_name: String,
    body: String
})

module.exports = Task