//Local Dependencies
const db = require("./dbModule");
const User = require("./models/User");
const ObjectID = require("mongodb").ObjectID;

//Function adds an item to the cart
exports.addProductToCart = async (userID, productNameIN, amountOfProductIN) => {
  let tmp = { productName: productNameIN, amountOfProduct: amountOfProductIN };
  await User.updateOne({ _id: ObjectID(userID) }, { $push: { cart: tmp } });
};

//Function removes an item to the cart

//Function clears the cart
