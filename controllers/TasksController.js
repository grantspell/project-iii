const express = require('express')
const router = express.Router({mergeParams: true})
const { User, Project, Task } = require('../db/schema')

router.get('/', (req, res) => {
    User.find()
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.post('/', async (req, res) => {
    const newTask = new Task()

    const user = await User.findById(req.params.userId)
    user.projects.task.push(newTask)
    const saved = await user.save()
    res.json(saved)
})

router.patch('/:id', async (req, res) => {
    const updatedProject = req.body.project
    const user = await User.findById(req.params.userId)
    const project = user.projects.id(req.params.usersId)
    project.whatN = updatedProject.whatN
    project.whatV = updatedProject.whatV
    project.projectName = updatedProject.projectName
    const saved = await user.save()
    res.json(saved)
})

router.delete('/:id', async (req, res) => {
    const user = await User.findById(req.params.userId)
    user.projects.id(req.params.id).remove()
    const saved = await user.save()
    res.json(saved)
})

module.exports = router
