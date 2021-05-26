//Local Dependencies
const db = require("./dbModule");
const User = require("./models/User");
const ObjectID = require("mongodb").ObjectID;

//Function adds an item to the cart
exports.addProductToCart = async (userID, productNameIN, amountOfProductIN, priceOfProductIN) => {
  let tmp = { productName: productNameIN, amountOfProduct: amountOfProductIN, priceOfOne: priceOfProductIN };
  await User.updateOne({ _id: ObjectID(userID) }, { $push: { cart: tmp } });
};

//Function removes an item to the cart
exports.removeItemFromCart = async (userID, productNameIN, amountOfProductIN) => {
  let tmp = { productName: productNameIN, amountOfProduct: amountOfProductIN };
  await User.updateOne({_id : ObjectID(userID) }, {$pull: {cart: tmp}})
}

//Function clears the cart
exports.clearCart = async (userID) => {
  await User.updateOne({_id : ObjectID(userID) }, {$pull: cart})
}