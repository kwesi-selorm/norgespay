import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../styles/SingleSalaryPage.css";
import { Salary } from "../utils/types";
import NotFound from "./NotFound/NotFound";

const SingleSalaryPage = () => {
  const { id } = useParams();
  const [salary, setSalary] = useState<Salary>();
  const navigate = useNavigate();
  const { isLoading, isError } = useQuery<Salary>(
    ["salaries", id],
    async () => await axios.get(`/api/salaries/${id}`).then((res) => res.data),
    {
      onSuccess: (data) => setSalary(data),
    }
  );
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <NotFound />;

  /*
  TODO: Implement funcationality for the match calculations
  TODO: Figure out how to visualize the salaries in a chart
  */

  return (
    <div className="salary-body">
      <section className="salary-header">
        <h1 className="job-title">{salary?.jobTitle}</h1>
        <h2 className="company">{salary?.company}</h2>
        <p className="last-updated">Last updated: {salary?.dateAdded}</p>
      </section>
      <br />
      <section className="salary-main">
        <h2 className="statistics">Statistics</h2>
        <hr className="break" />
        <p>Salary progression (chart)</p>
        <p>Median salary based on submitted data</p>
        <p>90th percentile of salaries</p>
        <p>Insights</p>
      </section>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => {
          navigate("../");
        }}
      >
        Back
      </button>
    </div>
  );
};

export default SingleSalaryPage;
