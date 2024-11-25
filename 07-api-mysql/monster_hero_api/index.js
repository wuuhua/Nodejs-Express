const express = require('express')
const app = express()
const cors = require('cors')
const heroesRouter = require('./src/routes/heroes')
const monstersRouter = require('./src/routes/monsters')

// app.use(cors())
app.use(cors({
  origin: 'http://localhost:5173', // 只給此網域使用 server 
  methods: ['GET', 'POST', 'PUT', 'DELETE'] // 限定前端使用的方法
}))

app.use(express.json())
app.use('/heroes', heroesRouter)
app.use('/monsters', monstersRouter)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})