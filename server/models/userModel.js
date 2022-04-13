import mongoose from "mongoose";
import bcrypt from "bcrypt";
import passportLocalMongoose from "passport-local-mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//METHODS
//Generating a hash with salt
userSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, genereateSaltSync(12), null);
};

//Checking if a password is valid
userSchema.methods.validPassword = (password) => {
  return bcrypt.compareSync(password, this.local.password);
};

//The third argument implies saving documents based on the User schema in the users collection
const User = mongoose.model("User", userSchema, "users");

export default User;
