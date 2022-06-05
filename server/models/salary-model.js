import mongoose from "mongoose";
const { Schema } = mongoose;

//Define the shape of the salary details schema in the salaries collection
const salarySchema = new Schema({
  jobTitle: String,
  salary: [Number],
  dateAdded: { type: Date, default: new Date().toDateString() },
  company: String,
  city: String,
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