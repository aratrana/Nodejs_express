var createError = require("http-errors");
var express = require("express");
const { expressCspHeader, INLINE, NONE, SELF } = require("express-csp-header");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var passportConfig = require("./config");
var rateLimit = require("express-rate-limit");

//==============PASSPORT FILES ========//
var session = require("express-session");
var passport = require("passport");
var GitHubStrategy = require("passport-github").Strategy;
//=====================
var indexRouter = require("./routes/index");
//var usersRouter = require("./routes/users");
var helmet = require("helmet");
var app = express();
const limiter = rateLimit({
  windowsMs: 60 * 1000, // keep only 1 minute
  max: 500,
  message: "Too many requests",
});

app.use(limiter);
app.use(helmet());
app.use(logger("combined"));

// ========== PASSPORT CONFIG!========
app.use(
  session({
    secret: "Express is good",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new GitHubStrategy(passportConfig, function (
    accessToken,
    refreshToken,
    profile,
    cb
  ) {
    /*User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });*/
    console.log(profile);
    return cb(null, profile);
  })
);
passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});
//===============
app.use(
  expressCspHeader({
    policies: {
      "default-src": [expressCspHeader.NONE],
      "img-src": [expressCspHeader.SELF],
    },
  })
);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
//app.use("/users", usersRouter);

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
