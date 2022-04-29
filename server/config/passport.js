import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/userModel.js";
import { validatePassword } from "../lib/passwordUtils.js";

//Setting custom fields for Passport-local to identify from form
const customFields = {
  usernameField: "username",
  passwordField: "password",
};

const verifyCallback = (username, password, done) => {
  User.findOne({ username: username })
    .then((result) => {
      if (!result) {
        return done(null, false);
      }

      //Verification function to compare provided password and password in database
      const isValid = validatePassword(password, user.password);

      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => {
      return done(err);
    });
};

const strategy = new LocalStrategy(customFields, verifyCallback);
passport.use(strategy);

// Setting up passport session for persistent login.
//Serialise user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//Deserialise user
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
