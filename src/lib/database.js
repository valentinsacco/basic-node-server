import { connect } from 'mongoose'

const MONGODB_URI = process.env.DB_URI || ''

if (MONGODB_URI) {
    (async () => {
        try {
            const connection = await connect(MONGODB_URI)
            console.log(`Database connected on ${connection.connection.host}`)
        } catch (error) {
            throw new Error(`Failed to connect to ${MONGODB_URI}`)
        }
    })()
} else {
    console.log('Database URI not provided')
}