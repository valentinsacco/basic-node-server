import jwt from 'jsonwebtoken'

const secret = process.env.TOKEN_SECRET || 'test token secret'

export const genAccessToken = (payload, expires = 60 * 60 * 24 * 7) => {
    return jwt.sign(payload, secret, { expiresIn: expires }) 
}

export const validateAccessToken = (payload) => {
    return jwt.verify(payload, secret)
}