const router = require('express').Router()
const OrderController = require('../../controllers/e-commerce/OrderController')

router.post('/', OrderController.SaveOrder);

module.exports = router;