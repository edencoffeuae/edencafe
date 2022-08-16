var express = require('express');
var router = express.Router();
const {isUser} = require('./guards/auth.guard')
const { bookTable } = require('../controllers/book.controller')

router.post('/book-table',isUser, (req, res, next) => {
    bookTable(req.body).then(res.redirect('/'))
})


module.exports = router;

