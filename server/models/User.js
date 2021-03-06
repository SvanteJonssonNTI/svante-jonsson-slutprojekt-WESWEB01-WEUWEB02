const mongoose = require("mongoose");

//Creates the UserSchema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    default: true, //for Niklas and Herman
  },
  cart: {
    productName: {
      type: String,
    },
    amountOfProduct: {
      type: Number,
    },
    priceOfOne: {
      type: Number,
    },
  },
});

const User = mongoose.model("User", UserSchema);

//Exports a User
module.exports = User;
