import express from "express";
import {
  homepageSalary,
  addSalary,
  updateSalary,
  displayAllSalaries,
} from "../controllers/salary-controllers.js";

const salaryRouter = express.Router();

//Homepage salary
salaryRouter.get("/", homepageSalary);

//Display all available salaries
salaryRouter.get("/all", displayAllSalaries);

//Get request to display salaries based on user query
salaryRouter.put("/:id", updateSalary);

//Post request to add salary
salaryRouter.post("/", addSalary);

export default salaryRouter;
