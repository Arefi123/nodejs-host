const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: "eUser" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    quantity: { type: Number, required: true },
    total: { type: Number, required: true },
    status: { type: Number, default: 1 },
},{ timestamps: true } );

module.exports = mongoose.model('Cart', cartSchema)