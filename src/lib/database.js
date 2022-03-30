import { connect } from 'mongoose'

const DATABASE_URI = process.env.DB_URI || ''

if (DATABASE_URI) {
    (async () => {
        try {
            const connection = await connect(DATABASE_URI)
            console.log(`Database connected on ${connection.connection.host}`)
        } catch (error) {
            throw new Error(`Failed to connect to ${DATABASE_URI}`)
        }
    })()
} else {
    console.log('Database URI not provided')
}