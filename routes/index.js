var express = require('express');
var router = express.Router();
const {getFood} = require('../controllers/menu.controller')
/* GET home page. */
router.get('/',getFood)

module.exports = router;
