//Imported Dependencies
const express = require("express");

//Local Dependecies
const db = require("./dbModule");
const User = require("./models/User");
const Product = require("./models/Product")
const loginRegister = require("./loginRegister");
const addProduct = require("./addProduct")
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

app.get("/add", (req, res) => {
  res.render("pages/addProduct");
});

//POST
app.post("/addProduct", (req, res) => {
    checkedPrice = addProduct.checkPrice(req.body.price)
    if(checkedPrice == -1){
      console.log("invalid price")
      res.redirect("/add")
    } else{
      console.log("saved")
      db.saveToMongoose(
        addProduct.createProduct(
          req.body.name,
          req.body.description,
          req.body.imgURL,
          req.body.price,
          req.body.stock
        )
      )
    }
});

//Login and Register routes
app.use("/", require("./routes/loginRegisterRoutes"));

//LISTEN
app.listen(port, () =>
  console.log(
    `Server listening on port ${port}!\nAccess the site on http://localhost:${port}`
  )
);
