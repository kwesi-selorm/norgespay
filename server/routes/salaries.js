const express = require("express");
import { displaySalaries, addSalary } from "../controllers/salaries";

const router = express.Router();

router.get("/", displaySalaries);
router.post("/", addSalary);
