const express = require('express')
const router = express.Router()
const { register } = require('../controllers/auth_controller')

router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body

        if(!email || !username || !password) {
            return res.status(400).json ({
                success: false,
                message: '請填寫完整資料'
            })
        }

        const result = await register(email, username, password)
        res.json({ success:true, ...result })
    } catch(err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router