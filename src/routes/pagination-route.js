const router = require('express').Router()
const PaginationController = require('../controllers/PaginationTestController')

router.get('/pagination-test', PaginationController.getAllProductStatic);
router.get('/pagination-route', PaginationController.getAllProduct);

module.exports = router;