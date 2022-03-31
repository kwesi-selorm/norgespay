import express from "express";
import { displaySalaries, addSalary } from "../controllers/salaries.js";

const router = express.Router();

//Get request to display salaries
router.get("/", displaySalaries);

//Post request to add salary
router.post("/", addSalary);

export default router;
