const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    username: String,
    password: String,
    role: {
        type: String,
        enum: ['Admin', 'Manager', 'Employee'],
        default: 'Employee',
    },
    passwordChangedAt: Date,
})

module.exports = mongoose.model('User', UserSchema)
