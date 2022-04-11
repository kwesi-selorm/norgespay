import User from "../models/userModel.js";

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  const registeredUser = await User.register(user, password); //Method available from local-mongoose-passport used in model
  console.log(registeredUser);
  //Redirect from this point to login page after a timeout period using e.g., res.redirect("/login")
  setTimeout(() => {
    res.redirect("/login");
  }, 3000);
};

const logIn = (req, res) => {
  const { username, password } = req.body;
};

export { signUp, logIn };
