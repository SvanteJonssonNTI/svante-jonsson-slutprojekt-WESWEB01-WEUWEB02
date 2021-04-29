module.exports = (function () {
  //Imported Dependencies
  const express = require("express");
  const router = express.Router();

  //Local Dependencies
  const db = require("../dbModule");
  const loginRegister = require("../loginRegister");
  const passport = require("../passport").passport;

  //ROUTES

  //GET
  router.get("/login", loginRegister.checkNotAuthenticated, (req, res) => {
    res.render("pages/login");
  });

  router.get("/register", loginRegister.checkNotAuthenticated, (req, res) => {
    res.render("pages/register");
  });

  //POST
  router.post(
    "/login",
    loginRegister.checkNotAuthenticated,
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true,
    })
  );

  router.post(
    "/register",
    loginRegister.checkNotAuthenticated,
    async (req, res) => {
      try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10); //Password is hashed
        db.saveToMongoose( //User is saved to db
          loginRegister.createUser(
            req.body.name,
            req.body.email,
            hashedPassword
          )
        );
        res.redirect("/login");
      } catch {
        res.redirect("/register");
      }
    }
  );

  //DELETE
  router.delete("/logout", (req, res) => {
    req.logOut();
    res.redirect("/login");
  });

  return router;
})();
