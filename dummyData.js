import Salary from "./server/models/salary";

const salary1 = new Salary({
  jobTitle: "Software Engineer",
  salary: 750000,
  location: "Oslo",
});
salary1.save((error) => {
  error && HandleError(error);
});

const salary2 = new Salary({
  jobTitle: "Architect",
  salary: 560000,
  location: "Bergen",
});
salary2.save((error) => {
  error && HandleError(error);
});
