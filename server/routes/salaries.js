import express from "express";
import {
  displaySelectedSalaries,
  addSalary,
  displayAllSalaries,
} from "../controllers/salaries.js";

const router = express.Router();

//Display all avalaible salaries
router.get("/salaries", displayAllSalaries);

//Get request to display salaries based on user query
router.get("/salaries/:id", displaySelectedSalaries);

//Post request to add salary
router.post("/salaries", addSalary);

export default router;
