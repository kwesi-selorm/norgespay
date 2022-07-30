import express from "express";
import Salary from "../models/salary-model";
import { newSalaryParser, updateSalaryParser } from "../parsers";

const salaryRouter = express.Router();

//GET HOMEPAGE SALARY
salaryRouter.get("/", (_req, res) => {
  const homepageSalary = new Salary({
    jobTitle: "Software Engineer",
    salary: [760000],
    company: "Microsoft Corporation",
    city: "Oslo",
  });

  try {
    res.status(200).json(homepageSalary);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    }
  }
});

//GET ALL SALARIES
salaryRouter.get("/all", async (_req, res) => {
  try {
    const salaries = await Salary.find({});
    res.status(200).json(salaries); //status: OK
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    }
  }
});

//UPDATE SELECTED SALARY
salaryRouter.put("/:id", async (req, res) => {
  const { _id, newSalary } = updateSalaryParser(req);

  //TODO: Check if user if authorized to update the salary using the user field to check id.
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
  if (!existingSalary)
    return res.status(404).json({ message: "Salary not found" }); //Bad request

  try {
    await Salary.findByIdAndUpdate(_id, { ...newSalary, _id: _id });
    return res.sendStatus(200); //status: OK
  } catch (error: unknown) {
    if (error instanceof Error)
      return res.status(400).json({ message: error.message }); //status: Not Found
  }
});

//ADD SALARY
salaryRouter.post("/", async (req, res) => {
  const date = new Date().toLocaleString();
  const { jobTitle, company, city, salary } = newSalaryParser(req);

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
      if (error instanceof Error)
        return res.status(400).json({ error: error.message });
    }
  }

  //if salary does not exist, create a new one
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
    if (error instanceof Error)
      res.status(400).json({ message: error.message }); //status: Conflict
  }
});

export default salaryRouter;
