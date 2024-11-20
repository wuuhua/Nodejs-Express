const express = require("express")
const app = express()

app.use(logger)

app.get("/", (req, res) => {
    // res.send("<h1>Hello World</h1>")
    res.json({ message: "Home" })
})

app.get("/products", auth, (req, res) => {
    res.json(
        { products: [
            {
                id: 1,
                name: "apple"
            },
            {
                id: 2,
                name: "banana"
            },
            {
                id: 3,
                name: "coconut"
            }
        ]})
})

function auth (req, res, next) {
    // http://localhost:3100/products?admin=true
    console.log(req.query) // { admin: true }

    if(req.query.admin === 'true') {
        next()
        return
    }
    // res.send('<h1>沒有權限</h1>')
    res.json({ message: "沒有權限" })
}

function logger(req, res, next) {
    console.log("log")
    next()
}

app.listen(3100)