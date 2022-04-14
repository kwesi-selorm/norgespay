import express from "express";
const userRouter = express.Router();
import passport from "passport";
import { generatePassword } from "../lib/passwordUtils.js";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";

//Signup
userRouter.post("/signup", (req, res) => {
  if (req.body.password != null) {
    const password = req.body.password;
    const salt = bcrypt.genSalt(12);
    const hash = bcrypt.hash(password, salt);

    const newUser = new User({ username: req.body.username, password: hash });
    newUser
      .save()
      .then((user) => console.log(user))
      .catch((err) => console.error(err));
  }

  res.redirect("/add-salary"); //Required to add new salary after signing up
});

//Login
userRouter.post(
  "/login",
  passport.authenticate("local", {
    successReturnToOrRedirect: "/member",
    failureRedirect: "/signup",
    failureFlash: true,
    failureMessage: "Invalid username or password",
  })
);

export default userRouter;
