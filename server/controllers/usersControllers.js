import passport from "passport";

const signUp = () => {
  passport.authenticate("local-signup", {
    successRedirect: "/add-salary", //proceed to add salary page if authentication is successful
    failureRedirect: "/signup", //redirect back to signup page if error
    failureFlash: true, //show flash messages
  });
};

const logIn = () => {
  passport.authenticate("local-login", {
    successRedirect: "/member/all",
    failureRedirect: "/login",
    failureFlash: true,
  });
};

export { signUp, logIn };
