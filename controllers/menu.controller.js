const {getAllFoodsByCategory} = require('../models/food')

exports.getPageBreakfast =  (req, res, next) => {
  getAllFoodsByCategory('breakfast').then((breakfast)=>{
    getAllFoodsByCategory('drinks').then((drinks)=>{
     getAllFoodsByCategory('dinner').then((dinner)=>{
      getAllFoodsByCategory('appet').then((appet)=>{
        res.render('menu', { title: "menu-عden",breakfast:breakfast,drinks:drinks,dinner:dinner,appet:appet,isUser: req.session.userId, isAdmin: req.session.isAdmin });
      })
     }).catch(err=>console.log(err))
    }).catch(err=>{console.log(err)})
  }).catch(err=>{console.log(err)})
  
}