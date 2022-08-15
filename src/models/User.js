const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({ 
    username: { type: String, required: true, unique: true},
    email: { type: String, unique: true, required: true },
    isAdmin: {
        type: Boolean,
        default: false
    },
    password: { type: String, required: true },
    createdAt: { type: Date, default: new Date() }
});

module.exports = mongoose.model('User', userSchema)