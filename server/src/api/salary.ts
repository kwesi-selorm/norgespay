import express from "express";
import Salary from "../models/salary-model";
import { newSalaryParser, updateSalaryParser } from "../parsers";
import { AppError } from "../utils/classes/AppError";

const salaryRouter = express.Router();

//GET HOMEPAGE SALARY//
salaryRouter.get("/", (_req, res, next) => {
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
      // res.status(404).json({ message: error.message });
      next(new AppError(error.message, 404));
    }
  }
});

//GET ALL SALARIES
salaryRouter.get("/all", async (_req, res) => {
  try {
    const salaries = await Salary.find({});
    res.status(200).json(salaries);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    }
  }
});

//UPDATE SELECTED SALARY//
salaryRouter.put("/:id", async (req, res, next) => {
  const result = updateSalaryParser(req, next);
  if (result) {
    const { _id, newSalary } = result;
    //TODO: Check if user if authorized to update the salary using the user field to check id.
    // consider authorization middleware to update the salary
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
      // return res.status(404).json({ message: "Salary not found" });
      return next(new AppError("Salary not found", 404));
    try {
      await Salary.findByIdAndUpdate(_id, { ...newSalary, _id });
      return res.sendStatus(200); //status: OK
    } catch (error: unknown) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  }
});

//ADD SALARY//
salaryRouter.post("/", async (req, res, next) => {
  const date = new Date().toLocaleString();
  const result = newSalaryParser(req, next);
  if (result) {
    const { jobTitle, company, city, salary } = result;
    const existingSalary = await Salary.findOne({
      jobTitle: jobTitle,
      company: company,
      city: city,
    });

    //DOES NOT EXIST
    if (!existingSalary) {
      const newSalary = new Salary({
        jobTitle: jobTitle,
        salary: [salary],
        company: company,
        city: city,
        dateAdded: date,
      });
      try {
        await newSalary.save();
        return res.status(200).json(newSalary); //status: Created
      } catch (error) {
        if (error instanceof Error)
          // return res.status(400).json({ message: error.message });
          next(new AppError(error.message, 400));
      }
    }

    //EXISTS & INCLUDES ADDED SALARY
    if (existingSalary && existingSalary.salary.includes(salary)) {
      next(new AppError("Salary already exists", 401));
    }

    //EXISTS BUT DOES NOT INCLUDE ADDED SALARY
    if (existingSalary && !existingSalary.salary.includes(salary)) {
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
          // return res.status(400).json({ error: error.message });
          next(new AppError(error.message, 40));
      }
    }
  }
});

export default salaryRouter;
