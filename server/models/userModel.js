import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true }, //email input
  password: { type: String, required: true },
});

//The third argument implies saving documents based on the User schema in the users collection
const User = mongoose.model("User", userSchema, "users");

export default User;
