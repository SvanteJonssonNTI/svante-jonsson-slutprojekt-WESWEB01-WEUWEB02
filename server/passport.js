//Imported Dependencies
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const MongoStore = require("connect-mongo");

exports.init = (app) => { //intializes passport
  app.use(flash());
  app.use(
    session({
      secret: "kronhus",
      resave: true,
      saveUninitialized: true,
      store: MongoStore.create({
        mongoUrl: "mongodb://localhost:27017/",
        dbName: "webshop",
      }),
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(methodOverride("_method"));
};

require("./config/passportConfig")(passport);

exports.passport = passport;
