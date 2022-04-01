import Salary from "../models/salary.js";

//Display all salaries
const displayAllSalaries = async (_req, res) => {
  try {
    const salaries = await Salary.find();
    res.status(200).json(salaries); //status: OK
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Display salary(ies) based on query
const displaySelectedSalaries = async (req, res) => {
  const query = req.body.params;
  try {
    const salaries = await Salary.find();
    salaries = salaries.filter((salary) => {
      salary.jobTitle === query.jobTitle ||
        salary.jobTitle.includes(query.jobTitle);
    });
    res.status(200).json(salaries); //status: OK
  } catch (error) {
    res.status(404).json({ message: error.message }); //status: Not Found
  }
};

//Add new salary to database. Must be based on the model
const addSalary = async (req, res) => {
  const salary = req.body;
  const newSalary = Salary(salary);
  try {
    await newSalary.save();
    res.status(201).json(newSalary); //status: Created
  } catch (error) {
    res.status(409).json({ message: error.message }); //status: Conflict
  }
};

export { displayAllSalaries, displaySelectedSalaries, addSalary };
