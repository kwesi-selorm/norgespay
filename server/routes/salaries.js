import express from "express";
import {
  homepageSalary,
  addSalary,
  updateSalary,
  displayAllSalaries,
} from "../controllers/salaries.js";

const router = express.Router();

// USER ROUTES

//SALARY FETCHING ROUTES
//homepage salary
router.get("/", homepageSalary);

//Display all avalaible salaries
router.get("/member", displayAllSalaries);

//Get request to display salaries based on user query
router.put("/member", updateSalary);

//Post request to add salary
router.post("/member", addSalary);

export default router;
