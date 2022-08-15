const router = require('express').Router()
const DiscountController = require('../../controllers/e-commerce/DiscountController')

router.post('/', DiscountController.SaveDiscount);

module.exports = router;