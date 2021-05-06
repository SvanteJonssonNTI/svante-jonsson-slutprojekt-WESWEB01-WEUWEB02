//Local Dependencies
const User = require("./models/User");

//Function creates a new user
exports.createUser = (namewIN, emailIN, passwordIN) => {
  return new User({
    name: namewIN,
    email: emailIN,
    password: passwordIN,
  });
};

//Function to user in db via email
exports.findUserWithEmail = async (Model, input) => {
  return await Model.findOne({ email: input });
};

//Function to user in db via id
exports.findUserWithID = async (Model, input) => {
  return await Model.findOne({ _id: input });
};

//Function to check authentication
exports.checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
};

//Function to check authentication
exports.checkNotAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
};

//Function to check if admin
exports.checkIfAdmin = async (req, res, next) => {
  let user = await req.user;
  if (req.isAuthenticated()) {
    if (user.admin == true) {
      return next();
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/login");
  }
};
