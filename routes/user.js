const express = require('express')
const path = require('path')
const router = express.Router()

const users = [
    { username: "Raphael", email: "raphael@gmail.com" },
    { username: "Michelangelo", email: "michelangelo@gmail.com" },
    { username: "Leonardo", email: "leonardo@gmail.com" },
    { username: "Donetello", email: "donetello@gmail.com" },
    { username: "Splinter", email: "splinter@gmail.com" },
    { username: "Shredder", email: "shredder@gmail.com" }
]

router.get('/', (req, res, next) => {
    res.render("users", { users: users, docTitle: "Users"})
})

router.post('/add-user', (req, res, next) => {
    users.push(req.body)
    console.log(users)
    res.redirect('/user')
})

module.exports = router