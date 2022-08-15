const router = require('express').Router()
const CategoryController = require('../../controllers/e-commerce/CategoryController')

router.post('/', CategoryController.SaveCategory);

module.exports = router;
