var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cart.controller')
const authGaurd = require('./guards/auth.guard')

router.get("/add-cart/",authGaurd.isUser,cartController.getCart)
router.post("/add-cart/:id",authGaurd.isUser,cartController.addCart)
router.post('/add-cart/delete-item-cart/:userId/:productId',cartController.deleteItem)
router.post('/delete-cart/:id',cartController.deleteMenu)

module.exports = router;