const mongoose = require('mongoose')
const { database } = require('../config')

mongoose.connect(database, {

})


const Task = mongoose.model('Task', {
    first_name: String,
    last_name: String,
    body: String
})


const newTask = new Task ({
    first_name: 'Tomek',
    last_name: 'Kowalski', 
    body: 'Podpinamy bazę danych'
})

newTask.save().then(() => {
    console.log('Zadanie zapisane')
})