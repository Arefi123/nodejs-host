const mongoose = require('mongoose');
const productCategorySchema = new mongoose.Schema({ 
    name: { type: String, required: true },
    desc: { type: String, required: true },
    status: { type: Number, default: 1 },
},{ timestamps: true } );

module.exports = mongoose.model('ProductCategory', productCategorySchema)