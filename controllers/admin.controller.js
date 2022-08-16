const foodModel = require('../models/food')

exports.getPageAdmin = (req, res, next) => {
    res.render('admin', { title: "3den-Admin", isUser: req.session.userId, isAdmin: req.session.isAdmin })
}
exports.addFoods = (req, res, next) => {
    req.body.image = req.file.filename
    foodModel.addFoods(req.body).then(()=>{
        res.redirect('/menu')
    }).catch(err => res.redirect('/admin'))
}
