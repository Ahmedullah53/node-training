const express = require("express")
const bodyParser = require("body-parser")
const userRoutes = require("./routes/user")
const path = require("path")

const app = express()
const port = 3000

app.set("view engine", "pug")
app.set("views", "views")

app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname, "css")))

app.use('/user', userRoutes)

app.get('/',(req, res, next) => {
    res.render("main")
})

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "404.html"))
})
app.listen(port, () => console.log(`Example app listening on port port!`))