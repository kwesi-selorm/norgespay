import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/userModel.js";

const passport = (passport) => {
  // Setting up passport session for persistent login sessions. Passport must allow serialising and unserialising users.
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

  //LOCAL SIGN UP
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      (req, email, password, done) => {
        //The first argument is an object containing options for the strategy. The second argument is a callback function that will be invoked when the authentication attempt is completed.

        User.findOne({ "local.email": email }, function (err, user) {
          if (err) {
            return done(err);
          }

          if (user) {
            //if user already exists return message
            return done(
              null,
              false,
              req.flash("signupMessage", "That email already exists.")
            );
          } else {
            const newUser = new User(); //if there is no user with that email, create one
            newUser.local.email = email;
            newUser.local.password = newUser.generateHash(password);

            newUser.save(function (err) {
              if (err) {
                throw err;
              }
              return done(null, newUser);
            });
          }
        });
      }
    )
  );

  //LOCAL LOGIN
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      (req, email, password, done) => {
        User.findOne({ "local.email": email }, (err, user) => {
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(
              null,
              false,
              req.flash("loginMessage", "No user found.")
            );
          }
          if (!user.validPassword(password)) {
            return done(
              null,
              false,
              req.flash("loginMessage", "Sorry, wrong password.")
            );
          }
          return done(null, user);
        });
      }
    )
  );
};

export default passport;
