const express = require('express')
const router = express.Router({mergeParams: true})
const { User, Project } = require('../db/schema')

router.post('/', async (req, res) => {
    const newProject = new Project()

    const user = await User.findById(req.params.userId)
    user.projects.push(newProject)
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

/* const ProjectSchema = new Schema({
    whatN: {
        type: String,
        default: 'What(n.)'
    },
    whatV: {
        type: String,
        default: 'What(v.)'
    },
    projectName: '',
    projectStatus: {
        type: String,
        default: 'INCOMPLETE'
    },
    tasks: [TaskSchema]
}) */