//Imported Dependencies
const express = require("express");

//Local Dependecies
const db = require("./dbModule");
const User = require("./models/User");
const Product = require("./models/Product");
const loginRegister = require("./loginRegister");
const addProduct = require("./addProduct");
const userCart = require("./userCart");
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
app.use(express.static(__dirname + "/client/"));

//GET
app.get("/", async (req, res) => {
  let user = await req.user;
  res.render("pages/index", {user: user});
});

app.get("/addProduct", loginRegister.checkIfAdmin, (req, res) => {
  res.render("pages/addProduct");
});

//POST
app.post("/addProduct", loginRegister.checkIfAdmin, (req, res) => {
  checkedName = addProduct.checkText(req.body.name, 15);
  checkedDescription = addProduct.checkText(req.body.description, 300);
  checkedURL = addProduct.checkImgURL(req.body.imgURL);
  checkedPrice = addProduct.checkPrice(req.body.price);
  checkedStock = addProduct.checkStock(req.body.stock);
  if (
    checkedName == -1 ||
    checkedDescription == -1 /*|| checkedURL == -1 */ ||
    checkedURL == -1 ||
    checkedPrice == -1 ||
    checkedStock == -1
  ) {
    console.log(`invalid input`);
    res.redirect("/addProduct");
  } else {
    db.saveToMongoose(
      addProduct.createProduct(
        checkedName,
        req.body.description,
        checkedURL,
        checkedPrice,
        checkedStock
      )
    );
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
