const express = require("express")
const app = express()
const indexRouter = require("./src/routes/index.js")
const productsRouter = require("./src/routes/products.js")
const logger = require("./src/middlewares/logger.js")

app.use(logger)

app.use(indexRouter)
app.use(productsRouter)

app.listen(3100)