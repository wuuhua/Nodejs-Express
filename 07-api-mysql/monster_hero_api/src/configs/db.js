// const mysql = require('mysql2/promise')

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'M!ku89071522',
//   database: 'test_1120',
// })

// module.exports = pool

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = prisma