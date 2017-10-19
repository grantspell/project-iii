const express = require('express')
const router = express.Router()
const { User } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
        // Find All Users from `UserModel`
        const users = await User.find({})
        res.json(users)
    } catch (err) {
        res.send(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        // Find A User By The Route ID
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body.user)
        const saved = await newUser.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

router.patch('/:id', async (req, res) => {
    const updatedUser = req.body.user
    const user = await User.findById(req.params.userId)
    user.userName = updatedUser.userName
    const saved = await user.save()
    res.json(saved)
})

router.delete('/:id/account/delete', async (req, res) => {
    const user = await User.findById(req.params.userId)
    user.id(req.params.id).remove()
    const saved = await user.save()
    res.json(saved)
})

module.exports = router