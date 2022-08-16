var express = require('express');
var router = express.Router();
const adminController = require("../controllers/admin.controller")
const adminGuard = require('./guards/admin.guard')
const multer = require('multer')

router.get('/admin',adminGuard,adminController.getPageAdmin)
router.post('/admin',adminGuard, multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "imagesFood");
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "-" + file.originalname);
        }
    })
}).single("image"),adminController.addFoods)

module.exports = router;