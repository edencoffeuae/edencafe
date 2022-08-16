const { format } = require('morgan')
const cartModel = require('../models/cart')
const menuModel = require('../models/food')

const orderMessage = require('./checkout.controller') 
exports.addCart = (req, res, next) => {
    cartModel.addCartItem({
        name: req.body.name,
        price: req.body.price,
        desc: req.body.desc,
        image: req.body.image,
        userId: req.session.userId,
        productId: req.body.id,
        amount: 1,
        timestamp: Date.now()
    }).then(()=>{
        res.redirect('/add-cart')
    }).catch(err => console.log(err))
}
exports.getCart = (req, res, next) => {
    cartModel.getCartItems(req.session.userId).then((items)=>{
        res.render('cart',{items:items,title:"Cart",isUser: req.session.userId, isAdmin: req.session.isAdmin})
    }).catch(err=>console.log(err))
}
exports.deleteItem = (req, res, next) => {
    const userId = req.params.userId
    const productId = req.params.productId
    cartModel.deleteItem(userId,productId).then(()=>{
        res.redirect('/add-cart')
    }).catch(err=>console.log(err))
}
exports.deleteMenu = (req, res, next) => {
    menuModel.deleteMenu(req.params.id).then(()=>{
        res.redirect('/menu#breakfast')
    }).catch(err=>console.log(err))
}
exports.checkout = (req, res, next) => {
    cartModel.getCartItems(req.session.userId).then((items)=>{
        orderMessage.order(req.body,items).then(
                cartModel.deleteCart(req.session.userId).then(res.redirect('/'))
        ).catch(err=>console.log(err))
    })
}