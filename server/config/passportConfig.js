const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const loginRegister = require("../loginRegister")
const UserModel = require("../models/User")

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    const user = await loginRegister.findUserWithEmail(UserModel, email) //Checks for user in DB
    if (user == null) {
      return done(null, false, { message: "No user with that email" });
    }

    try {

      if (await bcrypt.compare(password, user.password)) { //compares inputed password to db password
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser)); //authenticates user, user is now logged in
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, loginRegister.findUserWithID(UserModel, id));
  });
}

module.exports = initialize;
