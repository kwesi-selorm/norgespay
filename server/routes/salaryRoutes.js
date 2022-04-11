import express from "express";
import {
  homepageSalary,
  addSalary,
  updateSalary,
  displayAllSalaries,
} from "../controllers/salaryControllers.js";

const salaryRouter = express.Router();

// USER ROUTES

//SALARY FETCHING ROUTES
//homepage salary
salaryRouter.get("/", homepageSalary);

//Display all available salaries
salaryRouter.get("/auth/all", displayAllSalaries);

//Get request to display salaries based on user query
salaryRouter.put("/auth/update", updateSalary);

//Post request to add salary
salaryRouter.post("/auth/add-new", addSalary);

export default salaryRouter;
