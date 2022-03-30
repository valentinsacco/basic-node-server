import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: { type: String },
    surname: { type: String },
    email: { type: String },
    password: { type: String },
    created_at: { type: Date, default: Date.now() }
}, {
    versionKey: false,
    timestamps: false
})

export default model('User', userSchema)