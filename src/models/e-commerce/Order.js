const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: "eUser" },
    payment: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    quantity: { type: Number, required: true },
    status: { type: Number, default: 1 },
},{ timestamps: true } );

module.exports = mongoose.model('Order', orderSchema)