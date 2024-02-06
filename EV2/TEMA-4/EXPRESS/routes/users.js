const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('User list')
})

router.get('/new', (req, res) => {
    res.render('users/new', { firstName: 'TestFirstName', lastName: 'TestLastName' })
})

router.post('/', (req, res) => {
    console.log(req.body.firstName)
    res.send("Hi!")
})

router.route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`User detail ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User detail ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User detail ${req.params.id}`)
    })

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
]

router.param("id", (req, res, next, id) => {
    req.user = users.find(user => user.id === parseInt(id))
    next()
})

module.exports = router
