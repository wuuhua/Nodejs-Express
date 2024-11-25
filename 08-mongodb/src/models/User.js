const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, '請輸入使用者名稱'],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        require: [true, '請輸入信箱'],
        unique: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)