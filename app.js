const bodyParser = require('body-parser')
const path = require('path')
const mainRouter = require('./routes/main')
const errorRouter = require('./routes/error')
const mongoConnect = require('./util/database').mongoConnect
const express = require('express')

const app = express()

const port = 3000

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, 'css')))

app.use(mainRouter)
app.use(errorRouter)

mongoConnect(() => {
    app.listen(port, () => console.log(`App running on port ${port}`))
    console.log('connected')
})