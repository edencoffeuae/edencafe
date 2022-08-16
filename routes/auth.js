var express = require('express');
var router = express.Router();
const check = require('express-validator').check
const authController = require("../controllers/auth.controller")
const authGaurd = require('./guards/auth.guard')

router.get('/login',authGaurd.notUser, authController.getPageLogin)
router.post('/login',authGaurd.notUser, authController.postLoginAccount)
router.get('/register',authGaurd.notUser, authController.getPageRegister)
router.post('/register',authGaurd.notUser,authController.postCreateAccount)
router.post('/confirm/:email/:id',authGaurd.notUser, authController.verify)
router.all('/logout',authGaurd.isUser,authController.logout)

module.exports = router;
