const express = require("express")
const app = express()

app.use(logger)

// const firstMiddleware = (req, res, next) => {
//     console.log('first')
//     next()
// }

// const secondMiddleware = (req, res, next) => {
//     console.log('second')
//     next()
// }

// app.use(secondMiddleware)
// app.use(firstMiddleware)

app.get("/", (req, res) => {
    // res.send("<h1>Hello World</h1>")
    res.json({ message: "Home" })
})

app.get("/about", (req, res) => {
    // res.send("<h1>About</h1>")
    res.json({ message: "About" })
})

app.get("/users", auth, (req, res) => {
    console.log("users 頁面")
    // res.send("<h1>Users</h1>")
    res.json({ message: "Users" })
})

function auth (req, res, next) {
    // http://localhost:3100/users?admin=true
    console.log(req.query) // { admin: true }
    // next()

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