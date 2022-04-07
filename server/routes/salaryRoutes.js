import express from "express";
import {
  homepageSalary,
  addSalary,
  updateSalary,
  displayAllSalaries,
} from "../controllers/salaryControllers.js";

const router = express.Router();

// USER ROUTES

//SALARY FETCHING ROUTES
//homepage salary
router.get("/", homepageSalary);

//Display all avalaible salaries
router.get("/member/all", displayAllSalaries);

//Get request to display salaries based on user query
router.put("/member/update", updateSalary);

//Post request to add salary
router.post("/member/add-new", addSalary);

export default router;
