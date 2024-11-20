const express = require("express")
const router = express.Router()
const auth = require("../middlewares/auth.js")

router.get("/products", auth, (req, res) => {
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

module.exports = router