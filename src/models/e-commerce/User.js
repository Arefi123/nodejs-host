const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({ 
    username: { type: String, required: [true, "Username is required"], unique: [true, 'Username must be unique!']},
    email: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    telephone: { type: String, required: true },
    address: { 
        addressLine1: { type: String, required: true },
        addressLine2: { type: String },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
        state: { type: String, required: true },
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    password: { type: String, required: true },
},{ timestamps: true } );

module.exports = mongoose.model('eUser', userSchema)