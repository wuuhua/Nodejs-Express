const { PrismaClient } = require('@prisma/client')
const {
    hashPassword,
    comparePassword,
    generateToken
} = require('../utils/auth_util')

const prisma = new PrismaClient()

// 註冊
const register = async (email, username, password) => {
    const hashedPassword = await hashPassword(password)

    try {
        const result = await prisma.$transaction(async (tx) => { // prisma 同步兩個table的建立
            const user = await tx.users.create({
                data: {
                    email,
                    username
                }
            })

            await tx.user_auth.create({
                data: {
                    user_id: user.id,
                    auth_type: 'local',
                    auth_email: email,
                    password_hash: hashedPassword
                }
            })

            return user
        })

        return { token: generateToken(result.id), user: result }
    } catch(err) {
        if(err.code === 'P2002') { // prisma 資料重複代碼
            console.error('Email 或 username 重複')
        }
        console.error(err.message)
    }
}

module.exports = {
    register
}