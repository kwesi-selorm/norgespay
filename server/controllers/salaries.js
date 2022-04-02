import Salary from "../models/salary.js";

//Display all salaries
const displayAllSalaries = async (req, res) => {
  try {
    const salaries = await Salary.find();
    res.status(200).json(salaries); //status: OK
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Update single salary
const updateSalary = async (req, res) => {
  console.log(req.body);
  const searchSalary = await Salary.findOne({
    jobTitle: req.body.jobTitle,
    company: req.body.company,
    city: req.body.city,
  });
  const newSalary = req.body.salary; //receive updated salary value from user, likely based on exp.
  try {
    searchSalary.salary.push[newSalary];
    res.status(200).json(salaries); //status: OK
  } catch (error) {
    res.status(404).json({ message: error.message }); //status: Not Found
  }
};

//Add new salary to database. Must be based on the model
const addSalary = async (req, res) => {
  const salary = req.body;
  const newSalary = Salary({
    jobTitle: salary.jobTitle,
    company: salary.company,
    salary: salary.salary,
    location: salary.location,
    experience: salary.experience,
  });
  try {
    await newSalary.save();
    res.status(201).json(newSalary); //status: Created
  } catch (error) {
    res.status(409).json({ message: error.message }); //status: Conflict
  }
};

export { displayAllSalaries, updateSalary, addSalary };
