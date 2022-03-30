import { Router } from 'express'
const router = Router()

import User from '../models/User'
import { genAccessToken } from '../lib/token'
import { backendConfig } from '../../config/backend'

const INVALID_USER_MESSAGE = 'Invalid email or password'
const ERROR_MESSAGE = 'Something was wrong'

router.post(backendConfig.routes.auth.login, async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) return res.json({ success: false, message: INVALID_USER_MESSAGE }).status(403)

        if (password !== user.password) return res.json({ success: false, message: INVALID_USER_MESSAGE }).status(403)

        const token = genAccessToken({ _id: user._id })

        delete user?.password

        res.json({ success: true, response: { token, user } }).status(200)        
    } catch (error) {
        res.json({ success: false, message: ERROR_MESSAGE, error }).status(500)
    }
})

router.post(backendConfig.routes.auth.register, async (req, res) => {
    const { name, surname, email, password } = req.body

    try {
        const user = new User({
            name,
            surname,
            email,
            password
        })

        await user.save()

        const token = genAccessToken({ _id: user._id })

        delete user?.password

        res.json({ success: true, response: { token, user } }).status(201)        
    } catch (error) {
        res.json({ success: false, message: ERROR_MESSAGE, error }).status(500)
    }
})

export default router