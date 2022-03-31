import Salary from "../models/salary.js";

//Display salary(ies) based on query
export const displaySalaries = async (req, res) => {
  try {
    const salaries = await Salary.find();
    res.status(200).json(salaries); //status: OK
  } catch (error) {
    res.status(404).json({ message: error.message }); //status: Not Found
  }
};

//Add new salary to database. Must be based on the model
export const addSalary = async (req, res) => {
  const salary = req.body;
  const newSalary = Salary(salary);
  try {
    await newSalary.save();
    res.status(201).json(newSalary); //status: Created
  } catch (error) {
    res.status(409).json({ message: error.message }); //status: Conflict
  }
};
