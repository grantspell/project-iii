const express = require('express')
const { User } = require('../db/schema')
const router = express.Router()

router.get('/', (req, res) => {
    User.find()
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/:id', async (req, res) => {
    try {
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

module.exports = router