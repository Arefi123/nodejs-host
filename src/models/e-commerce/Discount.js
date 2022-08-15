const mongoose = require('mongoose');
const discountSchema = new mongoose.Schema({ 
    name: { type: String, required: true },
    desc: { type: String, required: true },
    discountPercent: { type: SchemaTypes.Double, required: true },
    active: { type: Boolean, default: true },
    status: { type: Number, default: 1 },
},{ timestamps: true } );

module.exports = mongoose.model('Discount', discountSchema)