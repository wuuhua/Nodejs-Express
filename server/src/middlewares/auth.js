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

module.exports = auth