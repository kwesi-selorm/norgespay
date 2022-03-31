import mongoose from "mongoose";
const { Schema } = mongoose;

//Define the shape of the salary details schema in the salaries collection
const salarySchema = new Schema({
  jobTitle: String,
  location: String,
  dateAdded: { type: Date, default: new Date() },
  votes: Number,
  experience: Number,
});

//Create the salary model
const Salary = mongoose.model("Salary", salarySchema);

export default Salary;
