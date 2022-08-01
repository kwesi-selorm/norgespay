import express from "express";

import Salary from "../models/salary-model";
import User from "../models/user-model";
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
      next(new AppError(error.message, 404));
    }
  }
});

//GET ALL SALARIES//
salaryRouter.get("/all", async (_req, res, next) => {
  try {
    const salaries = await Salary.find({});
    res.status(200).json(salaries);
  } catch (error) {
    if (error instanceof Error) {
      next(new AppError(error.message, 404));
    }
  }
});

//UPDATE SELECTED SALARY//
salaryRouter.put("/:id", async (req, res, next) => {
  const result = updateSalaryParser(req, next);
  if (result) {
    const { _id, updatedSalaryDetails, userId } = result;

    const existingSalary = await Salary.findById(_id),
      populatedExistingSalary = await existingSalary?.populate("user");
    if (existingSalary) {
      const authorizedUserId =
        populatedExistingSalary?.user?._id.toString() as string;
      if (authorizedUserId !== userId) {
        return next(
          new AppError(
            "Unauthorized to update salary; users may only update salaries that they have added",
            401
          )
        );
      }

      try {
        const updatedSalary = {
          ...updatedSalaryDetails,
          user: existingSalary.user,
        };
        await Salary.findByIdAndUpdate(_id, updatedSalary);
        return res.sendStatus(200); //status: OK
      } catch (error: unknown) {
        if (error instanceof Error)
          return next(new AppError(error.message, 400));
      }
    }
    next(new AppError("Salary not found", 404));
  }
  next();
});

//ADD SALARY//
salaryRouter.post("/", async (req, res, next) => {
  const date = new Date().toLocaleString();
  const result = newSalaryParser(req, next);
  if (result) {
    const { jobTitle, company, city, salary, userId, sector } = result;
    const existingSalary = await Salary.findOne({
      jobTitle: jobTitle,
      company: company,
      city: city,
      sector: sector,
    });

    //DOES NOT EXIST
    if (!existingSalary) {
      const user = await User.findById({ _id: userId });
      if (!user) {
        return next(new AppError("User does not exist", 404));
      }
      const newSalary = new Salary({
        jobTitle: jobTitle,
        salary: [salary],
        company: company,
        city: city,
        sector: sector,
        dateAdded: date,
        user: user?._id,
      });
      try {
        await newSalary.save();
        return res.status(200).json(newSalary); //status: Created
      } catch (error) {
        if (error instanceof Error) next(new AppError(error.message, 400));
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
        if (error instanceof Error) next(new AppError(error.message, 400));
      }
    }
  }
});

export default salaryRouter;
