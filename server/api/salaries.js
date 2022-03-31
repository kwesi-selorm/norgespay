import { Router } from "express";
import { displaySalaries, addSalary } from "../controllers/salaries.js";

const router = Router();

//Get request to display salaries
router.get("/salaries", displaySalaries);

//Post request to add salary
router.post("/", addSalary);

export default router;
