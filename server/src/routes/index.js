const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    // res.send("<h1>Hello World</h1>")
    res.json({ message: "Home" })
})

module.exports = router