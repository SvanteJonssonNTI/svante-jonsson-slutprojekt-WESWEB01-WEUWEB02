const mongoose = require('mongoose');

//Creates the CartSchema
const CartSchema = new mongoose.Schema({
    cartOwner: {
        userID: String,
        required: true
    },
    products: {
        productName: {
          type: String
        },
        amountOfProduct: {
          type: Number
        },
      },
    cartValue: {
        type: Number
    }
});

const Cart = mongoose.model("Cart", CartSchema);

exports.createCart = (userID) => {
    return new Cart({
        cartOwner: userID
    })
}

//Exports a Cart
module.exports = Cart;