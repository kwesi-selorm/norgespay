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
  const id = req.params.id,
    salary = req.body.salary,
    tokenString = req.get("authorization");
  if (!tokenString) {
    return res.status(403).send("No credentials found");
  }
  const token = tokenString.slice(7);
  const user = jwt.verify(token, SECRET);
  if (!user) {
    return res.status(403).send("User not found");
  }

  const existingSalary = await Salary.findById(id);
  if (existingSalary) {
    try {
      await Salary.findByIdAndUpdate(id, {
        ...existingSalary,
        salary: existingSalary.salary.push(salary),
      });
      return res.status(204).json({ message: "Salary updated" }); //status: OK
    } catch (error) {
      return res.status(404).json({ message: error.message }); //status: Not Found
    }
  } else {
    return res.status(400).send(); //Bad request
  }
}

//TODO: A add schema validation using Joi. Add new salary to database. Must be based on the model
const addSalary = async (req, res) => {
  const { jobTitle, company, salary, city } = req.body;
  const newSalary = new Salary({
    jobTitle,
    salary: [salary],
    company,
    city,
  });
  try {
    await newSalary.save();
    res.status(201).json(newSalary); //status: Created
  } catch (error) {
    res.status(409).json({ message: error.message }); //status: Conflict
  }
};

export { homepageSalary, displayAllSalaries, updateSalary, addSalary };
