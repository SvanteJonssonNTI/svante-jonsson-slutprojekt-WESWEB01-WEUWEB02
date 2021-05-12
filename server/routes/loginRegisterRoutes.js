module.exports = (function () {
  //Imported Dependencies
  const express = require("express");
  const router = express.Router();
  const bcrypt = require("bcrypt");

  //Local Dependencies
  const db = require("../dbModule");
  const loginRegister = require("../loginRegister");
  const passport = require("../passport").passport;
  const userCart = require("../userCart");
  const User = require("../models/User");

  //ROUTES

  //GET
  router.get("/login", loginRegister.checkNotAuthenticated, (req, res) => {
    res.render("pages/login");
  });

  router.get("/register", loginRegister.checkNotAuthenticated, (req, res) => {
    res.render("pages/register");
  });

  router.get("/logout", loginRegister.checkAuthenticated, (req, res) => {
    req.logOut();
    res.redirect("/login");
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
        db.saveToMongoose(
          //User is saved to db
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

  return router;
})();
