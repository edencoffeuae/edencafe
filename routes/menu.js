var express = require('express');
var router = express.Router();
const breakfastController = require('../controllers/menu.controller')
router.get('/menu',breakfastController.getPageBreakfast);
module.exports = router;
