import mongoose from "mongoose";
const { Schema } = mongoose;

//Define the shape of the salary details schema in the salaries collection
const salarySchema = new Schema({
  jobTitle: String,
  salary: { amount: Number, location: String },
  dateAdded: { type: Date, default: new Date().toDateString() },
  company: String,
  experience: Number,
});

//Create the salary model
const Salary = mongoose.model("Salary", salarySchema);

export default Salary;
