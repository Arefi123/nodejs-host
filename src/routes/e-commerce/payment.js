const router = require('express').Router()
const PaymentController = require('../../controllers/e-commerce/PaymentController')

router.post('/', PaymentController.SavePayment);

module.exports = router;