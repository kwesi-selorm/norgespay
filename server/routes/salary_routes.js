import express from "express";
import {
  homepageSalary,
  addSalary,
  updateSalary,
  displayAllSalaries,
} from "../controllers/salary_controllers.js";

const salaryRouter = express.Router();

//Check if user is  logged in to view all salaries using route middleware
const checkLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next;
  }
  res.json({ message: "Not authenticated" });
  res.redirect("/login");
};

//SALARY FETCHING ROUTES
//Homepage salary
salaryRouter.get("/", homepageSalary);

//Display all available salaries
salaryRouter.get("/member/all", displayAllSalaries);

//Get request to display salaries based on user query
salaryRouter.put("/member/update", checkLoggedIn, updateSalary);

//Post request to add salary
salaryRouter.post("/member/add-new", checkLoggedIn, addSalary);

export default salaryRouter;
