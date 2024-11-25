const express = require('express')
const connectDB = require('./src/configs/db')
const userRoutes = require('./src/routes/user')

const app = express()
app.use(express.json()) // 處理JSON

connectDB()

app.use('/api', userRoutes)

const PORT = 3100
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})