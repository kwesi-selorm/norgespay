import express from "express";
const userRouter = express.Router();
import passport from "passport";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";

//Signup
userRouter.post("/signup", async (req, res) => {
  console.log(req.body);
  if (req.body.password != null) {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    console.log(salt, hash);

    const newUser = new User({
      username: req.body.username,
      password: hash,
    });
    newUser
      .save()
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  }

  res.redirect("/add-salary"); //Required to add new salary after signing up
});

//Login
userRouter.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/signup",
    failureFlash: true,
    failureMessage: "Invalid username or password",
  }),
  (_req, res) => {
    res.redirect("/member");
  }
);

export default userRouter;
