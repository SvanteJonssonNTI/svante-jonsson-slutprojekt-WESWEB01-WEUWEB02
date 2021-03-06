module.exports = (function () {
  //Imported Dependencies
  const express = require("express");
  const router = express.Router();
  const bcrypt = require("bcrypt");

  //Local Dependencies
  const db = require("../dbModule");
  const loginRegister = require("../loginRegister");
  const passport = require("../passport").passport;
  const User = require("../models/User");

  //ROUTES

  //GET
  router.get("/login", loginRegister.checkNotAuthenticated, async (req, res) => {
    let user = await req.user;
    res.render("pages/login", {user: user});
  });

  router.get("/register", loginRegister.checkNotAuthenticated, async (req, res) => {
    let user = await req.user;
    res.render("pages/register", {user: user});
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
