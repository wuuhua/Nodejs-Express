const express = require("express")
const app = express()
const indexRouter = require("./src/routes/index.js")

app.use(express.json())
app.use("/api", indexRouter)

app.listen(3000)