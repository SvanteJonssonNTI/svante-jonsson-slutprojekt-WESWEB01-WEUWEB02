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
    default: false,
  },
  cart: {
    productName: {
      type: String,
    },
    amountOfProduct: {
      type: Number,
    },
  },
});

const User = mongoose.model("User", UserSchema);

//Exports a User
module.exports = User;
