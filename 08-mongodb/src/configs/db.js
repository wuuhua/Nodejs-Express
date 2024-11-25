require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)

        console.log(`MongoDB 已連結`)
    } catch(err) {
        console.log(`Error: ${err.message}`)
    }
}

module.exports = connectDB