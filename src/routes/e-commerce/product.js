const router = require('express').Router()
const ProductController = require('../../controllers/e-commerce/ProductController')

router.post('/', ProductController.SaveProduct);

module.exports = router;