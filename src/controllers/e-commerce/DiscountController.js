const Discount = require('../../models/e-commerce/Discount')

exports.SaveDiscount = async (req, res) => {
    const newDiscount = new Discount(req.body);

    try {
        const savedDiscount = await newDiscount.save();
        res.status(200).json(savedDiscount);
    } catch (error) {
        res.status(500).json(error);
    }

}