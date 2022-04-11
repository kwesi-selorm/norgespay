import Salary from "../models/salaryModel.js";

//Default salary displayed on homepage
const homepageSalary = (req, res) => {
  const homepageSalary = new Salary({
    jobTitle: "Software Engineer",
    salary: { amount: 760000, location: "Oslo" },
    experience: "1 year",
    company: "Microsoft Corporation",
  });

  try {
    res.status(200).json(homepageSalary);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

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
    location: req.body.city,
  });
  const newSalary = req.body.salary; //receive updated salary value from user, likely based on exp.
  try {
    searchSalary.salary.push[newSalary];
    Salary.save();
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
    salary: { amount: req.body.salary, location: req.body.location },
    company: salary.company,
    experience: salary.experience,
  });
  try {
    await newSalary.save();
    res.status(201).json(newSalary); //status: Created
  } catch (error) {
    res.status(409).json({ message: error.message }); //status: Conflict
  }
};

export { homepageSalary, displayAllSalaries, updateSalary, addSalary };
