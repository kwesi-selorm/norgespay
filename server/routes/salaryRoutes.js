import express from "express";
import {
  homepageSalary,
  addSalary,
  updateSalary,
  displayAllSalaries,
} from "../controllers/salaryControllers.js";

const salaryRouter = express.Router();

//Check if user is authenticated and logged in
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next;
  }
  res.redirect("/register");
};

//SALARY FETCHING ROUTES
//homepage salary
salaryRouter.get("/", isLoggedIn, homepageSalary);

//Display all available salaries
salaryRouter.get("/member/all", isLoggedIn, displayAllSalaries);

//Get request to display salaries based on user query
salaryRouter.put("/member/update", isLoggedIn, updateSalary);

//Post request to add salary
salaryRouter.post("/member/add-new", isLoggedIn, addSalary);

export default salaryRouter;
