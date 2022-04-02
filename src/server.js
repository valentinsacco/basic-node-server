import express from 'express'
import compression from 'compression'
import morgan from 'morgan'
import { config } from 'dotenv'

config()

import userRoute from './routes/user'

const app = express()

app.set('PORT', process.env.PORT || 4200)

app.use(express.json())
app.use(express.text())
app.use(compression())
app.use(morgan('dev'))

app.use('/api', userRoute)

export default app