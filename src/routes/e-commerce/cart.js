const router = require('express').Router()
const CartController = require('../../controllers/e-commerce/CartController')

router.post('/', CartController.SaveCart);

module.exports = router;