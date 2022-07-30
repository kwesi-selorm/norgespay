// import { format } from "date-fns";
import mongoose from "mongoose";
const { Schema } = mongoose;

//Define the shape of the salary details schema in the salaries collection
const salarySchema = new Schema({
  jobTitle: String,
  salary: [Number],
  dateAdded: { type: String, default: new Date().toLocaleDateString() },
  company: String,
  city: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

salarySchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

//Create the salary model
const Salary = mongoose.model("Salary", salarySchema, "salaries");

export default Salary;
