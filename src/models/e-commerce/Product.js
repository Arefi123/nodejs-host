const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({ 
    name: { type: String, required: true },
    desc: { type: String, required: true },
    sku: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "ProductCategory" },
    quantity: { type: Number, required: true },
    price: { type: String, required: true },
    discount: { type: mongoose.Schema.Types.ObjectId, ref: "Discount" },
    
},{ timestamps: true } );

module.exports = mongoose.model('Product', productSchema)