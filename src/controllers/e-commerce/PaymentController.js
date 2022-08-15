const Payment = require('../../models/e-commerce/Payment')

exports.SavePayment = async (req, res) => {
    const newPayment = new Payment(req.body);

    try {
        const savedPayment = await newPayment.save();
        res.status(200).json(savedPayment);
    } catch (error) {
        res.status(500).json(error);
    }

}