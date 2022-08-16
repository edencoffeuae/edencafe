var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const flash = require('connect-flash')
var cors = require('cors')

var indexRouter = require('./routes/index');
const breakfastRouter = require('./routes/menu')
const bookRouter = require('./routes/book')
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const cartRouter = require('./routes/cart');
const checkoutRouter = require('./routes/checkout');

const { default: mongoose } = require('mongoose');

var app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'imagesFood')));

app.use(bodyParser.urlencoded({ extended: true }))

/* =============== session & store============== */
const session = require('express-session')
const sessionStore = require("connect-mongodb-session")(session)
const store = new sessionStore({
uri:'mongodb+srv://eden:eden@cluster0.bqfktxm.mongodb.net/eden?retryWrites=true&w=majority',
collection:"sessions",
})
app.use(session({
  secret:"Almaghraby Here !!",
  saveUninitialized:false,
  store:store,
  resave:false
}))
app.use(flash())

/* =============== router ============== */
app.use('/', indexRouter);
app.use('/', breakfastRouter)
app.use('/', bookRouter)
app.use('/', authRouter)
app.use('/', adminRouter)
app.use('/', cartRouter)
app.use('/', checkoutRouter)




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
