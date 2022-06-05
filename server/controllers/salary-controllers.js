import Salary from "../models/salary-model.js";

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

//Update single salary
async function updateSalary(req, res) {
  const id = req.params;
  const { jobTitle, company, city, salary } = req.body;
  let newSalary = salary;
  const existingSalary = await Salary.findById(id);

  if (
    existingSalary.jobTitle.toLower() == jobTitle.toLower() &&
    existingSalary.company.toLower() == company.toLower() &&
    existingSalary.city.toLower() == city.toLower()
  ) {
    try {
      existingSalary.salary.push(newSalary);
      existingSalary.save();
      res.status(204).end(); //status: OK
    } catch (error) {
      res.status(404).json({ message: error.message }); //status: Not Found
    }
  } else {
    const newSalary = new Salary({ jobTitle, company, city, salary });
    await newSalary.save();
    res.status(201).json(newSalary);
  }
}

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
