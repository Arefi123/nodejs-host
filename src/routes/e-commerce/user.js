const router = require('express').Router()
const UserController = require('../../controllers/e-commerce/UserController')

router.post('/', UserController.SaveUser);

module.exports = router;