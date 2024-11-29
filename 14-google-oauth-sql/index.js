const express = require('express')
const authRouter = require('./routes/auth_route')

const app = express()

app.use('/auth', authRouter)

app.listen(3000, () => { console.log('Server is running') })