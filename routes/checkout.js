var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cart.controller')
const authGaurd = require('./guards/auth.guard')
router.post("/checkout",cartController.checkout)
module.exports = router;