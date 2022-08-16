const authModel = require('../models/auth')
exports.getPageLogin = (req, res, next) => {
    res.render('auth/login', {
        title: "3den-Login", authError: req.flash("authError")[0], isUser: req.session.userId, isAdmin: req.session.isAdmin
    })
}
exports.postLoginAccount = (req, res, next) => {
    authModel.loginUser(req.body.email, req.body.password)
        .then((resualt) => {
            req.session.userId = resualt.id
            req.session.isAdmin = resualt.isAdmin
            res.redirect("/");
        })
        .catch((err) => {
            req.flash("authError", err);
            res.redirect("/login");
        });
}
exports.getPageRegister = (req, res, next) => {
    res.render('auth/register', { title: "3den-Register", isUser: req.session.userId, isAdmin: req.session.isAdmin ,registerError:req.flash("registerError")[0]})
}
exports.postCreateAccount = (req, res, next) => {
    authModel.createUser(res,req.body).then(()=>{
        res.redirect('/login')
    }
    ).catch(err =>{
        req.flash("registerError", err);
        return res.redirect("/register")
    }
    )

}
exports.verify = (req, res, next) => {
    authModel.verify(req.params.email).then(()=>{
        res.redirect('/login')
    }).catch(err => res.redirect('/register'))
}
exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
};