import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: Striing,
        required: true,
        unique: true,
    },
    email: {
        type: Striing,
        required: true,
        unique: true,
    },
    password: {
        type: Striing,
        required: true,
    },

}, {timestamp: true})

const User = mongoose.model('User', userSchema)

export default User