const Task = require('../../../backend/database/models/task')

class TaskActions {

    async getAllTask(req, res) {
        const doc = await Task.find({})
        console.log(doc)
        res.status(200).json(doc)
    }

    async addTask(req, res) {
        const first_name = req.body.first_name
        const last_name = req.body.last_name
        const body = req.body.body

        const newTask = new Task({
            first_name,
            last_name,
            body
        })

        await newTask.save()
        res.status(201).json(newTask)
    }

    async deleteTask(req, res) {
        const id = req.params.id
        await Task.deleteOne({
            _id: id
        })
        res.sendStatus(204)
    }

    async deleteAllTask(req, res) {
        const doc = await Task.deleteMany({})
        res.status(200).json(doc)
    }
}

module.exports = new TaskActions()