//Imported Dependencies
const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const MongoStore = require("connect-mongo");

//Local Dependecies
const db = require("./dbModule");
const User = require("./models/User");
const loginRegister = require("./loginRegister");

//Variable Initialize
const app = express();
const port = 3000;

//Initialize Passport
require("./config/passportConfig")(passport);

//Connection to database
db.connectToMongoose("webshop");

//SET
app.set("view engine", "ejs");

//USE
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: "kronhus",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/",
      dbName: "Webbshop",
  }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

//GET
app.get("/", checkAuthenticated, (req, res) => {
  res.render("pages/index");
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("pages/login");
});

app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("pages/register");
});

//POST
app.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    db.saveToMongoose(
      loginRegister.createUser(req.body.name, req.body.email, hashedPassword)
    );
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
});

//DELETE
app.delete("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

//LISTEN
app.listen(port, () =>
  console.log(
    `Server listening on port ${port}!\nAccess the site on http://localhost:${port}`
  )
);
