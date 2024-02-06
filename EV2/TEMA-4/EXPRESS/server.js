const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(logger)

app.set('view engine', 'ejs')

const userRouter = require('./routes/users')

app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(`Request received: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))