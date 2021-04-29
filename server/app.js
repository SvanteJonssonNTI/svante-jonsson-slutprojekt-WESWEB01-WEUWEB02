//Imported Dependencies
const express = require("express");

//Local Dependecies
const db = require("./dbModule");
const User = require("./models/User");
const loginRegister = require("./loginRegister");
const passport = require("./passport");

//Variable Initialize
const app = express();
const port = 3000;

//Connection to database
db.connectToMongoose("webshop");

//Initialize Passport
passport.init(app);

//SET
app.set("view engine", "ejs");

//USE
app.use(express.urlencoded({ extended: false }));

//GET
app.get("/", loginRegister.checkAuthenticated, (req, res) => {
  res.render("pages/index");
});

//Login and Register routes
app.use("/", require("./routes/loginRegisterRoutes"));

//LISTEN
app.listen(port, () =>
  console.log(
    `Server listening on port ${port}!\nAccess the site on http://localhost:${port}`
  )
);
