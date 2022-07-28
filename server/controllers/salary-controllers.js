import { format } from "date-fns";
import jwt from "jsonwebtoken";
import Salary from "../models/salary-model.js";
import { SECRET } from "../utils/config.js";

//Default salary displayed on homepage
function homepageSalary(_req, res) {
  const homepageSalary = new Salary({
    jobTitle: "Software Engineer",
    salary: [760000],
    company: "Microsoft Corporation",
    city: "Oslo",
  });

  try {
    res.status(200).json(homepageSalary);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

//Display all salaries
async function displayAllSalaries(req, res) {
  try {
    const salaries = await Salary.find({});
    res.status(200).json(salaries); //status: OK
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

//TODO: Add schema validation using Joi
async function updateSalary(req, res) {
  const _id = req.params.id;
  const updatedSalary = req.body.updatedSalary;
  // const tokenString = req.get("authorization");
  // if (!tokenString) {
  //   return res.status(403).send("No credentials found");
  // }
  // const token = tokenString.slice(7);
  // const user = jwt.verify(token, SECRET);
  // if (!user) {
  //   return res.status(403).json({ message: "Error: user not found" });
  // }

  const existingSalary = await Salary.findById(_id);
  if (!existingSalary) return res.sendStatus(400); //Bad request

  try {
    await Salary.findByIdAndUpdate(_id, updatedSalary);
    return res.json(updatedSalary); //status: OK
  } catch (error) {
    return res.status(400).json({ message: error.message }); //status: Not Found
  }
}

//TODO: A add schema validation using Joi. Add new salary to database. Must be based on the model
const addSalary = async (req, res) => {
  const { jobTitle, company, salary, city } = req.body;
  const date = new Date().toLocaleString();
  const existingSalary = await Salary.findOne({
    jobTitle: jobTitle,
    company: company,
    city: city,
  });

  //Check if salary exists first, and if it does, update only the salary field
  if (existingSalary) {
    existingSalary.salary.push(salary);
    const updatedSalaryArray = [...existingSalary.salary];
    try {
      await Salary.findByIdAndUpdate(existingSalary._id, {
        salary: updatedSalaryArray,
        dateAdded: date,
      });
      return res.status(200).json({ success: "Salary updated" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  //If salary does not exist, create a new one
  const newSalary = new Salary({
    jobTitle: jobTitle,
    salary: [salary],
    company: company,
    city: city,
    dateAdded: date,
  });
  try {
    await newSalary.save();
    res.status(200).json(newSalary); //status: Created
  } catch (error) {
    res.status(400).json({ message: error.message }); //status: Conflict
  }
};

export { homepageSalary, displayAllSalaries, updateSalary, addSalary };
