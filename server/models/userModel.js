import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
});
userSchema.plugin(passportLocalMongoose); //Add field for password, ensures usernames are unique, gives additional methods

//The third argument implies saving documents based on the User schema in the users collection
const User = mongoose.model("User", userSchema, "users");

export default User;
