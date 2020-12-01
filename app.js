var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user-route');
var shopRouter = require ('./routes/shop-route');
var productRouter = require('./routes/product-route');
var categoryRouter = require('./routes/category-route');


var db = require("./DB/app");
db.on("error", console.error.bind(console, "mongoDB connection error"));
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(cors());
// {
//   origin: ["https://web.postman.co"]
// }
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Added to serve client static files
app.use(express.static(path.resolve(__dirname, "client/build")));

app.use('/', indexRouter);
app.use('/api/user', userRouter);
app.use('/api/shop', shopRouter);
app.use('/api/product',productRouter);
app.use('/api/category',categoryRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
