//Imported Dependencies
const express = require("express");

//Local Dependecies
const db = require("./dbModule");
const loginRegister = require("./loginRegister");
const products = require("./product");
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
  res.render("pages/index", {user: user, products: await products.getAllFromDB()});
});

app.get("/addProduct", loginRegister.checkIfAdmin, async (req, res) => {
  let user = await req.user;
  res.render("pages/addProduct", {user: user});
});

app.get("/products", async (req, res) => {
  let user = await req.user;
  let allProducts = await products.getAllFromDB();
  res.render("pages/products", {user: user, products: allProducts});
})

app.get("/product", async (req, res) => {
  let user = await req.user;
  let product = await products.getByID(req.query.product)
  res.render("pages/product", {user: user, product: product});
});

app.get("/aboutUs", async (req, res) => {
  let user = await req.user;
  res.render("pages/aboutUs", {user: user});
});

//POST
app.post("/addProduct", loginRegister.checkIfAdmin, (req, res) => {
  checkedName = products.checkText(req.body.name, 15);
  checkedDescription = products.checkText(req.body.description, 300);
  checkedURL = products.checkImgURL(req.body.imgURL);
  checkedPrice = products.checkPrice(req.body.price);
  checkedStock = products.checkStock(req.body.stock);
  if (  //if any equals -1, an invalid input has been inputted
    checkedName == -1 ||
    checkedDescription == -1 || 
    checkedURL == -1 ||
    checkedURL == -1 ||
    checkedPrice == -1 ||
    checkedStock == -1
  ) {
    console.log(`invalid input`);
    res.redirect("/addProduct");
  } else {
    db.saveToMongoose(
      products.createProduct(
        checkedName,
        req.body.description,
        checkedURL,
        checkedPrice,
        checkedStock
      )
    );
  }
});

app.post("/addToCart", loginRegister.checkIfAdmin, (req, res) => {
  
  res.redirect('back');
});

//Login and Register routes
app.use("/", require("./routes/loginRegisterRoutes"));

//LISTEN
app.listen(port, () =>
  console.log(
    `Server listening on port ${port}!\nAccess the site on http://localhost:${port}`
  )
);
