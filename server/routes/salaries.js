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
router.get("/salaries", displayAllSalaries);

//Get request to display salaries based on user query
router.put("/salaries", updateSalary);

//Post request to add salary
router.post("/salaries", addSalary);

export default router;
