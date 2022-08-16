var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.userId)
  console.log(req.session.isAdmin)
  res.render('index',{title:"edencoffeuae",isUser: req.session.userId, isAdmin: req.session.isAdmin});
})

module.exports = router;
