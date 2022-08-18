const { getAllFoodsByCategory } = require('../models/food')

exports.getPageBreakfast = (req, res, next) => {
  getAllFoodsByCategory('breakfast').then((breakfast) => {
    getAllFoodsByCategory('drinks').then((drinks) => {
      getAllFoodsByCategory('dinner').then((dinner) => {
        getAllFoodsByCategory('appet').then((appet) => {
          res.render('menu', { title: "menu-عden", breakfast: breakfast, drinks: drinks, dinner: dinner, appet: appet, isUser: req.session.userId, isAdmin: req.session.isAdmin });
        })
      }).catch(err => console.log(err))
    }).catch(err => { console.log(err) })
  }).catch(err => { console.log(err) })
}

exports.getFood = (req, res, next) => {
  getAllFoodsByCategory('main').then((main) => {
    getAllFoodsByCategory('popular').then((popular)=>{
      res.render('index', { title: "edencoffeuae", isUser: req.session.userId, isAdmin: req.session.isAdmin, main: main,popular:popular});
    })
  }).catch(err => {
    console.log(err)
  })
}