const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({ 
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    paymentType: { type: String, required: true },
    cardName: { type: String, required: true },
    accountNumber: { type: Number, required: true },
    expiry: { type: Date, required: true },
    amount: { type: Number, required: true },
    status: { type: Number, default: 1 },
},{ timestamps: true } );

module.exports = mongoose.model('Payment', paymentSchema)