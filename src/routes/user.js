import { Router } from 'express'
const router = Router()

import User from '../models/User'

import { backendConfig } from '../../config/backend'

const ERROR_MESSAGE = 'Something was wrong'
const USER_NOT_FOUND_MESSAGE = 'User not found'

router.get(backendConfig.routes.users.get, async (req, res) => {
    try {
        const users = await User.find()

        users.forEach(user => {
            delete user?.password
        })

        res.json({ success: true, response: users }).status(200)
    } catch (error) {
        res.json({ success: false, message: ERROR_MESSAGE, error }).status(500)
    }
})

router.get(backendConfig.routes.users.get_one, async (req, res) => {
    const { userid } = req.params
    try {
        const user = await User.findById(userid)

        if (!user) return res.json({ success: false, message: USER_NOT_FOUND_MESSAGE }).status(404)
        
        delete user?.password

        res.json({ success: true, response: user }).status(200)
    } catch (error) {
        res.json({ success: false, message: ERROR_MESSAGE, error }).status(500)
    }
})

router.patch(backendConfig.routes.users.patch, async (req, res) => {
    const { userid, user } = req.body
    try {
        const user = await User.findByIdAndUpdate(userid, user)

        delete user?.password

        res.json({ success: true, response: user }).status(200)  
    } catch (error) {
        res.json({ success: false, message: ERROR_MESSAGE, error }).status(500)
    }
})

router.delete(backendConfig.routes.users.delete, async (req, res) => {
    const { userid } = req.params
    try {
        const user = await User.findByIdAndDelete(userid)

        delete user?.password

        res.json({ success: true, response: user }).status(200)  
    } catch (error) {
        res.json({ success: false, message: ERROR_MESSAGE, error }).status(500)
    }
})

export default router